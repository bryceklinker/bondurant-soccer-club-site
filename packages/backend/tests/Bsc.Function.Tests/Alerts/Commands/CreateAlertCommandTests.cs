using Bsc.Function.Alerts.Models;
using Bsc.Function.Tests.Support;
using Bsc.Function.Tests.Support.Fakes.AzureStorage.Blobs;
using FluentValidation;
using MediatR;
using Severity = Bsc.Function.Alerts.Models.Severity;

namespace Bsc.Function.Tests.Alerts.Commands;

public class CreateAlertCommandTests
{
    private readonly FakeBlockBlobClient _blobClient;
    private readonly IMediator _mediator;

    public CreateAlertCommandTests()
    {
        var fixture = new BscFixture();

        _blobClient = fixture.AlertsBlobClient;
        _mediator = fixture.Mediator;
    }

    [Fact]
    public async Task WhenExecutedThenCreatesAlertsJsonBlob()
    {
        var command = new CreateAlertCommand("hello", Severity.High);
        await _mediator.Send(command);

        var content = _blobClient.ContentAsJson<AlertModel[]>();
        content.Should().HaveCount(1);
        content![0].Id.Should().NotBeEmpty();
        content[0].Severity.Should().Be(Severity.High);
        content[0].Text.Should().Be("hello");
        content[0].StartDate.Should().Be(DateOnly.FromDateTime(DateTime.Today));
        content[0].ExpirationDate.Should().BeNull();
    }

    [Fact]
    public async Task WhenAlertsExistThenNewAlertIsAddedToAlerts()
    {
        _blobClient.SetupJsonContent(
            new[]
            {
                new AlertModel(Guid.NewGuid(), "idk", Severity.High),
                new AlertModel(Guid.NewGuid(), "idk", Severity.High),
                new AlertModel(Guid.NewGuid(), "idk", Severity.High),
            }
        );

        var command = new CreateAlertCommand("new hotness", Severity.High);
        await _mediator.Send(command);

        var alerts = _blobClient.ContentAsJson<AlertModel[]>();
        alerts.Should().HaveCount(4);
    }

    [Fact]
    public async Task WhenModelIsInvalidThenThrowsException()
    {
        var command = new CreateAlertCommand("", Severity.High);

        var act = () => _mediator.Send(command);
        await act.Should().ThrowAsync<ValidationException>();
    }
}

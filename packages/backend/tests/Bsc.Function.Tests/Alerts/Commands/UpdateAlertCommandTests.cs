using Bsc.Function.Alerts.Commands;
using Bsc.Function.Alerts.Models;
using Bsc.Function.Tests.Support;
using Bsc.Function.Tests.Support.Fakes;
using FluentValidation;
using MediatR;
using Severity = Bsc.Function.Alerts.Models.Severity;
using UpdateAlertCommand = Bsc.Function.Alerts.Models.UpdateAlertCommand;

namespace Bsc.Function.Tests.Alerts.Commands;

public class UpdateAlertCommandTests
{
    private readonly FakeBlockBlobClient _blobClient;
    private readonly IMediator _mediator;

    public UpdateAlertCommandTests()
    {
        var fixture = new BscFixture();
        _blobClient = fixture.AlertsBlobClient;
        _mediator = fixture.Mediator;
    }

    [Fact]
    public async Task WhenAlertIsUpdatedThenAlertIsReplacedInAlerts()
    {
        var command = new UpdateAlertCommand(Guid.NewGuid(), "stuff", Severity.High);
        _blobClient.SetupJsonContent(new []
        {
            AlertModel.FromUpdateCommand(command)
        });

        await _mediator.Send(command with { Text = "new stuff" });

        var alerts = _blobClient.ContentAsJson<AlertModel[]>();
        alerts.Should().HaveCount(1);
        alerts![0].Text.Should().Be("new stuff");
    }

    [Fact]
    public async Task WhenAlertIsMissingThenAlertIsAddedToAlerts()
    {
        var command = new UpdateAlertCommand(Guid.NewGuid(), "stuff", Severity.High);

        await _mediator.Send(command);

        var alerts = _blobClient.ContentAsJson<AlertModel[]>();
        alerts.Should().HaveCount(1);
    }

    [Fact]
    public async Task WhenUpdateIsInvalidThenThrowsValidationException()
    {
        var command = new UpdateAlertCommand(Guid.NewGuid(), "", Severity.High);

        var act = () => _mediator.Send(command);
        await act.Should().ThrowAsync<ValidationException>();
    }
}
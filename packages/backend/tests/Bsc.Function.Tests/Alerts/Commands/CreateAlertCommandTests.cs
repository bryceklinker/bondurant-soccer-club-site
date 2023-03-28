using Bsc.Function.Alerts.Commands;
using Bsc.Function.Alerts.Models;
using Bsc.Function.Tests.Support;
using Bsc.Function.Tests.Support.Fakes;
using MediatR;

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
        var model = new CreateAlertModel("hello", Severity.High);
        await _mediator.Send(new CreateAlertCommand(model));

        var content = _blobClient.ContentAsJson<AlertModel[]>();
        content.Should().HaveCount(1);
        content![0].Id.Should().NotBeEmpty();
        content[0].Severity.Should().Be(Severity.High);
        content[0].Text.Should().Be("hello");
        content[0].StartDate.Should().BeCloseTo(DateTimeOffset.UtcNow, TimeSpan.FromSeconds(1));
        content[0].ExpirationDate.Should().BeNull();
    }

    [Fact]
    public async Task WhenAlertsExistThenNewAlertIsAddedToAlerts()
    {
        _blobClient.SetupJsonContent(new []
        {
            new AlertModel(Guid.NewGuid(), "idk", Severity.High),
            new AlertModel(Guid.NewGuid(), "idk", Severity.High),
            new AlertModel(Guid.NewGuid(), "idk", Severity.High),
        });
        
        var model = new CreateAlertModel("", Severity.High);
        await _mediator.Send(new CreateAlertCommand(model));

        var alerts = _blobClient.ContentAsJson<AlertModel[]>();
        alerts.Should().HaveCount(4);
    }
}
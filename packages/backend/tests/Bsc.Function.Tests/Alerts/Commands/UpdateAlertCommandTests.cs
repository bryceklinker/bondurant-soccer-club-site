using Bsc.Function.Alerts.Commands;
using Bsc.Function.Alerts.Models;
using Bsc.Function.Tests.Support;
using Bsc.Function.Tests.Support.Fakes;
using MediatR;

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
        var original = new AlertModel(Guid.NewGuid(), "stuff", Severity.High);
        _blobClient.SetupJsonContent(new []{original});

        await _mediator.Send(new UpdateAlertCommand(original with { Text = "new stuff" }));

        var alerts = _blobClient.ContentAsJson<AlertModel[]>();
        alerts.Should().HaveCount(1);
        alerts![0].Text.Should().Be("new stuff");
    }
}
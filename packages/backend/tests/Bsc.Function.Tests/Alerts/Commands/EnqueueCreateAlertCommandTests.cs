using Bsc.Function.Alerts.Commands;
using Bsc.Function.Alerts.Models;
using Bsc.Function.Tests.Support;
using Bsc.Function.Tests.Support.Fakes;
using MediatR;

namespace Bsc.Function.Tests.Alerts.Commands;

public class EnqueueCreateAlertCommandTests
{
    private readonly FakeQueueClient _queueClient;
    private readonly IMediator _mediator;

    public EnqueueCreateAlertCommandTests()
    {
        var fixture = new BscFixture();
        _queueClient = fixture.GetService<FakeQueueServiceClient>()
            .GetFakeQueueClient("alerts-queue");
        
        _mediator = fixture.Mediator;
    }

    [Fact]
    public async Task WhenAlertIsEnqueuedThenSendsMessageToAlertsQueue()
    {
        var model = new CreateAlertModel(
            "",
            Severity.High
        );
        await _mediator.Send(new EnqueueCreateAlertCommand(model));

        _queueClient.SentMessages.Should().HaveCount(1);
    }
}
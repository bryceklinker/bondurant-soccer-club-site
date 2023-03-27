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

        _blobClient = fixture.GetService<FakeBlobServiceClient>()
            .GetFakeBlobContainerClient("$web")
            .GetFakeBlockBlobClient("db/alerts.json");
        
        _mediator = fixture.Mediator;
    }

    [Fact]
    public async Task WhenExecutedThenCreatesAlertsJsonBlob()
    {
        var model = new CreateAlertModel("", Severity.High);
        await _mediator.Send(new CreateAlertCommand(model));

        _blobClient.Content.Should().NotBeEmpty();
    }
}
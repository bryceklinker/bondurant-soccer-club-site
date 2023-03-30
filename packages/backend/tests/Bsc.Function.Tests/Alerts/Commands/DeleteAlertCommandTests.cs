using Bsc.Function.Alerts.Commands;
using Bsc.Function.Alerts.Models;
using Bsc.Function.Tests.Support;
using Bsc.Function.Tests.Support.Fakes;
using MediatR;

namespace Bsc.Function.Tests.Alerts.Commands;

public class DeleteAlertCommandTests
{
    private readonly FakeBlockBlobClient _blobClient;
    private readonly IMediator _mediator;

    public DeleteAlertCommandTests()
    {
        var fixture = new BscFixture();

        _blobClient = fixture.AlertsBlobClient;
        _mediator = fixture.Mediator;
    }

    [Fact]
    public async Task WhenAlertIsDeletedThenAlertIsRemovedFromBlob()
    {
        var alert = new AlertModel(Guid.NewGuid(), "", Severity.High);
        _blobClient.SetupJsonContent(new[] { alert });

        await _mediator.Send(new DeleteAlertCommand(alert.Id));

        var alerts = _blobClient.ContentAsJson<AlertModel[]>();
        alerts.Should().BeEmpty();
    }

    [Fact]
    public async Task WhenMultipleAlertsExistAndOneIsDeletedThenDeletesTheCorrectAlert()
    {
        var alertToKeep = new AlertModel(Guid.NewGuid(), "", Severity.High);
        var alertToDelete = new AlertModel(Guid.NewGuid(), "", Severity.High);
        _blobClient.SetupJsonContent(new[] { alertToKeep, alertToDelete });

        await _mediator.Send(new DeleteAlertCommand(alertToDelete.Id));

        var alerts = _blobClient.ContentAsJson<AlertModel[]>();
        alerts.Should().HaveCount(1);
        alerts.Should().Contain(alertToKeep);
    }
}

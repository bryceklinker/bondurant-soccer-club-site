using Bsc.Function.Alerts.Models;
using Bsc.Function.Alerts.Queries;
using Bsc.Function.Tests.Support;
using Bsc.Function.Tests.Support.Fakes;
using MediatR;

namespace Bsc.Function.Tests.Alerts.Queries;

public class GetAlertsQueryTests
{
    private readonly FakeBlockBlobClient _blobClient;
    private readonly IMediator _mediator;

    public GetAlertsQueryTests()
    {
        var fixture = new BscFixture();

        _blobClient = fixture.AlertsBlobClient;
        _mediator = fixture.Mediator;
    }

    [Fact]
    public async Task WhenAlertsAreQueriedThenReturnsAllAlerts()
    {
        _blobClient.SetupJsonContent(
            new[]
            {
                new AlertModel(Guid.NewGuid(), "something", Severity.High),
                new AlertModel(Guid.NewGuid(), "something", Severity.High),
                new AlertModel(Guid.NewGuid(), "something", Severity.High),
            }
        );

        var result = await _mediator.Send(new GetAlertsQuery());
        result.Should().HaveCount(3);
    }

    [Fact]
    public async Task WhenAnAlertHasExpiredThenExcludesExpiredAlerts()
    {
        _blobClient.SetupJsonContent(
            new[]
            {
                new AlertModel(Guid.NewGuid(), "something", Severity.High),
                new AlertModel(
                    Guid.NewGuid(),
                    "something",
                    Severity.High,
                    DateTimeOffset.UtcNow.AddDays(-5),
                    DateTimeOffset.UtcNow.AddDays(-1)
                ),
                new AlertModel(Guid.NewGuid(), "something", Severity.High),
            }
        );

        var result = await _mediator.Send(new GetAlertsQuery());
        result.Should().HaveCount(2);
    }

    [Fact]
    public async Task WhenAnAlertHasAFutureStartDateThenExcludesFutureAlerts()
    {
        _blobClient.SetupJsonContent(
            new[]
            {
                new AlertModel(Guid.NewGuid(), "something", Severity.High),
                new AlertModel(
                    Guid.NewGuid(),
                    "something",
                    Severity.High,
                    DateTimeOffset.UtcNow.AddDays(1)
                ),
                new AlertModel(Guid.NewGuid(), "something", Severity.High),
            }
        );

        var result = await _mediator.Send(new GetAlertsQuery());
        result.Should().HaveCount(2);
    }
}

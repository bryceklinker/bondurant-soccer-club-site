using Bsc.Function.Alerts.Models;
using Bsc.Function.Common;
using MediatR;

namespace Bsc.Function.Alerts.Queries;

public record GetAlertsQuery : IRequest<AlertModel[]>;

public class GetAlertsQueryHandler : IRequestHandler<GetAlertsQuery, AlertModel[]>
{
    private readonly IRepositoryFactory _repositoryFactory;

    public GetAlertsQueryHandler(IRepositoryFactory repositoryFactory)
    {
        _repositoryFactory = repositoryFactory;
    }

    public async Task<AlertModel[]> Handle(GetAlertsQuery request, CancellationToken cancellationToken)
    {
        var repository = await _repositoryFactory.CreateAlertsRepositoryAsync(cancellationToken).ConfigureAwait(false);
        var alerts = await repository.GetAllAsync(cancellationToken).ConfigureAwait(false);
        return alerts
            .Where(a => a.ExpirationDate == null || a.ExpirationDate > DateTimeOffset.UtcNow)
            .Where(a => a.StartDate == null || a.StartDate <= DateTimeOffset.UtcNow)
            .ToArray();
    }
}
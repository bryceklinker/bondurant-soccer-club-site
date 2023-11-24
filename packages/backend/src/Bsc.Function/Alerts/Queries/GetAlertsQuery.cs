using Bsc.Function.Alerts.Models;
using Bsc.Function.Common;
using MediatR;

namespace Bsc.Function.Alerts.Queries;

public record GetAlertsQuery(bool IncludeExpired = false) : IRequest<AlertModel[]>;

public class GetAlertsQueryHandler(IRepositoryFactory repositoryFactory) : IRequestHandler<GetAlertsQuery, AlertModel[]>
{
    private DateOnly Today => DateOnly.FromDateTime(DateTime.Today);

    public async Task<AlertModel[]> Handle(
        GetAlertsQuery request,
        CancellationToken cancellationToken
    )
    {
        var repository = await repositoryFactory
            .CreateAlertsRepositoryAsync(cancellationToken)
            .ConfigureAwait(false);
        IEnumerable<AlertModel> alerts = await repository
            .GetAllAsync(cancellationToken)
            .ConfigureAwait(false);

        if (!request.IncludeExpired)
            alerts = alerts.Where(a => a.ExpirationDate == null || a.ExpirationDate > Today);

        return alerts.Where(a => a.StartDate == null || a.StartDate <= Today).ToArray();
    }
}

using Bsc.Function.Alerts.Models;
using Bsc.Function.Common;
using MediatR;

namespace Bsc.Function.Alerts.Commands;

public class UpdateAlertCommandHandler(IRepositoryFactory repositoryFactory)
    : IRequestHandler<UpdateAlertCommand>
{
    public async Task Handle(UpdateAlertCommand request, CancellationToken cancellationToken)
    {
        var repository = await repositoryFactory
            .CreateAlertsRepositoryAsync(cancellationToken)
            .ConfigureAwait(false);
        var alerts = await repository.GetAllAsync(cancellationToken).ConfigureAwait(false);
        var updatedAlerts = alerts
            .Where(a => a.Id != request.Id)
            .Append(AlertModel.FromUpdateCommand(request))
            .ToArray();
        await repository.SaveAllAsync(updatedAlerts, cancellationToken).ConfigureAwait(false);
    }
}

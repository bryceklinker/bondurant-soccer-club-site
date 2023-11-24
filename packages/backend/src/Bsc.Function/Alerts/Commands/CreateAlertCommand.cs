using Bsc.Function.Alerts.Models;
using Bsc.Function.Common;
using MediatR;

namespace Bsc.Function.Alerts.Commands;

public class CreateAlertCommandHandler(IRepositoryFactory repositoryFactory)
    : IRequestHandler<CreateAlertCommand>
{
    public async Task Handle(CreateAlertCommand request, CancellationToken cancellationToken)
    {
        var repository = await repositoryFactory
            .CreateAlertsRepositoryAsync(cancellationToken)
            .ConfigureAwait(false);
        var existingAlerts = await repository.GetAllAsync(cancellationToken).ConfigureAwait(false);
        var updatedAlerts = existingAlerts.Append(AlertModel.FromCreateCommand(request)).ToArray();
        await repository.SaveAllAsync(updatedAlerts, cancellationToken).ConfigureAwait(false);
    }
}

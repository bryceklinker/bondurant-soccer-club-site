using Bsc.Function.Common;
using MediatR;

namespace Bsc.Function.Alerts.Commands;

public record DeleteAlertCommand(Guid AlertId) : IRequest;

public class DeleteAlertCommandHandler(IRepositoryFactory repositoryFactory) : IRequestHandler<DeleteAlertCommand>
{
    public async Task Handle(DeleteAlertCommand request, CancellationToken cancellationToken)
    {
        var repository = await repositoryFactory
            .CreateAlertsRepositoryAsync(cancellationToken)
            .ConfigureAwait(false);
        var existingAlerts = await repository.GetAllAsync(cancellationToken).ConfigureAwait(false);
        var updatedAlerts = existingAlerts.Where(a => a.Id != request.AlertId).ToArray();
        await repository.SaveAllAsync(updatedAlerts, cancellationToken).ConfigureAwait(false);
    }
}

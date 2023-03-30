using Bsc.Function.Common;
using MediatR;

namespace Bsc.Function.Alerts.Commands;

public record DeleteAlertCommand(Guid AlertId) : IRequest;

public class DeleteAlertCommandHandler : IRequestHandler<DeleteAlertCommand>
{
    private readonly IRepositoryFactory _repositoryFactory;

    public DeleteAlertCommandHandler(IRepositoryFactory repositoryFactory)
    {
        _repositoryFactory = repositoryFactory;
    }

    public async Task Handle(DeleteAlertCommand request, CancellationToken cancellationToken)
    {
        var repository = await _repositoryFactory
            .CreateAlertsRepositoryAsync(cancellationToken)
            .ConfigureAwait(false);
        var existingAlerts = await repository.GetAllAsync(cancellationToken).ConfigureAwait(false);
        var updatedAlerts = existingAlerts.Where(a => a.Id != request.AlertId).ToArray();
        await repository.SaveAllAsync(updatedAlerts, cancellationToken).ConfigureAwait(false);
    }
}

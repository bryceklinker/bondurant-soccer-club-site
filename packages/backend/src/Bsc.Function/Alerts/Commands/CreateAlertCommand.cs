using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bsc.Function.Alerts.Models;
using Bsc.Function.Common;
using MediatR;

namespace Bsc.Function.Alerts.Commands;

public class CreateAlertCommandHandler : IRequestHandler<CreateAlertCommand>
{
    private readonly IRepositoryFactory _repositoryFactory;

    public CreateAlertCommandHandler(IRepositoryFactory repositoryFactory)
    {
        _repositoryFactory = repositoryFactory;
    }

    public async Task Handle(CreateAlertCommand request, CancellationToken cancellationToken)
    {
        var repository = await _repositoryFactory
            .CreateAlertsRepositoryAsync(cancellationToken)
            .ConfigureAwait(false);
        var existingAlerts = await repository.GetAllAsync(cancellationToken).ConfigureAwait(false);
        var updatedAlerts = existingAlerts.Append(AlertModel.FromCreateCommand(request)).ToArray();
        await repository.SaveAllAsync(updatedAlerts, cancellationToken).ConfigureAwait(false);
    }
}

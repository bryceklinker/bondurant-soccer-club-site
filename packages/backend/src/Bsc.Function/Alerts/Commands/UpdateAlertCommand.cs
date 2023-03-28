using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bsc.Function.Alerts.Models;
using Bsc.Function.Common;
using MediatR;

namespace Bsc.Function.Alerts.Commands;

public record UpdateAlertCommand(AlertModel Model) : IRequest;

public class UpdateAlertCommandHandler : IRequestHandler<UpdateAlertCommand>
{
    private readonly IRepositoryFactory _repositoryFactory;

    public UpdateAlertCommandHandler(IRepositoryFactory repositoryFactory)
    {
        _repositoryFactory = repositoryFactory;
    }

    public async Task Handle(UpdateAlertCommand request, CancellationToken cancellationToken)
    {
        var repository = await _repositoryFactory.CreateAlertsRepositoryAsync(cancellationToken).ConfigureAwait(false);
        var alerts = await repository.GetAllAsync(cancellationToken).ConfigureAwait(false);
        var updatedAlerts = alerts
            .Select(a => a.Id != request.Model.Id ? a : request.Model)
            .ToArray();
        await repository.SaveAllAsync(updatedAlerts, cancellationToken).ConfigureAwait(false);
    }
}
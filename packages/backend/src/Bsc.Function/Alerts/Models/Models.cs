using System.Text.Json.Serialization;
using Bsc.Function.Common;
using MediatR;

namespace Bsc.Function.Alerts.Models;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum Severity
{
    High,
}

public record AlertModel(
    Guid Id,
    string Text,
    Severity Severity,
    DateOnly? StartDate = null,
    DateOnly? ExpirationDate = null
)
{
    public static AlertModel FromCreateCommand(CreateAlertCommand command)
    {
        var startDate = command.StartDate.ToDateOnly() ?? DateOnly.FromDateTime(DateTime.Today);

        return new AlertModel(
            Guid.NewGuid(),
            command.Text,
            command.Severity,
            startDate,
            command.ExpirationDate.ToDateOnly()
        );
    }

    public static AlertModel FromUpdateCommand(UpdateAlertCommand command)
    {
        var startDate = command.StartDate.ToDateOnly() ?? DateOnly.FromDateTime(DateTime.Today);
        return new AlertModel(
            command.Id,
            command.Text,
            command.Severity,
            startDate,
            command.ExpirationDate.ToDateOnly()
        );
    }
};

public record UpdateAlertCommand(
    Guid Id,
    string Text,
    Severity Severity,
    DateTime? StartDate = null,
    DateTime? ExpirationDate = null
) : IRequest;

public record CreateAlertCommand(
    string Text,
    Severity Severity,
    DateTime? StartDate = null,
    DateTime? ExpirationDate = null
) : IRequest;

using System;
using System.Net.Mime;
using System.Text.Json.Serialization;
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
    DateTimeOffset? StartDate = null,
    DateTimeOffset? ExpirationDate = null
)
{
    public static AlertModel FromCreateCommand(CreateAlertCommand command)
    {
        var startDate = command.StartDate ?? DateTimeOffset.UtcNow;
        return new AlertModel(
            Guid.NewGuid(),
            command.Text,
            command.Severity,
            startDate,
            command.ExpirationDate
        );
    }

    public static AlertModel FromUpdateCommand(UpdateAlertCommand command)
    {
        return new AlertModel(
            command.Id,
            command.Text,
            command.Severity,
            command.StartDate,
            command.ExpirationDate
        );
    }
};

public record UpdateAlertCommand(
    Guid Id,
    string Text,
    Severity Severity,
    DateTimeOffset? StartDate = null,
    DateTimeOffset? ExpirationDate = null
) : IRequest;

public record CreateAlertCommand(
    string Text,
    Severity Severity,
    DateTimeOffset? StartDate = null,
    DateTimeOffset? ExpirationDate = null
) : IRequest;

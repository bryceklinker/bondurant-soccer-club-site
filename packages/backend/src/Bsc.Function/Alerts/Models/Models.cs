using System;
using System.Net.Mime;
using System.Text.Json.Serialization;

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
    public static AlertModel FromCreateModel(CreateAlertModel model)
    {
        return new AlertModel(Guid.NewGuid(), model.Text, model.Severity, model.StartDate, model.ExpirationDate);
    }
}

public record CreateAlertModel(
    string Text,
    Severity Severity,
    DateTimeOffset? StartDate = null,
    DateTimeOffset? ExpirationDate = null
);
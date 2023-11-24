using System.Collections.Specialized;

namespace Bsc.Function.Common;

public static class NameValueCollectionExtensions
{
    private static bool TryGetString(
        this NameValueCollection collection,
        string key,
        out string? result
    )
    {
        result = null;
        var dictionary = collection.ToDictionary();
        if (!dictionary.TryGetValue(key, out var value))
            return false;

        result = value?.ToString();
        return value != null;
    }

    public static bool TryGetBool(this NameValueCollection collection, string key, out bool result)
    {
        result = false;
        if (!collection.TryGetString(key, out var stringValue))
            return false;

        result = bool.TryParse(stringValue, out var boolResult) && boolResult;
        return stringValue != null;
    }

    public static Dictionary<string, object?> ToDictionary(this NameValueCollection collection)
    {
        if (!collection.HasKeys())
            return new Dictionary<string, object?>();

        return collection
            .Keys
            .Cast<string?>()
            .Where(key => !string.IsNullOrWhiteSpace(key))
            .ToDictionary<string?, string, object?>(key => key, key => collection[key]);
    }
}

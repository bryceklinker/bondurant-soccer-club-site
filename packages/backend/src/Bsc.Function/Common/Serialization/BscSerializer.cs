using System.Text.Json;
using Microsoft.Extensions.Caching.Memory;

namespace Bsc.Function.Common.Serialization;

public record SerializerResult<T>(bool Success, T? Result, Exception? Exception)
{
    public static SerializerResult<T> FromResult(T? result)
    {
        return new SerializerResult<T>(true, result, null);
    }

    public static SerializerResult<T> FromException(Exception exception)
    {
        return new SerializerResult<T>(false, default, exception);
    }
}

public static class BscSerializer
{
    private static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web);

    public static void Serialize<T>(Stream stream, T? value)
    {
        JsonSerializer.Serialize(stream, value, JsonOptions);
    }

    public static object? Deserialize(Stream stream, Type targetType)
    {
        return JsonSerializer.Deserialize(stream, targetType, JsonOptions);
    }

    public static async ValueTask<object?> DeserializeAsync(
        Stream stream,
        Type targetType,
        CancellationToken cancellationToken = default
    )
    {
        return await JsonSerializer
            .DeserializeAsync(stream, targetType, JsonOptions, cancellationToken)
            .ConfigureAwait(false);
    }

    public static async ValueTask<SerializerResult<T>> DeserializeAsync<T>(
        Stream stream,
        CancellationToken cancellationToken = default
    )
    {
        try
        {
            var result = await JsonSerializer
                .DeserializeAsync<T>(stream, JsonOptions, cancellationToken: cancellationToken)
                .ConfigureAwait(false);
            return SerializerResult<T>.FromResult(result);
        }
        catch (Exception e)
        {
            return SerializerResult<T>.FromException(e);
        }
    }

    public static async ValueTask SerializeAsync<T>(
        Stream stream,
        T value,
        CancellationToken cancellationToken = default
    )
    {
        await JsonSerializer
            .SerializeAsync(stream, value, JsonOptions, cancellationToken: cancellationToken)
            .ConfigureAwait(false);
    }

    public static ValueTask<string> SerializeAsync<T>(
        T value,
        CancellationToken cancellationToken = default
    )
    {
        var json = JsonSerializer.Serialize(value, JsonOptions);
        return ValueTask.FromResult(json);
    }
}

using System;
using System.IO;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace Bsc.Function.Common;

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
    public static async ValueTask<SerializerResult<T>> DeserializeAsync<T>(Stream stream,
        CancellationToken cancellationToken = default)
    {
        try
        {
            var result = await JsonSerializer.DeserializeAsync<T>(stream, cancellationToken: cancellationToken)
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
        CancellationToken cancellationToken = default)
    {
        await JsonSerializer.SerializeAsync(stream, value, cancellationToken: cancellationToken).ConfigureAwait(false);
    }

    public static ValueTask<string> SerializeAsync<T>(T value, CancellationToken cancellationToken = default)
    {
        var json = JsonSerializer.Serialize(value);
        return ValueTask.FromResult(json);
    }
}
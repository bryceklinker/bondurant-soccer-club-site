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
    public static async ValueTask<SerializerResult<T>> DeserializeAsync<T>(Stream stream, CancellationToken cancellationToken = default)
    {
        try
        {
            var result =await JsonSerializer.DeserializeAsync<T>(stream, cancellationToken: cancellationToken);
            return SerializerResult<T>.FromResult(result);
        }
        catch (Exception e)
        {
            return SerializerResult<T>.FromException(e);
        }
    }
}
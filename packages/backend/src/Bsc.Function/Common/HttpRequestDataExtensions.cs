using System.Net;
using Bsc.Function.Common.Serialization;
using Microsoft.Azure.Functions.Worker.Http;

namespace Bsc.Function.Common;

public static class HttpRequestDataExtensions
{
    public static async Task<HttpResponseData> CreateJsonResponse<T>(
        this HttpRequestData request,
        T value,
        bool cache = false,
        HttpStatusCode status = HttpStatusCode.OK
    )
    {
        var response = request.CreateResponse(status);
        if (cache)
        {
            response.Headers.Add("Cache-Control", "max-age=3600, must-revalidate");
        }

        await response.WriteAsJsonAsync(value, new BscObjectSerializer());
        return response;
    }
}

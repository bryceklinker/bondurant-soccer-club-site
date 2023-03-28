using System.Net;
using Microsoft.Azure.Functions.Worker.Http;

namespace Bsc.Function.Common;

public static class HttpRequestDataExtensions
{
    public static async Task<HttpResponseData> CreateJsonResponse<T>(
        this HttpRequestData request, 
        T value,
        HttpStatusCode status = HttpStatusCode.OK)
    {
        var response = request.CreateResponse(status);
        await response.WriteStringAsync(await BscSerializer.SerializeAsync(value));
        return response;
    }
}
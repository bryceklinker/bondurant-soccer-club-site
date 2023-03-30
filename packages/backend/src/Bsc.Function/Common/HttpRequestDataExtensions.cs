using System.Net;
using Bsc.Function.Common.Authentication;
using Bsc.Function.Common.Serialization;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

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
            response.Headers.Add("Cache-Control", "max-age=60, must-revalidate");
        }

        await response.WriteAsJsonAsync(value, new BscObjectSerializer());
        return response;
    }

    public static async Task<T> ReadBodyAsJsonAsync<T>(this HttpRequestData req)
    {
        var result = await BscSerializer.DeserializeAsync<T>(req.Body).ConfigureAwait(false);
        if (result.Success && result.Result != null)
            return result.Result;

        var logger = req.FunctionContext.GetLogger<HttpRequestData>();
        logger.LogError(
            result.Exception,
            "Failed to deserialize body of request [{Method}] {Url}",
            req.Method,
            req.Url
        );
        throw new InvalidOperationException("Could not read contents of body");
    }

    public static async Task AuthenticateAsync(
        this HttpRequestData req,
        IRequestAuthenticator authenticator
    )
    {
        var isAuthenticated = await authenticator.IsAuthenticatedAsync(req).ConfigureAwait(false);
        if (!isAuthenticated)
            throw new SecurityTokenException();
    }
}

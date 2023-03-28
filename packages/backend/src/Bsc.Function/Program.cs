using Bsc.Function.Common;
using Bsc.Function.Common.Authentication;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Hosting;

namespace Bsc.Function;

public class Program
{
    static async Task Main(string[] args)
    {
        var host = new HostBuilder()
            .ConfigureFunctionsWorkerDefaults(
                (ctx, b) =>
                {
                    b.AddApplicationInsights().AddApplicationInsightsLogger();
                }
            )
            .ConfigureServices(
                (ctx, services) =>
                {
                    services.AddBscFunctionServices(ctx.Configuration);
                }
            )
            .Build();
        await host.RunAsync();
    }
}

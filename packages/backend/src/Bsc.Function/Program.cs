using Bsc.Function.Common;
using Bsc.Function.Common.Authentication;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Bsc.Function;

public class Program
{
    static async Task Main(string[] args)
    {
        var host = new HostBuilder()
            .ConfigureFunctionsWorkerDefaults()
            .ConfigureServices(
                (ctx, services) =>
                {
                    services.AddApplicationInsightsTelemetryWorkerService();
                    services.ConfigureFunctionsApplicationInsights();
                    services.AddBscFunctionServices(ctx.Configuration);
                }
            )
            .ConfigureLogging(logging =>
            {
                logging.Services.Configure<LoggerFilterOptions>(opts =>
                {
                    var rule = opts.Rules.FirstOrDefault(r =>
                        r.ProviderName ==
                        "Microsoft.Extensions.Logging.ApplicationInsights.ApplicationInsightsLoggerProvider");
                    if (rule is not null)
                    {
                        opts.Rules.Remove(rule);
                    }
                });
            })
            .Build();
        await host.RunAsync();
    }
}

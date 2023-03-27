using System.Threading;
using System.Threading.Tasks;
using Bsc.Function.Common;
using Microsoft.Extensions.Hosting;

namespace Bsc.Function;

public class Program
{
    static async Task Main(string[] args)
    {
        var host = new HostBuilder()
            .ConfigureFunctionsWorkerDefaults()
            .ConfigureServices((ctx, services) =>
            {
                services.AddBscFunctionServices(ctx.Configuration);
            })
            .Build();
        await host.RunAsync();
    }
}
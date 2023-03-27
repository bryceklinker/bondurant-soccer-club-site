using System;
using System.Collections.Generic;
using Bsc.Function.Alerts.Config;
using Bsc.Function.Common;
using Bsc.Function.Tests.Support.Fakes;
using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Bsc.Function.Tests.Support;

public class BscFixture
{
    private readonly IServiceProvider _provider;

    public IConfiguration Configuration { get; }

    public IMediator Mediator => GetService<IMediator>();

    public BscFixture()
    {
        Configuration = new ConfigurationBuilder()
            .AddInMemoryCollection(new []
            {
                new KeyValuePair<string, string>(ConfigurationKeys.AlertsQueueName, "alerts-queue"),
                new KeyValuePair<string, string>(ConfigurationKeys.StorageAccountConnectionString, "UseDevelopmentStorage=true"),
                new KeyValuePair<string, string>(ConfigurationKeys.DbBlobPrefix, "db"),
                new KeyValuePair<string, string>(ConfigurationKeys.SiteContainerName, "$web")
            })
            .Build();
        
        _provider = new ServiceCollection()
            .AddBscFunctionServices(Configuration)
            .AddBscFakeServices()
            .BuildServiceProvider();
    }

    public T GetService<T>() where T : notnull => _provider.GetRequiredService<T>();
}
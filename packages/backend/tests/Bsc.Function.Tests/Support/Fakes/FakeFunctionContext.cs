using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.DependencyInjection;

namespace Bsc.Function.Tests.Support.Fakes;

public class FakeFunctionContext : FunctionContext
{
    public override string InvocationId { get; } = Guid.NewGuid().ToString();
    public override string FunctionId { get; } = Guid.NewGuid().ToString();
    public override TraceContext TraceContext { get; }
    public override BindingContext BindingContext { get; }
    public override RetryContext RetryContext { get; }

    public override IServiceProvider InstanceServices { get; set; }
    public override FunctionDefinition FunctionDefinition { get; }
    public override IDictionary<object, object> Items { get; set; } = new Dictionary<object, object>();
    public override IInvocationFeatures Features { get; }

    public FakeFunctionContext(
        TraceContext? traceContext = null,
        BindingContext? bindingContext = null,
        RetryContext? retryContext = null,
        FunctionDefinition? functionDefinition = null,
        IInvocationFeatures? invocationFeatures = null,
        IServiceProvider? serviceProvider = null,
        BscFixture? fixture = null
        )
    {
        TraceContext = traceContext ?? new FakeTraceContext();
        BindingContext = bindingContext ?? new FakeBindingContext();
        RetryContext = retryContext ?? new FakeRetryContext();
        FunctionDefinition = functionDefinition ?? new FakeFunctionDefinition();
        Features = invocationFeatures ?? new FakeInvocationFeatures();
        InstanceServices = DetermineServiceProvider(fixture, serviceProvider);
    }

    private static IServiceProvider DetermineServiceProvider(BscFixture? fixture, IServiceProvider? provider)
    {
        if (fixture != null)
            return fixture.Provider;

        if (provider != null)
            return provider;

        return new ServiceCollection().BuildServiceProvider();
    }
}
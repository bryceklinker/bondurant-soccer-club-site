using Microsoft.Azure.Functions.Worker;

namespace Bsc.Function.Tests.Support.Fakes.AzureFunctions;

public class FakeTraceContext : TraceContext
{
    public override string TraceParent { get; } = "";
    public override string TraceState { get; } = "";
}

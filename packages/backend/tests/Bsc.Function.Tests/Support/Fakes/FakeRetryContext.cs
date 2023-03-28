using Microsoft.Azure.Functions.Worker;

namespace Bsc.Function.Tests.Support.Fakes;

public class FakeRetryContext : RetryContext
{
    public override int RetryCount { get; } = 0;
    public override int MaxRetryCount { get; } = 1;
}

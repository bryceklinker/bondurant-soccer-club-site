using Microsoft.Azure.Functions.Worker;

namespace Bsc.Function.Tests.Support.Fakes;

public class FakeBindingContext : BindingContext
{
    public override IReadOnlyDictionary<string, object?> BindingData { get; }

    public FakeBindingContext(Dictionary<string, object?>? bindingData = null)
    {
        BindingData = bindingData ?? new Dictionary<string, object?>();
    }
}

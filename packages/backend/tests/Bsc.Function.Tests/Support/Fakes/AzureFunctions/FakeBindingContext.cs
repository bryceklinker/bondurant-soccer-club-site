using Microsoft.Azure.Functions.Worker;

namespace Bsc.Function.Tests.Support.Fakes.AzureFunctions;

public class FakeBindingContext(Dictionary<string, object?>? bindingData = null) : BindingContext
{
    public override IReadOnlyDictionary<string, object?> BindingData { get; } =
        bindingData ?? new Dictionary<string, object?>();
}

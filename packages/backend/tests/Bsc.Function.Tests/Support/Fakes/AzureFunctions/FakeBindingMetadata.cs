using Microsoft.Azure.Functions.Worker;

namespace Bsc.Function.Tests.Support.Fakes.AzureFunctions;

public class FakeBindingMetadata(
        string name = "",
        string type = "",
        BindingDirection direction = BindingDirection.In)
    : BindingMetadata
{
    public override string Name { get; } = name;
    public override string Type { get; } = type;
    public override BindingDirection Direction { get; } = direction;
}

using Microsoft.Azure.Functions.Worker;

namespace Bsc.Function.Tests.Support.Fakes.AzureFunctions;

public class FakeBindingMetadata : BindingMetadata
{
    public override string Name { get; }
    public override string Type { get; }
    public override BindingDirection Direction { get; }

    public FakeBindingMetadata(
        string name = "",
        string type = "",
        BindingDirection direction = BindingDirection.In
    )
    {
        Name = name;
        Type = type;
        Direction = direction;
    }
}

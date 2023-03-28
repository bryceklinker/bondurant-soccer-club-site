using System.Collections.Immutable;
using Microsoft.Azure.Functions.Worker;

namespace Bsc.Function.Tests.Support.Fakes;

public class FakeFunctionDefinition : FunctionDefinition
{
    public override ImmutableArray<FunctionParameter> Parameters { get; } =
        ImmutableArray<FunctionParameter>.Empty;
    public override string PathToAssembly { get; } = "";
    public override string EntryPoint { get; } = "";
    public override string Id { get; } = Guid.NewGuid().ToString();
    public override string Name { get; } = "";
    public override IImmutableDictionary<string, BindingMetadata> InputBindings { get; } =
        ImmutableDictionary<string, BindingMetadata>.Empty;
    public override IImmutableDictionary<string, BindingMetadata> OutputBindings { get; } =
        ImmutableDictionary<string, BindingMetadata>.Empty;

    public FakeFunctionDefinition(Dictionary<string, BindingMetadata>? inputBindings = null)
    {
        InputBindings =
            inputBindings?.ToImmutableDictionary()
            ?? ImmutableDictionary<string, BindingMetadata>.Empty;
    }
}

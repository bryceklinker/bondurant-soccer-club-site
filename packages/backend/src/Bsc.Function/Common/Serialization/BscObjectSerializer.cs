using Azure.Core.Serialization;

namespace Bsc.Function.Common.Serialization;

public class BscObjectSerializer : ObjectSerializer
{
    public override void Serialize(
        Stream stream,
        object? value,
        Type inputType,
        CancellationToken cancellationToken
    )
    {
        BscSerializer.Serialize(stream, value);
    }

    public override async ValueTask SerializeAsync(
        Stream stream,
        object? value,
        Type inputType,
        CancellationToken cancellationToken
    )
    {
        await BscSerializer.SerializeAsync(stream, value, cancellationToken).ConfigureAwait(false);
    }

    public override object? Deserialize(
        Stream stream,
        Type returnType,
        CancellationToken cancellationToken
    )
    {
        return BscSerializer.Deserialize(stream, returnType);
    }

    public override async ValueTask<object?> DeserializeAsync(
        Stream stream,
        Type returnType,
        CancellationToken cancellationToken
    )
    {
        return await BscSerializer
            .DeserializeAsync(stream, returnType, cancellationToken)
            .ConfigureAwait(false);
    }
}

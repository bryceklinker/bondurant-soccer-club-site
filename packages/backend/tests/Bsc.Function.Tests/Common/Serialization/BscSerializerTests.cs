using Bsc.Function.Common.Serialization;

namespace Bsc.Function.Tests.Common.Serialization;

public class BscSerializerTests
{
    [Fact]
    public async Task WhenDateOnlyIsSerializedThenValueIsSerializedToMidnightUtc()
    {
        var result = await BscSerializer.SerializeAsync(new { Date = DateOnly.Parse("2022-09-23") });

        result.Should().Contain("2022-09-23T00:00:00Z");
    }
}
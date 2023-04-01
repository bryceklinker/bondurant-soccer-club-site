using System.Text.Json;
using System.Text.Json.Serialization;

namespace Bsc.Function.Common.Serialization;

public class DateOnlyJsonConverter : JsonConverter<DateOnly>
{
    public override DateOnly Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        return DateTime.TryParse(reader.GetString(), out var value) 
            ? DateOnly.FromDateTime(value.ToUniversalTime()) 
            : DateOnly.MinValue;
    }

    public override void Write(Utf8JsonWriter writer, DateOnly value, JsonSerializerOptions options)
    {
        writer.WriteStringValue(value.ToDateTime(TimeOnly.MinValue, DateTimeKind.Utc));
    }
}
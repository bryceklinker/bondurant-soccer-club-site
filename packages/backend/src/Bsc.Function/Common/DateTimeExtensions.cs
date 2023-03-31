namespace Bsc.Function.Common;

public static class DateTimeExtensions
{
    public static DateOnly? ToDateOnly(this DateTime? value)
    {
        if (value.HasValue)
            return DateOnly.FromDateTime(value.Value);

        return null;
    }
}
using Bsc.Function.Alerts.Models;
using FluentValidation;

namespace Bsc.Function.Alerts.Validators;

public class CreateAlertCommandValidator : AbstractValidator<CreateAlertCommand>
{
    public CreateAlertCommandValidator()
    {
        RuleFor(c => c.Severity).IsInEnum();
        RuleFor(c => c.Text).NotNull().NotEmpty();
    }
}
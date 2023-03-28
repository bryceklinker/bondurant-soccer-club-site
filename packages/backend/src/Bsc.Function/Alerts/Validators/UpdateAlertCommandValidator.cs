using Bsc.Function.Alerts.Models;
using FluentValidation;

namespace Bsc.Function.Alerts.Validators;

public class UpdateAlertCommandValidator : AbstractValidator<UpdateAlertCommand>
{
    public UpdateAlertCommandValidator()
    {
        RuleFor(c => c.Severity).IsInEnum();
        RuleFor(c => c.Text).NotNull().NotEmpty();
        RuleFor(c => c.Id).NotEmpty();
    }
}
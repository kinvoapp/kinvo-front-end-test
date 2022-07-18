import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';
export function getFormControlUnstyledUtilityClass(slot) {
  return generateUtilityClass('BaseFormControl', slot);
}
var formControlUnstyledClasses = generateUtilityClasses('BaseFormControl', ['root', 'disabled', 'error', 'filled', 'focused', 'required']);
export default formControlUnstyledClasses;
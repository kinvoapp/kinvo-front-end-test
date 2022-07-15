import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getBackdropUtilityClass(slot) {
  return generateUtilityClass('MuiBackdrop', slot);
}
var backdropClasses = generateUtilityClasses('MuiBackdrop', ['root', 'invisible']);
export default backdropClasses;
/**
 * maskString('79998885544', '+# (###) ### ## ##') ==>> +7 (999) 888 55 44
 */

export function maskString(str, mask) {
	let result = ''; // resulting masked string
	let strIndex = 0; // index counter for `str`
	let digits = mask.match(/#/g); // count mask digits

	// throw error if digits count in mask !== str.length of if no mask provided
	if(digits.length !== str.length || mask === undefined) {
		throw new Error('MASK_ERROR: No mask provided or string length differs form mask length');
	}

	for(let i = 0; i < mask.length; i++) {
		if(mask[i] === '#') {
			result += str[strIndex];
			strIndex++;
			continue;
		}
		result += mask[i];
	}

	return result;
}
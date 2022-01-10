function galToLiter(gal) {
	return gal * 3.785411784;
}

const input = parseInt(prompt("Enter Gallons: "));
const liter = galToLiter(input);

alert(liter);

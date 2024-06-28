
// This equates to the first digit of the combination
const firstCombo = 100 % 49 * 4 +2;

// This equates to the second digit of the combination
const secondCombo = 2**4 * 4 - 24;

// This equates to the third digit of the combination
const thirdCombo = (10 + 3) * 4 - 13;

// The String to display to the user
const userString = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${firstCombo} - ${secondCombo} - ${thirdCombo}`

// This pops up to the user to display the userString message
alert(userString);

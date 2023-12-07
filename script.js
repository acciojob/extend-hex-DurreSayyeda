const extendHex = (shortHex) => {
  // write your code here
  // Remove # if present and convert to lowercase
  shortHex = shortHex.replace("#", "").toLowerCase();

  // If the shortHex has only one character per color, duplicate each character
  if (shortHex.length === 3) {
    shortHex = shortHex
      .split("")
      .map((char) => char.repeat(2))
      .join("");
  }

  // If the shortHex has invalid length, return null
  if (shortHex.length !== 6) {
    return null;
  }

  // Prepend # and return the full hex code
  return "#" + shortHex;
}

// Examples
console.log(extendHex("#abc"));   // Output: "#aabbcc"
console.log(extendHex("abc"));    // Output: "#aabbcc"
console.log(extendHex("#AbC"));   // Output: "#AABBCC"
console.log(extendHex("#f09"));   // Output: "#ff0099"
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

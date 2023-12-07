const extendHex = (shortHex) => {
  // write your code here
  // Remove # if present and convert to lowercase
	let i = shortHex.length - 3,isCapital = false;
	let output = "#";
	while(i < shortHex.length){
		let asciiCode = shortHex[i].charCodeAt(0);
		if(asciiCode >= 65 && asciiCode <=90){
			isCapital = true;
		}
		// output = "#" += "a" + "a" => "#aa"
		output += shortHex[i] + shortHex[i];
		i++;
	}
 
}
 
// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

const quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
var upperCaseString = quoteString.toUpperCase();
alert(`Upper case string is: ${upperCaseString}`)
 
const authorString = "- Henry Ford"
const completeString = quoteString.concat(' ', authorString)
 
var found = completeString.includes("Henry");
if (found == true) {
  console.log("Henry was in the quote string")
} else {
  console.log("Henry was NOT in the quote string")
}
 
const secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
const quoteString2 = "Failure is simply the opportunity to begin again this time more intelligently."
var lowerCaseString = secondQuote.toLowerCase();
alert(`Lower case string is: ${lowerCaseString}`)
 
var userNum = prompt("Enter a number")
var Num = parseInt(`${userNum}`)
var math = Num + 10
 
console.log(`The number ${Num} + 10 is ${math}`)
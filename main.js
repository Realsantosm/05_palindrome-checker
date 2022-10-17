var checkButton = document.getElementById("checkPalindrome");
// console.log(checkButton); Debugger

function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]+/gi, "").toLowerCase();
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
// Adding event
checkButton.addEventListener("click", function () {
  var value = document.getElementById("inputPalindrome").value;
  var notification = document.getElementById("notification");
  if (isPalindrome(value)) {
    notification.innerHTML = "Yay! You've got yourself a palindrome";
    notification.className = "alert alert-success";
  } else {
    notification.innerHTML = "Nay! Ain't no palindrome";
    notification.className = "alert alert-danger";
  }
});

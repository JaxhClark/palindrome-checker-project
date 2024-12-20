const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
}

button.addEventListener("click", () => {
    const userInput = input.value;
    if (userInput.trim() === "") {
        alert("Please input a value")
    } else if (isPalindrome(userInput)) {
        result.textContent = `${userInput} is a palindrome!`;
        result.style.color = "green";
    } else {
        result.textContent = `${userInput} is not a palindrome.`;
        result.style.color = "red";
    }
});
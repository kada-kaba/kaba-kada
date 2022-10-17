let buttons = [];
buttons_text = []
let amount = document.getElementById("donate-amount-input")
let name = document.getElementById("donate-name-input")
let email = document.getElementById("donate-email-input")
let select = document.getElementById("donate-howoften-input")

for (let i = 0; i < 4; i++) {
 buttons[i] = document.getElementsByClassName("amount-button")[i];
 buttons_text[i] = buttons[i].innerHTML;
 buttons_text[i] = buttons_text[i].substring(0,3);
 buttons[i].addEventListener("click", function() {
        if (i == 3) {
            amount.value = "1000";
        } else {
        amount.value = buttons_text[i];
        }
    }) 
} 

let donate_button = document.getElementById("donate-submit-button").addEventListener("click", function(){
    if (name.value == 0) {
        alert("Please enter your name")
    } else if (email.value == 0 || email.value.includes("@") == false) {
        alert("Please enter a valid email")
    } else if (amount.value < 50) {
        alert("The minimum amount is 50kr")
    } else {
        alert("Thank you very much " + name.value + ", for your contribution of " + amount.value + "kr " + select.value +  ". Your contribution has given us the opportunity to plant " + Math.round(parseInt(amount.value) / 11) + " new trees. A receipt for your donation has been sent to " + email.value + ".")
        amount.value = "";
        name.value = "";
        email.value = "";
    }
})

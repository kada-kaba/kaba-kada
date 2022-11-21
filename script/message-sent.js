
let textarea = document.getElementById("cotatct-message-wrapper")
document.getElementById("contact-submit-button").addEventListener("click", function (){
    if (textarea.value == "") {
        alert("Write a message first.")
    } else {
        alert("Thank you for contacting us. We will answer you as soon as we can.")
        textarea.value = ""
    }
})
const nameInput = document.getElementById("name-Input");
const msgInput = document.getElementById("message-input");
const callBtn = document.getElementById("call-btn");
const mailBtn = document.getElementById("mail-btn");
const chatBtn = document.getElementById("chat-btn");

callBtn.addEventListener("click", () => {
  window.location.href = "tel:+917004594478";
});

mailBtn.addEventListener("click", () => {
  window.location.href = `mailto:hello@gmail.com?body=${msgInput.value}`;
});

chatBtn.addEventListener("click", () => {
  window.location.href = `https://wa.me/+917004594477?text=${msgInput.value}`;
});
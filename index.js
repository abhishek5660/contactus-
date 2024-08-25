const nameInput = document.getElementById("name-Input");
const msgInput = document.getElementById("message-input");
const callBtn = document.getElementById("call-btn");
const mailBtn = document.getElementById("mail-btn");
const chatBtn = document.getElementById("chat-btn");

callBtn.addEventListener("click", () => {
  window.location.href = "tel:+918219472136";
});

mailBtn.addEventListener("click", () => {
  window.location.href = `mailto:abhishekkatoch50@gmail.com?body=${msgInput.value}`;
});

chatBtn.addEventListener("click", () => {
  window.location.href = `https://wa.me/+918219472136?text=${msgInput.value}`;
});

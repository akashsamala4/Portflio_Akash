emailjs.init("FcxhVsLJdCnsJKQaV");

function sendMail() {
  const params = {
    name: name.value,
    email: email.value,
    message: message.value
  };

  emailjs.send("service_g9phtli", "template_4uer9yr", params)
    .then(() => status.innerText = "Message sent successfully!")
    .catch(() => status.innerText = "Failed to send message!");
}

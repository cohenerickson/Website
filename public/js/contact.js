let subject = document.getElementById("subject");
let message = document.getElementById("message");
let send = document.getElementById("send");

subject.addEventListener("change", updateLink);
message.addEventListener("change", updateLink);

function updateLink () {
  let link = "mailto:contact@cohenerickson.com";
  if (subject.value) {
    link += "?subject=" + encodeURIComponent(subject.value);
  }
  if (message.value) {
    link += "&body=" + encodeURIComponent(message.value);
  }
  send.href = link;
}

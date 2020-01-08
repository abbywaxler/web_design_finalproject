
function contact() {
  document.getElementById("submit").addEventListener("click", submitMessage);
}

function submitMessage() {
  var form = document.getElementById("contactform");
  var p = document.getElementById("asap");

  form.style.display = "none";
  p.style.visibility = "visible";
}

function trial() {
  document.getElementById("submit1").addEventListener("click", emailMessage);
}

function emailMessage() {
  var form = document.getElementById("freetrial");
  var p = document.getElementById("trial");

  form.style.display = "none";
  p.style.visibility = "visible";
}

async function postLogin(email, password) {
  let request = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
  });
  let token = await request.json();
  console.log(token);
  localStorage.setItem("token", token);
  window.location.href = "http://127.0.0.1:5500/Clase44/saludo.html";
  return request;
}

var email = document.querySelector("#email");
var password = document.getElementById("password");
var submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  console.log(email.value + " " + password.value);
  postLogin(email.value, password.value);

  //window.location.href = "http://google.com"
});

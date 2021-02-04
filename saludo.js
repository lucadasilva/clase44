var token = localStorage.getItem("token");

console.log(token);

async function verifyToken(token) {
  let request = await fetch("http://localhost:3000/verify", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    body: JSON.stringify({
      token: `${token}`,
    }),
  });
  return request;
}

verifyToken(token).then(function (respuesta) {
  console.log(respuesta);
  if (respuesta == "yes") {
    console.log("yes");
  } else {
    console.log("no");
  }
});

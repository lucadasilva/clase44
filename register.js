async function postUsuario (email, password) {
    let request = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        }),
        body: JSON.stringify({
            email: `${email}`,
            password: `${password}`,
        }),
    })
    return request
}
let email = document.getElementById("email")
let password = document.getElementById("password")


let boton = document.getElementById("btn-reg")

boton.addEventListener("click", ()=>{
    console.log(email.value + " " + password.value);
    postUsuario(email.textContent, password.textContent);
});

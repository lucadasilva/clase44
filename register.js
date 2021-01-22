async function postUsuario (email, password, nombre, apellido, edad) {
    let request = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        }),
        body: JSON.stringify({
            email: `${email}`,
            password: `${password}`,
            nombre: `${nombre}`,
            apellido: `${apellido}`,
            edad: `${edad}`,
        }),
    })
    console.log(request);
    return request
}
let email = document.getElementById("email")
let password = document.getElementById("password")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let edad = document.getElementById("edad")


let boton = document.getElementById("btn-reg")

boton.addEventListener("click", ()=>{
    postUsuario(email.textContent, password.textContent, nombre.textContent, apellido.textContent, edad.textContent);

});
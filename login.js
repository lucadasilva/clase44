
async function postLogin (email, password) {
    let request = await fetch("http://localhost:3000/login",{
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
    console.log(request);
    return request
}




let email = document.querySelector("#email")
let password = document.getElementById("password")
let submit = document.getElementById("submit")
submit.addEventListener("click", ()=> {
    postLogin(email.textContent, password.textContent)
   //window.location.href = "http://google.com"
   
} )

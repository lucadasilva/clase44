
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
    localStorage.setItem("token", request);

    return request
}




var email = document.querySelector("#email")
var password = document.getElementById("password")
var submit = document.getElementById("submit")
submit.addEventListener("click", ()=> {
    
    console.log(email.value + password.value);
    postLogin(email.value, password.value).then(guardarKey);
    
   //window.location.href = "http://google.com"
   
} )

function guardarKey(key){
    localStorage.setItem("token", key);
}
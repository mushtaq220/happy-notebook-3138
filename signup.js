let btn2 = document.querySelector("form");

let signupLS = JSON.parse(localStorage.getItem("signupData")) || [];

btn2.addEventListener("click", signupFunc)

function signupFunc(event) {
    event.preventDefault();
    let userObj = {
            Email: document.querySelector("#emailRP").value,
            Password: document.querySelector("#passwordRP").value,
        }
        // console.log(userObj)
    signupLS.push(userObj);
    localStorage.setItem("signupData", JSON.stringify(signupLS));
    if (userObj.Email.length > 0 && userObj.Password.length > 0) {
        alert("Signup Succesfull !")
        window.location.href = "signin.html"
    } else {
        alert("Fill the details")
    }

}




//
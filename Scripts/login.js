window.speechSynthesis.cancel();


document.getElementById("input11").addEventListener("input", showwarning)
document.getElementById("input12").addEventListener("input", showwarning)



document.getElementById("singh1").addEventListener("click", getuserdata)



async function getuserdata() {

    try {
        let res = await fetch(`http://localhost:3000/userDeatails`)
        let data = await res.json()
        console.log(data)
        check(data)

    } catch (error) {
        console.log(error)
    }

}

function check(data) {

    let email = document.getElementById("input11").value
    let password = document.getElementById("input12").value
    if (email == "") {
        let p = document.getElementById("emailwarn")
        p.style.display = "block"
        p.style.color = "red"
    }
    if (password == "") {
        let p = document.getElementById("passwarn")
        p.style.display = "block"
        p.style.color = "red"
    }
    else {
        data.forEach(element => {
            let p1 = document.getElementById("emailwarn")
            p1.style.display = "none"
            let p2 = document.getElementById("passwarn")
            p2.style.display = "none"
            if (email == element.emailNumber && password == element.password) {
                alert("login successful")
                localStorage.setItem("userid", element.id)
                location.href = "../index.html"
            }
            else {
                alert("Wrong Credentials")
            }
        });
    }
}
function showwarning() {
    let email = document.getElementById("input11").value
    let password = document.getElementById("input12").value
    if (email === "") {
        let p = document.getElementById("emailwarn")
        p.style.display = "block"
        p.style.color = "red"
    }
    else {
        let p1 = document.getElementById("emailwarn")
        p1.style.display = "none"
    }
    if (password === "") {
        let p = document.getElementById("passwarn")
        p.style.display = "block"
        p.style.color = "red"
    }
    else {
        let p2 = document.getElementById("passwarn")
        p2.style.display = "none"
    }
}
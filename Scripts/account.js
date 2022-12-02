console.log("account")
showuserdata()
async function showuserdata() {
    let userid = localStorage.getItem("userid")
    let res = await fetch(` https://indiatoday-server.onrender.com/registerdUser/${userid}`)
    let data = await res.json();
    console.log(data)
    document.getElementById("username").innerText = data.fullName
    document.getElementById("useremailNumber").innerText = data.emailNumber
    document.getElementById("usercountry").innerText = data.country
}

window.speechSynthesis.cancel();
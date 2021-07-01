window.addEventListener('load', () => {


const name = sessionStorage.getItem("NAME");
const email = sessionStorage.getItem("EMAIL");
const phonenumber = sessionStorage.getItem("PHONENUMBER");
const gender = sessionStorage.getItem("GENDER");

document.getElementById("outcome-name").innerHTML = name;
document.getElementById("outcome-email").innerHTML = email;
document.getElementById("outcome-phonenumber").innerHTML = phonenumber;
document.getElementById("outcome-gender").innerHTML = gender;


});
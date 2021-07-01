function holdsubmit () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const gender = document.getElementById("gender").value;


    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("PHONENUMBER", phonenumber);
    sessionStorage.setItem("GENDER", gender);

    return;
}
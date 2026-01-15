function registerPatient() {
    localStorage.setItem("patient",
        JSON.stringify({ phone: pPhone.value, password: pPassword.value })
    );
    alert("Patient Registered");
    location.href = "login.html";
}
function registerDoctor() {
    localStorage.setItem("doctor",
        JSON.stringify({ id: dId.value, password: dPassword.value })
    );
    alert("Doctor Registered");
    location.href = "login.html";
}


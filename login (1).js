function patientLogin() {
    const phone = patientPhone.value;
    const pass = patientPassword.value;
    const data = JSON.parse(localStorage.getItem("patient"));
    if (!data) return alert("Patient not registered");
    if (data.phone === phone && data.password === pass) {
        alert("Login successful");
        location.href = "patient.html";
    } else {
        alert("Invalid credentials");
    }
}
function doctorLogin() {
    const id = doctorId.value;
    const pass = doctorPassword.value;
    const data = JSON.parse(localStorage.getItem("doctor"));
    if (!data) return alert("Doctor not registered");
    if (data.id === id && data.password === pass) {
        alert("Login successful");
        location.href = "doctor.html";
    } else {
        alert("Invalid credentials");
    }
}


const doctors = [
    { name: "Dr. Sharma", hospital: "City Government Hospital", specialization: "Cardiologist", timing: "10AM - 2PM" },
    { name: "Dr. Mehta", hospital: "District Hospital", specialization: "Orthopedic", timing: "11AM - 3PM" },
    { name: "Dr. Rao", hospital: "General Hospital", specialization: "Pediatrician", timing: "9AM - 1PM" }
];
function loadDoctors() {
    const container = document.getElementById("doctorsList");
    container.innerHTML = "";

    doctors.forEach(doc => {
        const card = `
            <div class="doctor-card">
                <h3>${doc.name}</h3>
                <p><strong>Hospital:</strong> ${doc.hospital}</p>
                <p><strong>Specialization:</strong> ${doc.specialization}</p>
                <p><strong>Timing:</strong> ${doc.timing}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}
loadDoctors();

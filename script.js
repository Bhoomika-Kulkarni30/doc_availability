const doctors = [
    { name: "Dr. Sharma", hospital: "City Government Hospital", specialization: "Cardiology", timing: "10AM - 2PM" },
    { name: "Dr. Mehta", hospital: "District Hospital", specialization: "Orthopedic", timing: "11AM - 3PM" },
    { name: "Dr. Rao", hospital: "General Hospital", specialization: "Pediatrics", timing: "9AM - 1PM" }
];
function searchDoctors() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const container = document.getElementById("doctorsList");
    container.innerHTML = "";
    const filtered = doctors.filter(d =>
        d.name.toLowerCase().includes(input) ||
        d.hospital.toLowerCase().includes(input) ||
        d.specialization.toLowerCase().includes(input)
    );
    if (filtered.length === 0) {
        container.innerHTML = "<p>No doctors found</p>";
        return;
    }
    filtered.forEach(doc => {
        container.innerHTML += `
        <div class="doctor-card">
            <h3>${doc.name}</h3>
            <p><b>Hospital:</b> ${doc.hospital}</p>
            <p><b>Specialization:</b> ${doc.specialization}</p>
            <p><b>Timing:</b> ${doc.timing}</p>
        </div>`;
    });
}

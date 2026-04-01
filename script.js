function login() {
    let role = document.getElementById("role").value;

    if(role === "student") {
        window.location.href = "student.html";
    } 
    else if(role === "teacher") {
        window.location.href = "teacher.html";
    } 
    else {
        window.location.href = "admin.html";
    }
}

function logout() {
    window.location.href = "index.html";
}

function logout() {
    window.location.href = "index.html";
}

function showSection(element, sectionId) {

    // Hide all sections
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.add("hidden"));

    // Show selected section
    document.getElementById(sectionId).classList.remove("hidden");

    // Update title (optional)
    let title = document.getElementById("page-title");
    if (title) {
        title.innerText = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    }

    // Remove active from all menu items
    let items = document.querySelectorAll(".sidebar li");
    items.forEach(item => item.classList.remove("active"));

    // Add active to clicked menu
    element.classList.add("active");
}
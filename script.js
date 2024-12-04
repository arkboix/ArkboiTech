function filterContent() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const buttons = document.querySelectorAll("#content .buttonmain");

    buttons.forEach(button => {
        const text = button.getAttribute("data-name").toLowerCase();
        if (text.includes(input)) {
            button.style.display = "block"; // Show matching buttons
        } else {
            button.style.display = "none"; // Hide non-matching buttons
        }
    });
}

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function selectImage(imageSrc, imageLabel) {
    document.getElementById("selectedImage").src = imageSrc;
    document.getElementById("selectedImage").style.display = "block";
    document.getElementById("selectedImageText").textContent = "Selected Image: " + imageLabel;
    document.getElementById("dropdownLabel").textContent = imageLabel;
    toggleDropdown(); // Close the dropdown
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

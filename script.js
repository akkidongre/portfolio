// Header
const menuBtn = document.getElementById("menu-btn");
const header = document.querySelector("header");
let selectedLink = '';

menuBtn.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
    } else {
        header.classList.add("open");
    }
});

const navLinks = document.querySelectorAll(".menu__link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (header.classList.contains("open")) {
            header.classList.remove("open");
        }

        if (selectedLink === link.getAttribute("href")) {
            return;
        }

        selectedLink = link.getAttribute("href");
        activateLink();
    });
});

const activateLink = () => {
    const currentHash = window.location.hash || '#home';
    const hashToCheck = selectedLink ? selectedLink : currentHash;

    console.log(hashToCheck);

    navLinks.forEach(link => {
        if (link.getAttribute("href") === hashToCheck) {
            link.classList.add("active");
            selectedLink = hashToCheck;
        } else {
            link.classList.remove("active");
        }
    });
}

activateLink();

// Skills - experience
const today = new Date();
const jobStartingDate = new Date('September 16, 2019');
const experienceInYears = today.getFullYear() - jobStartingDate.getFullYear();

document.getElementById('experience').textContent = experienceInYears;


// ===========================
// File: js/main.js
// Vintage Barbershop Project
// ===========================
// ----- DOM Element -----
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid");
// ----- Services Data (Array of Objects) -----
const services = [
    {
        title: "Classic Haircut",
        text: "Timeless cuts with modern precision tailored to your style",
        image: "assets/images/feature-1.jpg",
    },
    {
        title: "Beard Trim",
        text: "Shape and line-up your beard for a clean, charp finish.",
        image: "assets/images/feature-2.jpg",
    },
    {
        title: "Straight Razor Shave",
        text: "Hot towel treatment with a smooth traditional shave.",
        image: "assets/images/feature-3.jpg",
    }
];
// ----- Helpers / Functions -----
// Update footer year automatically
const setCurrentYear = () => {
    const now = new Date(); // stores in the variable now the year/month/day/hour/minute/second/milisecond that the function is called
    yearEl.textContent = now.getFullYear();
}
// Toggle mobnile menu open/close
let isMenuOpen = false;
const toggleMobileMenu = () => {
    if (!mobileMenu) return; // If mobile menu is not loaded/doesnt exist then do nothing within the curly braces
    if (isMenuOpen === false) {
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }
}
// Close mobile menu (used when a link is clicked)
const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
}
// Reusable function with parameters (practice pattern)
const updateHeadingText =  (newText) => {
    if (!heading) return;
    heading.textContent = newText;
}
// ----- Event Listener -----
// 1. Set year on page load
setCurrentYear();
// 2. Haburger menu toggle
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        toggleMobileMenu();
    });
}
// 3. Close mobile menu when a mobile link is clicked (event delegation)
if (mobileMenu) {
    mobileMenu.addEventListener ("click", (event) => {
        // If they clicked an <a> inside the menu, close it
        if (event.target.tagName === "A") {
            closeMobileMenu();
        };
    });
}
// 4. CTA Button: "Book now" (placeholder behavior)
if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        updateHeadingText("Booking coming next - Great Choice!");
    });
}
// 5. Call Button: try to use the phone number in the footer
if (callBtn) {
    callBtn.addEventListener("click", () => {
        // If you later set phoneLink href to tel:, this will work perfectly.
        // For now, this is a beginner-friendly placeholder.
        if (phoneLink) {
            updateHeadingText("Call us at " + phoneLink.textContent);
        } else {
            updateHeadingText("Call feature coming next!");
        }
    });
}

// ----- Render Features using forEach -----
const renderFeatures = () => {
    if (!featureGrid) return;
    services.forEach(service => {
        const card = document.createElement("article"); // create an article tag that is the descriptive meaning for the variable "card"
        card.classList.add("feature-card"); // this adds the feature card class to the card variable
        card.innerHTML = `
        <img src="${service.image}" alt="${service.title}" class="feature-img"
        />
        <h3 class="feature-title">${service.title}</h3>
        <p class="feature-text">${service.text}</p>
        `;
        featureGrid.appendChild(card);
    });
};

// ----- Feature Call -----
renderFeatures();
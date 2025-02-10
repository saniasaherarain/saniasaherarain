document.addEventListener("DOMContentLoaded", () => {
    // Toggle Navbar for Mobile View
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Scroll Animation - Reveal Elements
    const sections = document.querySelectorAll("section");
    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", revealSection);
    revealSection();

    // Dynamic Text Animation in Home Section
    const texts = ["Frontend Designer", "Developer", "UI/UX Designer"];
    let index = 0;
    const animatedText = document.querySelector(".animated-text");

    setInterval(() => {
        animatedText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }, 2000);

    // Social Icon Hover Effects
    document.querySelectorAll(".social-icons a").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.2) rotate(5deg)";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1) rotate(0deg)";
        });
    });
});

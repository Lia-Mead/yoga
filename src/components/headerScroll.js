import React, { useEffect } from "react";

function HeaderScroll() {
    useEffect(() => {
        const smoothScroll = (target, duration) => {
            const targetElement = document.querySelector(target);
            if (!targetElement) return;

            const targetPosition = targetElement.getBoundingClientRect().top;
            const startPosition = window.pageYOffset;
            const startTime = performance.now();

            const easeInOutQuad = (t) => {
                return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            };

            const scroll = (currentTime) => {
                const timeElapsed = currentTime - startTime;
                const progress = timeElapsed / duration;

                if (progress < 1) {
                    window.scrollTo(
                        0,
                        startPosition + targetPosition * easeInOutQuad(progress)
                    );
                    requestAnimationFrame(scroll);
                } else {
                    window.scrollTo(0, startPosition + targetPosition);
                }
            };

            requestAnimationFrame(scroll);
        };

        const scrollTriggerLinks = document.querySelectorAll(
            'a.js-scroll-trigger[href*="#"]:not([href="#"])'
        );

        scrollTriggerLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                smoothScroll(`#${targetId}`, 1000); // Adjust duration as needed
            });
        });

        // Closes responsive menu when a scroll trigger link is clicked
        const collapseElements =
            document.querySelectorAll(".js-scroll-trigger");
        collapseElements.forEach((element) => {
            element.addEventListener("click", () => {
                const navbar = document.querySelector(".navbar-collapse");
                if (navbar) {
                    navbar.classList.remove("show");
                }
            });
        });

        // Activate scrollspy to add an active class to navbar items on scroll
        document.body.addEventListener("scroll", () => {
            const navbarItems = document.querySelectorAll(".js-scroll-trigger");
            const offset = 74; // Adjust offset as needed

            navbarItems?.forEach((item) => {
                const targetId = item.getAttribute("href").substring(1);
                const targetElement = document.querySelector(`#${targetId}`);
                const bounds = targetElement.getBoundingClientRect();

                if (bounds.top <= offset && bounds.bottom > offset) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        });

        // Collapse Navbar
        const navbar = document.querySelector("#mainNav");
        const navbarOffset = 100;

        const navbarCollapse = () => {
            if (navbar) {
                if (window.scrollY > navbarOffset) {
                    navbar.classList.add("navbar-shrink");
                } else {
                    navbar.classList.remove("navbar-shrink");
                }
            }
        };

        navbarCollapse();

        window.addEventListener("scroll", navbarCollapse);
    }, []);

    return <div></div>;
}

export default HeaderScroll;

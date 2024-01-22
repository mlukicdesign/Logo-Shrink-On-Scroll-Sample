const openNav = () => {
    const navContainer = document.getElementById("nav-container");
    const navBtn = document.getElementById("menu-toggle-btn");

    navBtn.onclick = function (e) {
        if (navContainer.style.visibility === "visible") {
            // If the navigation container is visible, hide it
            navContainer.style.visibility = "hidden";
        } else {
            // If the navigation container is hidden, show it
            navContainer.style.visibility = "visible";
        }
    };
};

openNav();

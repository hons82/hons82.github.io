(function() {
    var preferenceKey = "hons82-theme";
    var root = document.documentElement;
    var savedTheme;

    try {
        savedTheme = window.localStorage.getItem(preferenceKey);
    } catch (error) {
        console.warn("Unable to read saved theme preference.", error);
    }

    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : prefersDark ? "dark" : "light";
    root.setAttribute("data-theme", theme);

    function updateButtons() {
        var isDark = root.getAttribute("data-theme") === "dark";
        var label = isDark ? "Switch to light mode" : "Switch to dark mode";
        Array.prototype.forEach.call(document.querySelectorAll("[data-theme-toggle]"), function(button) {
            var icon = button.querySelector(".fa-solid");
            button.setAttribute("aria-label", label);
            button.setAttribute("title", label);
            button.setAttribute("aria-pressed", isDark ? "true" : "false");

            if (icon) {
                icon.classList.toggle("fa-sun", isDark);
                icon.classList.toggle("fa-moon", !isDark);
            }
        });
    }

    function bindButtons() {
        Array.prototype.forEach.call(document.querySelectorAll("[data-theme-toggle]"), function(button) {
            button.addEventListener("click", function() {
                theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
                root.setAttribute("data-theme", theme);
                updateButtons();

                try {
                    window.localStorage.setItem(preferenceKey, theme);
                } catch (error) {
                    console.warn("Unable to save theme preference.", error);
                }
            });
        });

        updateButtons();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bindButtons, { once: true });
    } else {
        bindButtons();
    }
})();

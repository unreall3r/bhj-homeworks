document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tab__navigation").forEach(tabNav => {
        const tabs = Array.from(tabNav.querySelectorAll(".tab"));
        const contents = Array.from(tabNav.nextElementSibling.querySelectorAll(".tab__content"));

        tabNav.addEventListener("click", (event) => {
            const clickedTab = event.target;
            if (!clickedTab.classList.contains("tab")) return;

            const index = tabs.indexOf(clickedTab);

            tabs.forEach(tab => tab.classList.remove("tab_active"));
            contents.forEach(content => content.classList.remove("tab__content_active"));

            tabs[index].classList.add("tab_active");
            contents[index].classList.add("tab__content_active");
        });
    });
});

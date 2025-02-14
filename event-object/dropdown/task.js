document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const valueElement = dropdown.querySelector(".dropdown__value");
        const listElement = dropdown.querySelector(".dropdown__list");
        const items = dropdown.querySelectorAll(".dropdown__item");

        valueElement.addEventListener("click", () => {
            listElement.classList.toggle("dropdown__list_active");
        });

        items.forEach(item => {
            item.addEventListener("click", (event) => {
                event.preventDefault();
                valueElement.textContent = item.textContent.trim();
                listElement.classList.remove("dropdown__list_active");
            });
        });
    });

    document.addEventListener("click", (event) => {
        document.querySelectorAll(".dropdown__list").forEach(list => {
            if (!list.closest(".dropdown").contains(event.target)) {
                list.classList.remove("dropdown__list_active");
            }
        });
    });
});

document.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach((block) => {
        const { top, bottom } = block.getBoundingClientRect();
        const inViewport = top < window.innerHeight && bottom > 0;
        
        if (inViewport) {
            block.classList.add("reveal_active");
        } else {
            block.classList.remove("reveal_active");
        }
    });
});

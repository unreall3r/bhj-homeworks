document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (event) => {
        const target = event.target;
        
        if (target.classList.contains("has-tooltip")) {
            event.preventDefault();
            
            const existingTooltip = document.querySelector(".tooltip_active");
            if (existingTooltip) {
                if (existingTooltip.dataset.relatedTo === target.dataset.id) {
                    existingTooltip.remove();
                    return;
                }
                existingTooltip.remove();
            }
            
            const tooltip = document.createElement("div");
            tooltip.className = "tooltip tooltip_active";
            tooltip.innerText = target.title;
            document.body.appendChild(tooltip);
            
            const uniqueId = Date.now();
            target.dataset.id = uniqueId;
            tooltip.dataset.relatedTo = uniqueId;
            
            const rect = target.getBoundingClientRect();
            const position = target.dataset.position || "bottom";
            
            switch (position) {
                case "top":
                    tooltip.style.left = `${rect.left + window.scrollX}px`;
                    tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
                    break;
                case "left":
                    tooltip.style.left = `${rect.left + window.scrollX - tooltip.offsetWidth}px`;
                    tooltip.style.top = `${rect.top + window.scrollY}px`;
                    break;
                case "right":
                    tooltip.style.left = `${rect.right + window.scrollX}px`;
                    tooltip.style.top = `${rect.top + window.scrollY}px`;
                    break;
                case "bottom":
                default:
                    tooltip.style.left = `${rect.left + window.scrollX}px`;
                    tooltip.style.top = `${rect.bottom + window.scrollY}px`;
                    break;
            }
        }
    });
});

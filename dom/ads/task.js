function startRotator(rotator) {
    const cases = Array.from(rotator.children);
    let currentIndex = 0;

    setInterval(() => {
        cases[currentIndex].classList.remove("rotator__case_active");
        currentIndex = (currentIndex + 1) % cases.length;
        cases[currentIndex].classList.add("rotator__case_active");
    }, 1000);
}

document.querySelectorAll(".rotator").forEach(startRotator);

const screen = document.querySelector(".screen");

document.querySelectorAll("button").forEach(forButton => {
    forButton.addEventListener("click", () => {
        const valueIs = forButton.textContent;
        screen.value = valueIs;
    })
});


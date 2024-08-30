const power = document.querySelector("#theme")
const body = document.querySelector(".body1")


const changeTheme = () => {
    if (power.checked) {
        body.classList.add("dark");  // Add the 'dark' class when checked
    } else {
        body.classList.remove("dark");  // Remove the 'dark' class when unchecked
    }
};
power.addEventListener("click",changeTheme)
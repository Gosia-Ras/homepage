{
  const buttonDark = document.querySelector(".js-onDarkButton");

  const onDarkMode = () => {
    buttonDark.addEventListener("click", toggleDarkMode);
  };

  const toggleDarkMode = () => {
    const darkMode = document.querySelector(".js-darkMode");
    darkMode.classList.toggle("body--dark");
    buttonDark.innerText = darkMode.classList.contains("body--dark")
      ? "Dark mode off"
      : "Dark mode on";
  };

  onDarkMode();
}

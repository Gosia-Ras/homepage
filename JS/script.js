{
  const buttonDark = document.querySelector(".js-onDarkButton");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme:dark)");

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

  const toggleBackgroundColor = () => {
    const date = new Date();
    const hour = date.getHours();
    console.log(hour);
    let body = document.body;

    if (hour < 6 || hour > 21) {
      return body.classList.toggle("body--dark");
    }
  };

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
      document.body.classList.add("body--dark");
  } else if (currentTheme == "light") {
      document.body.classList.toggle("light-theme");
  }
  
  buttonDark.addEventListener("click", function () {
      if(prefersDarkScheme.matches) {
          document.body.classList.toggle("light-theme");
          var theme = document.body.classList.contains("light-theme")
          ? "light"
          : "dark";
      } else {
          document.body.classList.toggle("body--dark")
          ? "dark"
          : "light";
      }
      localStorage.setItem("theme", theme);
  });

  onDarkMode();
  toggleBackgroundColor();
}

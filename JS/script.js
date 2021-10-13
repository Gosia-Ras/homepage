{
    const hidePhotoButton = document.querySelector(".js-buttonHideImage");
    const buttonDark = document.querySelector(".js-onDarkButton");
    

    const introPhotoHide = () => {
        hidePhotoButton.addEventListener("click", hideIntroductionPhoto);
    };

    const onDarkMode = () => {
        buttonDark.addEventListener("click", toggleDarkMode);
    }; 

    const toggleDarkMode = () => {
        const darkMode = document.querySelector(".js-darkMode");
        darkMode.classList.toggle("body--dark");
        buttonDark.innerText = darkMode.classList.contains("body--dark") ? "Dark mode off" : "Dark mode on";
    };

    const hideIntroductionPhoto = () => {
        const image = document.querySelector(".js-image");
        image.classList.toggle("image--hidden");
        hidePhotoButton.innerText = image.classList.contains("image--hidden") ? "Show photo" : "Hide photo";
    };

    introPhotoHide();
    onDarkMode();
};
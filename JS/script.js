{
    const hidePhotoButton = document.querySelector(".js-buttonHideImage");
    const buttonDark = document.querySelector(".js-onDarkButton");
    const containerButton = document.querySelector(".js-buttonHideContainer");

    const introPhotoHide = () => {
        hidePhotoButton.addEventListener("click", hideIntroductionPhoto);
    };

    const onDarkMode = () => {
        buttonDark.addEventListener("click", toggleDarkMode);
    };

    const photosShow = () => {
        containerButton.addEventListener("click", showPhotosContainer);
    };

    const toggleDarkMode = () => {
        const darkMode = document.querySelector(".js-darkMode");
        darkMode.classList.toggle("body--dark");
        buttonDark.innerText = darkMode.classList.contains("body--dark") ? "Dark mode off" : "Dark mode on";
    };

    const showPhotosContainer = () => {
        const imagesContainer = document.querySelector(".js-imagesContainer");
        imagesContainer.classList.toggle("imagesContainer--hidden");
        containerButton.innerText = imagesContainer.classList.contains("imagesContainer--hidden") ? "Hide photos" : "Show photos";
    };

    const hideIntroductionPhoto = () => {
        const image = document.querySelector(".js-image");
        image.classList.toggle("image--hidden");
        hidePhotoButton.innerText = image.classList.contains("image--hidden") ? "Show photo" : "Hide photo";
    };

    introPhotoHide();
    photosShow();
    onDarkMode();
};
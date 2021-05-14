{
    const toggleDarkMode = () => {
        const darkMode = document.querySelector(".js-darkMode");
        
        darkMode.classList.toggle("body--dark");
        buttonDark.innerText = darkMode.classList.contains("body--dark") ? "Dark mode off" : "Dark mode on";
    };

    const onDarkMode = () => {
        const buttonDark = document.querySelector(".js-onDarkButton");
        buttonDark.addEventListener("click", toggleDarkMode);
    }

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

    const introPhotoHide = () => {
        const hidePhotoButton = document.querySelector(".js-buttonHideImage");
        hidePhotoButton.addEventListener("click", hideIntroductionPhoto);
    };

    const photosShow = () => {
        const containerButton = document.querySelector(".js-buttonHideContainer");
        containerButton.addEventListener("click", showPhotosContainer);
    };

    introPhotoHide();
    photosShow();
    onDarkMode();
};
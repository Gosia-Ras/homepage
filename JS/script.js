{
    const showPhotosContainer = () => {


        const imagesContainer = document.querySelector(".js-container__images");

        imagesContainer.classList.toggle("container__images--hidden");
        containerButton.innerText = imagesContainer.contains("container__images--hidden") ? "Show photo" : "Hide photo";
    }




    const hideIntroductionPhoto = () => {

        const image = document.querySelector(".image");

        image.classList.toggle("js-image--hidden");
        hidePhotoButton.innerText = image.classList.contains("js-image--hidden") ? "Hide photo" : "Show photo";


    };

    const init = () => {
        const hidePhotoButton = document.querySelector(".js-button__image--hidden");
        const containerButton = document.querySelector(".js-container__button");
        hidePhotoButton.addEventListener("click", hideIntroductionPhoto);
        containerButton.addEventListener("click", showPhotosContainer);
    };

    init();
};
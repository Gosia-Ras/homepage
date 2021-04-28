console.log("Hello world!");

const hidePhotoButton = document.querySelector(".jsButton__image--hide");
const image = document.querySelector(".image");

const jsContainerButton = document.querySelector(".jsContainerButton")
const imagesContainer = document.querySelector(".container__images")




hidePhotoButton.addEventListener("click", () => {
    image.classList.toggle("js-imageHide");
    hidePhotoButton.innerText = image.classList.contains("js-imageHide") ? "Hide photo" : "Show photo";
})

jsContainerButton.addEventListener("click", () => {
    imagesContainer.classList.toggle("container__images--hide");

    jsContainerButton.innerText = imagesContainer.contains("container__images--hide") ? "Show photo" : "Hide photo";
})
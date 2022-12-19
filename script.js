const imageContainer = document.getElementById("image__container");
const images__source = document.getElementById("images__source");
let photos = [];
// jdXt1UKQxZIEUlZWUe-SdC5aGKzL7aiFd_ffT1-2S9E
// https://api.unsplash.com/photos/random

function displayPhoto() {
  // creating images on the screen by the use of forEach function
  photos.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

async function getRandomImage() {
  //
  const apiKey = "jdXt1UKQxZIEUlZWUe-SdC5aGKzL7aiFd_ffT1-2S9E";
  const count = 30;

  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
  try {
    const response = await fetch(apiUrl);
    photos = await response.json();
    displayPhoto();
  } catch (error) {
    console.log(error);
  }
}
getRandomImage();

import { url } from "./component.js";
import { apiCall } from "./component.js";
import { loaderContainer } from "./component.js";

const carouselContainerSlideOne = document.querySelector(".slide1");
const carouselContainerSlideTwo = document.querySelector(".slide2");
const carouselContainerSlideThree = document.querySelector(".slide3");
const carouselContainerSlideFour = document.querySelector(".slide4");
const carousel = document.querySelector(".carousel-container");

async function carouselPostApiCall() {
  try {
    loaderContainer.style.display = "none";
    const blogData = await apiCall(url);
    for (let i = 0; i < blogData.length; i++) {
      if (i === 0) {
        carouselContainerSlideOne.innerHTML += ` <a href="/blog-post-specific.html?id=${blogData[i].id}">
                                                    <img src="${blogData[i].featured_media_src_url}" alt="${blogData[i].acf.alt}" />
                                                    <h2 class="carousel-title">${blogData[i].title.rendered}</h2>
                                                  </a>`;
      } else if (i === 1) {
        carouselContainerSlideTwo.innerHTML += `<a href="/blog-post-specific.html?id=${blogData[i].id}">
                                                  <img src="${blogData[i].featured_media_src_url}" alt="${blogData[i].acf.alt}" />
                                                  <h2 class="carousel-title">${blogData[i].title.rendered}</h2>
                                                  </a>`;
      } else if (i === 2) {
        carouselContainerSlideThree.innerHTML += `<a href="/blog-post-specific.html?id=${blogData[i].id}">
                                                  <img src="${blogData[i].featured_media_src_url}" alt="${blogData[i].acf.alt}" />
                                                  <h2 class="carousel-title">${blogData[i].title.rendered}</h2>
                                                  </a>`;
      } else if (i === 3) {
        carouselContainerSlideFour.innerHTML += `<a href="/blog-post-specific.html?id=${blogData[i].id}">
                                                  <img src="${blogData[i].featured_media_src_url}" alt="${blogData[i].acf.alt}" />
                                                  <h2 class="carousel-title">${blogData[i].title.rendered}</h2>
                                                  </a>`;
      }
    }
  } catch (e) {
    carousel.innerHTML = `<div class="catch-err"><p >
      Error could not connect to api, try to refresh this page</p></d> `;
  }
}
carouselPostApiCall();

let carouselSlidePos = 0;
const slides = document.querySelectorAll(".carousel-post");
const carouselLength = slides.length;
const leftButton = document.querySelector(".carousel-button-left");
const rightButton = document.querySelector(".carousel-button-right");
const dott = document.querySelectorAll(".dott");

const updatedotts = () => {
  for (let i = 0; i < dott.length; i++) {
    const dottArr = dott[i];
    dottArr.classList.remove("dott-selected");
  }
  dott[carouselSlidePos].classList.add("dott-selected");
};

leftButton.addEventListener("click", () => {
  prevSlide();
});
rightButton.addEventListener("click", () => {
  nextSlide();
});

const updateSlides = () => {
  for (let i = 0; i < slides.length; i++) {
    const slideArr = slides[i];
    slideArr.classList.remove("carousel-post-visible");
    slideArr.classList.add("carousel-post-hidden");
  }
  slides[carouselSlidePos].classList.add("carousel-post-visible");
};

const nextSlide = () => {
  if (carouselSlidePos === carouselLength - 1) {
    carouselSlidePos = 0;
  } else {
    carouselSlidePos++;
  }
  updateSlides();
  updatedotts();
};

const prevSlide = () => {
  if (carouselSlidePos === 0) {
    carouselSlidePos = carouselLength - 1;
  } else {
    carouselSlidePos--;
  }
  updateSlides();
  updatedotts();
};

setInterval(() => {
  nextSlide();
}, 8000);

const containerSecondary = document.querySelector(".secondary-container");

async function htmlCreate() {
  try {
    containerSecondary.innerHTML = "";
    const blogData = await apiCall(url);

    containerSecondary.innerHTML += `
                                    <div class="img-container">
                                        <a href="/blog-post-specific.html?id=${blogData[5].id}">
                                          <img src="${blogData[5].featured_media_src_url}" alt="${blogData[5].acf.alt}">
                                        </a>
                                    </div>
                                    <div>
                                        <h2>${blogData[5].title.rendered}</h2>
                                        <p>${blogData[5].acf.articles}</p>
                                        <button class="btn-readmore">
                                          <a href="/blog-post-specific.html?id=${blogData[5].id}">Read more</a>
                                        </button>
                                    </div>`;
  } catch (e) {
    containerSecondary.innerHTML = `<div class="catch-err"><p >
    Error could not connect to api, try to refresh this page</p></d> `;
  }
}
htmlCreate();

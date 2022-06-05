import { apiCall } from "./component.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
const idPost = "https://beardland.hols.no/wp-json/wp/v2/posts/" + id;
const pageTitel = document.querySelector("title");

const specContainer = document.querySelector(".specific-container");

async function articleSpesific() {
  try {
    specContainer.innerHTML = "";
    const blogData = await apiCall(idPost);
    pageTitel.innerHTML = `${blogData.title.rendered}`;

    specContainer.innerHTML += `  <div class="spec-img-container">
                                    <img src="${blogData.featured_media_src_url}" alt="${blogData.acf.alt}">
                                  </div>
                                  <div class= "spec-text">
                                    <h2>${blogData.title.rendered}</h2>
                                    <p>${blogData.acf.articles}</p>
                                  </div> 
                                  <div class="modal-container">
                                    <div class="modal">
                                      <img src="${blogData.featured_media_src_url}" alt="${blogData.acf.alt}">
                                      <span class="close">&times;</span>
                                    </div>
                                  </div`;
  } catch (e) {
    specContainer.innerHTML = `<div class="catch-err"><p >
    Error could not connect to api, try to refresh this page</p></d> `;
  }
  const modalContainer = document.querySelector(".modal-container");
  const imgaeContainer = document.querySelector(".spec-img-container");
  const closeBtn = document.querySelector(".close");

  imgaeContainer.addEventListener("click", () => {
    modalContainer.style.display = "block";
  });
  closeBtn.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
  window.onclick = (e) => {
    if (e.target == modalContainer) {
      modalContainer.style.display = "none";
    }
  };
}
articleSpesific();

export const url = "https://beardland.hols.no/wp-json/wp/v2/posts/?per_page=10";

export async function apiCall(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const loaderContainer = document.querySelector(".loader");

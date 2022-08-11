async function getGenre() {
  let response = await fetch(
    "https://binaryjazz.us/wp-json/genrenator/v1/genre/25"
  );
  let data = await response.json();

  const html = data.map(renderToHTML).join("");
  document.querySelector("#app").innerHTML = html;

  return data;
}

getGenre().then((data) => console.log(data));

const renderToHTML = (genre) => {
  return `<p>Genre: ${genre}</p>`;
};

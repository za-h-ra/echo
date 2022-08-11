async function getGenre() {
  let response = await fetch(
    "https://binaryjazz.us/wp-json/genrenator/v1/genre/25"
  );
  let data = await response.json();

  const html = data
    .map((genre) => {
      return `<p>Genre: ${genre}</p>`;
    })
    .join("");
  console.log(html);

  document.querySelector("#app").innerHTML = html;

  return data;
}

getGenre().then((data) => console.log(data));

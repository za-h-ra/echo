async function getGenre() {
  let response = await fetch(
    "https://binaryjazz.us/wp-json/genrenator/v1/genre/25"
  );
  let data = await response.json();

  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    document.querySelector("#app").innerHTML = `${data[i]}`;
  }
  return data;
}

getGenre().then((data) => console.log(data));

const list = document.querySelector("ul");
const api = "https://swapi.dev/api/people";


fetch(api)
  .then(response => response.json())
  .then(data => {
    let Personajes = data.results;

    Personajes = Personajes.map((p) => {
      list.innerHTML += `<li> ${p.name} / ${p.birth_year} </li>`;
    });

  });
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 105500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg",
  },
  {
    templeName: "Córdoba Argentina",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 32800,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093-main.jpg",
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20264,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg",
  },
];

const container = document.querySelector(".temple-grid");

document.addEventListener("DOMContentLoaded", () => {
  renderTemples(temples);
});

function clearTemples() {
  container.innerHTML = "";
}

function renderTemples(lista) {
  clearTemples();

  lista.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p>LOCATION: ${temple.location}</p>
      <p>DEDICATED: ${temple.dedicated}</p>
      <p>SIZE: ${temple.area}</p>
      <img 
        src="${temple.imageUrl}" 
        alt="${temple.templeName}" 
        loading="lazy" 
        width="400" 
        height="250" 
        style="object-fit: cover; width: 100%; height: 250px; border-radius: 4px;"> `
      ;

    container.appendChild(card);
  });
}

const filterLinks = document.querySelectorAll(".navigation a");

filterLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const tipo = link.getAttribute("data-filter");
    filterTemples(tipo);
  });
});

function filterTemples(tipo) {
  let listaFiltrada;

  switch (tipo) {
    case "old":
      listaFiltrada = temples.filter(
        (t) => parseInt(t.dedicated.split(",")[0]) < 1900
      );
      break;
    case "new":
      listaFiltrada = temples.filter(
        (t) => parseInt(t.dedicated.split(",")[0]) > 2000
      );
      break;
    case "large":
      listaFiltrada = temples.filter((t) => t.area > 90000);
      break;
    case "small":
      listaFiltrada = temples.filter((t) => t.area < 10000);
      break;
    default:
      listaFiltrada = temples;
      break;
  }

  renderTemples(listaFiltrada);
}

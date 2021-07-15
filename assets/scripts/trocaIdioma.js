// async function getDataLanguage() {
//   const response = await fetch('http://localhost:5500/assets/language/en.json');
//   const data = await response.json();
//   return data;
// }

// document.querySelector('#en-img').addEventListener('click', changeLanguage());

// document.querySelector('#es-img').addEventListener('click', () => {});

// function changeLanguage() {
//   let data = getDataLanguage();
//   let {
//     navbar: { sobre, Unidades, Passagens, Contato, Pacotes },
//     hero: { h1, h2, button1, button2 },
//     banner: { banner_h2, banner_h3 },
//     destinos: {
//       h2_destino,
//       p_destino,
//       espanha,
//       estados_unidos,
//       franca,
//       japao,
//       portugal,
//       italia,
//     },
//   } = data;
//   console.log(data);
//   const menu = document.querySelectorAll('[data-menu]');
//   menu[0].innerHTML = sobre;
//   menu[1].innerHTML = Passagens;
//   menu[2].innerHTML = Unidades;
//   menu[3].innerHTML = Pacotes;
//   menu[4].innerHTML = Contato;

//   const hero = document.querySelectorAll('[data-hero]');

//   hero[0].innerHTML = h1;
//   hero[1].innerHTML = h2;
//   hero[2].innerHTML = button1;
//   hero[3].innerHTML = button2;

//   const banner = document.querySelectorAll('[data-banner]');
//   banner[0].innerHTML = banner_h2;
//   banner[1].innerHTML = banner_h3;

//   const destino = document.querySelectorAll('[data-destinos]');

//   destino[0].innerHTML = h2_destino;
//   destino[1].innerHTML = p_destino;
//   destino[2].innerHTML = estados_unidos;
//   destino[3].innerHTML = franca;
//   destino[4].innerHTML = japao;
//   destino[5].innerHTML = portugal;
//   destino[6].innerHTML = italia;
//   destino[7].innerHTML = espanha;
// }

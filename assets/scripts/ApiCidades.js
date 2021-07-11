// const getCity = async () => {
//   const results = await fetch(
//     'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
//     {
//       method: 'GET',
//     },
//   );

//   const data = await results.json();

//   return insertData(data);
// };
// getCity();

// const insertData = async (data) => {
//   let city = await data;
//   let option = '';

//   city.forEach(({ id, nome }) => {
//     option = ` <option id="${id}" value="${nome}" selected>${nome}</option>`;
//     document.querySelector('#form-cidade').innerHTML += option;
//   });
// };

async function language() {
  let option = {
    method: 'GET',
  };

  const response = await fetch('../language/en.json', option);
  const data = await response.json();

  return console.log(data);
}

language();

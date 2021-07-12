const language = async () => {
  const response = await fetch('../language/test.json');
  const data = await response.json();

  return console.log(data);
};

language();

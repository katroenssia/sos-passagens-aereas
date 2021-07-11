const form = document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault();

  //checa para ver se todos inputs estão validos
  checkingForms();
});

const checkingForms = () => {
  const inputs = document.querySelectorAll('[data-input-js]');

  inputs.forEach((input) => {
    if (['undefined', 'null', ''].includes(input.value)) {
      input.style.border = '2px solid #df4040';
      input.style.backgroundColor = '#e2d4d4';
    } else {
      input.style.border = 'none';
      input.style.backgroundColor = '#fff';
    }
  });
};

function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout('execmascara()', 1);
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}
function mtel(v) {
  v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, '$1-$2'); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  id('telefone').onkeydown = function () {
    mascara(this, mtel);
  };
};

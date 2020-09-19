function changeNumero(event) {
  var numeroa = document.querySelector("#numeroa");
  var numerob = document.querySelector("#numerob");

  if (numeroa?.value && numerob?.value) {
    var somaab = document.querySelector("#somaab");
    var subtracaoab = document.querySelector("#subtracaoab");
    var subtracaoba = document.querySelector("#subtracaoba");
    var multiplicacaoab = document.querySelector("#multiplicacaoab");
    var divisaoab = document.querySelector("#divisaoab");
    var divisaoba = document.querySelector("#divisaoba");
    var quadradoa = document.querySelector("#quadradoa");
    var quadradob = document.querySelector("#quadradob");
    var divisoresa = document.querySelector("#divisoresa");
    var divisoresb = document.querySelector("#divisoresb");
    var fatoriala = document.querySelector("#fatoriala");
    var fatorialb = document.querySelector("#fatorialb");

    somaab.value = soma(numeroa?.value, numerob?.value);
    subtracaoab.value = subtracao(numeroa?.value, numerob?.value);
    subtracaoba.value = subtracao(numerob?.value, numeroa?.value);
    multiplicacaoab.value = multiplicacao(numeroa?.value, numerob?.value);
    divisaoab.value = divisao(numeroa?.value, numerob?.value).toFixed(2);
    divisaoba.value = divisao(numerob?.value, numeroa?.value).toFixed(2);
    quadradoa.value = quadrado(numeroa?.value);
    quadradob.value = quadrado(numerob?.value);
    divisoresa.value = divisores(numeroa?.value);
    divisoresb.value = divisores(numerob?.value);
    fatoriala.value = fatorial(numeroa?.value);
    fatorialb.value = fatorial(numerob?.value);
  }
}

function subtracao(a, b) {
  return parseInt(a) - parseInt(b);
}

function soma(a, b) {
  return parseInt(a) + parseInt(b);
}

function divisao(a, b) {
  return parseInt(a) / parseInt(b);
}

function multiplicacao(a, b) {
  return parseInt(a) * parseInt(b);
}

function quadrado(numero) {
  return parseInt(numero) * parseInt(numero);
}

function fatorial(numero) {
  numero = parseInt(numero);
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * fatorial(numero - 1);
  }
}

function divisores(numero) {
  var ehPrimeiro = true;
  var count = 0;
  var resultado = "";

  for (var i = 1; i <= parseInt(numero); i++) {
    if (ehPrimeiro) {
      if (parseInt(numero) % i === 0) {
        resultado = resultado + i;
        count++;
      }
      ehPrimeiro = false;
    } else {
      if (parseInt(numero) % i === 0) {
        resultado = resultado + ", " + i;
        count++;
      }
    }
  }

  resultado = resultado + ` (${count})`;

  console.log(resultado);

  return resultado;
}

let lista = [];

window.addEventListener(
  "load",
  () => {
    carregaAPI();
  },
  false
);

async function carregaAPI() {
  const api = await fetch("http://localhost:3001/devs");
  const json = await api.json();

  this.lista = json;

  this.lista = this.lista.map((e) => {
    const linguagensLista = e.programmingLanguages.map((l) => l.language);
    return { ...e, linguagensLista };
  });

  change();
}

function getRVBN(rName) {
  var radioButtons = document.getElementsByName(rName);
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) return radioButtons[i].value;
  }
  return "";
}

function change() {
  const inputValue = document.querySelector("#nome");
  const java = document.querySelector("#java");
  const javascript = document.querySelector("#javascript");
  const python = document.querySelector("#python");
  const opcao = getRVBN("opcao");
  const linguagensSearch = [];
  if (java.checked) {
    linguagensSearch.push("Java");
  }
  if (javascript.checked) {
    linguagensSearch.push("JavaScript");
  }
  if (python.checked) {
    linguagensSearch.push("Python");
  }

  const nome = inputValue.value;

  const listaUsuarios = document.querySelector("#resultados");
  const filterList = this.lista
    .filter((row) => {
      if (opcao === "E") {
        return (
          row.name
            .normalize("NFD")
            .toLowerCase()
            .indexOf(nome.normalize("NFD").toLowerCase()) > -1 &&
          linguagensSearch.every((e) => row.linguagensLista.includes(e))
        );
      } else if (opcao === "OU") {
        return (
          row.name
            .normalize("NFD")
            .toLowerCase()
            .indexOf(nome.normalize("NFD").toLowerCase()) > -1 &&
          linguagensSearch.some((e) => row.linguagensLista.includes(e))
        );
      }
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  listaUsuarios.innerHTML = "";
  console.log(filterList);
  filterList.forEach((element) => {
    var div = document.createElement("div");
    var divLanguage = document.createElement("div");
    var img = document.createElement("img");
    var span = document.createElement("span");
    div.className = "col m5 s12";
    div.style =
      "display: flex; justify-content: flex-start; align-items: center; border: 4px solid #4b0082; border-radius: 4px; margin: 5px;  background: #fff;";
    divLanguage.style = "border-radius: 4px; margin: 5px;";
    img.src = `${element.picture}`;
    img.style = "border-radius: 50%;width: 100px; height: 100px; margin: 5px;";
    span.textContent = `${element.name}`;
    divLanguage.appendChild(span);
    var br = document.createElement("br");
    divLanguage.appendChild(br);

    element.programmingLanguages.forEach((img) => {
      var language = document.createElement("img");
      language.src = `/img/${img.language}.png`;
      language.style =
        "border-radius: 50%;width: 20px; height: 20px; margin: 5px;";
      divLanguage.appendChild(language);
    });

    div.appendChild(img);
    div.appendChild(divLanguage);
    listaUsuarios.appendChild(div);
  });
  const quantdevs = document.querySelector("#quantdevs");

  if (filterList.length === 1) {
    quantdevs.textContent = filterList.length + " Dev encontrado";
  } else {
    quantdevs.textContent = filterList.length + " Devs encontrados";
  }
}

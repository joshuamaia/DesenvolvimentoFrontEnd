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

  const nome = inputValue.value;

  const listaUsuarios = document.querySelector("#resultados");
  const filterList = this.lista
    .filter((row) => {
      if (opcao === "E") {
        if (java.checked && javascript.checked && python.checked) {
          var temJava = row.programmingLanguages.find(
            (p) => p.language === "Java"
          );
          var temJavaScript = row.programmingLanguages.find(
            (p) => p.language === "JavaScript"
          );
          var temPythom = row.programmingLanguages.find(
            (p) => p.language === "Python"
          );
          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 &&
            temJava &&
            temPythom &&
            temJavaScript
          );
        }
        if (java.checked && javascript.checked) {
          var temJava = row.programmingLanguages.find(
            (p) => p.language === "Java"
          );
          var temJavaScript = row.programmingLanguages.find(
            (p) => p.language === "JavaScript"
          );

          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 &&
            temJava &&
            temJavaScript
          );
        }
        if (java.checked && python.checked) {
          var temJava = row.programmingLanguages.find(
            (p) => p.language === "Java"
          );
          var temPythom = row.programmingLanguages.find(
            (p) => p.language === "Python"
          );
          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 &&
            temJava &&
            temPythom
          );
        }
        if (javascript.checked && python.checked) {
          var temJavaScript = row.programmingLanguages.find(
            (p) => p.language === "JavaScript"
          );
          var temPythom = row.programmingLanguages.find(
            (p) => p.language === "Python"
          );
          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 &&
            temPythom &&
            temJavaScript
          );
        }
        if (java.checked) {
          var temJava = row.programmingLanguages.find(
            (p) => p.language === "Java"
          );
          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 && temJava
          );
        }
        if (javascript.checked) {
          var temJavaScript = row.programmingLanguages.find(
            (p) => p.language === "JavaScript"
          );

          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 &&
            temJavaScript
          );
        }
        if (python.checked) {
          var temPythom = row.programmingLanguages.find(
            (p) => p.language === "Python"
          );
          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 && temPythom
          );
        }
      } else if (opcao === "OU") {
        if (java.checked && !javascript.checked && !python.checked) {
          console.log("Só Java");
          var temJava = row.programmingLanguages.find(
            (p) => p.language === "Java"
          );
          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 && temJava
          );
        }
        if (!java.checked && javascript.checked && !python.checked) {
          console.log("Só JavaScript");
          var temJavaScript = row.programmingLanguages.find(
            (p) => p.language === "JavaScript"
          );
          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 &&
            temJavaScript
          );
        }
        if (!java.checked && !javascript.checked && python.checked) {
          console.log("Só Python");
          var temPythom = row.programmingLanguages.find(
            (p) => p.language === "Python"
          );
          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 && temPythom
          );
        }
        if ((java.checked || javascript.checked) && !python.checked) {
          var temJava = row.programmingLanguages.find(
            (p) => p.language === "Java"
          );
          var temJavaScript = row.programmingLanguages.find(
            (p) => p.language === "JavaScript"
          );

          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 &&
            (temJava || temJavaScript)
          );
        }
        if ((java.checked || python.checked) && !javascript.checked) {
          var temJava = row.programmingLanguages.find(
            (p) => p.language === "Java"
          );
          var temPythom = row.programmingLanguages.find(
            (p) => p.language === "Python"
          );
          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 &&
            (temJava || temPythom)
          );
        }
        if ((javascript.checked || python.checked) && !java.checked) {
          var temJavaScript = row.programmingLanguages.find(
            (p) => p.language === "JavaScript"
          );
          var temPythom = row.programmingLanguages.find(
            (p) => p.language === "Python"
          );
          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 &&
            (temPythom || temJavaScript)
          );
        }
        if (java.checked || javascript.checked || python.checked) {
          var temJava = row.programmingLanguages.find(
            (p) => p.language === "Java"
          );
          var temJavaScript = row.programmingLanguages.find(
            (p) => p.language === "JavaScript"
          );
          var temPythom = row.programmingLanguages.find(
            (p) => p.language === "Python"
          );
          return (
            row.name
              .normalize("NFD")
              .toLowerCase()
              .indexOf(nome.normalize("NFD").toLowerCase()) > -1 &&
            (temJava || temPythom || temJavaScript)
          );
        } else {
          console.log("Entrei no returno false");
          return false;
        }
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

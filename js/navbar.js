function includeNavbar(){
    fetch("../pages/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });
}

var itensDoMenu = document.getElementsByClassName('nav-item');
for(var z = 0; z < itensDoMenu.length; z++) {
    var elem = itensDoMenu[z];   
    var nomeDoMenu = elem.innerHTML
    if(nomeDoMenu=='Home'){
      elem.onclick = function() {
        fetch("../pages/home.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("conteudo-site").innerHTML = data;
        });

          return false;
      };
    }
    if(nomeDoMenu=='Resgate'){
      elem.onclick = function() {
        fetch("../pages/resgate.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("conteudo-site").innerHTML = data;
        });

          return false;
      };
    }
    if(nomeDoMenu=='Contato'){
      elem.onclick = function() {
        fetch("../pages/contato.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("conteudo-site").innerHTML = data;
        });

          return false;
      };
    }
    if(nomeDoMenu=='Sobre Nós'){
      elem.onclick = function() {
        fetch("../pages/sobre-nos.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("conteudo-site").innerHTML = data;
        });

          return false;
      };
    }
    if(nomeDoMenu=='Doe'){
      elem.onclick = function() {
        fetch("../pages/doe.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("conteudo-site").innerHTML = data;
        });

          return false;
      };
    }
    
    
}


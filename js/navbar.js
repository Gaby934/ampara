function definaConteudo(pagina){
    fetch(pagina)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("conteudo-site").innerHTML = data;
    });
}
definaConteudo('../pages/home.html')
var itensDoMenu = document.getElementsByClassName('nav-item');
for(var z = 0; z < itensDoMenu.length; z++) {
    var elem = itensDoMenu[z];   
    var nomeDoMenu = elem.href
    if(nomeDoMenu=='http://127.0.0.1:5500/home'){
      elem.onclick = function() {
        definaConteudo('../pages/home.html')
          return false;
      };
    }
    if(nomeDoMenu=='http://127.0.0.1:5500/resgate'){
      elem.onclick = function() {
        definaConteudo('../pages/resgate.html')

          return false;
      };
    }
    if(nomeDoMenu=='http://127.0.0.1:5500/contato'){
      elem.onclick = function() {
        definaConteudo('../pages/contato.html')
          return false;
      };
    }
    if(nomeDoMenu=='http://127.0.0.1:5500/sobre-nos'){
      elem.onclick = function() {
        definaConteudo('../pages/sobre-nos.html')

          return false;
      };
    }
    if(nomeDoMenu=='http://127.0.0.1:5500/doe'){
      elem.onclick = function() {
        definaConteudo('../pages/doe.html')

          return false;
      };
    }
    
    
}


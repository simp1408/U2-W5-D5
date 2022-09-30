var arrayAnimali  = ['🐱', '🦉', '🐾', 
                     '🦄', '🦋', '🐛', 
                     '🐝', '🐬', '🐱',
                     '🦉', '🐾', '🦄', 
                     '🦋', '🐛', '🐝','🐬'];

//function shuffle

function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = a[currentIndex];
      a[currentIndex] = a[randomIndex];
      a[randomIndex] = temporaryValue;
    }
    return a;
  }

  function startGame(){
    let arrayShuffle= shuffle(arrayAnimali);
// creao un array vuoto
    arrayComparison=[]; 

    let lista= document.getElementById('griglia');
    // con un ciclo levo tutti i nodi 
    while (lista.hasChildNodes()) { 
        lista.removeChild(lista.firstChild);
      }

    //   faccio un ciclo for
    for(var i = 0; i < 16; i++){    //si fa un ciclo
        var box = document.createElement('div'); //dentro let box ci creiamo un div
        var element = document.createElement('div'); //dentro let element ci creiamo un div
        element.className = 'icon'; //a let element gli diamo la classe icon
        document.getElementById('griglia')
           .appendChild(box).appendChild(element); //alla griglia ci mettiamo dentro i box e element
        element.innerHTML = arrayShuffle[i];
      }

    let icon= document.getElementsByClassName("icon");
    let icons=[...icon];

    for (var i = 0; i < icons.length; i++){
        icons[i].addEventListener("click", displayIcon);
      }


  }


  
  function displayIcon(eventClick){

    var iconsFind = document.getElementsByClassName("find");
  
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
  
    eventClick.target.classList.toggle("show");
    arrayComparison.push(this);
  
    var len = arrayComparison.length;
    if(len === 2){
      if(arrayComparison[0].innerHTML === arrayComparison[1].innerHTML){
        arrayComparison.forEach(function(elemento){
            elemento.classList.add("find","disabled");
        });
        arrayComparison = [];               
      } else {
        icons.forEach(function(item){
          item.classList.add('disabled');
        });
        setTimeout(function(){
          arrayComparison.forEach(function(elemento){
              elemento.classList.remove("show");
          });
          icons.forEach(function(item){
            item.classList.remove('disabled');
            for(var i = 0; i < iconsFind.length; i++){
                iconsFind[i].classList.add("disabled");
              }
          });
          arrayComparison = [];
        },700); 
       }
    }
  }


  
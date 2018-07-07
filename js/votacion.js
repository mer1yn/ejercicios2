// var score1 = 0;
// var score2 = 0;
// var score3 = 0;
// var scoreTotal = score1 + score2 + score3;
//
// var item1 = document.getElementById('item1');
// var item2 = document.getElementById('item2');
// var item3 = document.getElementById('item3');
//
// var bar1 = document.getElementById('bar1');
// var bar2 = document.getElementById('bar2');
// var bar3 = document.getElementById('bar3');
//
// item1.addEventListener('click', function() {
//   score1++;
//   setScore('item1', score1);
// });
//
// item2.addEventListener('click', function() {
//   score2++;
//   setScore('item2', score2);
// });
//
// item3.addEventListener('click', function() {
//   score3++;
//   setScore('item3', score3);
// });
//
// function setScore(item, currentScore) {
//   scoreTotal = score1 + score2 + score3;
//   console.log('el porcentaje de '+item+' es igual a ' + (currentScore/scoreTotal)*100 + '%');
//
//   bar1.style.width = (score1/scoreTotal)*100 + '%';
//   bar2.style.width = (score2/scoreTotal)*100 + '%';
//   bar3.style.width = (score3/scoreTotal)*100 + '%';
// }

var scoreTotal = 0;
var candidatos = [
  {
    name: 'LMAO',
    score: 0,
    img: 'https://sabiasquesignifica.com/wp-content/uploads/2018/04/que-significa-lmao.png',
    bar: null
  },
  {
    name: 'Chicken',
    score: 0,
    img: 'https://4.imimg.com/data4/WX/CT/MY-8854554/live-chicken-500x500.jpg',
    bar: null
  },
  {
    name: 'PP',
    score: 0,
    img: 'https://i.kym-cdn.com/entries/icons/mobile/000/017/618/pepefroggie.jpg',
    bar: null
  },
  {
    name: 'Caballo',
    score: 0,
    img: 'https://www.anipedia.net/imagenes/caballos-falabella.jpg',
    bar: null
  }
];

for (var i = 0; i < candidatos.length; i++) {
  document.getElementById('items').innerHTML += '' +
  '<div class="item" onclick="votar(this, '+i+')">'+
    '<img src="'+candidatos[i].img+'" alt="">' +
    '<div class="progress-bar">' +
      '<div class="bar" id="bar'+i+'"></div>' +
    '</div>' +
  '</div>';
}

function votar(elemento, indice) {
  scoreTotal++;
  candidatos[indice].score ++;

  for(var i = 0; i < candidatos.length; i++) {
    document.getElementById('bar'+i).style.width = (candidatos[i].score/scoreTotal)*100 + "%";
  }

  // console.log(elemento.children[1].children[0].style.width = "100%");
}





//

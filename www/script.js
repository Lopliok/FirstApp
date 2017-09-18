var tlacitko, div, vstup1, vstup_priorita, vstup2, smazat;
var seznamUkoly;



var ukoly;


ukoly = [];

Local.load();

//Local.remove();



seznamUkoly = document.body.getElementsByTagName('ul')['list'];

vstup1 = document.body.getElementsByTagName('input')['textik'];

vstup_priorita = document.body.getElementsByTagName('select')['priority'];

vstup2 = document.body.getElementsByTagName('input')[1];

smazat = document.body.getElementsByTagName('button')[1];


//console.log(smazat);

smazat.onclick = function() {
  Local.remove();
  ukoly = [];
  vycistiSeznam();
  vypis();
}


div = document.getElementById('block');
tlacitko = document.body.getElementsByTagName('button')[0];


//console.log(tlacitko.innerText);

//var i = 0;

//console.log(i);


/*
tlacitko.onclick = function(e) {
  i++;
  tlacitko.innerText = i;

}

*/



kolekce = seznamUkoly.ChildNodes;

//console.log(kolekce);


/*
kolekce.onclick = function () {
  console.log("fdsfds");
}
*/

function vycistiSeznam() {
  while (seznamUkoly.hasChildNodes()) {
    seznamUkoly.removeChild(seznamUkoly.lastChild)
  }
}




function vypis() {
    for (var i = 0; i < ukoly.length; i++) {
      polozka = document.createElement('li');
      polozka.innerText = ukoly[i].text + " " + ukoly[i].priorita;
      seznamUkoly.appendChild(polozka);
      }

      }



// document.addEventListener("dblclick", function(e) {
//   var prvek = e.target;
//   if (prvek.nodeName == "li"){
//     smazUkol(prvek);
//   }h
//
// });







vypis();





tlacitko.onclick = function(e) {
  //div.innerText = Number(vstup1.value) + Number(vstup2.value);
  ukoly.push({text: vstup1.value, priorita: vstup_priorita.value, hotovo: false})
  //console.log(e);
  //console.log(ukoly);
  //console.log("Přidán úkol " + ukoly[ukoly.length-1].text);
  Local.save();
  vycistiSeznam();
  vypis();
}

//console.log(seznamUkoly);

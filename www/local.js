var Local = {

};


Local.save = function() {

  //console.log(ukoly);

  if (localStorage.getItem("tasks"))
    {
        localStorage.removeItem("tasks");
    }

  localStorage.setItem("tasks", JSON.stringify(ukoly));


}

Local.load = function () {

  //console.log(ukoly);
  var pole = localStorage.getItem("tasks");

  if (pole) {
    ukoly = JSON.parse(pole);
  }
  //console.log(ukoly);

}

Local.remove = function () {
  localStorage.removeItem("tasks");
}

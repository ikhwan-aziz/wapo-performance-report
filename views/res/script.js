//Script file for handling the clicks on the book rows on the list page.

var books = Array.from(document.getElementsByClassName("data-rows"));

books.forEach((element, index) => {
  element.addEventListener("click", showInfo);
});

function showInfo() {
  //Getting all the information from the table row.
  id = this.id;
  var tgl_trm = this.childNodes[3].innerHTML;
  var kod_tech = this.childNodes[5].innerHTML;
  var job_typ = this.childNodes[7].innerHTML;
  var no_model = this.childNodes[9].innerHTML;
  var cal = this.childNodes[11].innerHTML;
  var point = this.childNodes[11].innerHTML;

  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("info").classList.remove("hidden");

  document.getElementById("tgl_trm").innerHTML = tgl_trm;
  document.getElementById("kod_tech").innerHTML = kod_tech;
  document.getElementById("job_typ").innerHTML = job_typ;
  document.getElementById("no_model").innerHTML = no_model;
  document.getElementById("cal").innerHTML = cal;
  document.getElementById("point").innerHTML = point;
}

function closeInfo() {
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("info").classList.add("hidden");
}

// Pagination change function
function myFunction(id) {
  idsNum = id.replace(/\D/g,'');
  var colors = ['black', 'blue', 'purple', 'green'];

  console.log(idsNum + '.) ' + colors[idsNum]);

  document.body.style.background = colors[idsNum];

  var matches = document.getElementsByClassName("active");

  for (var i = 0; i < matches.length; i++) {
    matches[i].classList.remove("active");
  }

  document.getElementById(id).className +=" active";
}

// Automically change the pagination
function autoChangePagination() {

  var div = 'div' + idNumeSelector;
  myFunction(div);

  idNumeSelector++;

  if (idNumeSelector == 4) {
    idNumeSelector = 0;
  }

  setTimeout(autoChangePagination, 5000);
}

var idNumeSelector = 0;
autoChangePagination();


// OnClick function: changes to button & syncs autoChangePagination
function onClickPagination(id) {

  console.log(id);

  idsNum = id.replace(/\D/g,'');

  myFunction(id);

  idNumeSelector = idsNum;

}

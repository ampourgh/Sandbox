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

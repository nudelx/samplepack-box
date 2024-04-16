var box = document.querySelector('.box');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

var sliderHor = document.querySelector('#myRange1');
var sliderVert = document.querySelector('#myRange2');

function changeSide(value = null ) {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    box.classList.remove( currentClass );
  }
  box.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );



sliderHor.addEventListener('change', function(e) {
  var value = e.target.value;
  const percent = 90/value*100
  box.style.transform = 'rotateY('+percent+'deg)';
})

sliderVert.addEventListener('change', function(e) {
  var value = e.target.value;
  const percent = 90/value*100
  box.style.transform = 'rotateX('+percent+'deg)';
})

const setInitialValues = function() {
  box.style.transform = 'rotateY(333.333deg)';
}

setInitialValues()

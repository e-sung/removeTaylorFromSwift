var textToRemove = " -Taylor"
var url = window.location.search
var inputField = document.getElementById("lst-ib")

if(url.includes("swift") || url.includes("Swift")){
  if (inputField.value.includes("Taylor") == false) {
    appendRemovalOperatorToInputField()
  }
}

function appendRemovalOperatorToInputField(){
  inputField.focus()
  inputField.value += textToRemove
  inputField.form.submit()
}

function sendEnterKeyEvent(){
  var ev = document.createEvent('KeyboardEvent');
  // Send key '13' (= enter)
  ev.initKeyEvent(
    'keydown', true, true, window, false, false, false, false, 13, 0);
  document.body.dispatchEvent(ev);
}

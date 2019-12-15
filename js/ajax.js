// Simple AJAX Example

// 1. Create an XMLHTTP Request Object.
var xhr = new XMLHttpRequest();

// 2. Create a callback function.
xhr.onreadystatechange = function(){
  if (xhr.readyState === 4){
    document.getElementById("ajax").innerHTML = xhr.responseText;
  };
}

// 3. Open a request.
xhr.open("GET", "home.html");

function sendAJAX(){
  // 4. Send the request.
  xhr.send();
  // cause the button to disappear after click
  document.getElementById("load").style.display = "none";
}


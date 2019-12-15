
           
function validateForm() {
  var nisn = document.forms["myForm"]["nisn"].value;
  var password = document.forms["myForm"]["password"].value;
  if (nisn == "") {
    alert("NISN must be filled out");
    return false;
  }
  if (password == "") {
    alert("Password must be filled out");
    return false;
  }
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("up");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

          $(document).ready(function(){
  $('form input').change(function () {
    $('form p').text(this.files.length + " file(s) selected");
  });
});

function validateForm1() {
    var file = document.forms["myForm1"]["files"].value;
    if (file == "") {
      alert("Tidak ada file yang dipilih");
      return false;
    }else{
        alert("Tugas berhasil diupload");

      return false;
    }
    
  }

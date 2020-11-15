// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function submitStudentInfo() {
   var LstName=document.getElementById("lastName")
   console.log(LstName.value)
   fetch ("http://127.0.0.1:8080/students", {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin":"*", 

      "Content-Type": "application/json"

    },
  })
  .then(response =>response.json())
  .then(data => console.log(data));

}

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

var form = document.getElementById("newStudentForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

function submitStudentInfo() {
  var data = {
    name: `${document.getElementById("firstName").value} ${
      document.getElementById("lastName").value
    }`,
    email: document.getElementById("email").value,
    phone: document.getElementById("phoneNumber").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    programFee: document.querySelector('input[name="pay100k"]:checked').value,
    district: document.getElementById("district").value,
    location: document.getElementById("location").value,
    education: document.getElementById("education").value,
    ownAlaptop: document.querySelector('input[name="ownLaptop"]:checked').value,
    careerGoals: document.getElementById("careerGoals").value,
    inpersonoronline: document.querySelector('input[name="classType"]:checked')
      .value,
    howdidyouhearaboutus: document.getElementById("channel").value,
    registrationFee: document.querySelector('input[name="pay10k"]:checked')
      .value,
    accessToInternet: document.querySelector(
      'input[name="internetAccess"]:checked'
    ).value,
    scholarship: document.getElementById("whyYou").value,
  };

   fetch ("http://127.0.0.1:8080/student/add", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin":"*",
      "Content-Type": "application/json"
    },
    body:JSON.stringify(data)
  })
  .then(response =>response.json())
  .then(data => console.log(data))
  // .catch(error=>console.log("error---->",error))
}

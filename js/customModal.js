// Get the modal
var modal = document.getElementById("myModal");

var successModal = document.getElementById("success-modal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");
var btn1 = document.getElementById("openModalBtn1");
var btn2 = document.getElementById("openModalBtn2");
var btn3 = document.getElementById("openModalBtn3");

// Get the <span> element that closes the modal
// var userModalClose = document.getElementById("closeModal");
// var userModalResponseClose = document.getElementById("closeResponse");
// var userModalResponseCloseX = document.getElementById("close-x");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};
btn1.onclick = function() {
    modal.style.display = "block";
};
btn2.onclick = function() {
    modal.style.display = "block";
};
btn3.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <userModalClose> (x), close the modal
userModalClose.onclick = function() {
    modal.style.display = "none";
};
userModalResponseClose.onclick = function() {
    successModal.style.display="none"
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        successModal.style.display="none"
    }
};

var form = document.getElementById("newStudentForm");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener("submit", handleForm);

var accessForm = document.getElementById("signup-form");

  function handleForm(event) {
      event.preventDefault();
  }
  accessForm.addEventListener("submit", handleForm);



async function submitStudentInfo(e) {
    var btn = document.getElementById("btn-submit-application");
    btn.innerHTML = 'Submitting...';
    $('#btn-submit-application').attr("disabled", true);   

    var data = {
        name: `${document.getElementById("firstName").value} ${
      document.getElementById("lastName").value
    }`,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
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

    const response = await fetch("https://shecancode-api.herokuapp.com/students/add", {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (response.status === 200) {
        modal.style.display = "none";
        successModal.style.display = "block";
    } else {
        alert("Application failed! Please your internet connectivity");
    }
    $('#newStudentForm')[0].reset();
}

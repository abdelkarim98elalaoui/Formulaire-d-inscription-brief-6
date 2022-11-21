const btn = document.getElementById("btn");
const output = document.getElementById("output");
let nameInp = document.querySelector("#name");
let prenomInp = document.querySelector("#prename");
let emailInp = document.querySelector("#email");
let phoneInp = document.querySelector("#number");
const prenomP = document.getElementById("prenomP");
let emailP = document.querySelector("#emailP");
let phoneP = document.querySelector("#numberP");
//

nameInp.addEventListener("keyup", name);
let validatName = false;
let validatPrename = false;
let validatEmail = false;
let validatPhone = false;
let validatGenre = false;
let validatgroup = false;
let validatClub = false;
function name() {
  let name = nameInp.value;

  // name
  if (name.match(/[0-9]/g)) {
    output.innerHTML = " *  saisir valid nom ";
    nameInp.style.borderBottom = "2px red solid";
    output.style.color = "red";
    validatName = false;
  } else if (name.length > 30) {
    output.innerHTML = "*  saisir valid nom";
    nameInp.style.borderBottom = "2px red solid";
    output.style.color = "red";
    validatName = false;
  } else if (name.length < 3) {
    output.innerHTML = "*  saisir valid nom";
    nameInp.style.borderBottom = "2px red solid";
    output.style.color = "red";
    validatName = false;
  } else {
    nameInp.style.borderBottom = "2px green solid";
    output.style.color = "green";
    validatName = true;
    output.innerHTML = "";
  }
}
prenomInp.addEventListener("keyup", prename);
function prename() {
  var prename = prenomInp.value;
  if (prename.match(/[0-9]/g)) {
    prenomP.innerHTML = " *  saisir valid Prenom";
    prenomInp.style.borderBottom = "1px red solid";
    prenomP.style.color = "red";
    validatPrename = false;
  } else if (prename.length > 30) {
    prenomP.innerHTML = "*  saisir valid Prenom";
    prenomInp.style.borderBottom = "1px red solid";
    prenomP.style.color = "red";
    validatPrename = false;
  } else if (prename.length < 3) {
    prenomP.innerHTML = "*  saisir valid Prenom";
    prenomInp.style.borderBottom = "1px red solid";
    prenomP.style.color = "red";
    validatPrename = false;
  } else {
    prenomInp.style.borderBottom = "2px green solid";
    prenomP.style.color = "green";
    validatPrename = true;
    prenomP.innerHTML = "";
  }
}
emailInp.addEventListener("keyup", email);
function email() {
  let email = emailInp.value;
  if (emailInp.value === nameInp.value + "." + prenomInp.value + "@ofppt.ma") {
    emailInp.style.borderBottom = "2px green solid";
    emailP.style.color = "green";
    emailP.innerHTML = "";
    validatEmail = true;
  } else {
    emailInp.style.borderBottom = "2px red solid";
    emailP.style.color = "red";
    validatEmail = false;
    emailP.innerHTML = "its must be nom.prenom@ofppt.ma";
  }
}
phoneInp.addEventListener("keyup", phone);
function phone() {
  let phone = phoneInp.value;
  let two = phone.slice(0, 2);
  if ((two === "05" || two === "06" || two === "07") && phone.length == 10) {
    phoneP.innerHTML = "";
    phoneInp.style.borderBottom = "2px green solid";
    phoneP.style.color = "green";
    validatPhone = true;
    if (phone.match(/[a-z]/g)) {
      phoneInp.style.borderBottom = "2px red solid";
      phoneP.style.color = "red";
      validatPhone = false;
      phoneP.innerHTML = "its must have just numbers ";
    }
  } else {
    phoneP.innerHTML =
      "its must start with 05 or 06 or 07 and more than 9 numbers";
    phoneP.style.color = "red";
    validatPhone = false;
    phoneInp.style.borderBottom = "2px red solid";
  }
}
//click
btn.addEventListener("click", submit);
function submit(e) {
  e.preventDefault();
  let name = nameInp.value;

  // name
  if (name.match(/[0-9]/g)) {
    output.innerHTML = " *  saisir valid nom ";
    nameInp.style.borderBottom = "2px red solid";
    output.style.color = "red";
    validatName = false;
  } else if (name.length > 30) {
    output.innerHTML = "*  saisir valid nom";
    nameInp.style.borderBottom = "2px red solid";
    output.style.color = "red";
    validatName = false;
  } else if (name.length < 3) {
    output.innerHTML = "*  saisir valid nom";
    nameInp.style.borderBottom = "2px red solid";
    output.style.color = "red";
    validatName = false;
  } else {
    nameInp.style.borderBottom = "2px green solid";
    output.style.color = "green";
    validatName = true;
    output.innerHTML = "";
  }
  //prename
  var prename = prenomInp.value;
  if (prename.match(/[0-9]/g)) {
    prenomP.innerHTML = " *  saisir valid Prenom";
    prenomInp.style.borderBottom = "1px red solid";
    prenomP.style.color = "red";
    validatPrename = false;
  } else if (prename.length > 30) {
    prenomP.innerHTML = "*  saisir valid Prenom";
    prenomInp.style.borderBottom = "1px red solid";
    prenomP.style.color = "red";
    validatPrename = false;
  } else if (prename.length < 3) {
    prenomP.innerHTML = "*  saisir valid Prenom";
    prenomInp.style.borderBottom = "1px red solid";
    prenomP.style.color = "red";
    validatPrename = false;
  } else {
    prenomInp.style.borderBottom = "2px green solid";
    prenomP.style.color = "green";
    validatPrename = true;
    prenomP.innerHTML = "";
  }
  //email
  let email = emailInp.value;
  if (emailInp.value === nameInp.value + "." + prenomInp.value + "@ofppt.ma") {
    emailInp.style.borderBottom = "2px green solid";
    emailP.style.color = "green";
    emailP.innerHTML = "";
    validatEmail = true;
  } else {
    emailInp.style.borderBottom = "2px red solid";
    emailP.style.color = "red";
    validatEmail = false;
    emailP.innerHTML = "its must be nom.prenom@ofppt.ma";
  }
  //phone
  let phone = phoneInp.value;
  let two = phone.slice(0, 2);
  if ((two === "05" || two === "06" || two === "07") && phone.length == 10) {
    phoneP.innerHTML = "";
    phoneInp.style.borderBottom = "2px green solid";
    phoneP.style.color = "green";
    validatPhone = true;
    if (phone.match(/[a-z]/g)) {
      phoneInp.style.borderBottom = "2px red solid";
      phoneP.style.color = "red";
      validatPhone = false;
      phoneP.innerHTML = "its must have just numbers ";
    }
  } else {
    phoneP.innerHTML =
      "its must start with 05 or 06 or 07 and more than 9 numbers";
    phoneP.style.color = "red";
    validatPhone = false;
    phoneInp.style.borderBottom = "2px red solid";
  }
  // genre
  let feminin = document.querySelector("#feminin");
  let masculin = document.querySelector("#masculin");
  let genreRadio = document.querySelector(".genreRadio");
  if (feminin.checked || masculin.checked) {
    genreRadio.style.color = "green";
    validatGenre = true;
  } else {
    genreRadio.style.color = "red";
    validatGenre = false;
  }
  // group

  let groupInp = document.querySelector(".groupInp");
  let inp1 = document.querySelector(".inp1");
  let inp2 = document.querySelector(".inp2");
  let inp3 = document.querySelector(".inp3");
  let inp4 = document.querySelector(".inp4");
  let groups = document.querySelector(".group");
  if (
    groupInp.checked ||
    inp1.checked ||
    inp2.checked ||
    inp3.checked ||
    inp4.checked
  ) {
    groups.style.color = "green";
    validatgroup = true;
  } else {
    validatgroup = false;
    groups.style.color = "red";
  }
  //clubs
  let select = document.getElementById("clubs");
  let club = document.getElementById("club");
  let clubP = document.querySelector("#clubP");
  //counter
  let counter = 0;
  //loop on clubs
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].selected == true) {
      counter++;
    }
    if (counter > 0 && counter <= 3) {
      clubP.innerHTML = "";
      validatClub = true;
    } else {
      clubP.style.color = "red";
      validatClub = false;
      clubP.innerHTML = " sectionner une au minimum ou trois choix au maximum";
    }
  }
  if (
    validatName === true &&
    validatPrename === true &&
    validatEmail === true &&
    validatPhone === true &&
    validatGenre === true &&
    validatgroup === true &&
    validatClub === true
  ) {
    window.location.href = "thanks.html";
  }
}

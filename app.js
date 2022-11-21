//variables
const btn = document.querySelector("#btn");
const nameP = document.querySelector(".nameP");
const emailP = document.querySelector("#emailP");
const phoneP = document.querySelector("#phoneP");
const output = document.getElementById("output");
let nameInp = document.querySelector("#nameInp");
let prenameInp = document.querySelector("#preNameInp");
let emailInp = document.querySelector("#emailInp");
let phoneInp = document.querySelector("#phoneInp");
//event
btn.addEventListener("click", check);
//function
function check(e) {
  //variables
  let name = nameInp.value;
  let prename = prenameInp.value;
  //
  let validatName = false;
  let validatPrename = false;
  let validatEmail = false;
  let validatPhone = false;
  let validatGenre = false;
  let validatgroup = false;
  let validatClub = false;
  //stop reload
  e.preventDefault();

  let regex = /[0-9\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;

  if (
    name.match(regex) ||
    name.length > 30 ||
    (name.length == 0 && prename.match(regex)) ||
    prename.length > 30 ||
    prename.length == 0
  ) {
    nameP.innerHTML = "*  saisir valid nom et Prenom";
    nameP.style.color = "red";
    nameInp.style.borderBottom = "2px red solid";
    prenameInp.style.borderBottom = "2px red solid";
    nameInp.style.color = "red ";
    prenameInp.style.color = "red ";
    validatName = false;
    validatPrename = false;
  } else {
    nameP.style.color = "green";
    nameInp.style.borderBottom = "2px green solid";
    nameInp.style.color = "green ";
    prenameInp.style.color = "green ";
    prenameInp.style.borderBottom = "2px green solid";
    nameP.innerHTML = "";
    validatName = true;
    validatPrename = true;
  }
  //email check
  let email = emailInp.value;
  let emailReg = name + "." + prename + "@ofppt.ma";
  if (email === name + "." + prename + "@ofppt.ma") {
    emailInp.style.borderBottom = "1px green solid";
    emailP.innerHTML = "";
    validatEmail = true;
  } else {
    emailInp.style.borderBottom = "1px red solid";
    emailP.innerHTML = "*  saisir valid  Email";
    emailP.style.color = "red";
    validatEmail = false;
  }
  //phone
  let phone = phoneInp.value;
  let phoneExp = /0[5-7]/g;
  let numExp =
    /[a-z\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/gi;
  console.log(phone.length);
  if (phone.match(numExp)) {
    console.log("its must be just numbers");
    phoneP.style.color = "red";
    phoneP.innerHTML = "*  saisir valid  Télephone";
    phoneInp.style.borderBottom = "1px red solid";
    validatPhone = false;
  } else if (phoneExp.test(phone) === false) {
    phoneP.style.color = "red";
    phoneP.innerHTML = "* le Télephone commencer par 05 ou 06 ou 07";
    phoneInp.style.borderBottom = "1px red solid";
    validatPhone = false;
  } else if (phone.length != 10) {
    phoneP.style.color = "red";
    phoneP.innerHTML = "* le téléphone doit être = 10 ";
    phoneInp.style.borderBottom = "1px red solid";
    validatPhone = false;
  } else {
    phoneP.style.color = "green";
    phoneP.innerHTML = "";
    phoneInp.style.borderBottom = "1px green solid";
    validatPhone = true;
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

  //redirect to page
  console.log(
    validatName,
    validatClub,
    validatEmail,
    validatGenre,
    validatPhone,
    validatPrename,
    validatPrename
  );
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

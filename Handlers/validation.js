let numberForm1 = document.getElementsByName("number");
let numberForm2 = document.getElementsByName("numberone");
let numberForm3 = document.getElementsByName("numbertwo");
let numberForm4 = document.getElementsByName("numberthree");

let formerror1 = document.getElementById("error1");
let formerror2 = document.getElementById("error2");
let formerror3 = document.getElementById("error3");
let formerror4 = document.getElementById("error4");

let text = document.getElementById("text");
let textbox = document.getElementById("textBox");

let submitbutton = document.getElementById("submitButton");
let textsubmitbutton = document.getElementById("textSubmitButton");

submitbutton.addEventListener("click", checkRadioButtonValid);

textsubmitbutton.addEventListener("click", checkTextBoxValid);


function checkRadioButtonValid() {
    let isFirstValid = false;
    let isSecondValid = false;
    let isThirdValid = false;
    let isFourthValid = false;

    let i;

    for (i = 0; i < numberForm1.length; i++) {
        if (numberForm1[i].checked){
            isFirstValid = true;
            formerror1.style.opacity = "0";
       }
       else if (!isFirstValid) {

           formerror1.style.opacity = "1";
       }
    }

    for (i = 0; i < numberForm2.length; i++) {
        if (numberForm2[i].checked){
             isSecondValid = true;
             formerror2.style.opacity = "0";
        }
        else if (!isSecondValid) {

            formerror2.style.opacity = "1";
        }
    }

    for (i = 0; i < numberForm3.length; i++) {
        if (numberForm3[i].checked){
            isThirdValid = true;
            formerror3.style.opacity = "0";
       }
       else if (!isThirdValid) {

           formerror3.style.opacity = "1";
       }
    }

    for (i = 0; i < numberForm4.length; i++) {
        if (numberForm4[i].checked){
            isFourthValid = true;
            formerror4.style.opacity = "0";
       }
       else if (!isFourthValid) {

           formerror4.style.opacity = "1";
       }
    }

    if (!isFirstValid) {
        alert("Must choose an option!");
        return false;
    }else if(!isSecondValid){
        alert("Must choose an option!");
        return false;
    }else if(!isThirdValid){
        alert("Must choose an option!");
        return false;
    }else if(!isFourthValid){
        alert("Must choose an option!");
        return false;
    }else{
        for (i = 0; i < numberForm1.length; i++) {
            numberForm1[i].checked = false; 
        }

        for (i = 0; i < numberForm2.length; i++) {
            numberForm2[i].checked = false; 
        }

        for (i = 0; i < numberForm3.length; i++) {
            numberForm3[i].checked = false; 
        }

        for (i = 0; i < numberForm4.length; i++) {
            numberForm4[i].checked = false; 
        }
        alert("Success! Your review has been sent!");
        formerror1.style.opacity = "0";
        formerror2.style.opacity = "0";
        formerror3.style.opacity = "0";
        formerror4.style.opacity = "0";
    }

}

function checkTextBoxValid() {

    if (textbox.value == "") {
        alert("ERROR! Message box can't be empty");
        text.style.color = "red";
        text.innerText = "Area was empty!"

        return false;
    }
    else {
        alert("Success! Review sent!");
        text.style.color = "black";
        text.innerText = "Write here:"
        return true;
    }

}

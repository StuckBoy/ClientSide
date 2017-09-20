var greenState = {color: "lime", degreeOne: "Music", degreeTwo: "Art"}
var redUniversity = {color: "red", degreeOne: "Philosophy", degreeTwo: "Political Science"}
var yellowCommunity = {color: "yellow", degreeOne: "Business", degreeTwo: "Construction"}
var gsuWelcome = "Welcome to GSU!";
var rruWelcome = "Welcome to RRU! ";
var yccWelcome = "Welcome to YCC!";
var genericWelcome = "We are glad you chose our school as your school of choice. We need you to declare your major as soon as possible for our records. You can always change it later on, and we've even taken the liberty of listing our most popular majors here!";
var decisionNum = 0;
var buttonClicked = "";
var buttonText = ""

function linkButtons() {
   $("button").click(
      function() {
         buttonClicked = this.id;
         buttonText = $(this).text();
         console.log(buttonClicked, buttonText);
         if(decisionNum == 0){
            schoolChoice(buttonClicked);
         }
         else if(decisionNum == 1) {
            majorChoice(buttonClicked, buttonText);
         }
         else {
            finalDecision(buttonClicked);
         }
      }
   );
}

function schoolChoice(buttonId) {
   if (buttonId == "B1") {
      document.body.style.background = greenState.color;
      document.getElementById('mainTextArea').innerHTML = gsuWelcome + genericWelcome;
      document.getElementById("B1").innerHTML = greenState.degreeOne;
      document.getElementById("B2").innerHTML = greenState.degreeTwo;
   }
   else if (buttonId == "B2") {
      document.body.style.background = redUniversity.color;
      document.getElementById('mainTextArea').innerHTML = rruWelcome + genericWelcome;
      document.getElementById("B1").innerHTML = redUniversity.degreeOne;
      document.getElementById("B2").innerHTML = redUniversity.degreeTwo;
   }
   else {
      document.body.style.background = yellowCommunity.color;
      document.getElementById('mainTextArea').innerHTML = yccWelcome + genericWelcome;
      document.getElementById("B1").innerHTML = yellowCommunity.degreeOne;
      document.getElementById("B2").innerHTML = yellowCommunity.degreeTwo;
   }
   decisionNum++;
   $(".B3").remove();
}

function majorChoice(buttonId, buttonText) {
   if (buttonId == "B1") {
     console.log("img/" + buttonText + ".jpg")
     var urlString = 'img/' + buttonText + '.jpg';
     document.getElementById('div2').innerHTML = '<img src = ' + urlString + ' width="350" height="300"/>';
   }
   else if (buttonId == "B2") {

   }
   else {

   }
}

function finalDecision(buttonClicked) {
   if (buttonId == "B1") {

   }
   else if (buttonId == "B2") {

   }
   else {

   }
}

function buildTheStory() {
   linkButtons();
}

$(buildTheStory);

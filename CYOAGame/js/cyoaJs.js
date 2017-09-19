var greenState = {color: "lime", degreeOne: "Music", degreeTwo: "Art"}
var redUniversity = {color: "red", degreeOne: "Philosophy", degreeTwo: "Political Science"}
var yellowCommunity = {color: "yellow", degreeOne: "Business", degreeTwo: "Construction"}
var gsuWelcome = "Welcome to GSU!";
var rruWelcome = "Welcome to RRU! ";
var yccWelcome = "Welcome to YCC!";
var genericWelcome = "We are glad you chose our school as your school of choice. While you're probably busy settling into your dorm and meeting your hallmates, we need you to declare your major as soon as possible for our records. You can always change it later on, and we've even taken the liberty of listing our most popular majors here!";
var decisionNum = 0;
var buttonClicked = 0;

function linkButtons() {
   $("button").click(
      function() {
         buttonClicked = this.id;
         console.log(buttonClicked);
         if(decisionNum == 0){
            schoolChoice(buttonClicked);
         }
         else if(decisionNum == 1) {

         }
         else {

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

function buildTheStory() {
   linkButtons();
}

$(buildTheStory);

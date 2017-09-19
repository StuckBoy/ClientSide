var greenState = {color: "lime", degreeOne: "Music", degreeTwo: "Art"}
var redUniversity = {color: "red", degreeOne: "Philosophy", degreeTwo: "Political Science"}
var yellowCommunity = {color: "yellow", degreeOne: "Business", degreeTwo: "Construction"}
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
   }
   else if (buttonId == "B2") {
      document.body.style.background = redUniversity.color;
   }
   else {
      document.body.style.background = yellowCommunity.color;
   }
}

function buildTheStory() {
   linkButtons();
}

$(buildTheStory);

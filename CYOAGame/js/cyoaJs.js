var greenState = {color: "lime", degreeOne: "Music", degreeTwo: "Computer Science"}
var redUniversity = {color: "red", degreeOne: "Philosophy", degreeTwo: "Political Science"}
var yellowCommunity = {color: "yellow", degreeOne: "Business", degreeTwo: "Construction"}
var gsuWelcome = "Welcome to GSU!";
var rruWelcome = "Welcome to RRU! ";
var yccWelcome = "Welcome to YCC!";
var musicGreeting = "Welcome to the College of Music!";
var artGreeting = "Welcome to the College of Art!";
var philosophyGreeting = "Welcome to the College of Philosophy!";
var poliSciGreeting = "Welcome to the College of Political Science!";
var businessGreeting = "Welcome to the College of Business!";
var constructionGreeting = "Welcome to the College of Construction!";
var genericWelcome = "We are glad you chose our school as your school of choice. We need you to declare your major as soon as possible for our records. You can always change it later on, and we've even taken the liberty of listing our most popular majors here!";
var badFinal = "After successfully finishing your degree, you head out into the great wide open. After many months of unsuccessful job searching in your field, you settle down in Starbucks in the metropolitan area. Hopefully something good comes along soon...";
var goodFinal = "While it took much trial and tribulation, you managed to successfully complete your degree. With new-found knowledge in hand, you head out into the workforce. After a couple of interviews that turned up fruitless, you finally manage to land a job at a pretty reputable workplace. The future sure is looking bright!";
var decisionNum = 0;
var buttonClicked = "";
var buttonText = ""

function linkButtons() {
   $("button").click(
      function() {
         buttonClicked = this.id;
         buttonText = $(this).text();
         console.log(buttonClicked, buttonText);
         if(decisionNum == 0) {
            schoolChoice(buttonClicked);
         }
         else if(decisionNum == 1) {
            majorChoice(buttonClicked, buttonText);
         }
         else {
            finalDecision(buttonClicked, buttonText);
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
      schoolNum = 1;
   }
   else if (buttonId == "B2") {
      document.body.style.background = redUniversity.color;
      document.getElementById('mainTextArea').innerHTML = rruWelcome + genericWelcome;
      document.getElementById("B1").innerHTML = redUniversity.degreeOne;
      document.getElementById("B2").innerHTML = redUniversity.degreeTwo;
      schoolNum = 2;
   }
   else {
      document.body.style.background = yellowCommunity.color;
      document.getElementById('mainTextArea').innerHTML = yccWelcome + genericWelcome;
      document.getElementById("B1").innerHTML = yellowCommunity.degreeOne;
      document.getElementById("B2").innerHTML = yellowCommunity.degreeTwo;
      schoolNum = 3;
   }
   decisionNum++;
   $(".B3").remove();
}

function majorChoice(buttonId, buttonText) {
  console.log("Major Choice Time!");
  var buttonOne = document.getElementById("B1").innerHTML;
  var buttonTwo = document.getElementById("B2").innerHTML;
  console.log(buttonOne, buttonTwo, buttonText);
  if (buttonText == "Art" || buttonText == "Music" || buttonText == "Philosophy") {
    document.getElementById('mainTextArea').innerHTML = badFinal;
    document.getElementById('mainTextArea').background = 'url(img/sadEnd.jpg)';
    }
  else {
    document.getElementById('mainTextArea').innerHTML = goodFinal;

  }
  if (buttonText == "Computer Science") {
    var urlString = 'img/ComputerScience.jpg';
  }
  else if (buttonText == "Political Science") {
    var urlString = 'img/PoliticalScience.jpg';
  }
  else {
    var urlString = 'img/' + buttonText + '.jpg';
  }
  document.getElementById('div2').innerHTML = '<img src = ' + urlString + ' width="350" height="300"/>';
  var urlString2 = 'img/diploma.jpg';
  document.getElementById('div3').innerHTML = '<img src = ' + urlString2 + ' width="350" height="300"/>';
  $("button").remove();
  document.getElementById('question').innerHTML = "";
}

function buildTheStory() {
   linkButtons();
}

$(buildTheStory);

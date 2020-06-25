// function expand(id) {
//   var element = document.getElementById(id);
//   element.classList.toggle("expanded");
// }

var ajendaDesc =
  'I built "Ajenda" as a personal project of mine both initially as a \
small commercial product and as a way to get familiar with Android \
Studio and the android libraries/android app workflow. I decided to \
not to make it commerical because of marketability and \
revenue-model, but I still think it is a worthwhile idea with the \
right execution. "Ajenda" is a productivity app that optimizes \
scheduling by automatically placing events based on a variety of \
different factors, including weather and driving time. The idea is \
that the user can say something like "Schedule Workout Sessions for \
5 times a week", and the app should be able to place workout events \
in your schedule in the best possible times. Currently, the app has \
full calendar functionality along with persistent data storage for \
events. Although the calendar seems to be the regular calendar UI \
component, it is actually a custom made UI component, and it can and \
will be changed in the future. The app also currently uses \
OpenWeatherMap API and Google Maps API to obtain weather and \
distance information. <br> <br> \
Future Features: More optimal scheduling algorithm, Completed Speech \
Recognition';

var scottyDesc =
  "I built the app \"Scotty Security\" with some of my friends during \
TartanHacks (hackathon at CMU). We built it as a cross-platform app, \
using HTML, CSS, and Javascript to create the front end, and a \
website that allowed for simple server processing to build the \
backend. The idea came from one of the themes given in the \
hackathon, which was campus security. We figured that while there \
several security apps/websites that helped people stay safe, there \
wasn't one that had everything that a student would need. So, we \
came up with \"Scotty Security\", which is a all in one campus \
security app, with access to nearly all of the security resources at \
CMU, including CMU police department and a map of campus. The \
features of the app include location tracking, news notifications, \
an emergency whistle, audio recording, and a contacts list/page. We \
used Cordova and Node.js to build the app (in our presentation, we \
built it for android). We also used Google Maps API for location \
tracking, and we built a simple set of RESTful APIs to transfer \
location information. I built most of the front end, and the simpler \
functions of the app that didn't require backend usage, including \
the emergency whistle and the audio recording functionality. Since \
two of the people on my team were not familiar with front end \
development, I also taught and guided them through building some of \
the front end with HTML, CSS, and JS. I'm really proud of this \
project, not only because I contributed a lot to it and that we were \
able to make a successful final product in the 24 hours we were \
given, but also because I think that the team worked really well \
together and I'm proud of what we created as a group. <br /> \
By the way, I have included a video of a quick demonstration of our \
project. It's a bit rough, but it was nearly the deadline, and we needed to submit soon.";

var paperDesc =
  'I did a research project on the pancreatic protein CD39L3 during my \
junior year of highschool and the following summer (2017). I worked \
with Professor Simon Robson and his lab at Beth Israel Deaconess \
Medical Center, and they mentored and advised over the course of my \
project. To provide some background knowledge on CD39L3, it is a \
glycoprotein found in the pancreas that is involved with Purinergic \
Signaling. Specifically, it is an enzyme that catalyzes purine \
nucleotides such ATP and GTP, and plays a role in regulating their \
signaling function. CD39L3 is a glycoprotein, which means it \
contains carbohydrate structures attached to its polypeptide chain. \
My project focused mainly on these structures, and I created several \
glycoforms of the protein, where I removed various amounts of sugar \
from the protein. I then measured the activity of these forms, \
included a model for the protein structure, and analyzed the \
potential impacts of these new glycoforms. This is a very watered \
down explanation of the proejct, but more information can found in \
my research paper, which was published in the peer-reviewed journal \
"Purinergic Signaling" and will be linked below. I also submitted \
this to the Regeneron Science Talent Search and was a National \
Semifinalist.';

var resVis = false;
function expand(id) {
  // window.open("assets/documents/SophomoreResumeV2.pdf", "_self");
  if (id === "a") {
    $("#expanded-header").text("Ajenda");
    $("#expanded-content").html(ajendaDesc);
  } else if (id === "b") {
    $("#expanded-header").text("Scotty Security");
    $("#expanded-content").html(scottyDesc);
  } else {
    $("#expanded-header").text("CD39L3 Various Glycoforms Study");
    $("#expanded-content").html(paperDesc);
  }
  $("#portfolio-expanded").fadeIn(300);
  $("#portfolio-expanded").toggleClass("fadeDown");
  setTimeout(function () {
    resVis = true;
  }, 600);
}

function closeBody() {
  $("#portfolio-expanded").fadeOut(300);
  setTimeout(function () {
    $("#portfolio-expanded").toggleClass("fadeDown");
  }, 300);
  resVis = false;
}

var modal = document.getElementById("portfolio-expanded");
window.onclick = function (event) {
  if (
    !(event.target == modal) &&
    !(event.target == document.getElementById("portfolio-header")) &&
    !(event.target == document.getElementById("expanded-content"))
  ) {
    // console.log("yeet");
    // closeResume();
    // $('#resume_body').is(":visible")
    if (resVis) {
      closeBody();
    }
    // modal.style.display = "none";
  }
};

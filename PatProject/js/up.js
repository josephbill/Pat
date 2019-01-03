 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAQLfmMD-syGrVNSfe51tjuyTDPuZ3WCt8",
    authDomain: "skillaby-238d4.firebaseapp.com",
    databaseURL: "https://skillaby-238d4.firebaseio.com",
    projectId: "skillaby-238d4",
    storageBucket: "skillaby-238d4.appspot.com",
    messagingSenderId: "372936558919"
  };
  firebase.initializeApp(config);


  // reference resume collection
  //intialize firebase database
  var resumeRef = firebase.database().ref('resume');


//listen for form submit 
document.getElementById('subform').addEventListener('submit', submitForm);
//submit form 
function submitForm(e){
   e.preventDefault();

   // console.log(123);
   //pass id values , get values
   //category
   var category = getInputVal('formart');
   var skilltype = getInputVal('skills');
   var description = getInputVal('desc');
   var availabilty = getInputVal('when');
   var lesson = getInputVal('lesshrs');
   var place = getInputVal('place');
   var duration = getInputVal('durcharge');
   var transport = getInputVal('trans');
   var images = getInputVal('images');


// save resume
saveResume(category,skilltype,description,availabilty,lesson,place,duration,transport,images);
}

//show alert
// document.querySelector('.alert').style.display = 'block';
//hide alert after 3 seconds
// setTimeout(function(){
// document.querySelector('.alert').style.display = 'none';
// },3000);

//function to get form values
function getInputVal(id){

    return document.getElementById(id).value;
}


//save resume data to firebase 
function saveResume(formart,skills,desc,when,lesshrs,place,durcharge,trans,images){

    var newResumeRef = resumeRef.push(); 
    newResumeRef.set({
        category: formart,
        skilltype: skills,
        description: desc,
        availabilty: when,
        lesson: lesshrs,
        place: place,
        duration: durcharge,
        transport: trans,
        images: images

    });

}
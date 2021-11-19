// var searchIcon = document.getElementById("searchIcon")
// var searchQ = document.getElementById("searchQ")

// searchIcon.onclick = ImgSearch
// function ImgSearch(){
//     console.log("Hi")
//     console.log(searchQ.value)
//     for (var i=0; i<document.getElementsByClassName("imgContainer").length ;i++){
//         console.log(i)
//         //console.log(document.getElementsByClassName("imgContainer")[i].lastChild)
//        // var searchQarray = searchQ.value.split("")
//         //console.log(searchQarray.slice(0,searchQarray.length))
//        // console.log(document.getElementsByClassName("imgContainer")[i].lastChild.parentNode.id.split("").slice(0,searchQarray.length))
//         if(document.getElementsByClassName("imgContainer")[i].getElementsByTagName("p")[0].innerHTML.includes(searchQ.value)){
//             console.log("search found")
//             document.getElementsByClassName("imgContainer")[i].style.display = "block"
//         }
//         else{
//             console.log("fail")
//             document.getElementsByClassName("imgContainer")[i].style.display = "none"
//         }
//     }

// }



// var ImgUrl = document.getElementById("ImgUrl")
// var ImgDisc = document.getElementById("ImgDisc")
// var Upload = document.getElementById("Upload")

// Upload.onclick = ImgUpload

// function ImgUpload(){

//     document.getElementsByClassName("grid")[0].innerHTML += `<div class="imgContainer" ><img src=` + ImgUrl.value + `>` + ImgDisc.value + `<img class="binIcon" src="https://img.favpng.com/9/21/20/waste-container-recycling-bin-icon-png-favpng-mBBYjd6TPWmBxvygpaQEzE4L6.jpg" onclick="imgDel(this)"></div>`
// } 

// function imgDel(x){
// console.log(x)
// x.parentNode.remove()

// }

// function reset() {
//     console.log("tes")
//     for (var i=0; i<document.getElementsByClassName("imgContainer").length ;i++){
//             document.getElementsByClassName("imgContainer")[i].style.display = "block"
//         }
//         searchQ.value=""
// }



// Homepage stuff

var j =1 //reset on load new page // reset opacity

function fadePageOut(x, fileLocation){

    console.log(x);
   setTimeout(function(){x.style.opacity = j;  //dosnt work in for loop due to nature of setTimeout function    
    j += -0.01;
    if(j>-0.01){
        console.log(x);
        fadePageOut(x, fileLocation);} 
        else{
        window.location.href = fileLocation;
        }
    } , 25);
}

var fadeInVal = 0;
function fadePageIn(x){
  //  console.log(x);
   setTimeout(function(){x.style.opacity = fadeInVal;  //dosnt work in for loop due to nature of setTimeout function
    //console.log(x);    
    fadeInVal += 0.01;
    if(fadeInVal<1.01){
        //console.log(x);
        fadePageIn(x);}
    }, 25);

}

//Video pausing function basis
// var vid = document.getElementById("myVideo");   

// function playVid() {
//     vid.play();
// }

// function pauseVid() {
//     vid.pause();
// }



function toggleNotepad(){

    var Notepad = document.getElementById("Notepad");
    console.log(Notepad.style.display);
    if (Notepad.style.display == "none"){
        Notepad.style.display = 'block';
    } else {
        Notepad.style.display = "none";
    }

}

var selectedChar = "priscilla";
///////// Use a character location variable so it loads that row of array, eg pris =1 Characters[1][whatever data yu need]
function loadInterview(charName ) {

    window.location.href = "Interview page.html";
    
}

function interviewLoad(charName) {

    var container = document.getElementById("ContentContainer");
    console.log(container);
    container.innerHTML = container.innerHTML.replace('<video>', `<video autoplay loop width="100%"> <source src = "interviews/${selectedChar}/stand%20by.mp4" type = "video/mp4" />`);

}

function askQuestion(questionNumber) {

    var container = document.getElementById("ContentContainer");
    container.innerHTML += '<video autoplay muted loop  width="100 % "> <source src = "character selection screen\selection - stand by.mp4" type = "video/mp4" /></video >'
    

}


////// For characters array of objests, var name, notes, questions(as 2d array? string  and if asked), 
////// object function askQuestion(x);, 
////// Pause function for all pages

var questionCounter = 0;
if (questionCounter = 12) {

    ///load choose supsenct screen

}



console.log("welcome to spotify");

// initialize variables
let songIndex = 0;

let audioElement = new Audio('Dekhlenge_Saala.mp3');

let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');

let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [

{
songName:"Dekhlenge Saala",
filePath:"Dekhlenge_Saala.mp3",
coverPath:"ustaad.png"
},

{
songName:"Rana Kumbha",
filePath:"Rana_Kumbha.mp3",
coverPath:"varanashi.png"
},

{
songName:"ALL IN TIGER(NTR)",
filePath:"All Hail The Tiger.mp3",
coverPath:"ntr devara.jpg"
},

{
songName:"Ayudha pooja(Devara)",
filePath:"ayudha pooja.mp3      ",
coverPath:"ntr devara.jpg"
},

{
songName:"Rai Rai Raa Raa (PEDDI)",
filePath:"Rai Rai Raa Raa.mp3",
coverPath:"peedi.png"
},

{
songName:"SoundHelix Song 4",
filePath:"Rai Rai Raa Raa.mp3 ", 
coverPath:"ntr devara.jpg"
}

];


// add songs to UI

songItems.forEach((element , i)=>{

element.getElementsByTagName("img")[0].src = songs[i].coverPath;

element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});


// PLAY / PAUSE BUTTON

masterPlay.addEventListener('click', ()=>{

if(audioElement.paused || audioElement.currentTime <= 0){

audioElement.play();

masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');

gif.style.opacity = 1;

}

else{

audioElement.pause();

masterPlay.classList.remove('fa-circle-pause');
masterPlay.classList.add('fa-circle-play');

gif.style.opacity = 0;

}

});


// UPDATE PROGRESS BAR

audioElement.addEventListener('timeupdate', ()=>{

let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);

myProgressbar.value = progress;

});


// SEEK BAR

myProgressbar.addEventListener('change', ()=>{

audioElement.currentTime = myProgressbar.value * audioElement.duration/100;

});


// RESET PLAY ICONS

const makeALLPlays = ()=>{

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

element.classList.remove('fa-circle-pause');
element.classList.add('fa-circle-play');

})

}


// SONG CLICK PLAY

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

element.addEventListener('click', (e)=>{

makeALLPlays();

songIndex = parseInt(e.target.id);

e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');

audioElement.src = songs[songIndex].filePath;

audioElement.currentTime = 0;

audioElement.play();

masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');

gif.style.opacity = 1;

});

});
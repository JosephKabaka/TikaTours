function displaySideBar() {
    let sideBar=document.getElementsByClassName("sideBar");
    sideBar[0].style.display="flex";
    
}
function hideSideBar(){
    let sideBar=document.getElementsByClassName("sideBar");
    sideBar[0].style.display="none";
    
}

// galleryJs
let galleryImagesArray= document.querySelectorAll(".imageGallery img");
let lightBoxImg=document.querySelector(".lightboxImage");
let lightBox= document.querySelector(".lightbox");
let closeBtn= document.querySelector(".close");
let prevBtn= document.querySelector(".prev");
let nextBtn= document.querySelector(".next");

let currentIndex = 0;

galleryImagesArray.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        currentIndex=index;
        displayImage(img.src);
    });
});

closeBtn.addEventListener("click",()=>{
    lightBox.style.display="none";
});

prevBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex>0) ? currentIndex-1 : galleryImagesArray.length-1;
    displayImage(galleryImagesArray[currentIndex].src);
})

nextBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex<(galleryImagesArray.length-1) ? currentIndex+1:0);
    displayImage(galleryImagesArray[currentIndex].src);

});

function displayImage(src){
    lightBoxImg.src=src;
    lightBox.style.display="flex";
}
function showAnswer(){

    document.getElementById('answer1').style.display='block';
    document.getElementById('dropIcon').style.display='none';
    document.getElementById('upIcon').style.display='block';
}
function hideanswer(){
    document.getElementById('dropIcon').style.display='block';
    document.getElementById('answer1').style.display='none';
    document.getElementById('upIcon').style.display='none';
}
function showAnswer2(){
    document.getElementById('answer2').style.display='block';
    document.getElementById('dropIcon2').style.display='none';
    document.getElementById('upIcon2').style.display='block';
}
function hideanswer2(){
    document.getElementById('answer2').style.display='none';
    document.getElementById('upIcon2').style.display='none';
    document.getElementById('dropIcon2').style.display='block';
}
// question3
function showAnswer3(){
    document.getElementById('answer3').style.display='block';
    document.getElementById('dropIcon3').style.display='none';
    document.getElementById('upIcon3').style.display='block';
}
function hideanswer3(){
    document.getElementById('answer3').style.display='none';
    document.getElementById('upIcon3').style.display='none';
    document.getElementById('dropIcon3').style.display='block';
}
// question4
function showAnswer4(){
    document.getElementById('answer4').style.display='block';
    document.getElementById('dropIcon4').style.display='none';
    document.getElementById('upIcon4').style.display='block';
}
function hideanswer4(){
    document.getElementById('answer4').style.display='none';
    document.getElementById('upIcon4').style.display='none';
    document.getElementById('dropIcon4').style.display='block';
}
// question5
function showAnswer5(){
    document.getElementById('answer5').style.display='block';
    document.getElementById('dropIcon5').style.display='none';
    document.getElementById('upIcon5').style.display='block';
}
function hideanswer5(){
    document.getElementById('answer5').style.display='none';
    document.getElementById('upIcon5').style.display='none';
    document.getElementById('dropIcon5').style.display='block';
}
// question6
function showAnswer6(){
    document.getElementById('answer6').style.display='block';
    document.getElementById('dropIcon6').style.display='none';
    document.getElementById('upIcon6').style.display='block';
}
function hideanswer6(){
    document.getElementById('answer6').style.display='none';
    document.getElementById('upIcon6').style.display='none';
    document.getElementById('dropIcon6').style.display='block';
}


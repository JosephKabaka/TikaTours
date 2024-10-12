

function displaySideBar() {
    let sideBar=document.getElementsByClassName("sideBar");
    sideBar[0].style.display="flex";
    
}
function hideSideBar(){
    let sideBar=document.getElementsByClassName("sideBar");
    sideBar[0].style.display="none";
    
}
// mombasa
function showMombasaDetails(){
    document.getElementsByClassName("mombasaLocationBackground")[0].style.display="none";
    document.getElementsByClassName("mombasaDetails")[0].style.display="block";
    console.log(document.getElementsByClassName("mombasaLocationBackground")[0]);
}
function hideMombasaDetails(){
    document.getElementsByClassName("mombasaDetails")[0].style.display="none";
    document.getElementsByClassName("mombasaLocationBackground")[0].style.display="flex";
}

// capeTown
function showCapeTownDetails(){
    document.getElementsByClassName("capeTownlocationBackground")[0].style.display="none";
    document.getElementsByClassName("capeTownDetails")[0].style.display="block";
    
}
function hideCapeTownDetails(){
    document.getElementsByClassName("capeTownlocationBackground")[0].style.display="flex";
    document.getElementsByClassName("capeTownDetails")[0].style.display="none";
}

// serengeti
function showSerengetiDetails(){
    document.getElementsByClassName("serengetiLocationBackground")[0].style.display="none";
    document.getElementsByClassName("serengetiDetails")[0].style.display="block";
    
}
function hideSerengetiDetails(){
    document.getElementsByClassName("serengetiLocationBackground")[0].style.display="flex";
    document.getElementsByClassName("serengetiDetails")[0].style.display="none";
}

// kilimanjaro

function showKilimanjaroDetails(){
    document.getElementsByClassName("kilimanjaroLocationBackground")[0].style.display="none";
    document.getElementsByClassName("kilimanjaroDetails")[0].style.display="block";
    
}
function hideKilimanjaroDetails(){
    document.getElementsByClassName("kilimanjaroLocationBackground")[0].style.display="flex";
    document.getElementsByClassName("kilimanjaroDetails")[0].style.display="none";
}

// nairobiNationalPark

function showNairobiParkDetails(){
    document.getElementsByClassName("nairobiParkLocationBackground")[0].style.display="none";
    document.getElementsByClassName("nairobiParkDetails")[0].style.display="block";
    
}
function hideNairobiParkDetails(){
    document.getElementsByClassName("nairobiParkLocationBackground")[0].style.display="flex";
    document.getElementsByClassName("nairobiParkDetails")[0].style.display="none";
}

// AmboseliNationalPark
function showAmboseliDetails(){
    document.getElementsByClassName("amboseliLocationBackground")[0].style.display="none";
    document.getElementsByClassName("amboseliDetails")[0].style.display="block";
    
}
function hideAmboseliParkDetails(){
    document.getElementsByClassName("amboseliLocationBackground")[0].style.display="flex";
    document.getElementsByClassName("amboseliDetails")[0].style.display="none";
}

// chalbiDesert
function showChalbiDetails(){
    document.getElementsByClassName("chalbiLocationBackground")[0].style.display="none";
    document.getElementsByClassName("chalbiDetails")[0].style.display="block";
    
}
function hideChalbiDetails(){
    document.getElementsByClassName("chalbiLocationBackground")[0].style.display="flex";
    document.getElementsByClassName("chalbiDetails")[0].style.display="none";
}

// Rwanda

function showRwandaDetails(){
    document.getElementsByClassName("rwandaLocationBackground")[0].style.display="none";
    document.getElementsByClassName("rwandaDetails")[0].style.display="block";
    
}
function hideRwandaDetails(){
    document.getElementsByClassName("rwandaLocationBackground")[0].style.display="flex";
    document.getElementsByClassName("rwandaDetails")[0].style.display="none";
}

// tsavo

function showTsavoDetails(){
    document.getElementsByClassName("tsavoLocationBackground")[0].style.display="none";
    document.getElementsByClassName("tsavoDetails")[0].style.display="block";
    
}
function hideTsavoDetails(){
    document.getElementsByClassName("tsavoLocationBackground")[0].style.display="flex";
    document.getElementsByClassName("tsavoDetails")[0].style.display="none";
}
function addDestinationsPage(){
    document.getElementById('subDestinatinationsContainer').style.display='grid';
    document.getElementById('accomodationContainer').style.display='none';
    document.getElementById('transportationContainer').style.display='none';
    document.getElementById('accomodationBtn').style.backgroundColor='transparent';
    document.getElementById('destBtn').style.backgroundColor='rgba(0, 0, 0, 0.189)';

}

function addAccomodationPage(){
    document.getElementById('subDestinatinationsContainer').style.display='none';
    document.getElementById('accomodationContainer').style.display='grid';
    document.getElementById('transportationContainer').style.display='none';
    document.getElementById('accomodationBtn').style.backgroundColor='rgba(0, 0, 0, 0.189)';
    document.getElementById('destBtn').style.backgroundColor='transparent';
    document.getElementById('transBtn').style.backgroundColor='transparent';
}
function addTransportationPage(){
    document.getElementById('subDestinatinationsContainer').style.display='none';
    document.getElementById('accomodationContainer').style.display='none';
    document.getElementById('transportationContainer').style.display='flex';
    document.getElementById('accomodationBtn').style.backgroundColor='transparent';
    document.getElementById('destBtn').style.backgroundColor='transparent';
    document.getElementById('transBtn').style.backgroundColor='rgba(0, 0, 0, 0.189)';

}
function showCharityHotelDetails(){
    document.getElementsByClassName("charityHotelBackground")[0].style.display="none";
    document.getElementsByClassName("charityHotelDetails")[0].style.display="block";
    
}
function hideCharityHotelDetails(){
    document.getElementsByClassName("charityHotelBackground")[0].style.display="flex";
    document.getElementsByClassName("charityHotelDetails")[0].style.display="none";
}
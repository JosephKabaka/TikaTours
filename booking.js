
function displaySideBar() {
    let sideBar=document.getElementsByClassName("sideBar");
    sideBar[0].style.display="flex";
    
}
function hideSideBar(){
    let sideBar=document.getElementsByClassName("sideBar");
    sideBar[0].style.display="none";
    
}
let selectedDestination="";
function destinationChange(){

    selectedDestination= document.getElementById("destination").value;
    
    pricePerPerson(selectedDestination);

}
function pricePerPerson(dest){
    console.log(dest);
    let pricePerPerson="";
    if(dest==='Marsabit'){
        document.getElementById('pricePerPerson').value="355 $";
        pricePerPerson=355;
        
    }else if(dest==='Mombasa'){
        ;
    document.getElementById('pricePerPerson').value="195 $";
    pricePerPerson=195;
    }else if(dest==='serengeti'){
        document.getElementById('pricePerPerson').value="400 $";
        pricePerPerson=400;
    }
    else if(dest==='CapeTown'){
        document.getElementById('pricePerPerson').value="1300 $";
        pricePerPerson=1300;
    }  else if(dest==='kilimanjaro'){
        document.getElementById('pricePerPerson').value="200 $";
        pricePerPerson=200;
    } else if(dest==='nairobi'){
        document.getElementById('pricePerPerson').value="50 $";
        pricePerPerson=50;
    } else if(dest==='amboseli'){
        document.getElementById('pricePerPerson').value="1080 $";
        pricePerPerson=1080;
    } else if(dest==='rwanda'){
        document.getElementById('pricePerPerson').value="600 $";
        pricePerPerson=600;
    } else if(dest==='tsavo'){
        document.getElementById('pricePerPerson').value="30 $";
        pricePerPerson=30;
    }

   changeNoOfPeople(pricePerPerson);
}

function changeNoOfPeople(pPp){
    let PPP=pPp;
    let noOfPeople=document.getElementById('numberOfPeople').value;
    calcTotalPrice(PPP,noOfPeople)
} 
function calcTotalPrice(ppP,nop){
   
    var totalPrice=ppP*nop;
    document.getElementById('totalPrice').value=totalPrice +" $";
}




function onLoad() {
    let searchparam = window.location.search;
    //alert(searchparam);
    if(searchparam){
        let id = searchparam.split("-")[1];
        fetch("http://localhost:3000/packages/"+1).then(res => res.json()).then(res =>{
            
            //alert(JSON.stringify(res));
            document.getElementById("pid").value = res.id;
            document.getElementById("pTitle").value = res.title;
            document.getElementById("pAmount").value = res.amount;
            document.getElementById("pDays").value = res.days;
            document.getElementById("pDescrption").value = res.desc;
            document.getElementById("btnsave").value = "Update";
        }).catch((ex)=>{
            alert("Exception");
        })
    }
    setInterval(() => {
        setDateTime();
    })

}
function setDateTime() {
    let currentDateTime = new Date();
    document.querySelector("#currentTime").innerHTML = currentDateTime;
}

//ANONYMOUS FUNCTION/ VARIABLE DEFINED FUNACTION

// let setDateTime = function(){
//     let currentDateTime = new Date();
//     document.querySelector("#currentTime").innerHTML = currentDateTime; 
// }

//ends


async function addPackage() {
    let title = document.getElementById("pTitle").value;
    let amount = document.getElementById("pAmount").value;
    let days = document.getElementById("pDays").value;
    let descrption = document.getElementById("pDescrption").value;
    //alert(title + " " + amount + " " + days + " " + descrption ); // concatenation
    //alert(`Title : ${title}, Amount : ${amount}, Days : ${days}, Descrption : ${descrption} ` ); //interpolation
    //create object
    let package = {
        "title": title,
        "desc": descrption,
        "amount": amount,
        "days": days
    }

    let options = {
        method : "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(package)
    }
    await fetch("http://localhost:3000/packages/",options);


    //saved
    document.querySelector("#successMessage").classList.remove("d-none");

    setTimeout(() => {
        hideSuccessMessage()
    }, 1000);
}

function hideSuccessMessage() {
    document.querySelector("#successMessage").classList.add("d-none");

}
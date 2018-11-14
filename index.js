
//--------------- Stitch H1 name ---------------//
let switchh1 = document.querySelector("h1");

let swutch = document.createElement("h1");
swutch.textContent = "Fruits & Vegetables Corp";
let swutched = document.querySelector("header");
swutched.replaceChild(swutch, switchh1);


//--------------- Switch Binöna to vegtiblue ---------------//

let aLag = document.createElement("a");
aLag.setAttribute("href", "#Vegtiblue");
aLag.innerHTML = "Vegitiblue";

let greenThings = document.querySelectorAll("li");
for (let i = 0; i < greenThings.length; i++) {
	greenThings[2].textContent = "";
	greenThings[2].appendChild(aLag);
}

//--------------- Switch abute und cunuct ---------------//

let sscontact = document.querySelector("#contact");
let ssabout = document.querySelector("#about");
let ssmain = document.querySelector("main");

ssmain.insertBefore(ssabout, sscontact);

//--------------- create h2 teg  ---------------//

let aboutp = document.createElement("p");
let newaboutp = ssabout.textContent;
aboutp.textContent = newaboutp;

ssabout.innerHTML="";

let hp1 = document.createElement("h2");
hp1.textContent = "about";

let hp2 = document.createElement("h2");
hp2.textContent = "contact";

ssabout.appendChild(hp1);
ssabout.appendChild(aboutp);
sscontact.insertBefore(hp2, sscontact.querySelector("p"));

//--------------- meka p teg  ---------------//

// did it in the assignment above

//--------------- meka th ---------------//

let mekatr = contact.querySelectorAll("thead > tr");
let mekatr2 = contact.querySelectorAll("thead > tr > *");
for (td of mekatr2) {
    let innerContent = td.textContent;
    td.outerHTML = "<th>" + innerContent + "</th>";
}

//--------------- add css file ---------------//
let addLink = document.createElement("link");
addLink.setAttribute("rel", "stylesheet");
addLink.setAttribute("href", "main.css");
let head = document.querySelector("head");
head.appendChild(addLink);

//--------------- Head title ---------------//

document.title = "Fruits & Vegetables Corp";














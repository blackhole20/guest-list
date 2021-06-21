var guests=[];

function submit() {
    guests.push(document.getElementById("student1").value);
    document.getElementById("addedname").innerHTML=guests;
}

function show() {
    document.getElementById("showednames").innerHTML=guests;
}

function sort() {
    guests.sort();
    document.getElementById("sortednames").innerHTML=guests;
}

function search() {
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
    for (j=0; j<guests.length; j++) {
        if (s==guests[j]) {
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found"+found+"time/s";
}
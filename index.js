// Sign in - Sign up 
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// User Rating
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

// Show more questions
function showMore() {
	document.getElementById("hot").style.display = "block";
}
function hide() {
	document.getElementById(["hot", "moreAsked"]).style.display = "none";
}


function moreAsked(){
	document.getElementById("moreAsked").style.display = "block";
}


//Search Results 

function showAnswer() {
    var x = document.getElementById("answers");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
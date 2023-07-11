document.getElementById("a-hi").textContent = `Hi! ${JSON.parse(localStorage.getItem("recentLogin"))[JSON.parse(localStorage.getItem("recentLogin")).length - 1]}`




function gotoQuizPage()
{
    window.open("quizpage.html");
}





let teachers_from_localStorage = JSON.parse(localStorage.getItem("teachers"));
let toAppend = document.getElementById("container2");
if (teachers_from_localStorage.length < 2) {
    let removeSnap = document.getElementById("afterlogingstudent-h2remove");
    removeSnap.style.display = "block";
}
if (teachers_from_localStorage.length > 1) {
    for (let i = 1; i < teachers_from_localStorage.length; i++) {
        let obj = JSON.parse(localStorage.getItem(teachers_from_localStorage[i]));
        console.log(obj);
        if (obj.questions.length < 2)
            break;
        toAppend.innerHTML += `
        <div id="container2-1" class="stdudent_container2_box">
            <h1>* Quiz by Mr/Ms ${teachers_from_localStorage[i]}</h1>
            <h3>Educator mr/ms ${teachers_from_localStorage[i]} is providing Quiz on computer Science</h3>
            <button id="container2-1-btn1-${i}" onclick="getStarted${i}()">Get Started!</button>
            <button id="container2-1-btn2-${i}" onclick="close_getStarted${i}()">Close</button>
            <div id="provided_quiz${i}">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam molestiae repudiandae voluptatum nihil.
                    Faciliit amet, consectetur adipisicing elit. Nam molestiae repudiandae voluptatum nihil. Faciliit
                    molestiae repudiandae v
                    debitis mollitia inventore similique expedita ad, molestiae sit vero?</p>
                    <button id="container2-1-btn3-${i}" onclick="gotoQuizPage()">GoTo Quiz Page</button>    
            </div>
        </div>
        `
    }
}




function logout() {
    if (confirm("Are you sure to log out!")) {
        if (JSON.parse(localStorage.getItem("recentLogin")).length > 1) {
            let arr = JSON.parse(localStorage.getItem("recentLogin"));
            arr.pop();
            localStorage.setItem("recentLogin", JSON.stringify(arr));
        }
        window.open("index.html");
    }
}

function preventlogout() {
    if (confirm("Are you sure to go home? You will be log out from your account.")) {
        window.open("index.html");
    } else {
        return;
    }
}

















































































//from here onwords 100 copy paste



function getStarted1() {
    let quiz_info = document.getElementById("provided_quiz1");
    if (quiz_info.style.display == "none") {
        quiz_info.style.display = "block";
        document.getElementById("container2-1-btn2-1").style.display = "inline";
    }
    else {
        quiz_info.style.display = "none";
        document.getElementById("container2-1-btn2-1").style.display = "none";
    }
}
function close_getStarted1() {
    let quiz_info = document.getElementById("provided_quiz1");
    quiz_info.style.display = "none"
    document.getElementById("container2-1-btn2-1").style.display = "none";
}



function getStarted2() {
    let quiz_info = document.getElementById("provided_quiz2");
    if (quiz_info.style.display == "none") {
        quiz_info.style.display = "block";
        document.getElementById("container2-1-btn2-2").style.display = "inline";
    }
    else {
        quiz_info.style.display = "none";
        document.getElementById("container2-1-btn2-2").style.display = "none";
    }
}
function close_getStarted2() {
    let quiz_info = document.getElementById("provided_quiz2");
    quiz_info.style.display = "none"
    document.getElementById("container2-1-btn2-2").style.display = "none";
}



function getStarted3() {
    let quiz_info = document.getElementById("provided_quiz3");
    if (quiz_info.style.display == "none") {
        quiz_info.style.display = "block";
        document.getElementById("container2-1-btn2-3").style.display = "inline";
    }
    else {
        quiz_info.style.display = "none";
        document.getElementById("container2-1-btn2-3").style.display = "none";
    }
}
function close_getStarted3() {
    let quiz_info = document.getElementById("provided_quiz3");
    quiz_info.style.display = "none"
    document.getElementById("container2-1-btn2-3").style.display = "none";
}



function getStarted4() {
    let quiz_info = document.getElementById("provided_quiz4");
    if (quiz_info.style.display == "none") {
        quiz_info.style.display = "block";
        document.getElementById("container2-1-btn2-4").style.display = "inline";
    }
    else {
        quiz_info.style.display = "none";
        document.getElementById("container2-1-btn2-4").style.display = "none";
    }
}
function close_getStarted4() {
    let quiz_info = document.getElementById("provided_quiz4");
    quiz_info.style.display = "none"
    document.getElementById("container2-1-btn2-4").style.display = "none";
}



function getStarted5() {
    let quiz_info = document.getElementById("provided_quiz5");
    if (quiz_info.style.display == "none") {
        quiz_info.style.display = "block";
        document.getElementById("container2-1-btn2-5").style.display = "inline";
    }
    else {
        quiz_info.style.display = "none";
        document.getElementById("container2-1-btn2-5").style.display = "none";
    }
}
function close_getStarted5() {
    let quiz_info = document.getElementById("provided_quiz5");
    quiz_info.style.display = "none"
    document.getElementById("container2-1-btn2-5").style.display = "none";
}



function getStarted6() {
    let quiz_info = document.getElementById("provided_quiz6");
    if (quiz_info.style.display == "none") {
        quiz_info.style.display = "block";
        document.getElementById("container2-1-btn2-6").style.display = "inline";
    }
    else {
        quiz_info.style.display = "none";
        document.getElementById("container2-1-btn2-6").style.display = "none";
    }
}
function close_getStarted6() {
    let quiz_info = document.getElementById("provided_quiz6");
    quiz_info.style.display = "none"
    document.getElementById("container2-1-btn2-6").style.display = "none";
}



function getStarted7() {
    let quiz_info = document.getElementById("provided_quiz7");
    if (quiz_info.style.display == "none") {
        quiz_info.style.display = "block";
        document.getElementById("container2-1-btn2-7").style.display = "inline";
    }
    else {
        quiz_info.style.display = "none";
        document.getElementById("container2-1-btn2-7").style.display = "none";
    }
}
function close_getStarted7() {
    let quiz_info = document.getElementById("provided_quiz7");
    quiz_info.style.display = "none"
    document.getElementById("container2-1-btn2-7").style.display = "none";
}



function getStarted8() {
    let quiz_info = document.getElementById("provided_quiz8");
    if (quiz_info.style.display == "none") {
        quiz_info.style.display = "block";
        document.getElementById("container2-1-btn2-8").style.display = "inline";
    }
    else {
        quiz_info.style.display = "none";
        document.getElementById("container2-1-btn2-8").style.display = "none";
    }
}
function close_getStarted8() {
    let quiz_info = document.getElementById("provided_quiz8");
    quiz_info.style.display = "none"
    document.getElementById("container2-1-btn2-8").style.display = "none";
}



function getStarted9() {
    let quiz_info = document.getElementById("provided_quiz9");
    if (quiz_info.style.display == "none") {
        quiz_info.style.display = "block";
        document.getElementById("container2-1-btn2-9").style.display = "inline";
    }
    else {
        quiz_info.style.display = "none";
        document.getElementById("container2-1-btn2-9").style.display = "none";
    }
}
function close_getStarted9() {
    let quiz_info = document.getElementById("provided_quiz9");
    quiz_info.style.display = "none"
    document.getElementById("container2-1-btn2-9").style.display = "none";
}



function getStarted10() {
    let quiz_info = document.getElementById("provided_quiz10");
    if (quiz_info.style.display == "none") {
        quiz_info.style.display = "block";
        document.getElementById("container2-1-btn2-10").style.display = "inline";
    }
    else {
        quiz_info.style.display = "none";
        document.getElementById("container2-1-btn2-10").style.display = "none";
    }
}
function close_getStarted10() {
    let quiz_info = document.getElementById("provided_quiz10");
    quiz_info.style.display = "none"
    document.getElementById("container2-1-btn2-10").style.display = "none";
}

//copy paste over
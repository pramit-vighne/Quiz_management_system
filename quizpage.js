document.getElementById("a-hi").textContent = `Hi! ${JSON.parse(localStorage.getItem("recentLogin"))[JSON.parse(localStorage.getItem("recentLogin")).length - 1]}`
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


class working {
    static getobject() {
        // console.log("This is object");
        // console.log(JSON.parse(localStorage.getItem(document.getElementById("teacher_username").value)));
        return JSON.parse(localStorage.getItem(document.getElementById("teacher_username").value));
    }
    static getAnswers() {
        let answers = [];
        //populating answers array
        for (let i = 1; i < this.getobject().answers.length; i++) {
            if (this.getobject().answers[i] == 1)
                answers.push("A");
            else if (this.getobject().answers[i] == 2)
                answers.push("B");
            else if (this.getobject().answers[i] == 3)
                answers.push("C");
            else
                answers.push("D");
        }
        return answers;
    }
    static getAnswersLen() {
        return this.getAnswers().length;
    }
    static renderQuestions(obj) {
        //redering all the question
        for (let i = 1; i < obj.questions.length; i++) {
            document.getElementById("mainQuiz").innerHTML += `<li>
        <h2>${i}. ${obj.questions[i]}</h2>
    <ul class="choices">
    <li>
        <label><input type="radio" name="question${i - 1}" value="A" /><span>${obj.options[i][0]}</span></label>
    </li>
    <li>
        <label><input type="radio" name="question${i - 1}" value="B" /><span>${obj.options[i][1]}</span></label>
    </li>
    <li>
        <label><input type="radio" name="question${i - 1}" value="C" /><span>${obj.options[i][2]}</span></label>
    </li>
    <li>
        <label><input type="radio" name="question${i - 1}" value="D" /><span>${obj.options[i][3]}</span></label>
    </li>
    </ul>
    </li>`
        }
    }
    static run2() {
        let obj = this.getobject();
        this.renderQuestions(obj);
    }
    static getCheckedValue(radioName) {
        let radios = document.getElementsByName(radioName);
        for (let y = 0; y < radios.length; y++)
            if (radios[y].checked)
                return radios[y].value;
    }
    static getScore() {
        let score = 0;
        for (let i = 0; i < this.getAnswersLen(); i++) {
            console.log(working.getCheckedValue("question" + i));
            if (working.getCheckedValue("question" + i) === this.getAnswers()[i]) score += 1;
        }
        return score;
    }
    static returnScoreInner() {
        document.getElementById("myresults").innerHTML =
            "Your score is " + this.getScore() + "/" + (this.getAnswersLen());
        if (this.getScore() > 2) {
            console.log("Bravo");
        }
    }
};






function returnScore() {
    working.returnScoreInner();
}


let teacher_name = "";
let questions_len = 0;


function run() {
    teacher_name = document.getElementById("teacher_username").value;
    console.log(teacher_name)

    if (localStorage.getItem(document.getElementById("teacher_username").value)) {
        let len = JSON.parse(localStorage.getItem(document.getElementById("teacher_username").value)).answers.length;
        questions_len = len-1;
        document.getElementById("quizpgage_containe2").style.display = "grid";
        document.getElementById("quizpgage_container").style.display = "none"
        alert("Timer for the test will be started!")
        working.run2();
    }
    else {
        document.getElementById("existornot").style.display = "block";
        //if the teacher don't exist

    }
}
// function returnScore() {
//     returnScoreInner();
// }
//quiz js


//quiz js over



//for timer

function startTimer() {
    let expired = false;
    let deadline = new Date();

    deadline = new Date(deadline.getTime() + questions_len * 60 * 1000);
    var x = setInterval(function () {
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("demo").innerHTML = "Time Remaining " + hours + "h " + minutes + "m " + seconds + "s ";
        if (t < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
            document.getElementById("mainQuiz").style.display = "none";
            document.getElementById("outerh2").textContent = "Quiz is over!"
            expired = true;
        }
    }, 1000);
}



//for time end
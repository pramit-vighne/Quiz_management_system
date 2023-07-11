let recentLoginArr = localStorage.getItem("recentLogin");
// console.log(recentLoginArr)
recentLoginArr = JSON.parse(recentLoginArr);
let username = recentLoginArr[recentLoginArr.length - 1];
document.getElementById("a-hi").textContent = `Hi! ${username}`;


//adding questions to DOM
let obj = localStorage.getItem(username);
obj = JSON.parse(obj);
console.log(obj)
let user_questions = obj.questions;
let user_options = obj.options;
let user_answers = obj.answers;
console.log(user_questions)
if (user_questions.length > 1) {
    for (let i = 1; i < user_questions.length; i++) {
        document.getElementById("yourquiz").innerHTML +=
            `<div class="questions">
                <li>${user_questions[i]}</li>
                <label for="">Options:</label>
                <ol><li>${user_options[i][0]}</li>
            <li>${user_options[i][1]}</li>
            <li>${user_options[i][2]}</li>
            <li>${user_options[i][3]}</li><ol>
                <label for="">Coreect Answer:${user_answers[i]}</label>
            </div>`
    }
}

//toggle no questions added so far heading tag
if (obj.questions.length < 2)
    document.getElementById("yourquiz-h1").style.display = "block";

function logout() {
    if (confirm("Are you sure to log out!")) {
        if (JSON.parse(localStorage.getItem("recentLogin")).length > 1) {
            let arr = JSON.parse(localStorage.getItem("recentLogin"));
            arr.pop();
            localStorage.setItem("recentLogin", JSON.stringify(arr));
        }
        window.open("index.html");
        return;
    }
    else
        return;
}

function goToHome() {
    if (confirm("You will have to log in again if you go to home now")) {
        window.open("index.html");
        return;
    }
}
function addquestion() {
    let remove = document.getElementById("afterlogin-removequestion");
    remove.style.display = "none"
    let d = document.getElementById("afterlogin-addquestion");
    if (d.style.display == "none")
        d.style.display = "flex";
    else
        d.style.display = "none";
}
function removequestion() {
    if (JSON.parse(localStorage.getItem(username)).questions.length < 2) {
        alert("No questions to remove!")
        return;
    }
    let add = document.getElementById("afterlogin-addquestion");
    add.style.display = "none"
    let d = document.getElementById("afterlogin-removequestion");
    if (d.style.display == "none")
        d.style.display = "flex";
    else
        d.style.display = "none";
}

function removeLastQuestionInner() {
    console.log("its running")
    if (confirm("Are you sure to remove last question from your Quiz?")) {
        let obj = localStorage.getItem(username);
        obj = JSON.parse(obj);
        obj.questions.pop();
        obj.answers.pop();
        obj.options.pop();

        localStorage.setItem(username, JSON.stringify(obj));
        window.location.reload();
    }
    else {
        document.getElementById("afterlogin-removequestion").style.display = "none";
        return;
    }

}
function add_question_to_quiz() {
    let question = document.getElementById("input-question");
    let option1 = document.getElementById("input-option1");
    let option2 = document.getElementById("input-option2");
    let option3 = document.getElementById("input-option3");
    let option4 = document.getElementById("input-option4");
    let answer = document.getElementById("input-answer");

    // localStorage.setItem(questionID.value, JSON.stringify([question.value, [option1.value, option2.value, option3.value, option4.value], answer.value]))

    //adding question
    let add_question_to_quiz_obj = JSON.parse(localStorage.getItem(username));
    add_question_to_quiz_obj.questions.push(question.value);
    add_question_to_quiz_obj.options.push([option1.value, option2.value, option3.value, option4.value]);
    add_question_to_quiz_obj.answers.push(answer.value);
    localStorage.setItem(username, JSON.stringify(add_question_to_quiz_obj));
    window.location.reload();
}

//what we can do we can use only one object for one usr to store all the data
// key = username
// data = [
//     username,
//     password,
//     //array of questions
//     [],
//     // array of options
//     [
//         [],
//         [],
//         [],
//         [],
//     ],
//     //array of answers
//     []

// ]

//recent login


//this login form js
let login_form_selection = document.getElementById("logintype");
let login_form_submit = document.getElementById("login-submit-btn");
//error msges
login_form_submit.addEventListener('click', () => {
    if (login_form_selection.value == 0) {
        document.getElementById("error-msg1").style.display = "block";
        return;
    }
    let a = login_form_selection.value;

    //checking valid username
    if (document.getElementById("login-form-username").value.length < 8) {
        document.getElementById("error-msg4").style.display = "block";
        return;
    }
    let b = document.getElementById("login-form-username").value;

    // let studentsObj = {
    //     students:[],
    //     password[]
    // }
    if (a == "2") {
        //if username and password is already present
        let studnetArr = JSON.parse(localStorage.getItem("students"));
        let localPass = "";
        if (studnetArr.length > 1) {
            let flag = false;
            for (let i = 1; i < studnetArr.length; i++) {
                if (studnetArr[i][0] == b) {
                    flag = true;
                    if (studnetArr[i][1] == document.getElementById("id_password").value) {
                        let recentLoginArr = JSON.parse(localStorage.getItem("recentLogin"));
                        // console.log(recentLoginArr);
                        recentLoginArr.push(b);
                        // console.log(recentLoginArr);
                        localStorage.setItem("recentLogin", JSON.stringify(recentLoginArr));
                        window.open("afterloginstudent.html");
                        return;
                    }
                    else {
                        document.getElementById("error-msg3").style.display = "block";
                        break;
                    }
                }
            }
            if (flag == false) {
                studnetArr.push([b, document.getElementById("id_password").value]);
                localStorage.setItem("students", JSON.stringify(studnetArr));
                let recentLoginArr = JSON.parse(localStorage.getItem("recentLogin"));
                // console.log(recentLoginArr);
                recentLoginArr.push(b);
                // console.log(recentLoginArr);
                localStorage.setItem("recentLogin", JSON.stringify(recentLoginArr));
                window.open("afterloginstudent.html");
            }
        } else {
            studnetArr.push([b, document.getElementById("id_password").value]);
            localStorage.setItem("students", JSON.stringify(studnetArr));
            let recentLoginArr = JSON.parse(localStorage.getItem("recentLogin"));
            // console.log(recentLoginArr);
            recentLoginArr.push(b);
            // console.log(recentLoginArr);
            localStorage.setItem("recentLogin", JSON.stringify(recentLoginArr));
            window.open("afterloginstudent.html");
        }
    }
    else {
        //if its for teacher
        //checking valid teacher user
        if (localStorage.getItem(b)) {
            //if username and password is already present
            let obj = localStorage.getItem(b);
            obj = JSON.parse(obj);
            if (document.getElementById("id_password").value == obj.password) {
                //making all the fields empty before leaving
                login_form_selection.value = "";
                document.getElementById("id_password").value = "";
                document.getElementById("id_password").value = "";

                let recentLoginArr = JSON.parse(localStorage.getItem("recentLogin"));
                // console.log(recentLoginArr);
                recentLoginArr.push(b);
                // console.log(recentLoginArr);
                localStorage.setItem("recentLogin", JSON.stringify(recentLoginArr));
                window.open("afterlogin.html");
                return;
            }
            else {
                //if the password entered is wrong
                document.getElementById("error-msg3").style.display = "block";
                return;
            }
        }
        else {
            //if not present create new entry
            let obj = {
                username: "",
                password: "",
                questions: ["defaultquestion"],
                options: [
                    ["defaultquestion1_option1", "defaultquestion1_option2", "defaultquestion1_option3", "defaultquestion1_option4"]
                ],
                answers: ["defaultquestion_answer"]
            }
            console.log(b);
            obj.username = b;
            obj.password = document.getElementById("id_password").value;
            localStorage.setItem(b, JSON.stringify(obj));
            //making all the fields empty before leaving
            login_form_selection.value = "";
            document.getElementById("id_password").value = "";
            document.getElementById("id_password").value = "";
            let recentLoginArr = JSON.parse(localStorage.getItem("recentLogin"));
            // console.log(recentLoginArr);
            recentLoginArr.push(b);
            // console.log(recentLoginArr);
            localStorage.setItem("recentLogin", JSON.stringify(recentLoginArr));
            let teachersTrack = JSON.parse(localStorage.getItem("teachers"));
            teachersTrack.push(b);
            localStorage.setItem("teachers", JSON.stringify(teachersTrack));
            window.open("afterlogin.html");
        }
    }
})


function runRecentLoging() {
    console.log("i am runnnig");
    if (localStorage.getItem("recentLogin"))
        return
    let arr = ["defaulusernmae"];
    localStorage.setItem("recentLogin", JSON.stringify(arr));
}

//this password eye js


//this password eye jsn over
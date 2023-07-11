if (!localStorage.getItem("teachers")) {
    let arr = ["defaultTeacher1"]
    localStorage.setItem("teachers", JSON.stringify(arr));
}
if (!localStorage.getItem("students")) {
    let arr = [
        ["defaultTeacher1", "theirpassword"]
    ];
    localStorage.setItem("students", JSON.stringify(arr));
}
function change_theme(){
    let body = document.body;
    let theme = document.getElementById("theme");
    if (theme.checked == true) {
        body.style.setProperty("--orage", "rgb(106,13,173)");
    } else {
        body.style.setProperty("--orage", "#FFC727");
    }
}

function check_form(){

    let message = "";
    let Name = document.getElementById("name").value;
    if (Name == "") {
        message = message + "Введите имя\n";
    }
    let Phone = document.getElementById("email").value;
    if (Phone == "") {
        message = message + "Введите email\n";
    }
    let Check = document.getElementById("cbox");
    if (Check.checked == false) {
        message = message + "Согласитесь на продажу души";
    }
    if (message == "") {
        alert("Данные украдены успешно");
    } else {
        alert(message);
    }
}


function show_about(){
    let about = document.getElementById("get_me");
    about.style.opacity = 1;
    about.style.visibility = "visible";
    about.style.transform = "scale(1)";
}

function hide_about(){
    let about = document.getElementById("get_me");
    about.style.opacity = 0;
    about.style.visibility = "hidden";
    about.style.transform = "scale(0)";
}


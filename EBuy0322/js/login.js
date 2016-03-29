// control Password show or hidden
var pwd_close = document.getElementById("pwd_close");
var pwd = document.getElementById("pwd");
pwd_close.addEventListener('click', changePwd, false);

function changePwd() {

    if (pwd.type == "password") {
        pwd.setAttribute("type", "text");
        pwd_close.style.backgroundPosition = "-33px -5px";
        // alert("1");
    } else {
        pwd.setAttribute("type", "password");
        pwd_close.style.backgroundPosition = "-71px -5px";
        // alert( "2");
    }

}

//setTime to send Message

var wait = 60; //60s

function time(o) {

    if (wait === 0) {

        o.removeAttribute("disabled");
        o.style.backgroundColor = "#ffce46";

        o.innerHTML = "获取验证码";

        wait = 60;

    } else {

        o.setAttribute("disabled", "disabled");
        o.style.backgroundColor = "rgba(255,255,255,0.1)";

        o.innerHTML = "重新发送(" + wait + ")";

        wait--;

        setTimeout(function() {
            time(o);
        }, 1000);
    }
}
document.getElementById("send").onclick = function() {
    time(this);
}

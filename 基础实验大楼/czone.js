window.onload = function() {
    var x = document.getElementById("floor");
    var y = document.getElementById("zonelist");
    var oli = document.getElementsByTagName("li");
    var ophotos = document.getElementById("photos");
    var  deg  =  0;
    var obtn1 = document.getElementById("btn1");
    var obtn2 = document.getElementById("btn2");
    var ocontent = document.getElementById("content");
    oli[1].onclick = function() {
        y.style.display = "none";
        ophotos.style.display = "block";
        ophotos.style.left = "0";
        ocontent.innerHTML = "第一层";
    }
    oli[2].onclick = function() {
        ophotos.style.display = "block";
        y.style.display = "none";
        ophotos.style.left = "-100%";
        ocontent.innerHTML = "第二层";
    }
    oli[3].onclick = function() {
        ophotos.style.display = "block";
        y.style.display = "none";
        ophotos.style.left = "-200%";
        ocontent.innerHTML = "第三层";
    }
    oli[4].onclick = function() {
        ophotos.style.display = "block";
        y.style.display = "none";
        ophotos.style.left = "-300%";
        ocontent.innerHTML = "第四层";
    }
    oli[5].onclick = function() {
        ophotos.style.display = "block";
        y.style.display = "none";
        ophotos.style.left = "-400%";
        ocontent.innerHTML = "第五层";
    }

    x.onclick = function() {
        deg += 180;
        x.style.transform = "rotate(" + deg + "deg)";
        y.style.display = (y.style.display == "block") ? "none" : "block";
    }
}


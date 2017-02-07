window.onload = function() {
    var x = document.getElementById("floor");
    var y = document.getElementById("zonelist");
    var oli = document.getElementsByTagName("li");
    var ophotos = document.getElementById("photos");
    var  deg  =  0;
    var ocontent = document.getElementById("content");
    alert("前5层楼请看A区");
    oli[1].onclick = function() {
        y.style.display = "none";
        ophotos.style.display = "block";
        ophotos.style.left = "0";
        ocontent.innerHTML = "第六层";
    }
    oli[2].onclick = function() {
        ophotos.style.display = "block";
        y.style.display = "none";
        ophotos.style.left = "-100%";
        ocontent.innerHTML = "第七层";
    }
    oli[3].onclick = function() {
        ophotos.style.display = "block";
        y.style.display = "none";
        ophotos.style.left = "-200%";
        ocontent.innerHTML = "第八层";
    }
    oli[4].onclick = function() {
        ophotos.style.display = "block";
        y.style.display = "none";
        ophotos.style.left = "-300%";
        ocontent.innerHTML = "第九层";
    }
    oli[5].onclick = function() {
        ophotos.style.display = "block";
        y.style.display = "none";
        ophotos.style.left = "-400%";
        ocontent.innerHTML = "第十层";
    }
    oli[6].onclick = function() {
        ophotos.style.display = "block";
        y.style.display = "none";
        ophotos.style.left = "-500%";
        ocontent.innerHTML = "第十一层";
    }
    oli[7].onclick = function() {
        ophotos.style.display = "block";
        y.style.display = "none";
        ophotos.style.left = "-600%";
        ocontent.innerHTML = "第十二层";
    }
    oli[8].onclick = function() {
        ophotos.style.display = "block";
        y.style.display = "none";
        ophotos.style.left = "-700%";
        ocontent.innerHTML = "第十三层";
    }


    x.onclick = function() {
        deg += 180;
        x.style.transform = "rotate(" + deg + "deg)";
        y.style.display = (y.style.display == "block") ? "none" : "block";
    }
}

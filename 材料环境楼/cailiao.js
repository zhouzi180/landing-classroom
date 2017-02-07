function openNew(){
 var sWidth=document.body.scrollWidth;
 var sHeight=document.body.scrollHeight;
 var wHeight=document.documentElement.clientHeight;
 var oMask=document.createElement("div");
 var ozone=document.getElementById("zone")
 oMask.id="mask";
 oMask.style.height=11+"rem";
 ozone.style.display="block";
 document.body.appendChild(oMask);
 oMask.onclick=function(){
 	document.body.removeChild(oMask);
 }
}
window.onload=function(){
	openNew()
$("#zone").addClass("from-below"); 
setTimeout(function(){$("#zone").addClass("effeckt-show");},300); 
}
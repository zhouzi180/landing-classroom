window.onload = function() {
    var x = document.getElementById("zonelist")
    var y = document.getElementById("search-text")
    var z = document.getElementById("btn");
    var oMask = document.createElement("div");

    function openNew() {
        oMask.id = "mask";
        oMask.style.height = 11 + "rem";
        document.body.appendChild(oMask);
    }

    y.onfocus = function() {
        openNew();
        y.value = "";
        x.style.display = "block";
        z.style.backgroundImage = "url(z.png)";
        z.onclick = function() {
            x.style.display="none";
            y.value = "";
        }
    }
    y.onblur = function() {
        document.body.removeChild(oMask);
        y.value = "Search";
        z.style.backgroundImage = "url(search.png)";
    }
   
    function searchFloor() {    
        var searchFloorName = $("#search-text").val();
        if (searchFloorName.value == "") {      
            x.style.display = "block";
        } else {      
            $("ul li").each(         function() {            
                var pinyin = $(this).attr("pinyin");           
                var cityName = $(this).attr("floorname");           
                if (pinyin.indexOf(searchFloorName) != -1                 || cityName.indexOf(searchFloorName) != -1) {              
                    $(this).show();            
                } else {              
                    $(this).hide();            
                }          
            });    
        }  
    }  
    $('#search-text').bind('input propertychange', function() {    
        searchFloor();  
    });

};


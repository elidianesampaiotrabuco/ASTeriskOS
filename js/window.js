function AllowMovable(obj) {
    document.getElementById(obj.id+"-titlebar").onmousedown = function(e) {
        pointerX = e.clientX;
        pointerY = e.clientY;
        document.onmouseup = function(){
            document.onmouseup = null;
            document.onmousemove = null;};
            document.onmousemove =  function(e) {
                pointerXmove = pointerX - e.clientX;
                pointerYmove = pointerY - e.clientY
                pointerX = e.clientX
                pointerY = e.clientY;
                obj.style.top = (obj.offsetTop - pointerYmove) + 'px';
                obj.style.left = (obj.offsetLeft - pointerXmove) + 'px';
  };};
  
    document.getElementById(obj.id+"-titlebar").ontouchstart = function(e) {
        pointerX = e.touches[0].clientX;
        pointerY = e.touches[0].clientY;
        document.ontouchend = function(){
            document.ontouchend = null;
            document.ontouchmove = null;};
            document.ontouchmove =  function(e) {
                pointerXmove = pointerX - e.touches[0].clientX;
                pointerYmove = pointerY - e.touches[0].clientY
                pointerX = e.touches[0].clientX
                pointerY = e.touches[0].clientY;
                obj.style.top = (obj.offsetTop - pointerYmove) + 'px';
                obj.style.left = (obj.offsetLeft - pointerXmove) + 'px';
  };};

  if (JSON.stringify(document.getElementById(obj.id+"-titlebar2")) != "null") { // For special titlebars

    document.getElementById(obj.id+"-titlebar2").onmousedown = function(e) {
        pointerX = e.clientX;
        pointerY = e.clientY;
        document.onmouseup = function(){
            document.onmouseup = null;
            document.onmousemove = null;};
            document.onmousemove =  function(e) {
                pointerXmove = pointerX - e.clientX;
                pointerYmove = pointerY - e.clientY
                pointerX = e.clientX
                pointerY = e.clientY;
                obj.style.top = (obj.offsetTop - pointerYmove) + 'px';
                obj.style.left = (obj.offsetLeft - pointerXmove) + 'px';
  };};
  
    document.getElementById(obj.id+"-titlebar2").ontouchstart = function(e) {
        pointerX = e.touches[0].clientX;
        pointerY = e.touches[0].clientY;
        document.ontouchend = function(){
            document.ontouchend = null;
            document.ontouchmove = null;};
            document.ontouchmove =  function(e) {
                pointerXmove = pointerX - e.touches[0].clientX;
                pointerYmove = pointerY - e.touches[0].clientY
                pointerX = e.touches[0].clientX
                pointerY = e.touches[0].clientY;
                obj.style.top = (obj.offsetTop - pointerYmove) + 'px';
                obj.style.left = (obj.offsetLeft - pointerXmove) + 'px';
  };};

  document.getElementById(obj.id+"-titlebar3").onmousedown = function(e) {
    pointerX = e.clientX;
    pointerY = e.clientY;
    document.onmouseup = function(){
        document.onmouseup = null;
        document.onmousemove = null;};
        document.onmousemove =  function(e) {
            pointerXmove = pointerX - e.clientX;
            pointerYmove = pointerY - e.clientY
            pointerX = e.clientX
            pointerY = e.clientY;
            obj.style.top = (obj.offsetTop - pointerYmove) + 'px';
            obj.style.left = (obj.offsetLeft - pointerXmove) + 'px';
};};

document.getElementById(obj.id+"-titlebar3").ontouchstart = function(e) {
    pointerX = e.touches[0].clientX;
    pointerY = e.touches[0].clientY;
    document.ontouchend = function(){
        document.ontouchend = null;
        document.ontouchmove = null;};
        document.ontouchmove =  function(e) {
            pointerXmove = pointerX - e.touches[0].clientX;
            pointerYmove = pointerY - e.touches[0].clientY
            pointerX = e.touches[0].clientX
            pointerY = e.touches[0].clientY;
            obj.style.top = (obj.offsetTop - pointerYmove) + 'px';
            obj.style.left = (obj.offsetLeft - pointerXmove) + 'px';
};};

document.getElementById(obj.id+"-titlebar4").onmousedown = function(e) {
    pointerX = e.clientX;
    pointerY = e.clientY;
    document.onmouseup = function(){
        document.onmouseup = null;
        document.onmousemove = null;};
        document.onmousemove =  function(e) {
            pointerXmove = pointerX - e.clientX;
            pointerYmove = pointerY - e.clientY
            pointerX = e.clientX
            pointerY = e.clientY;
            obj.style.top = (obj.offsetTop - pointerYmove) + 'px';
            obj.style.left = (obj.offsetLeft - pointerXmove) + 'px';
};};

document.getElementById(obj.id+"-titlebar4").ontouchstart = function(e) {
    pointerX = e.touches[0].clientX;
    pointerY = e.touches[0].clientY;
    document.ontouchend = function(){
        document.ontouchend = null;
        document.ontouchmove = null;};
        document.ontouchmove =  function(e) {
            pointerXmove = pointerX - e.touches[0].clientX;
            pointerYmove = pointerY - e.touches[0].clientY
            pointerX = e.touches[0].clientX
            pointerY = e.touches[0].clientY;
            obj.style.top = (obj.offsetTop - pointerYmove) + 'px';
            obj.style.left = (obj.offsetLeft - pointerXmove) + 'px';
};};


  }

}

function DisableMovable(w) {
    obj=document.getElementById(w);
    document.getElementById(obj.id+"-titlebar").onmousedown = function(e) {};
    document.getElementById(obj.id+"-titlebar").ontouchstart = function(e) {};
    if (JSON.stringify(document.getElementById(obj.id+"-titlebar2")) != "null") { // For special titlebars
        document.getElementById(obj.id+"-titlebar2").onmousedown = function(e) {};
        document.getElementById(obj.id+"-titlebar2").ontouchstart = function(e) {};
        document.getElementById(obj.id+"-titlebar3").onmousedown = function(e) {};
        document.getElementById(obj.id+"-titlebar3").ontouchstart = function(e) {};
        document.getElementById(obj.id+"-titlebar4").onmousedown = function(e) {};
        document.getElementById(obj.id+"-titlebar4").ontouchstart = function(e) {};
    }
}

function window_minimize(w){
    hideAppMenu();
    if(document.getElementById(w).hidden){
        document.getElementById(w).hidden=false;
        changeWindowZIndex(w);
    }else{
        if(ZIndex-1==document.getElementById(w).style.zIndex){
            document.getElementById(w).hidden=true;
        }else{
            changeWindowZIndex(w);
        }
    }
}

function window_maximize(w){
    document.getElementById(w).style.top="26px";
    document.getElementById(w).style.left="80px";
    document.getElementById(w).style.width="calc(100% - 80px)";
    document.getElementById(w).style.height="calc(100% - 26px)";
    DisableMovable(w);
    document.getElementById(w+"-maximize").src="icons/Suru/Suru/scalable/ui/window-restore-symbolic.svg";
    document.getElementById(w+"-maximize").onclick = function(e) {window_restore(w)};
    document.getElementById(w).style.boxShadow="none";
    document.getElementById(w).style.border="none";
    document.getElementById(w).style.borderTopLeftRadius="0px";
    document.getElementById(w).style.borderTopRightRadius="0px";
}

function window_restore(w){
    document.getElementById(w).style.top="100px";
    document.getElementById(w).style.left="100px";
    document.getElementById(w).style.width="300px";
    document.getElementById(w).style.height="300px";
    AllowMovable(document.getElementById(w));
    document.getElementById(w+"-maximize").src="icons/Suru/Suru/scalable/ui/window-maximize-symbolic.svg";
    document.getElementById(w+"-maximize").onclick = function(e) {window_maximize(w)};
    document.getElementById(w).style.boxShadow="0px 0px 10px #220022";
    document.getElementById(w).style.border="#220022 1px solid";
    document.getElementById(w).style.borderTopLeftRadius="10px";
    document.getElementById(w).style.borderTopRightRadius="10px";
}

function window_create(name,url,title,icon){
    hideAppMenu();
    document.getElementById("dock").insertAdjacentHTML('afterend',"<div id=\""+name+"\" onmousedown=\"changePanelActiveAppIcon('"+icon+"','"+title+"');changeWindowZIndex('"+name+"');\" class=\"window\">\
        <div id=\""+name+"-titlebar\" class=\"window-titlebar\">\
            <div class=\"window-titlebar-title\">"+title+"</div>\
            <div class=\"window-titlebar-control\">\
                <img class=\"window-titlebar-control-icon\" onclick=\"window_minimize('"+name+"');\" draggable=\"false\" src=\"icons/Suru/Suru/scalable/ui/window-minimize-symbolic.svg\"/>&nbsp;&nbsp;\
                <img id=\""+name+"-maximize\" class=\"window-titlebar-control-icon\" onclick=\"window_maximize('"+name+"');\" draggable=\"false\" src=\"icons/Suru/Suru/scalable/ui/window-maximize-symbolic.svg\"/>&nbsp;&nbsp;\
                <img class=\"window-titlebar-control-close-icon\" onclick=\"window_delete('"+name+"');\" draggable=\"false\" src=\"icons/Suru/Suru/scalable/ui/window-close-symbolic.svg\"/>&nbsp;&nbsp;\
            </div>\
        </div>\
        <iframe id=\""+name+"-content\" allowfullscreen class=\"window-content\" src=\""+url+"\"></iframe>\
    </div>");
    AllowMovable(document.getElementById(name));
    document.getElementById("dock").innerHTML+="<div id=\""+name+"-dock\" class=\"dock-app-container\">\
        <div class=\"dock-app-active\"></div>\
        <img class=\"dock-app\" onclick=\"window_minimize('"+name+"');\" draggable=\"false\" src=\""+icon+"\"/>\
    </div>";
    
}

function window_create_special(name,url,title,icon){
    hideAppMenu();
    document.getElementById("dock").insertAdjacentHTML('afterend',"<div id=\""+name+"\" onmousedown=\"changePanelActiveAppIcon('"+icon+"','"+title+"');changeWindowZIndex('"+name+"');\" class=\"window\">\
        <div id=\""+name+"-titlebar\" class=\"window-titlebar-special\">\
            <div class=\"window-titlebar-control\">\
                <img class=\"window-titlebar-control-icon\" onclick=\"window_minimize('"+name+"');\" draggable=\"false\" src=\"icons/Suru/Suru/scalable/ui/window-minimize-symbolic.svg\"/>&nbsp;&nbsp;\
                <img id=\""+name+"-maximize\" class=\"window-titlebar-control-icon\" onclick=\"window_maximize('"+name+"');\" draggable=\"false\" src=\"icons/Suru/Suru/scalable/ui/window-maximize-symbolic.svg\"/>&nbsp;&nbsp;\
                <img class=\"window-titlebar-control-close-icon\" onclick=\"window_delete('"+name+"');\" draggable=\"false\" src=\"icons/Suru/Suru/scalable/ui/window-close-symbolic.svg\"/>&nbsp;&nbsp;\
            </div>\
        </div>\
        <div id=\""+name+"-titlebar2\" class=\"window-titlebar-special-2\"></div>\
        <div id=\""+name+"-titlebar3\" class=\"window-titlebar-special-3\"></div>\
        <div id=\""+name+"-titlebar4\" class=\"window-titlebar-special-4\"></div>\
        <iframe id=\""+name+"-content\" allowfullscreen class=\"window-content-special\" src=\""+url+"\"></iframe>\
    </div>");
    AllowMovable(document.getElementById(name));
    document.getElementById("dock").innerHTML+="<div id=\""+name+"-dock\" class=\"dock-app-container\">\
        <div class=\"dock-app-active\"></div>\
        <img class=\"dock-app\" onclick=\"window_minimize('"+name+"');\" draggable=\"false\" src=\""+icon+"\"/>\
    </div>";
}

function window_delete(w){
    document.getElementById(w).remove();
    document.getElementById(w+"-dock").remove();
}

ZIndex=1000;

function changeWindowZIndex(id){
    document.getElementById(id).style.zIndex=ZIndex;
    ZIndex+=1;
}

function createRandomWindowID(){
    return "w"+Math.floor(Math.random() * Math.random() * Math.random() * Math.random()*10000000)+
    Math.floor(Math.random() * Math.random() * Math.random() * Math.random()*10000000)+
    Math.floor(Math.random() * Math.random() * Math.random() * Math.random()*10000000);
}
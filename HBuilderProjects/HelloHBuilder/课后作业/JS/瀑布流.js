window.onload = function(){
	
}

function imageLocation(parent,content){
	var cparent = document.getElementsByClassName(parent);
}

function getChildElement(parent,content){
	var a=[];
	var allcontent = parent.getElementsByClassName("*");
	for (var i = 0;i<allcontent.length;i++) {
		if([allcontent[i].className == content]){
			a.push(allcontent[i]);
		}
	}
	return a;
}

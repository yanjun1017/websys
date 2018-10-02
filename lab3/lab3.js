var myDiv = document.getElementsByTagName('div')[Math.floor(Math.random()*4)].cloneNode();
document.body.appendChild(myDiv);

/* find the element node that is starting with <html> */
var root = document.getElementsByTagName('html')[0];

var str = DOMIterator(root);
/* find the element with the id "info" */
document.getElementById('info').innerHTML = str;

function DOMIterator(current, depth) {
	
	if(!depth){
		depth = 0;
	}
	if(current.nodeType == 1) {
		var nodeName = '';
		
		for(var i = 0; i < depth; i++){
			nodeName += '-';
		}

		nodeName += current.tagName + "\n";
		
		for(var n = 0; n < current.childNodes.length; n++){
			var childnodeName = DOMIterator(current.childNodes[n], depth + 1);
			if(childnodeName != null && childnodeName != ''){
				nodeName += childnodeName;
			}
		}
		
		return nodeName;
	} else {
		return null;
	}
}

addListener(document.getElementsByTagName('html')[0]);

function addListener(current){
	if(current.nodeType == 1){
		current.onclick = function() { 
			alert(current.tagName); 
		};
		
		for(var n = 0; n < current.childNodes.length; n++){
			addListener(current.childNodes[n]);
		}
	}
}


onMouseListeners();

function onMouseListeners(){
	var divs = document.getElementsByTagName('div');
	
	for(var i = 0; i < divs.length; i++){
		divs[i].onmouseover = function() { 
			this.style.background = "lightblue";
			this.style.padding = "0px 0px 0px 10px";
		};
		divs[i].onmouseout = function() { 
			this.style.background = "white";
			this.style.padding = "0px 0px 0px 0px";
		};
	}
}

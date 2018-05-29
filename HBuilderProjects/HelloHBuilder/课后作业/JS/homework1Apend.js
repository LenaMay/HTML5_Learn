function Person(){
	var _this = {}
	_this.sayHello = function(){
		alert("helle")
	}
	return _this;
}

function Teacher(){
	var _this = Person();
	_this.sayHello = function(){
		alert("tHEllo");
	}
	return _this;
}

var t = Teacher();
t.sayHello();



//var person = {
//	name:"nana",
//	age:25,
//	eat:function (){
//		alert("chi");
//	}
//}
//alert(person.name);

function Person(name){
	this._name = name;
}

Person.prototype = {
	name:"nana",
	age:25,
	eat:function (){
		alert("chi");
	}
}
var p = new  Person();
(function(){
	function people(name) {
	this._name = name;
	}
	people.prototype.say = function() {
	alert("hello" + this._name);
	}
	window.people = people;
}());

(function(){
	function Student(name){
	this._name = name;}
	Student.prototype = new people();
	var superSay = Student.prototype.say;
	Student.prototype.say = function (){
	superSay.call(this);//调用父类
	alert("stu_say"+this._name);
	}
	window.Student = Student;
}());



var s = new Student("hhhhh");
s.say();

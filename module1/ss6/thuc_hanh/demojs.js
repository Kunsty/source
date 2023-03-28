	var intro = "Hello world";
	document.getElementById("intro").innerHTML = intro;

	var a = 2;
	var b = 3;
	var total = a+b;
	alert(total);
	document.getElementById("total").innerHTML = total;

	// function do_something(){
	// 	var selectedValue = document.getElementById("mySelect").value;
	// 	alert(selectedValue);
	// }

	var selectedElement = document.getElementById("mySelect");
	selectedElement.addEventListener("change", changeElemnet)
	function changeElemnet() {
		var selectedValue = document.getElementById("mySelect").value
		alert(selectedValue)
	}
	//cách 1 
	function mouseover() {
		document.getElementById("demo").style.color = "red";
	}
	function mouseout(){
		document.getElementById("demo").style.color = "black";
	}

	// cách 2 
	function mouseover2() {
		document.getElementById("demoo").style.color = "red";
	}
	function mouseout2(){
		document.getElementById("demoo").style.color = "black";
	}
	var demoo = document.getElementById("demoo")
	demoo.addEventListener("mouseover", mouseover);
	demoo.addEventListener("mouseout", mouseout);

	function do_smt() {
		alert("hello");
	}

	var test = document.getElementById("test");
	test.addEventListener("click", clickFunction);
	function clickFunction() {
		alert("chao xin ")
	}
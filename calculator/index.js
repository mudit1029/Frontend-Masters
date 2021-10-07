document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('.clear').onclick = () => {
		document.querySelector('.displayArea').value = "";
	}

	document.querySelector('.delete').onclick = () => {
		let value = document.querySelector('.displayArea').value;
		length = value.length;
		length--;
		let deletedValue = value.substr(0,length);
		document.querySelector('.displayArea').value = deletedValue;
	}

	document.querySelectorAll('.num').forEach(button => {
		button.onclick = () => {
			value = document.querySelector('.displayArea').value;
			document.querySelector('.displayArea').value = value + button.dataset.number;
		}
	});	

	document.querySelector('.divide').onclick = () => {
		let value = document.querySelector('.displayArea').value;
		length = value.length;
		signChange = length--;
		lastValue = value.substr(length);
		if(lastValue === "+" || lastValue === "-" || lastValue === "*" || lastValue === "÷") {
			signChange = length--;
			newValue = value.substr(0,signChange) + "÷";
			document.querySelector('.displayArea').value = newValue;
		}
		else {
			insertedValue = value + "÷";
			document.querySelector('.displayArea').value = insertedValue;
		}	
	}

	document.querySelector('.multiply').onclick = () => {
		let value = document.querySelector('.displayArea').value;
		length = value.length;
		signChange = length--
		lastValue = value.substr(length);
		if(lastValue === "+" || lastValue === "-" || lastValue === "*" || lastValue === "÷") {
			signChange = length--;
			newValue = value.substr(0,signChange) + "*";
			document.querySelector('.displayArea').value = newValue;
		}
		else {
			insertedValue = value + "*";
			document.querySelector('.displayArea').value = insertedValue;
		}	
	}

	document.querySelector('.subtract').onclick = () => {
		let value = document.querySelector('.displayArea').value;
		length = value.length;
		signChange = length--
		lastValue = value.substr(length);
		if(lastValue === "+" || lastValue === "-" || lastValue === "*" || lastValue === "÷") {
			signChange = length--;
			newValue = value.substr(0,signChange) + "-";
			document.querySelector('.displayArea').value = newValue;
		}
		else {
			insertedValue = value + "-";
			document.querySelector('.displayArea').value = insertedValue;
		}	
	}

	document.querySelector('.add').onclick = () => {
		let value = document.querySelector('.displayArea').value;
		length = value.length;
		signChange = length--
		lastValue = value.substr(length);
		if(lastValue === "+" || lastValue === "-" || lastValue === "*" || lastValue === "÷") {
			signChange = length--;
			newValue = value.substr(0,signChange) + "+";
			document.querySelector('.displayArea').value = newValue;
		}
		else {
			insertedValue = value + "+";
			document.querySelector('.displayArea').value = insertedValue;
		}	
	}


	document.querySelector('.equal').onclick = () => {
		let value = document.querySelector('.displayArea').value;
		for(i=0; i<value.length; i++) {
			op = value.charAt(i);
			if(op === "+" || op === "-" || op === "*" || op === "÷") {	
				let sign = i;
				document.querySelector('.displayArea').value = calculate(value.substr(0,sign--),value.substr(sign+=2,value.length),op)
			}	
		}
	}	

//created by atif 
function calculate(num1,num2,operator) {
	if(operator === "+"){
		let x = parseInt(num1) + parseInt(num2)
		return x
	}
	if(operator === "-"){
		let x = num1 - num2
		return x
	}
	if(operator === "*"){
		let x = num1 * num2
		return x
	}
	if(operator === "÷"){
		let x = num1 / num2
		return x
	}
}

});
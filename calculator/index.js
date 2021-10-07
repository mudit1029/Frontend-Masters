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
<<<<<<< HEAD
			data = value.substr(i);
			console.log(data)
			if(data === "+" || data === "-" || data === "*" || data === "÷") {	
				let sign = i;
				sign = sign--;
				calculate = value.substr(0,sign) + data + value.substr(sign+2, value.length)
				console.log(calculate)
				document.querySelector('.displayArea').value = calculate;

=======
			op = value.charAt(i);
			if(op === "+" || op === "-" || op === "*" || op === "÷") {	
				let sign = i;
				document.querySelector('.displayArea').value = eval(value.substr(0,sign--) + op + value.substr(sign+=2,value.length))
>>>>>>> bc7f66c75b7588db309244085f354dea18db48e0
			}	
		}
	}
});		
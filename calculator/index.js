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

	document.querySelector('.divide').onclick = checkMultipleSign

	document.querySelector('.multiply').onclick = checkMultipleSign

	document.querySelector('.subtract').onclick = checkMultipleSign

	document.querySelector('.add').onclick = checkMultipleSign

	document.querySelector('.equal').onclick = () => {
		let value = document.querySelector('.displayArea').value;
		if(value.length === 0) {
			document.querySelector('.displayArea').value = "";
		}
		else {
			answer = eval(value)
			document.querySelector('.displayArea').value = answer;
		}	
	}	

});		

function checkMultipleSign() {
	if(document.querySelector('.displayArea').value.length === 0){
		document.querySelector('.displayArea').value = "";
	}
	else {
		let value = document.querySelector('.displayArea').value;
		length = value.length;
		lastValue = value.charAt(length-=1);
		if(lastValue === "+" || lastValue === "-" || lastValue === "*" || lastValue === "/") {
			if(lastValue === event.target.dataset.sign){
				document.querySelector('.displayArea').value = value;
			}
			else {
				signChange = length--;
				newValue = value.substr(0,signChange) + event.target.dataset.sign;
				document.querySelector('.displayArea').value = newValue;
			}	
		}
		else {
			sign = event.target.dataset.sign;
			insertedValue = value + sign;
			document.querySelector('.displayArea').value = insertedValue;
		}
	}	
}
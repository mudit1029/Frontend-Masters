// JavaScript Starts After Content Loaded On The Page 
document.addEventListener('DOMContentLoaded', () => {

	// Clear function :- Clears the field 
	document.querySelector('.clear').onclick = () => {
		// set empty string in displayArea 
		document.querySelector('.displayArea').value = "";
	}

	// Delete Function :- Deletes recent value one by one from the display area.
	document.querySelector('.delete').onclick = () => {

		// get value from the display field
		let value = document.querySelector('.displayArea').value;

		// get length of the value
		length = value.length;

		// decrement the length by one
		length--;

		// get the data only to one step before the last step and store in deletedValue variable.
		let deletedValue = value.substr(0,length);

		// show the extracted value in displayArea.
		document.querySelector('.displayArea').value = deletedValue;
	}


	// Number Function :- To insert the numbers in displayArea by clicking on them.

	// select all the .num classes and set forEach loop on all of the buttons
	document.querySelectorAll('.num').forEach(button => {

		// when the button clicks
		button.onclick = () => {

			// first get the value from the displayArea
			value = document.querySelector('.displayArea').value;

			// then display the existing value with the clicked button dataset property value in the displayArea.
			document.querySelector('.displayArea').value = value + button.dataset.number;
		}
	});	


	// run checkMultipleSign function for each of the below operations.
	document.querySelector('.divide').onclick = checkMultipleSign

	document.querySelector('.multiply').onclick = checkMultipleSign

	document.querySelector('.subtract').onclick = checkMultipleSign

	document.querySelector('.add').onclick = checkMultipleSign

	// writing of equal (=) function
	document.querySelector('.equal').onclick = () => {

		// get the value from the displayArea
		let value = document.querySelector('.displayArea').value;

		// if the length of the value is 0
		if(value.length === 0) {

			// set the displayArea to empty field
			document.querySelector('.displayArea').value = "";
		}

		// otherwise
		else {

			// calculate the answer of the string of displayArea and evaluate the answer in terms of mathematics.
			answer = eval(value)

			// show the answer in displayArea
			document.querySelector('.displayArea').value = answer;
		}	
	}	

});		

// writing the checkMultipleSign function:-
function checkMultipleSign() {

	// if the length of the value is 0
	if(document.querySelector('.displayArea').value.length === 0){

		// set the displayArea to empty field
		document.querySelector('.displayArea').value = "";
	}

	// otherwise
	else {

		// get the value from the displayArea field
		let value = document.querySelector('.displayArea').value;

		// calculate the length of the value extracted
		length = value.length;

		// get the last entered value  
		lastValue = value.charAt(length-=1);

		// if the last entered value matches any of the below mentioned mathematical signs
		if(lastValue === "+" || lastValue === "-" || lastValue === "*" || lastValue === "/") {

			// first check the last entered value is equal to the dataset property value of the clicked sign button
			if(lastValue === event.target.dataset.sign){

				// if yes, show the inserted value again to the displayArea field
				document.querySelector('.displayArea').value = value;
			}

			// otherwise
			else {

				// decrement the length by 1, to change the inserted sign to any other sign
				signChange = length--;

				// then , get the string from index 0 to last second inserted value and add the new clicked button dataset property sign to it.
				newValue = value.substr(0,signChange) + event.target.dataset.sign;

				// show the new generated string into the displayArea
				document.querySelector('.displayArea').value = newValue;
			}	
		}

		// otherwise , if last entered value is not a mathematical sign
		else {

			// get the sign from the button pressed from the dataset property of the button
			sign = event.target.dataset.sign;

			// add the sign to the value entered at the top and store in the insertedValue variable
			insertedValue = value + sign;

			// show the new string to the display area.
			document.querySelector('.displayArea').value = insertedValue;
		}
	}	
}
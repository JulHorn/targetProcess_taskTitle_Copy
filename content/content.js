document.addEventListener('keydown', function(event){
	const keyName = event.key;

	if (keyName === 'Control') {
		// do not alert when only Control key is pressed.
		return;
	}

	if (event.ctrlKey && event.keyCode === 89) {
		var selectedCard = document.querySelector('.tau-selected[data-card-data]');
		var resultText = '';

		if (selectedCard) {
			resultText = '[TASK] #' + selectedCard.getAttribute('data-entity-id') + ' ' + JSON.parse(selectedCard.getAttribute('data-card-data')).name;
			console.log(resultText);
		}

		const input = document.createElement('input');
		input.style.position = 'fixed';
		input.style.opacity = 0;
		input.value = resultText;
		document.body.appendChild(input);
		input.select();
		document.execCommand('Copy');
		document.body.removeChild(input);
	}
}, false);
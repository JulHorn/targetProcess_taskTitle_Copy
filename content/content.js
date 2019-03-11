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
			var type = selectedCard.getAttribute('data-entity-type');
			resultText = '[' + type.toUpperCase() + '] #' + selectedCard.getAttribute('data-entity-id') + ' ' + JSON.parse(selectedCard.getAttribute('data-card-data')).name;
			console.log(resultText);
		} else {
			var header = document.querySelector('.view-header');
			var type = header.querySelector('.tau-entity-icon').textContent;
			var title = header.querySelector('.view-header__name .editableText').textContent;
			var id = header.querySelector('.i-role-entity-id').textContent;

			resultText = '[' + type.toUpperCase() + '] ' + id + ' ' + title;
			console.log('resultText', resultText);
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
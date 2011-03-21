function PressAndExpand(elementToPress, elementThatExpands) {
	function togglePressItsText() {
        elementToPress.innerText = elementToPress.innerText === '+' ? '-' : '+';
    }

    function togglePressItsColor() {
        var color = elementToPress.getStyle('background-color') === 'white' ? 'red' : 'white';
		elementToPress.setStyle({ backgroundColor: color});
    }

    Event.observe(elementToPress, 'click', function() {
        togglePressItsText();
        togglePressItsColor();
        Effect.toggle(elementThatExpands, 'blind', { duration: 0.5 });
    });
}
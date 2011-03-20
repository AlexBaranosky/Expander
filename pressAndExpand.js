function PressAndExpand(elementToPress, elementThatExpands) {
    this.elementToPress = elementToPress;
    this.elementThatExpands = elementThatExpands;
}

PressAndExpand.prototype.activate = function() {
    function pressItText(elementToPress) {
        return elementToPress.innerText === '+' ? '-' : '+';
    }

    function pressItColor(elementToPress) {
        return elementToPress.getStyle('background-color') === 'white' ? 'red' : 'white';
    }

    var pressIt = this.elementToPress;
    var expands = this.elementThatExpands;
    Event.observe(pressIt, 'click', function() {
        pressIt.innerText = pressItText(pressIt);
        pressIt.setStyle({ backgroundColor: pressItColor(pressIt)});
        Effect.toggle(expands, 'blind', { duration: 0.5 });
    });
};
function PressAndExpand(elementToPress, elementThatExpands) {
    this.elementToPress = elementToPress;
    this.elementThatExpands = elementThatExpands;
}

PressAndExpand.prototype.activate = function() {
    function squareText(elementToPress) {
        return elementToPress.innerText === '+' ? '-' : '+';
    }

    function squareColor(elementToPress) {
        return elementToPress.getStyle('background-color') === 'white' ? 'red' : 'white';
    }

    var pressIt = this.elementToPress;
    var expands = this.elementThatExpands;
    Event.observe(pressIt, 'click', function() {
        pressIt.innerText = squareText(pressIt);
        pressIt.setStyle({ backgroundColor: squareColor(pressIt)});
        Effect.toggle(expands, 'blind', { duration: 0.5 });
    });
};
var ExpanderWidget = function(squareElement, expanderElement) {
	this.squareElement = squareElement;
	this.expanderElement = expanderElement;
}

ExpanderWidget.prototype.observeOnClick = function() {
    function squareText(squareElement) {
        return squareElement.innerText == '+' ? '-' : '+';
    }

    function squareColor(squareElement) {
        return squareElement.getStyle('background-color') == 'white' ? 'red' : 'white';
    }

    var square = this.squareElement;
	var expander = this.expanderElement;
    Event.observe(square, 'click', function() {
        square.innerText = squareText(square);
        square.setStyle({ backgroundColor: squareColor(square)});
        Effect.toggle(expander, 'blind', { duration: 0.5 });
    });
}
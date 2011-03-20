function squareText(squareElement) {
    return squareElement.innerText == '+' ? '-' : '+';
}

function squareColor(squareElement) {
    return squareElement.getStyle('background-color') == 'white' ? 'red' : 'white';
}

function observeOnClick(expanderWidget) {
    var square = expanderWidget.squareElement;
    Event.observe(square, 'click', function() {
        square.innerText = squareText(square);
        square.setStyle({ backgroundColor: squareColor(square)});
        Effect.toggle(expanderWidget.expanderElement, 'blind', { duration: 0.5 });
    });
}
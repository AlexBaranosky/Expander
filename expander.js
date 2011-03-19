(function() {
    function addEvents() {
        var widgets = $$('div.section').collect(function(section) {
            var square = Element.down(section, 'div.square');
            var expander = Element.down(section, 'div.expander');
            return { squareElement: square,
                     expanderElement: expander};
        });
		
		function squareText(squareElement) {			
            return squareElement.innerText == '+' ? '-' : '+';
		}

        widgets.each(function(widget) {
			var square = widget.squareElement;
            Event.observe(square, 'click', function() {
				square.innerText = squareText(square);				
                Effect.toggle(widget.expanderElement, 'blind', { duration: 0.5 });
            });
        });
    }

    Event.observe(window, 'load', addEvents);
}());
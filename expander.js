(function() {
    function addEvents() {
        var widgets = $$('div.section').collect(function(section) {
            var square = Element.down(section, 'div.square');
            var expander = Element.down(section, 'div.expander');
            return { squareElement: square,
                     expanderElement: expander};
        });

        widgets.each(function(widget) {
            Event.observe(widget.squareElement, 'click', function() {
                Effect.toggle(widget.expanderElement, 'blind', { duration: 0.5 });
            });
        });
    }

    Event.observe(window, 'load', addEvents);
}());
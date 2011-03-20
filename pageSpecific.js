(function() {
    function addEvents() {
        var widgets = $$('div.section').collect(function(section) {
            var square = Element.down(section, 'div.square');
            var expander = Element.down(section, 'div.expander');
            return { squareElement: square, expanderElement: expander};
        });
        widgets.each(function(widget) {
            observeOnClick(widget);
        });
    }

    Event.observe(window, 'load', addEvents);
}());
(function() {
    function addEvents() {
        var widgets = $$('div.section').collect(function(section) {
            var square = Element.down(section, 'div.square');
            var expander = Element.down(section, 'div.expander');
            return new ExpanderWidget(square, expander);
        });
        widgets.invoke('observeOnClick');
    }

    Event.observe(window, 'load', addEvents);
}());
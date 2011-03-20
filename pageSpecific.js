(function() {
    function addEvents() {
        var widgets = $$('div.section').collect(function(section) {
            var pressIt = Element.down(section, 'div.square');
            var itExpands = Element.down(section, 'div.expander');
            return new PressAndExpand(pressIt, itExpands);
        });
        widgets.invoke('activate');
    }

    Event.observe(window, 'load', addEvents);
}());
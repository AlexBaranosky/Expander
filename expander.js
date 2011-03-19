(function() {
    function addEvents() {
        $R('1', '4').each(function(num) {
            Event.observe($('square' + num), 'click', function() {
                Effect.toggle('expander' + num, 'blind', { duration: 0.5 });
            });
        });
    }

    Event.observe(window, 'load', addEvents);
}());
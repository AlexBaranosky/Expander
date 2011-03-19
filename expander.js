(function() {
    function start() {
        function squareId(num) { return 'square' + num; }
        function expanderId(num) { return 'expander' + num; }

        $R('1', '4').each(function(num) {
            Event.observe($(squareId(num)), 'click', function() {
                Effect.toggle(expanderId(num), 'blind', { duration: 0.5 });
            });
        });
    }

    Event.observe(window, 'load', start);
}());
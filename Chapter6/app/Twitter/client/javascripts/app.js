var main = function () {
    "use strict";

    var insertCountsIntoDOM = function (counts) {
        $("p").text("bolsonaro: " + counts.bolsonaro);
        $("h4").text("CPI: " + counts.cpi);
    };
    
    setInterval(function () {
        $.getJSON("/counts.json", insertCountsIntoDOM);
    }, 5000);

    // the interval waits 5 seconds before it starts,
    // so we go ahead and do one just to get things
    // going
    $.getJSON("/counts.json", insertCountsIntoDOM);
};

$(document).ready(main);

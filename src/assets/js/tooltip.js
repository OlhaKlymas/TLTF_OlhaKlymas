import $ from "jquery";

let $tooltip = $("#tooltip");

$('.slider-text').hover(
    function() {
        $tooltip.css('opacity', '1');
        $(document).on("mousemove", function (event) {
                $tooltip.css({left: event.pageX + 15, top: event.pageY - 10});
            }
        )
    },
    function() {
        $tooltip.css('opacity', '0');
    }
)
$(document).ready(function () {
    // Toggle reviews
    $("#toggle_reviews").click(function () {
        var text = $(this).text();
        if (text === "show") {
            $(this).text("hide");
            $.ajax({
                type: "POST",
                url: "http://0.0.0.0:5001/api/v1/reviews",
                contentType: "application/json",
                data: JSON.stringify({}),
                success: function (response) {
                    // Parse and display reviews
                    $(".reviews").empty();
                    response.forEach(function (review) {
                        $(".reviews").append(`<li>${review}</li>`);
                    });
                }
            });
        } else {
            $(this).text("show");
            $(".reviews").empty();
        }
    });
});

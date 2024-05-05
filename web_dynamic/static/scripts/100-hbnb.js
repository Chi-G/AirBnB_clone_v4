$(document).ready(function () {
    // Checkbox change listener
    $("input[type='checkbox']").change(function () {
        var locations = {};

        // Loop through amenities
        $(".amenities input[type='checkbox']").each(function () {
            if (this.checked) {
                locations[$(this).attr('data-id')] = $(this).attr('data-name');
            }
        });

        // Loop through states
        $(".states input[type='checkbox']").each(function () {
            if (this.checked) {
                locations[$(this).attr('data-id')] = $(this).attr('data-name');
            }
        });

        // Loop through cities
        $(".cities input[type='checkbox']").each(function () {
            if (this.checked) {
                locations[$(this).attr('data-id')] = $(this).attr('data-name');
            }
        });

        // Update locations
        $(".locations h4").each(function () {
            var location_type = $(this).text().toLowerCase().replace(':', '');
            var location_list = [];
            for (var loc_id in locations) {
                if (locations.hasOwnProperty(loc_id)) {
                    if (location_type === 'amenities') {
                        location_list.push(locations[loc_id]);
                    } else {
                        if (loc_id.startsWith(location_type)) {
                            location_list.push(locations[loc_id]);
                        }
                    }
                }
            }
            $(this).next().empty();
            if (location_list.length > 0) {
                location_list.forEach(function (location) {
                    $(this).next().append(`<li>${location}</li>`);
                }.bind(this));
            } else {
                $(this).next().append(`<li>None</li>`);
            }
        });
    });

    // Button click listener
    $("button").click(function () {
        var amenities = [];
        var states = [];
        var cities = [];
        $('.amenities input[type="checkbox"]').each(function () {
            if (this.checked) {
                amenities.push($(this).attr('data-id'));
            }
        });
        $('.states input[type="checkbox"]').each(function () {
            if (this.checked) {
                states.push($(this).attr('data-id'));
            }
        });
        $('.cities input[type="checkbox"]').each(function () {
            if (this.checked) {
                cities.push($(this).attr('data-id'));
            }
        });
        var data = {
            amenities: amenities,
            states: states,
            cities: cities
        };
        $.ajax({
            type: "POST",
            url: "http://0.0.0.0:5001/api/v1/places_search",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (response) {
                console.log(response);
                // Handle response
            }
        });
    });
});

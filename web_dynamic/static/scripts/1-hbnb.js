$(document).ready(function() {
    var amenitiesChecked = {};

    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if (this.checked) {
            amenitiesChecked[amenityId] = amenityName;
        } else {
            delete amenitiesChecked[amenityId];
        }

        updateAmenitiesList();
    });

    function updateAmenitiesList() {
        var amenitiesList = Object.values(amenitiesChecked).join(', ');
        $('div.Amenities h4').text(amenitiesList);
    }
});

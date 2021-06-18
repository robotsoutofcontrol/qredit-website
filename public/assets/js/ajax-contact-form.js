$(function() {

    // Get the form.
    var form = $('#cf-contact-form');

    // Get the messages div.
    var formMessages = $('.cf-form-message');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('cf-error');
            $(formMessages).addClass('cf-success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#contact-form input,#contact-form textarea').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('cf-success');
            $(formMessages).addClass('cf-error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('An error occured and message could not be sent.');
            }
        });
    });

});
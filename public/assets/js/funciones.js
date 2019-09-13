var Biblioteca = function() {
    return {
        validacionGeneral: function(id, reglas, mensajes) {
            const formulario = $('#' + id);
            formulario.validate({
                rules: reglas,
                messages: mensajes,
                errorElement: 'span', //default imput error message container
                errorClass: 'help-block help-block-error', //default imput error message class
                focusInvalid: false, //do not focus the last invalid imput
                ignore: "", //validate all fields including form hidden imput
                highlight: function (element, errorClass, validClass) { //highlight error imputs
                    $(element).closest('.form-group').addClass('has-error'); //set error class to the control group
                },
                unhighlight: function (element) { //revert the change done by highlight
                    $(element).closest('.form-group').removeClass('has-error'); //set error class to the control group
                },
                success: function(label) {
                    label.closest('.form-group').removeClass('has-error'); //set success class to the control group
                },
                errorPlacement: function (error, element) {
                    if ($(element).is('select') && element.hasClass('bs-select')) { //PARA LOS SELECT BOOTSTRAP
                        error.insertAfter(element); //element.next().after(error);
                    } else if ($(element).is('select') && element.hasClass('select2-hidden-accessible')) {
                        element.next().after(error);
                    } else if (element.attr("data-error-container")) {
                        error.appendTo(element.attr("data-error-container"));
                    } else {
                        error.insertAfter(element); //default placement for everything else
                    }
                },
                invalidHandler: function (event, validate) {

                },
                submitHandler: function (form) {

                }
            });
        },
    }
}();
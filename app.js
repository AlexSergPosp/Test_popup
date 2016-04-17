/**
 * Created by apospelov on 17.04.16.
 */
main = function () {
    $('#main_button').click(function (event) {
        event.preventDefault();
        $("#blackout").fadeIn(400,
            function () {
                $("#popup_form").css('display', 'block')
                    .animate({opacity: 1, left: '50$'}, 200);
            });
    });
    $("#close_button, #blackout").click(function () {
        $('#popup_form')
            .animate({opacity: 0, left: '50%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#blackout').fadeOut(400);
                });
    });
    $('#submit_btn').click(function () {


        var isFail = false;
        var massage = '';

        message = validation(massage);
        if (message !== '') {
            isFail = true;
        }

        if (isFail) {
            $("#popup_form_fail").css('display', 'block')
                .animate({opacity: 1, left: '50$'}, 200);
            $('#popup_form')
                .animate({opacity: 0, left: '50%'}, 200,
                    function () {
                        $(this).css('display', 'none');
                    });
            $('#fail_Message').text(message);

        } else {
            $("#popup_form_yes").css('display', 'block')
                .animate({opacity: 1, left: '50$'}, 200);
            $('#popup_form')
                .animate({opacity: 0, left: '50%'}, 200,
                    function () {
                        $(this).css('display', 'none');
                    });
        }
    });
};

function validation() {
    var fio = $('#fio').val();
    var mobile = $('#mobile_number').val();
    var email = $('#email').val();

    if (fio === '' || mobile === '' || email === '') {
        isFail = true;
        message = "Заполните обязательные поля!";
        return message;
    }

    var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    var digits = mobile.replace(/\D/g, "");

    isFail = (digits.match(phoneRe) !== null);

    if (isFail === true) {
        message = 'Некорректный номер телефона !';
        return message;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    message = "Некорректный email!";
    if (!re.test(email)) {
        return message;
    }
    return '';
}
$(document).ready(main);
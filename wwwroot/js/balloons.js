var allChecked = false;

$(function(){

    randomAttentionSeaker()

    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    $('#submit').on('click', function (e) {
        e.preventDefault();
        if ($("#checkboxes input:checkbox:checked").length > 0)
        {
            // do what needs to be done
        }
        else
        {
            $('#toast').toast({ autohide: false }).toast('show');
        }
    })

    $('#check-all').on('click', function (e) {
        if (allChecked) {
            $("#checkboxes input:checkbox").each(function() {
                this.checked=false;
                $('#' + this.id + 'Img').css('visibility', 'visible')
                // animate balloon in/out based on checkbox
                $(this).is(':checked') ?
                $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
                $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
            });
            allChecked = false;
            $('#check-all').html("Check All");

        } else {
            $("#checkboxes input:checkbox").each(function() {
                this.checked=true;
                $('#' + this.id + 'Img').css('visibility', 'visible')
                // animate balloon in/out based on checkbox
                $(this).is(':checked') ?
                $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
                $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
            });
            allChecked = true;
            $('#check-all').html("Uncheck All");

        }
    })


    $('.form-check-label').mouseover(function() {
            $('#happybday').css("color", $(this).prop("for"));
    }).mouseout(function() {
        $('#happybday').css("color", "black");
  });
 
});

function randomAttentionSeaker() {
    var animations = [
        "bounce",
        "flash",
        "pulse",
        "rubberBand",
        "shakeX",
        "shakeY",
        "headShake",
        "swing",
        "tada",
        "wobble",
        "jello",
        "heartBeat"];

    animation = animations[Math.floor(Math.random() * animations.length)];

    $('#happybday').addClass("animate__animated animate__" + animation);

}
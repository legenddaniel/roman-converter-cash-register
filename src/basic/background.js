// Background animation switch
// Due to the browser prefix for animation, $.toggleClass() now working well

$('.eye').on('click', e => {
    const eyeRed = '<i class="fas fa-eye-slash text-danger"></i>';
    const eyeGreen = '<i class="far fa-eye text-success"></i>';

    if ($(e.currentTarget).html() === eyeGreen) {
        $(e.currentTarget).html(eyeRed);
        methodsAnimation.animationCtrl('.container-fluid', 'running');
    } else {
        $(e.currentTarget).html(eyeGreen);
        methodsAnimation.animationCtrl('.container-fluid', 'paused');
    }
});
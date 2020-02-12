// Background animation switch
// Due to the browser prefix for animation, jQuery toggleClass() now working well

{
    const eyeRed = '<i class="fas fa-eye-slash text-danger"></i>';
    const eyeGreen = '<i class="far fa-eye text-success"></i>';

    $('.eye').on('click', e => {
        const [icon, status] = $(e.currentTarget).html() === eyeGreen ? [eyeRed, 'running'] : [eyeGreen, 'paused'];

        $(e.currentTarget).html(icon);
        methodsAnimation.animationCtrl('.container-fluid', status);
    });
}

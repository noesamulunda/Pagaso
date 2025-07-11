 $(window).on('load', function () {
  // Executa o efeito a cada 5 segundos
    setInterval(() => {
        $('#whatsappBtn').addClass('zoom-rotate');
        setTimeout(() => {
        $('#whatsappBtn').removeClass('zoom-rotate');
        }, 800);
    }, 5000);

    // Também executa o efeito ao passar o mouse
    $('#whatsappBtn').on('mouseenter', function () {
        $(this).addClass('zoom-rotate');
        setTimeout(() => {
        $(this).removeClass('zoom-rotate');
        }, 800);
    });


   });

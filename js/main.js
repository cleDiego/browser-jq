
$(document).ready(function(){
    var hWindow = $(window).height();
    var hBarraSup = $("#barra_sup").height();
    var hBarraInf = $("#barra_inf").height();
    var hIframe = hWindow - hBarraSup - hBarraInf;
    $("#browser").height(hIframe);
    $("#browser").load("https://www.google.com/");
});



$(window).keydown(function(e) {
    return true;
    if(e.which == 116){
        e.preventDefault();
        e.stopPropagation();
    }
    
});

function alerts(type, msg, time) {
    $("#alerts").html(
        '<div class="alert alert-'+ type +' alert-dismissible fade show shadow2" role="alert">'
        +'<strong>'+ msg +'</strong> '
        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
        +'<span aria-hidden="true">&times;</span>'
        +'</button>'
        +'</div>'
    );
    setTimeout(function() {
        $(".alert").alert('close');
    }, time*1000);
}
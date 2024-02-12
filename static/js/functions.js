// Abrir modales
var $ = jQuery.noConflict()

function abrirmodalcreate(url) {
    $('#crear').load(url, function () {
        $(this).modal('show');
    });
}

function abrirmodaledit(url) {
    $('#editar').load(url, function () {
        $(this).modal('show');
    });
}

function abrirmodaldetail(url) {
    $('#detail').load(url, function () {
        $(this).modal('show');
    });
}

function abrirmodaldelete(url) {
    $('#delete').load(url, function () {
        $(this).modal('show');
    });
}



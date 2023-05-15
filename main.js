$(document).ready(function(){
    const form = $('form');

    form.on('submit', function(e){
        e.preventDefault();

        incluirLista();  
    })


    $('ul').click(function(){
        $(event.target).toggleClass('tracoLista')
    })


    function incluirLista (){
        const valorTarefa = $('#tarefa').val();
        const novaTarefa = $('<li style="display: none"></li>');

        $(`<p>${valorTarefa}</p>`)
        .appendTo(novaTarefa);

        console.log(novaTarefa)

        $(novaTarefa).appendTo('ul')
        $(novaTarefa).fadeIn();
        $('#tarefa').val('');
    };
})
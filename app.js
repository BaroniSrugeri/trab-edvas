document.getElementById('adicionar').addEventListener('click',
    function () {

        const itemSelecionado = document.getElementById('item').value;

        if (itemSelecionado) {
            const listalivros = document.getElementById('lista-livros');
            const novoItem = document.createElement('ul');
            novoItem.textContent = itemSelecionado;
            listalivros.appendChild(novoItem);
        }
    });


document.getElementById('adicionar-prod').addEventListener('click', function () {
    var novoTexto = document.getElementById('texto').value;
    if (novoTexto) {
        var select = document.getElementById('item');
        var novaOpcao = document.createElement('option');
        novaOpcao.text = novoTexto;
        novaOpcao.value = novoTexto.toLowerCase().replace(/\s+/g, '-');
        select.appendChild(novaOpcao);
        document.getElementById('texto').value = ''; 
    }
});



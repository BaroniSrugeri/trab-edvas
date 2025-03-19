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






document.getElementById('adicionar').addEventListener('click',
    function () {

        const itemSelecionado = document.getElementById('item').value;

        if (itemSelecionado) {
            const listalivros1 = document.getElementById('lista-livros1');
            const novoItem = document.createElement('ul1');
            novoItem.textContent = itemSelecionado;
            listalivros1.appendChild(novoItem);
        }
    });


document.getElementById('adicionar-prod1').addEventListener('click', function () {
    var novoTexto = document.getElementById('texto1').value;
    if (novoTexto) {
        var select = document.getElementById('item1');
        var novaOpcao = document.createElement('option');
        novaOpcao.text = novoTexto;
        novaOpcao.value = novoTexto.toLowerCase().replace(/\s+/g, '-');
        select.appendChild(novaOpcao);
        document.getElementById('texto').value = ''; 
    }
});







document.getElementById('adicionar').addEventListener('click',
    function () {

        const itemSelecionado = document.getElementById('item2').value;

        if (itemSelecionado) {
            const listalivros2 = document.getElementById('lista-livros2');
            const novoItem = document.createElement('ul2');
            novoItem.textContent = itemSelecionado;
            listalivros2.appendChild(novoItem);
        }
    });


document.getElementById('adicionar-prod2').addEventListener('click', function () {
    var novoTexto = document.getElementById('texto2').value;
    if (novoTexto) {
        var select = document.getElementById('item2');
        var novaOpcao = document.createElement('option');
        novaOpcao.text = novoTexto;
        novaOpcao.value = novoTexto.toLowerCase().replace(/\s+/g, '-');
        select.appendChild(novaOpcao);
        document.getElementById('texto2').value = ''; 
    }
});



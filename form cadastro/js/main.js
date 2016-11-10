(function(win, doc) {
    'use strict';
    //campos
    var $nome = doc.getElementById('nome');
    var $email = doc.getElementById('email');
    var $telefone = doc.getElementById('telefone');
    //botoes do formulario
    var $salvar = doc.getElementById('salvar');
    var $cancelar = doc.getElementById('cancelar');

    //tr's da tabela
    var $insertName = doc.querySelector('.insertName');
    var $insertEmail = doc.querySelector('.insertEmail');
    var $insertTelefone = doc.querySelector('.insertTelefone');

    //events
    //$nome.addEventListener('input', callback);
    //$email.addEventListener('input', callback);
    //$telefone.addEventListener('input', callback);
    //botao
    $salvar.addEventListener('click', callback);



    function callback() {
        var resultName = $nome.value.trim();
        var resultEmail = $email.value.trim();
        var resultTelefone = $telefone.value.trim();


        //$cancelar.addEventListener('input', callback);

        function criaObjetoNomes() {
            var informacoes = {
                "name": resultName,
                "telefone": resultEmail,
                "email": resultTelefone
            };

            console.log(informacoes);

            $insertName.append(informacoes.name);
            $insertEmail.append(informacoes.telefone);
            $insertTelefone.append(informacoes.email);

        }

        criaObjetoNomes();


        function requestFormulario() {
            var informacoes = {
                "name": resultName,
                "telefone": resultEmail,
                "email": resultTelefone
            };

            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:3000/js/main.js', true);
            xhr.send();

            xhr.addEventListener('readystatechange', rest);
            var response = JSON.parse(xhr.responseText);

            function rest() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var $insertName = doc.querySelector('.insertName');
                    var $insertEmail = doc.querySelector('.insertEmail');
                    var $insertTelefone = doc.querySelector('.insertTelefone');

                    $insertName.append(informacoes.name);
                    $insertEmail.append(informacoes.telefone);
                    $insertTelefone.append(informacoes.email);
                }
            }
        }

        requestFormulario();



    }



})(window, document);

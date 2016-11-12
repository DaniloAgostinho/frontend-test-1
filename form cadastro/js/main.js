(function(win, doc) {
    'use strict';
    //campos
    var $nome = doc.getElementById('nome');
    var $email = doc.getElementById('email');
    var $telefone = doc.getElementById('telefone');
    var $inputs = doc.querySelectorAll('input');

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
    $salvar.addEventListener('click', requestFormulario);
    $cancelar.addEventListener('click', resetFormulario);



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

    }

    function requestFormulario() {
        var informacoes = {
            "name": resultName,
            "telefone": resultEmail,
            "email": resultTelefone
        };

        // Old compatibility code, no longer needed.
        if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE 6 and older
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.open('GET', '/', true);
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

    function resetFormulario() {
      $inputs.value = '';
    }



})(window, document);

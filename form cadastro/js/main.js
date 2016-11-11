(function(win, doc) {
    'use strict';
    //campos
    var $nome = doc.getElementById('nome');
    var $email = doc.getElementById('email');
    var $telefone = doc.getElementById('telefone');

    function mascara(o, f) {
        v_obj = o
        v_fun = f
        setTimeout("execmascara()", 1)
    }

    function execmascara() {
        v_obj.value = v_fun(v_obj.value)
    }

    function soLetras(v) {
        return v.replace(/\d/g, "") //Remove tudo o que não é Letra
    }

    function soLetrasMA(v) {
        v = v.toUpperCase() //Maiúsculas
        return v.replace(/\d/g, "") //Remove tudo o que não é Letra ->maiusculas
    }

    function soLetrasMI(v) {
        v = v.toLowerCase() //Minusculas
        return v.replace(/\d/g, "") //Remove tudo o que não é Letra ->minusculas
    }

    function soNumeros(v) {
        return v.replace(/\D/g, "") //Remove tudo o que não é dígito
    }

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

        var xhr = new XMLHttpRequest();
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

    //validação
    $("#validacao").validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, informe seu nome!",
                minlength: "O nome deve ter pelo menos 3 caracteres"
            },
            telefone: {
                required: "Este aceita apenas digitos"
            },
            email: {
                required: "Informe um email válido: tente usar o @"
            }
        }
    });



})(window, document);

(function(win, doc) {
    $nome = doc.getElementById('nome');
    $telefone = doc.getElementById('telefone');
    $email = doc.getElementById('email');
    $salvar = doc.getElementById('salvar');





    $salvar.addEventListener('click', callback);

    function callback( event ) {
      //event.preventDefault();

        function adicionaContatosLocalStorage() {

            var filtroNome = $nome.value.trim();
            var filtroTelefone = $telefone.value.trim();
            var filtroEmail = $email.value.trim();

              //cria o array com os dados Digitados pelo usuário
              var dadosDigitados = {
                  nome: filtroNome,
                  telefone: filtroTelefone,
                  email: filtroEmail
              };
              //converte array para String
              var stringDados = JSON.stringify(dadosDigitados);
              //adicionar o array de Dados criado ao localStorage
              localStorage.setItem("cadastro", stringDados);
              //recupera os dados do localStorage
              var dadosRecuperadosLocalStorage = localStorage.getItem("cadastro");
              //parsea os Dados para o formato JSON
              var parseaDadosRecuperados = JSON.parse(dadosRecuperadosLocalStorage);
              //mostra os dados recuperados
              var nomeRecuperado = parseaDadosRecuperados['nome'];
              var telefoneRecuperado = parseaDadosRecuperados['telefone'];
              var emailRecuperado = parseaDadosRecuperados['email'];

              doc.getElementById('showNome').innerHTML = nomeRecuperado;
              doc.getElementById('showTelefone').innerHTML = telefoneRecuperado;
              doc.getElementById('showEmail').innerHTML = emailRecuperado;


        };//add contanto

        adicionaContatosLocalStorage();
    }



    //$nome.addEventListener('input', filtro);
    //$telefone.addEventListener('input', filtro);
    //$email.addEventListener('input', filtro);





})(window, document);

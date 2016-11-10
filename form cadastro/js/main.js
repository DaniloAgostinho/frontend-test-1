(function (win, doc) {
  'use strict';

   var $nome = doc.getElementById('nome');
   var $email = doc.getElementById('email');
   var $telefone = doc.getElementById('telefone');


   $nome.addEventListener('input', callback);
   $email.addEventListener('input', callback);
   $telefone.addEventListener('keypress', validaForm);


   function callback() {
     var resultName = $nome.value.trim();
     var resultEmail = $email.value.trim();
     var resultTelefone = $telefone.value.trim();
   }

   function validaForm(e) {
     var expressao = /[0-9]/;
     console.log(expressao);
   }


})(window, document);

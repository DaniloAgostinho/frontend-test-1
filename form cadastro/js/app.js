angular.module("cadastro", []);//cria o modulo
angular.module("cadastro").controller("cadastroCtrl");//define o controller

var app = angular.module("listaTelefonica", []);
app.controller("listaTelefonicaCtrl", function($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [{
        nome: "Danilo",
        telefone: "98898878",
        email: "daniloagostinhosilva@gmail.com"
    }];
    $scope.operadoras = [{
        nome: "Oi",
        codigo: "14"
    }, {
        nome: "Vivo",
        codigo: "15"
    }, {
        nome: "Tim",
        codigo: "41"
    }];
    $scope.adicionarContato = function(contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function(contatos) {
        $scope.contatos = contatos.filter(function(contato) {
            if (!contato.selecionado) return contato;
        });
    };

});

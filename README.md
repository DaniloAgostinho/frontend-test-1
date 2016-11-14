# Documentação - Teste Front-end - Amil

## Informações sobre o candidato


- nome: Danilo Agostinhoemail: 
- danilodev.silva@gmail.comtwitter: 
- @danilodevgithub: DaniloAgostinho


# Rodando o projeto

Você precisara do **npm** para instalar as Dependência, caso não o possua em sua máquina, você precisa baixar e instalar o **nodejs**, acesse o link: [ofcial](https://nodejs.org/en/).

1. Faça um Fork deste projeto

  ```
  https://github.com/DaniloAgostinho/frontend-test-1.git
  ```

2. Entre no Diretorio do projeto

  ```
  cd /frontend-test
  ```

3. Instale as Dependências rodando

  ```
  npm install
  ```

**PROBLEMAS DE PERMISSÃO**

Caso esteja utilizando sistemas Unix ou similares, rode o seguinte comando:

```
sudo npm install
```

## Diretorio de arquivos

```
frontend-test-1 (dir)
  |_ GruntFile
  |_ packge.json
  |_ primeiro-desafio.md
  |_ segundo-desafio.md
  |_ src(dir)
     |_ js (dir)
        | _ _ main.js
     |_ sass (dir)
        | _ _ style.scss
  |_ build (dir)
     |_ css (dir)
        | _ _ style.min.css
     |_ js (dir)
           | _ _ main.min.js
```

## Grunt

Este projeto utiliza **Gruntjs**, você precisa te-ô instalado globalmente rode o comando:

```
npm install -g grunt-cli
```

### Plugins usados

- (grunt-contrib-uglify) Minifica os scripts
- (grunt-contrib-sass) Converte/minifica as folhas de estilo
- (grunt-contrib-watch) Assisti a mudanças nos arquivos
- (grunt-contrib-clean) Limpa a pasta **build**

### Tarefas

Minifica os arquivos **JavaScript** e **Css** e cria a pasta **build** com os arquivos de produção.

```
grunt prod
```

Limpa a pasta a pasta build

```
grunt c
```

## Testeando o projeto em vários Dispositivos

Em na pasta buil do projeto:

```
cd build/
```

Depois rode o seguinte:

```
browser-sync start --server --files "index.html", "css/*min.css", "js/*.min.js"
```

_Obrigado!_

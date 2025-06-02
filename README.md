# 🧠 CRUD Node.js

## 📌 O que é Node.js?

O **Node.js** é um interpretador de JavaScript que roda no **servidor**, ou seja, ele permite que o JavaScript seja executado **fora do navegador**. É baseado no motor V8 do Google Chrome.

---

## ⚙️ Características do Node.js

- **Single-thread**: executa uma tarefa por vez.
- **Assíncrono**: não espera uma tarefa terminar para iniciar outra.
- **Não bloqueante**: uma tarefa não bloqueia a execução de outra.
- **Orientado a eventos**: executa tarefas quando eventos acontecem.

> 💡 **Analogia**: Imagine o Node.js como um garçom que anota pedidos, entrega na cozinha, e enquanto espera, continua atendendo outros clientes. Quando o pedido estiver pronto, ele entrega.

---

## ✅ Vantagens do Node.js

- 🚀 Alta performance (graças ao V8)
- 🧠 Ótimo gerenciamento de memória
- 🔄 Integração fácil com o front-end (JavaScript dos dois lados)
- 💬 Ideal para aplicações **em tempo real** (chats, jogos, etc)
- 🌍 Forte presença no mercado de desenvolvimento

---

## 📦 Módulos do node.js

- O node.js possui um conjunto de módulos nativos que podem ser utilizados em qualquer aplicação.
- Podemos criar nossos próprios módulos e importá-los em nossas aplicações.
- Para utilizar um módulo, basta utilizar a função `require()` passando o nome do módulo como parâmetro.
- Exemplo de importação de um módulo nativo: `const path = require('path')`
- Exemplo de importação de um módulo criado por nós: `const meuModulo = require('./meuModulo')`

---

## 📁 NPM - Node Package Manager

- O NPM é um gerenciador de pacotes do node.js
- Funcionando semelhando ao pip do python, o NPM permite que instalemos pacotes de terceiros em nossas aplicações.
- Para instalar um pacote, basta executar o comando `npm install nome_do_pacote`
- Para desinstalar um pacote, basta executar o comando `npm uninstall nome_do_pacote`
- Para instalar um pacote globalmente, basta executar o comando `npm install -g nome_do_pacote`
- Para desinstalar um pacote globalmente, basta executar o comando `npm uninstall -g nome_do_pacote`
- Para instalar um pacote como dependência de desenvolvimento, basta executar o comando `npm install --save-dev nome_do_pacote`
- Para desinstalar um pacote como dependência de desenvolvimento, basta executar o comando `npm uninstall --save-dev nome_do_pacote`
- Para instalar um pacote como dependência de produção, basta executar o comando `npm install --save nome_do_pacote`
- Para desinstalar um pacote como dependência de produção, basta executar o comando `npm uninstall --save nome_do_pacote`
- Para instalar todas as dependências de um projeto, basta executar o comando `npm install`
- Todos os pacotes instalados ficam armazenados na pasta `node_modules`
- Um arquivo chamado `package.json` é criado para armazenar as informações do projeto e as dependências instaladas. (como o arquivo `requirements.txt` do python)
- Porém, além de conter as informações do projeto, o arquivo `package.json` também contém scripts que podemos configurar e executar através do comando: `npm run nome_do_script`
- Para inicializar um projeto node.js basta executar os comandos:

## 🚀 Alguns módulos externos importantes

![Express](https://img.shields.io/badge/EX-Express.js-303030?style=for-the-badge&logo=express)
  
Framework para desenvolvimento de aplicações web e API's Rest (semelhante ao FastAPI do python)

![Nodemon](https://img.shields.io/badge/Nodemon-303030?style=for-the-badge&logo=nodemon&logoColor=green)

Monitora as alterações no código e reinicia o servidor automaticamente

![Mongoose](https://img.shields.io/badge/Mongoose-303030?style=for-the-badge&logo=mongoose&logoColor=red)

Biblioteca para modelagem de dados do MongoDB


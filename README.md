Descrição do Projeto – Checkpoint 5: Access Control

O projeto Access Control CP5 foi desenvolvido como parte da avaliação da disciplina de Front-End, com o objetivo de colocar em prática os conceitos de autenticação de usuários, manipulação de formulários e integração com o json-server, utilizando as tecnologias Vite, React e TypeScript.

A aplicação tem como foco a criação de um sistema simples de login e cadastro de usuários. Nela, o usuário pode se registrar e depois realizar o login, com todas as validações feitas por meio do React Hook Form. Também foram aplicadas boas práticas de organização do código, controle de estado, exibição de mensagens de erro e versionamento contínuo do projeto.

Objetivos do projeto

Criar páginas de login e cadastro com validação dos campos obrigatórios.

Exibir mensagens de erro personalizadas para orientar o usuário.

Verificar duplicidade de nome de usuário e e-mail antes do cadastro.

Implementar uma autenticação simulada com armazenamento de dados no localStorage ou sessionStorage.

Exibir o nome e o e-mail do usuário autenticado em todas as páginas da aplicação.

Aplicar estilização e responsividade com Tailwind CSS.

Versionar o código com commits descritivos e padronizados (feat:, fix:, enhancement:).

Tecnologias utilizadas

Vite + React + TypeScript

React Hook Form

Tailwind CSS

json-server

LocalStorage / SessionStorage

Estrutura do endpoint
O projeto utiliza um endpoint chamado “usuarios”, responsável por armazenar as informações dos cadastros, seguindo a estrutura abaixo:

{
  "id": 1,
  "nome": "Exemplo",
  "nomeUsuario": "exemplo123",
  "email": "exemplo@email.com"
}


Conclusão
O desenvolvimento deste projeto contribuiu para o aprimoramento das habilidades em React, especialmente no uso de formulários com validação e integração com um servidor simulado. Também reforçou a importância de um bom versionamento e da utilização de ferramentas modernas para o desenvolvimento front-end.

Integrantes do grupo

Nome do aluno 1 – RM XXXXX

Nome do aluno 2 – RM XXXXX

Nome do aluno 3 – RM XXXXX
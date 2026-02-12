📚 Catálogo de Livros

Aplicação desenvolvida em React + TypeScript para cadastro e gerenciamento de livros.

O projeto permite:

Adicionar livros
Marcar como lido / não lido
Remover livros
Persistir dados usando API (CrudCrud)

Tecnologias utilizadas
React
TypeScript
Axios
CSS Modules
CrudCrud (API REST temporária)

📂 Estrutura do Projeto
src/
 ├── components/
 │     ├── BookForm.tsx
 │     ├── BookList.tsx
 │     └── BookItem.tsx
 │
 ├── API_REST/
 │     └── servicos.ts
 │
 ├── Types/
 │     └── Books.ts
 │
 └── App.tsx

Funcionalidades

Adicionar Livro
Preencha título, autor, descrição e informe se já foi lido.

Marcar como Lido
Utiliza um toggle (switch) para alterar o status do livro.

Remover Livro
Exclui o livro da API e atualiza a interface automaticamente.

API
A aplicação utiliza o serviço CrudCrud para simular uma API REST.

As operações realizadas são:

GET – listar livros
POST – criar livro
PUT – atualizar livro
DELETE – remover livro

▶ Como executar o projeto

Clone o repositório:
git clone <url-do-repositorio>

Instale as dependências:
npm install

Execute o projeto:
npm run dev

🎯 Objetivo

Projeto desenvolvido como exercício prático para fixar conceitos de:
Componentização em React
Tipagem com TypeScript
Manipulação de estado
Consumo de API REST
Organização em camadas (components, services, types)

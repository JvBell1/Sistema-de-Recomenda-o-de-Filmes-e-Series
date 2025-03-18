---
description: Interface do usuário
---

# Front-end (React)

* Interface do usuário (telas de login, busca, recomendações, etc.).
* Consome APIs do back-end para buscar e exibir dados.

#### **Objetivo**

O front-end é a interface do usuário, onde os usuários interagem com o sistema. Ele consome APIs do back-end para buscar e exibir dados, como filmes recomendados, resultados de busca e detalhes de filmes.



#### **Tecnologias Usadas**

1. **React**: Biblioteca JavaScript para construir interfaces de usuário.
2. **React Router**: Para gerenciar rotas e navegação entre páginas.
3. **Axios**: Para fazer requisições HTTP ao back-end.
4. **Bootstrap ou Material-UI**: Para estilização e componentes prontos.



#### **Funcionalidades Principais**

1. **Página de Login/Cadastro**:
   * Formulário para cadastro e login de usuários.
   * Validação básica de campos (ex: email válido, senha forte).
   * Requisições POST para o back-end para autenticação.
2. **Página de Busca de Filmes**:
   * Barra de busca para pesquisar filmes por título, gênero, etc.
   * Exibição dos resultados em uma lista ou grid.
   * Requisições GET para o back-end para buscar filmes no banco de dados.
3. **Página de Recomendações**:
   * Exibe filmes recomendados com base no histórico do usuário.
   * Requisições GET para o back-end para obter as recomendações.
   * Opção de avaliar filmes diretamente na lista de recomendações.
4. **Página de Detalhes do Filme**:
   * Exibe informações detalhadas sobre um filme (título, ano, gênero, sinopse, avaliação média).
   * Permite ao usuário avaliar o filme (1 a 5 estrelas).
   * Requisições POST para o back-end para enviar avaliações.
5. **Navbar (Barra de Navegação)**:
   * Links para as páginas principais (Home, Busca, Recomendações).
   * Botão de logout (se o usuário estiver logado)

Ideia de organização de Pastas

```
/frontend
├── /public
│   └── index.html
├── /src
│   ├── /components
│   │   ├── Navbar.js
│   │   ├── MovieCard.js
│   │   ├── SearchBar.js
│   │   └── RatingStars.js
│   ├── /pages
│   │   ├── Login.js
│   │   ├── Home.js
│   │   ├── MovieDetails.js
│   │   └── Recommendations.js
│   ├── /services
│   │   └── api.js (Axios config)
│   ├── App.js
│   └── index.js
└── package.json
```

#### **Resumo do Front-end**

* Estruturas de dados são usadas de forma **básica**.
* Foco em **renderização eficiente** e **organização de dados**.
* Nada muito complexo, porque o front-end é mais sobre interface e experiência do usuário.

#### **Próximos Passos**

1. **Definir as telas**: Use ferramentas como [Figma](https://www.figma.com/) ou [Whimsical](https://whimsical.com/) para criar wireframes.
2. **Implementar os componentes**: Comece pelos componentes básicos (Navbar, MovieCard, SearchBar).
3. **Integrar com o back-end**: Use Axios para consumir as APIs e exibir os dados.



\


\

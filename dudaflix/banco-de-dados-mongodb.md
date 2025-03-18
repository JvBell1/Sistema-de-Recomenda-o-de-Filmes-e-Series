---
description: >-
  Fornece dados para o back-end processar e Armazena dados de usuários, filmes e
  avaliações.
---

# Banco de Dados (MongoDB)

#### **Objetivo**

O banco de dados é responsável por armazenar todos os dados do sistema, como informações de usuários, filmes e avaliações. Ele fornece os dados para o back-end processar e retornar ao front-end.



#### **Tecnologias Usadas**

1. **MongoDB**: Banco de dados NoSQL, ideal para armazenar dados não estruturados ou semi-estruturados.
2. **Mongoose**: Biblioteca para Node.js que facilita a interação com o MongoDB, permitindo a definição de schemas e modelos.

***

#### **Estrutura do Banco de Dados**

O banco de dados terá três coleções principais:

1. **Usuários**: Armazena dados dos usuários.
2. **Filmes**: Armazena detalhes dos filmes.
3. **Avaliações**: Armazena as avaliações dos usuários.

#### **Coleções e Schemas**

**1. Coleção: Usuários (Users)**

Armazena informações dos usuários, como nome, email, senha e histórico de filmes assistidos.

**Campos**:

* `name`: Nome do usuário.
* `email`: Email do usuário (único).
* `password`: Senha do usuário (deve ser criptografada antes de salvar).
* `watchedMovies`: Lista de IDs dos filmes assistidos pelo usuário (referência à coleção `Movie`).

**2. Coleção: Filmes (Movies)**

Armazena detalhes dos filmes, como título, ano, gênero e avaliação média.

**Campos**:

* `title`: Título do filme.
* `year`: Ano de lançamento do filme.
* `genre`: Gênero do filme (ex: Sci-Fi, Action).
* `rating`: Avaliação média do filme (calculada com base nas avaliações dos usuários).

**3. Coleção: Avaliações (Ratings)**

Armazena as avaliações dos usuários para os filmes.

**Campos**:

* `userId`: ID do usuário que fez a avaliação (referência à coleção `User`).
* `movieId`: ID do filme avaliado (referência à coleção `Movie`).
* `rating`: Nota dada pelo usuário (de 1 a 5).

#### **Estruturas de Dados no Banco de Dados**

No banco de dados, as estruturas de dados são usadas de forma **indireta**, principalmente através de **índices** e **agregações**. Aqui estão os principais exemplos:



**Índices (Tabelas Hash)**:

* Para acelerar buscas por filmes ou usuários.

**Referências (Grafos)**:

* Para representar relações entre usuários e filmes.

#### **Resumo do Banco de Dados**

* Estruturas de dados são usadas de forma **indireta**.
* Foco em **armazenamento eficiente** e **consultas rápidas**.
* Deixo o MongoDB cuidar da complexidade (índices, agregações)

#### **Próximos Passos**

* Fazer testes para verificar a Consistencia do projeto

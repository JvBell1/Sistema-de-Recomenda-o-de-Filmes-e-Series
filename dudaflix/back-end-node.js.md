# Back-end (Node.js)



O back-end é o coração do sistema, onde a lógica de negócio e os algoritmos de recomendação são implementados. Ele faz a ponte entre o front-end e o banco de dados, processando requisições, aplicando regras de negócio e retornando os dados necessários.

* Lógica de negócio (cadastro, login, busca, recomendação).
* Implementação dos algoritmos de estrutura de dados&#x20;
  * Grafos, tabelas hash e listas são as estrelas aqui.
* Comunicação com o banco de dados.

#### **Tecnologias Usadas**

1. **Node.js**: Ambiente de execução JavaScript no servidor.
2. **Express**: Framework para criar APIs RESTful.
3. **Mongoose**: Biblioteca para interagir com o MongoDB.
4. **JWT (JSON Web Tokens)**: Para autenticação de usuários.
5. **CORS**: Para permitir requisições do front-end.
6. **Nodemon**: Para reiniciar o servidor automaticamente durante o desenvolvimento.

#### **Funcionalidades Principais**

1. **Autenticação**:
   * Cadastro e login de usuários.
   * Geração de tokens JWT para autenticação.
2. **Busca de Filmes**:
   * Consulta ao banco de dados para buscar filmes por título, gênero, etc.
   * Retorna os resultados para o front-end.
3. **Sistema de Recomendação**:
   * Implementa algoritmos de recomendação (filtragem colaborativa, filtragem baseada em conteúdo).
   * Retorna uma lista de filmes recomendados para o usuário.
4. **Avaliação de Filmes**:
   * Permite ao usuário avaliar filmes (1 a 5 estrelas).
   * Atualiza o banco de dados com as avaliações e recalcula as recomendações

Ideia de Organização de Pastas

```
/backend
├── /models
│   ├── User.js
│   ├── Movie.js
│   └── Rating.js
├── /controllers
│   ├── authController.js
│   ├── movieController.js
│   └── recommendationController.js
├── /routes
│   ├── authRoutes.js
│   ├── movieRoutes.js
│   └── recommendationRoutes.js
├── /services
│   └── recommendationService.js
├── /middleware
│   └── authMiddleware.js
├── app.js
└── server.js
```



#### **Estruturas de Dados no Back-end**

No back-end, as estruturas de dados são usadas de forma **avançada**, principalmente para **processamento de dados** e **implementação de algoritmos**. Aqui estão os principais exemplos:

1. **Grafos**:
   * Para representar relações entre usuários e filmes.
   * Uso: Implementar **filtragem colaborativa** (recomendar filmes com base em usuários similares).
2. **Tabelas Hash**:
   * Para busca rápida de filmes ou usuários.
   * Uso: Buscar detalhes de um filme ou usuário em tempo constante (O(1)).
3. **Listas (Arrays)**:
   * Para armazenar históricos de visualização ou avaliações.
   * Uso: Gerar recomendações com base no histórico do usuário
4. **Árvores**:
   * Para organizar dados hierarquicamente (ex: filmes por gênero ou ano
   * Uso: Facilitar buscas e filtros por gênero ou categoria.
5. **Filas**:
   * Para gerenciar processamento assíncrono de recomendações.
   * Uso: Processar solicitações de recomendação em lote.

#### **Próximos Passos**

1. **Implementar os modelos**: Defina os schemas no MongoDB para usuários, filmes e avaliações.
2. **Criar os controllers**: Implemente a lógica de negócio para autenticação, busca e recomendação.
3. **Configurar as rotas**: Defina as rotas da API e integre com os controllers.
4. **Testar as APIs**: Use ferramentas como Postman para testar as requisições.

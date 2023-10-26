#  ⚽🏆 Trybe Futebol Clube 

### 💻 Sobre o projeto
Foi construido nesse projeto um back-end dockerizado utilizando modelagem de dados através do Sequelize. As implementações seguiram rigorosamente as regras de negócio providas no projeto, e a API desenvolvida é capaz de ser consumida por um front-end já provido neste projeto.

Para adicionar uma partida, é necessário ter um token, garantindo que a pessoa esteja logada para fazer as alterações. Foi estabelecido um relacionamento entre as tabelas "teams" e "matches" para facilitar a atualização das partidas.
<br>

### 🏗️ Estrutura do Projeto

O projeto é composto por quatro entidades principais:

<details>
<summary>Banco de Dados</summary>

- Foi utilizado um container Docker MySQL, configurado no docker-compose através do serviço "db".
- Esse banco de dados fornece dados para o serviço de backend.
</details>

<details>
<summary>Back-end</summary>

- O ambiente onde desenvolvi a maior parte das implementações.
- O back-end roda na porta 3001, conforme necessário para que o front-end faça requisições a ele.
- A aplicação é inicializada a partir do arquivo "app/backend/src/server.ts".
- Garantindo que o Express seja executado e a aplicação ouça a porta que vem das variáveis de ambiente.
- Todas as dependências extras, como Joi, Boom, express-async-errors, foram listadas em "app/backend/packages.npm".
</details>

<details>
<summary>Front-end</summary>

- O front-end já estava concluído, sem a necessidade de realizar modificações.
- O front-end se comunica com o serviço de back-end pela URL http://localhost:3001/ através dos endpoints que desenvolvi.
</details>

<details>
<summary>Docker</summary>

- O docker-compose tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando npm run compose:up.
- Está configurado  as Dockerfiles nas raízes do front-end e back-end para inicializar a aplicação.
</details>


### 💡 Orietações
Este projeto utiliza contêineres Docker para gerenciar o ambiente de desenvolvimento. Isso facilita a configuração do ambiente e garante a consistência entre diferentes sistemas. Certifique-se de ter o Docker instalado em seu sistema antes de prosseguir.

- 🐳 Docker

```bash
# para executar a aplicação na sua máquina local
npm run compose:up
```

### 🤗 Minhas Contribuições

<details>
 <summary>Neste projeto, minhas contribuições incluem:</summary>

#### 🌐 Teams (Times):

- Criei uma migration e um model para a tabela de times em `/app/backend/src/database`.
- Implementei o endpoint `/teams` no back-end para retornar todos os times corretamente, sendo uma `rota GET`.
- Implementei um endpoint `teams/:id` no back-end de forma que ele possa retornar dados de um time específico, sendo uma `rota GET`.

#### 👤 Users e Login (Pessoas Usuárias e Credenciais de acesso):

- Desenvolvi uma migration e um model para a tabela de pessoas usuárias em `/app/backend/src/database`.
- Implementei o endpoint `/login` no back-end, permitindo o acesso com dados válidos no front-end. Sendo uma `rota POST`.

#### ➡️ Matches (Partidas):

- Desenvolvi uma migration e um model para a tabela de partidas em `/app/backend/src/database`.
- Implementei o endpoint `/matches` no back-end, garantindo que os dados apareçam corretamente na tela de partidas no front-end. Sendo uma `rota GET`.
- Aprimorei o endpoint `/matches` de forma que seja possível filtrar somente as partidas em andamento e também filtrar somente as partidas finalizadas na tela de partidas do front-end.
- Desenvolvi o endpoint `/matches/:id/finish` para permitir a finalização de uma partida no banco de dados. sendo uma `rota PATCH`.
- Implementei o endpoint `/matches/:id` de forma que seja possível atualizar partidas em andamento no banco de dados. Sendo uma `rota PATCH`.
- Criei o endpoint `/matches` para possibilitar o cadastro de uma nova partida em andamento no banco de dados. Sendo uma `rota POST`.
- Garanti que o endpoint `/matches` não permita a inserção de uma partida com times iguais ou com um time que não existe na tabela de times.

#### 🏆 Leaderboards (Placares):

`Endpoint /leaderboard/home:`

- Desenvolvi o endpoint /leaderboard/home de forma que retorne as informações do desempenho dos times da casa com as seguintes propriedades: name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor e goalsOwn.
- O endpoint é do tipo GET.
- Garanti que ao fazer a requisição ao endpoint /leaderboard/home, os campos e valores corretos são retornados, considerando os dados iniciais do banco de dados.

`Filtragem de Classificações:`

- Aprimorei o endpoint /leaderboard/home de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior.
- O endpoint é do tipo GET.
- Garanti que ao fazer a requisição ao endpoint /leaderboard/home, os campos e valores corretos são retornados, considerando os dados iniciais do banco de dados.

`Atualização da Tabela:`

- Desenvolvi o endpoint /leaderboard/home de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional.
- Garanti que após acrescentar a partida Corinthians 2 X 1 Internacional e fazer a requisição ao endpoint /leaderboard/home, os campos e valores corretos são retornados.

#### 🧪 Testes de Cobertura:

- Desenvolvi testes de cobertura que cobrem no mínimo 45 por cento dos arquivos em `/app/backend/src`, com um mínimo de 70 linhas cobertas.

Essas contribuições representam minha parcela de trabalho neste projeto. Obrigada por conferir o projeto! 🥇🥅⚽
<br>
</details>

### 🙋‍♀️  Autor

- [@helmatrindade](https://github.com/helmatrindade)

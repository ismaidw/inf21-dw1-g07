# Mysql

## Inicialização
Começamos por instalar my sql(workbench) no computador e em seguida instalamos o servidor;

### Criação do schema 
Depois criamos um schema novo no servidor que acabamos de criar com o nome de filmes_tab e clicamos em apply.

#### Criação da base de dados
Depois da nova base de dados estar criada no nosso schema em tables, criamos uma nova com o nome de filmes.

##### Criação das tabelas
Começamos por criar a primeira coluna com o nome de filme_id com um datatype de INT, PK(primary key) e NN(not null) 
Depois criamos a segunda coluna com o nome de title, com um datatype de VARCHAR(70), ou seja um campo que pode conter letras e números até 70 caracteres, tambem NN
De seguida criamos outra coluna com o nome de release_year e com um datatype de INT.
Criamos outra coluna com o nome de language, com um datatype de VARCHAR(45)
Criamos outra coluna com o nome de length,com um datatype de INT
Criamos outra coluna com o nome de rating, com um datatype DOUBLE(valores não inteiros).
Preenchemos as tabelas criadas com o exemplo de 30 filmes e conectamos esta database com a nossa api
O script de criação e inserção estão dentro do ficheiro sql_scripts

## API
Para a API utilizamos os packages node express, SwaggerUI e o Mysql2. 
Criamos a rota de filmes com os seguintes endpoints:
/filmes - Get para listar todos os filmes
/filmes/:id_filme - Get recebendo o id do filme como parâmetro para listar um filme especifico
/filmes - Post recebendo um filme no body para inserir um novo filme
/filmes - Put recebendo um filme no body para atualizar um novo filme
/filmes/:id_filme - Delete recebendo o id do filme como parâmetro para deletar um filme especifico
Criamos uma rota para a documentação da api:
/api-docs - Acesso ao swagger da api
As configurações de conexão a base de dados estão definidas no arquivo mysql.js


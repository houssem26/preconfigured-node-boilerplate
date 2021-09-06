# Pre configured Rest API with express.js
# configured: Models, Database migrations, test environment, schema validation, Swagger Documentation
workflow / category API

tech stack used:

- backend Framework: Express.js
- database: Postgres
- ORM: Objection.js
- Query Builder: knex
- Migrations: knex
- validations: Joi, celebrate
- documentation: swagger
- testing stack: Jest, supertest

prerequisites
to get the API up and running you need:
  - have postgres server working on port 5432
  - create database user
    - user: postgres
    - password: root
  - create a database named db for development
  - create a database named test for testing
  - install knex globally : npm install -g knex
  - install jest globally: npm install -g jest
  
 
then go in the project path and run : npm install
to create database : navigate to the project root path ( where you find knexfile ) and type :
  npm run migrate
  
to drop database : navigate to the project root path ( where you find knexfile ) and type :
  npm run dbrolback

to run unit tests: 

npm run test 
( this will create test tables in test db , use them and then drop them when tests are finished) 

to start the app hit: 

npm start

the documentation is founf under the apiDocs folder.

NB: to post workflows you must specify an array of categories otherwise it won't be created

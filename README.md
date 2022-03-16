# Node JS Rest API (with Express and Postgres)

1. After cloning the repo, run `npm i`

2. You'll need to have postgres setup on your machine. Here are the instructions for MacOS
- Please note: If you copy & paste the `CREATE ROLE` command from the page below, make sure to retype the single quotes or else you'll get an error in regards to command being invalid / not found.
- https://www.sqlshack.com/setting-up-a-postgresql-database-on-mac/

3. Within your local copy of this repo, you'll need to add an `.env` file with the following contents:
- Depending on your specific postgres setup, you may need to change the below values:
```
PORT=9999
DATABASE=postgres
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
```

4. After postgres is setup, start the service
`brew services start postgres`

5. Now you can start the app via:
`npm start`
- When the app starts, there will be seed data for `Users` and `Messages` added to the database 

6. To stop the postgres service, you can run:
`brew services stop postgres`

Resources for troubleshooting setup issues on MacOS:
- https://stackoverflow.com/questions/46781471/why-postgresql-on-mac-asks-me-for-password-after-fresh-install
- https://stackoverflow.com/questions/15301826/psql-fatal-role-postgres-does-not-exist
- PGAdmin 4 Documentation: https://www.pgadmin.org/docs/pgadmin4/development/index.html
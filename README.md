# RS Lang

## Backend

Use https://github.com/Manofsky/rslang-be as a backend.
There is a description of the steps to get started.

- You will need to deploy the backend yourself to demonstrate the working application.
- During the implementation of an application, you may run the backend in any environment that is convenient for you, for example, a local machine:

  1. install and run MongoDB server
  2. install MongoDBCompass
  3. using MongoDBCompass create a learnwords database
  4. using MongoDBCompass import src\words\words.json (from backend) to learnwords database
  5. create a file `.env` in the root of the application
  6. in the created file, specify the environment variables:

  ```
  PORT=3001
  MONGO_CONNECTION_STRING='mongodb://localhost:27017/learnwords'
  JWT_SECRET_KEY='secret key'
  JWT_REFRESH_SECRET_KEY='refresh secret key'
  ```

  7. `npm install`
  8. `npm run start`

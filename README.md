### Code sample for building well architectured StoredProcedure for DocumentDB with Typescript and SystemJs.

This repository is a sample of what is presented in this [blog post](http://benoitpatra.com/2016/07/09/programming-well-structured-javascript-stored-procedures-for-documentdb-with-typescript-and-systemjs/)

How to generate stored procedure in this sample.

- Make sure Node.js is installed and node is in the environment variable $PATH.

- With repository root as current repository, under command line restore the node dependencies by executing *npm install*

- Open StoredProcedureGeneration.sln with Visual Studio. Build the solution and verify that javascript files are generated in directory *StoredProcedureGenerationWeb\out-js*

- With repository root as current directory, run the command *node documentdb_storedprocedure_builder.js*. Verify that the javascript stored procedure file is generated in *StoredProcedureGenerationWeb\generated-procedure* directory.

- Run the generated stored procedure in DocumentDB using the console application project. In solution explorer, right-click the console application project and click *Set as startup project*. Update file path and DocumentDB credentials. Hit F5 and enjoy.

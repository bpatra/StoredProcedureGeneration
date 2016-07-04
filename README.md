Code sample for building well architectured StoredProcedure for DocumentDB with Typescript and SystemJs.

How to run this sample.

-1 Make sure Node.js is installed and node is in the environment variable $PATH.

-2 With repository root as current repository, under command line restore the node dependencies by executing "npm install"

-3 Open StoredProcedureGeneration.sln with Visual Studio. Build the solution and verify that javascript files are generated in directory "StoredProcedureGenerationWeb\out-js"

-4 With repository root as current directory, run the command "node documentdb_storedprocedure_builder.js". Verify that the javascript stored procedure file is generated in "StoredProcedureGenerationWeb\generated-procedure" directory.

-5 Run the generated stored procedure in DocumentDB using the console application project. In solution explorer, right-click the console application project and click "Set as startup project". Update file path and DocumentDB credentials. Hit F5 and enjoy.
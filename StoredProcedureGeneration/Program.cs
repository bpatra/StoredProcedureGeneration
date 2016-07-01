using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoredProcedureGeneration
{
    class Program
    {
        public const string endpointUrl = @"<your endpoint here>";
        public const string authorizationKey = @"<your authorization key here>";
        public const string AwesomeDb = "awesomedb";
        public const string SuperCollection = "supercollection";

        public const string jsFilePath = @"<path to js stored procedure>";

        static void Main(string[] args)
        {
            Console.WriteLine("Start...");
            Run().Wait();

        }

        public static async Task Run()
        {
            const string StoredProcedureId = "test";

            DocumentClient client = new DocumentClient(new Uri(endpointUrl), authorizationKey);
            await UpsertStoredProc(client, AwesomeDb, SuperCollection, StoredProcedureId);
            var storedProcedureUri = UriFactory.CreateStoredProcedureUri(AwesomeDb, SuperCollection, StoredProcedureId);
            var toto = await client.ExecuteStoredProcedureAsync<dynamic>(storedProcedureUri,"key",123);
        }


        public static async Task UpsertStoredProc(DocumentClient client, string databaseName, string collectionName, string storedProcedureId)
        {
            Uri collUri = UriFactory.CreateDocumentCollectionUri(databaseName, collectionName);
            await client.UpsertStoredProcedureAsync(collUri,
                new StoredProcedure
                {
                    Id = storedProcedureId,
                    Body = File.ReadAllText(jsFilePath)
                });
        }
    }
}

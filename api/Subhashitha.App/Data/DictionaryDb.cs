using Microsoft.Data.Sqlite;
using System;
using System.IO;
using System.Threading.Tasks;

namespace Subhashitha.App.Data
{
    public class DictionaryDb : IAsyncDisposable
    {
        private SqliteConnection? _connection;

        public async Task<SqliteConnection> GetConnectionAsync()
        {
            var currentFile = GetCurrentDictionaryFile();
            if (string.IsNullOrEmpty(currentFile))
            {
                throw new InvalidOperationException("No dictionary file configured");
            }

            var connectionString = $"Data Source=App_Data/{currentFile};Mode=ReadOnly";
            _connection = new SqliteConnection(connectionString);
            await _connection.OpenAsync();
            return _connection;
        }

        private string? GetCurrentDictionaryFile()
        {
            var currentPath = "App_Data/current.txt";
            if (File.Exists(currentPath))
            {
                return File.ReadAllText(currentPath).Trim();
            }
            return null;
        }

        public async ValueTask DisposeAsync()
        {
            if (_connection != null)
            {
                await _connection.CloseAsync();
                _connection.Dispose();
            }
        }
    }
}

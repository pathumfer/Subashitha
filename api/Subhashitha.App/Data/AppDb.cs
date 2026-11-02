using Microsoft.Data.Sqlite;
using System;
using System.Threading.Tasks;

namespace Subhashitha.App.Data
{
    public class AppDb : IAsyncDisposable
    {
        private readonly SqliteConnection _connection;

        public AppDb()
        {
            var connectionString = "Data Source=App_Data/app.db;Mode=ReadWriteCreate";
            _connection = new SqliteConnection(connectionString);
        }

        public async Task InitializeAsync()
        {
            await _connection.OpenAsync();

            using (var command = _connection.CreateCommand())
            {
                command.CommandText = @"
                    PRAGMA journal_mode=WAL;
                    PRAGMA synchronous=NORMAL;

                    CREATE TABLE IF NOT EXISTS corrections (
                        id INTEGER PRIMARY KEY,
                        word TEXT NOT NULL,
                        proposed_meaning TEXT NOT NULL,
                        status TEXT NOT NULL DEFAULT 'pending',
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    );

                    CREATE TABLE IF NOT EXISTS audit_log (
                        id INTEGER PRIMARY KEY,
                        action TEXT NOT NULL,
                        details TEXT,
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                    );
                ";
                await command.ExecuteNonQueryAsync();
            }
        }

        public SqliteConnection GetConnection()
        {
            return _connection;
        }

        public async ValueTask DisposeAsync()
        {
            await _connection.CloseAsync();
            _connection.Dispose();
        }
    }
}

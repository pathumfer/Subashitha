using Xunit;
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;

namespace Subhashitha.App.Tests
{
    public class HealthCheckTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly WebApplicationFactory<Program> _factory;

        public HealthCheckTests(WebApplicationFactory<Program> factory)
        {
            _factory = factory;
        }

        [Fact]
        public async Task GetHealth_ReturnsOkStatus()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync("/api/v1/health");

            // Assert
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
            var content = await response.Content.ReadAsStringAsync();
            Assert.Contains("ok", content);
        }
    }
}

using System.Collections.Concurrent;
using Azure;
using Azure.Storage.Queues;
using Azure.Storage.Queues.Models;
using Newtonsoft.Json;

namespace Bsc.Function.Tests.Support.Fakes.AzureStorage.Queues;

public class FakeQueueClient : QueueClient
{
    private const string SendReceiptTemplate =
        @"{
        ""messageId"": ""{messageId}"",
        ""insertionTime"": ""{insertionTime}"",
        ""expirationTime"": ""{expirationTime}"",
        ""popReceipt"": ""{popReceipt}"",
        ""timeNextVisible"": ""{timeNextVisible}"",
    }";

    private readonly ConcurrentBag<FakeSentMessage> _sentMessages = new();

    public FakeSentMessage[] SentMessages => _sentMessages.ToArray();
    public bool WasCreated { get; private set; }

    public override Task<Response> CreateIfNotExistsAsync(
        IDictionary<string, string> metadata = null,
        CancellationToken cancellationToken = new CancellationToken()
    )
    {
        WasCreated = true;
        return Task.FromResult<Response>(new FakeResponse());
    }

    public override Task<Response<SendReceipt>> SendMessageAsync(
        string messageText,
        TimeSpan? visibilityTimeout = null,
        TimeSpan? timeToLive = null,
        CancellationToken cancellationToken = new CancellationToken()
    )
    {
        _sentMessages.Add(new FakeSentMessage(messageText, visibilityTimeout, timeToLive));
        var json = SendReceiptTemplate
            .Replace("{messageId}", Guid.NewGuid().ToString())
            .Replace("{insertionTime}", DateTimeOffset.UtcNow.ToString("O"))
            .Replace("{expirationTime}", DateTimeOffset.UtcNow.ToString("O"))
            .Replace("{popReceipt}", Guid.NewGuid().ToString())
            .Replace("{timeNextVisible}", DateTimeOffset.UtcNow.ToString("O"));
        var response = Response.FromValue<SendReceipt>(
            JsonConvert.DeserializeObject<SendReceipt>(json),
            new FakeResponse()
        );
        return Task.FromResult(response);
    }
}

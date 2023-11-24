using Azure.Storage.Queues;

namespace Bsc.Function.Tests.Support.Fakes.AzureStorage.Queues;

public record FakeSentMessage(
    string MessageText,
    TimeSpan? VisibilityTimeout,
    TimeSpan? TimeToLive
);

public class FakeQueueServiceClient : QueueServiceClient
{
    private readonly Dictionary<string, FakeQueueClient> _clientByQueueName = new();

    public override QueueClient GetQueueClient(string queueName)
    {
        return GetFakeQueueClient(queueName);
    }

    public FakeQueueClient GetFakeQueueClient(string queueName)
    {
        return _clientByQueueName.TryGetValue(queueName, out var value)
            ? value
            : _clientByQueueName[queueName] = new FakeQueueClient();
    }
}

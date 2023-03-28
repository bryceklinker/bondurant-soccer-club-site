using System.Collections;
using Microsoft.Azure.Functions.Worker;

namespace Bsc.Function.Tests.Support.Fakes;

public class FakeInvocationFeatures : IInvocationFeatures
{
    public IEnumerator<KeyValuePair<Type, object>> GetEnumerator()
    {
        throw new NotImplementedException();
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }

    public void Set<T>(T instance)
    {
        throw new NotImplementedException();
    }

    public T? Get<T>()
    {
        throw new NotImplementedException();
    }
}

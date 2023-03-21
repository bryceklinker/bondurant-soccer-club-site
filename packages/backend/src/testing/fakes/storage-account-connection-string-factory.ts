export function createStorageAccountConnectionString({
    accountName = 'site',
    accountKey = 'key'
} = {}) {
    return `DefaultEndpointsProtocol=https;AccountName=${accountName};AccountKey=${accountKey};EndpointSuffix=core.windows.net`;
}

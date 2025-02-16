export function collect(keys, obj) {
    return keys.reduce(function (acc, key) {
        acc[key] = obj[key];
        return acc;
    }, {});
}

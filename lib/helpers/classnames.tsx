function classNames(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default classNames;

interface ClassToggles {
    [key: string]: boolean
}

function createScopedClass(prefix: string) {
    return function (name?: string | ClassToggles) {
        let result;
        let name2;
        if (typeof name === 'string' || name === undefined) {
            result = [prefix, name].filter(Boolean).join('-');
        } else {
            name2 = Object.entries(name).filter(kv => kv[1] !== false).map(kv => kv[0]);
            result = name2.map(name => {
                return [prefix, name].filter(Boolean).join('-');
            }).join(' ');
        }
        return result;
    };
}

export {createScopedClass};
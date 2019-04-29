function classNames(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default classNames;

interface ClassToggles {
    [key: string]: boolean
}

function createScopedClass(prefix: string) {
    return function (name: string | ClassToggles = '') {
        const nameObject = typeof name === 'string' ? {[name]: name} : name;
        return Object
            .entries(nameObject)
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            .map(name => [prefix, name]
                .filter(Boolean)
                .join('-'))
            .join(' ');
    };
}

export {createScopedClass};
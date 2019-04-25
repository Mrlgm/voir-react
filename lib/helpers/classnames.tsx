function classNames(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default classNames;

function createScopedClass(prefix: string) {
    return function (name?: string) {
        return [prefix, name].filter(Boolean).join('-');
    };
}

export {createScopedClass};
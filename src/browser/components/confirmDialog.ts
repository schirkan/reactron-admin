export const confirm = <TArgs = any>(callback: (args?: TArgs) => any, text: string) => {
    return (args?: TArgs) => {
        if (window.confirm(text)) {
            return callback(args);
        }
    }
};
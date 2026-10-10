export const LS_KEYS = {
    tasks: 'tasks',
    theme: 'theme',
};

export function saveState(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function getState(key) {
    let data = localStorage.getItem(key);
    try {
        return data ? JSON.parse(data) : null;
    } catch {
        return null;
    }
}

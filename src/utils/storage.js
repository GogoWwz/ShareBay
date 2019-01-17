class Storage {
    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    static get(key) {
        return JSON.parse(localStorage.getItem(key))
    }
    static remove(key) {
        typeof key === 'undefined' ? localStorage.clear : localStorage.removeItem(key)
    }
}

export default Storage
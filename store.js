import { action, decorate, observable, computed, makeObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react';

enableStaticRendering(typeof window === 'undefined')

let store

class Store {

    isLoggedIn = false

    currentBusinessId = 0;

    products = []

    constructor() {
        console.log('starting mobx store ..')
        makeObservable(this, {
            isLoggedIn: observable,
            currentBusinessId: observable,
            products: observable,
            login: action,
            logout: action,
            hydrate: action
        })
    }

    login() { }

    logout() { }

    hydrate() { }

    hello() {
        console.log('mobx store says hello.')
    }
}

function initializeStore(initialData = null) {
    const _store = store ?? new Store()

    if (initialData) {
        _store.hydrate(initialData)
    }

    if (!store) {
        store = _store
    }

    return _store
}

export function useStore(initialState) {
    const store = initializeStore(initialState) // useMemo(() => { initializeStore(initialState) }, [initialState])
    return store
}
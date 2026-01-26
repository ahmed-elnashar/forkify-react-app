import { useState } from 'react';
const isBrowser = typeof window !== 'undefined';

export default function useLocalStorage(key: string, initialValue: any) {
    if (!isBrowser) {
        throw new Error(
            'You cannot use useLocalStorage outside browser environment'
        );
    }

    if (!key) {
        throw new Error('Key is required to use useLocalStorage hook');
    }

    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [value, setValue] = useState(initial);

    const set = (newValue: any) => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));
            setValue(JSON.stringify(newValue));
        } catch (e) {
            console.log('Error setting value into localstorage: ' + e);
        }
    };

    const remove = () => {
        try {
            localStorage.removeItem(key);
            setValue(null);
        } catch (e) {
            console.log('Error removing value from localstorage: ' + e);
        }
    };

    return {
        value,
        set,
        remove,
    };
}

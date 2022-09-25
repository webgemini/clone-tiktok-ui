import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const debounceId = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(debounceId);
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;

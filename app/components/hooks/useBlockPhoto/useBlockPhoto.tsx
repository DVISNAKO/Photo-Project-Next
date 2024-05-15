import { useCallback, MouseEvent } from 'react';

const useBlockPhoto = () => {
    const blockPhoto = useCallback((e: MouseEvent) => {
        e.preventDefault();
    }, []);

    return blockPhoto;
};

export default useBlockPhoto;
import {useEffect} from "react";

function useClickOutside(elementRefs, isOpen, onClickOutside){
    useEffect(() => {
        const handleClickOutside = (event) => {
            const isClickOutside = elementRefs.every(ref => {
                return ref.current && !ref.current.contains(event.target);
            });

            if (isOpen && isClickOutside) {
                onClickOutside();
                
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
       
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [elementRefs, isOpen, onClickOutside]);
}

export default useClickOutside;
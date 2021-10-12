import { useEffect, useState } from 'react';

const useOnScreen = ( options ) => {

    const [ ref, setRef ] = useState(null);
    const [ visible, setVisible ] = useState(false);
 
    useEffect( () => {

        const observer = new IntersectionObserver( ([ entry ]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if(ref){
            observer.observe(ref);
        }

        // return () => {
        //     if(ref){
        //         observer.unobserve(ref)
        //     }
        // }

    }, [ setRef, options ])

    return [ setRef, visible ]
 
}

export default useOnScreen;
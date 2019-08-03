import { useState, useEffect } from "react";

// takes a url and returns the response
//type hook = (uri: string) => string;
// https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c
// seems to imply that I need the type declaration above (and to type my custom hook like the commented out hook below)
// but this seems to work fine.  SCIENCE

export const useFetch /*: hook*/ = (url: string) => {
    let [state, setState] = useState({cargoFromUrl: '', loading: false});
    useEffect(()=> {
        setState((s) => {
            return {
                cargoFromUrl: '',
                loading: true
            }
        });

        fetch(url)
        .then(x => x.text())
        .then(y => {
            setState({cargoFromUrl: y, loading: false });
        });
    }, [url]);

    return state;
};

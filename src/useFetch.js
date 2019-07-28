import { useEffect, useState } from 'react';

// Ben was saying that there are issues with declaring the function that we pass to useEffect as async, but that the
// then form is ok.   OR.. if you really want to use async await, declare an async function inside your useEffect callback
// and call it with await. 

// In addition to the Object.assign type of expression that I've been passing to the setWhatever 
// function that you get back from useState, you can also pass it a function that takes state (or whatever the first
// object in the destructured array expression is) as its argument.  That let him remove the jittery appearance of 
// "loading..." in the UI between api pulls, after the first one.

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true});

    useEffect(() => {
        setState((state) => {
            return {
                data: state.data, 
                loading: true
            }
        });
        fetch(url)
        .then(x => x.text())
        .then(y => {
            setState({data: y, loading: false });
        });
    }, [url])

    return state;
}

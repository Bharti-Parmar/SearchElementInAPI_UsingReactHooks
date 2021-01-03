import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';

function SearchElement() {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
    const [url, setUrl] = useState(
        'https://hn.algolia.com/api/v1/search?query=redux',
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
    
        try {
            const result = await axios(url);
    
            setData(result.data);
        } catch (error) {
            setIsError(true);
        }
    
        setIsLoading(false);
        };
    
        fetchData();
    }, [url]);
    
    return (
        <Fragment>
        <h2 className="my-3 text-warning">Redux</h2>
        <input
            type="text"
            className="my-3 w-50 mx-auto form-control"
            value={query}
            onChange={event => setQuery(event.target.value)}
        />
        <button
            type="button"
            className="btn btn-info mb-3"
            onClick={() =>
            setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
            }
        >
            Search
        </button>
    
        {isError && <div>Something went wrong ...</div>}
    
        {isLoading ? (
            <div>Loading ...</div>
        ) : (
            <ul className="row list-unstyled">
            {data.hits.map(item => (
                <li className="col-3 border" key={item.objectID}>
                <a href={item.url}>{item.title}</a>
                </li>
            ))}
            </ul>
        )}
        </Fragment>
    );
}

export default SearchElement;
import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';

function SearchElementFromAPI() {
    
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
    const [url, setURL] = useState(`https://hn.algolia.com/api/v1/search?query=redux`,);
    const [isLoading, setLoading] = useState(false);
    const [error, isError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            isError(false);
            setLoading(true);
            try{
                const result = await axios(url);
                setData(result.data);
            }catch(error){
                isError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);


  return (
    <Fragment>
    {/* Search Box */}
        <form>
            <h2 className="text-success"> My Posts </h2>
            <center>
                <input type="text" className="form-control col-3" value={query} onChange={e => setQuery(e.target.value)} />
                <button type="submit" className="btn btn-primary col-1 mt-3 w-50" onClick={() => setURL(`https://hn.algolia.com/api/v1/search?query=${query}`)}>Search</button>
            </center>
        </form>

    {/*  Show Error */}
        {error && <div className="h3 text-danger mt-3">Oops... Something Went Wrong... </div>}

            {
    //  Loading Page
                isLoading ? 
                ( 
                    <div className="h3 mt-3 text-danger">Loading...</div> 
                ) : (
    // Show Data
                <div className="row mt-3 mb-3">
                    {
                        data.hits.map(item => (
                            <div className="col-md-3 mt-2 border" key={item.objectID}>
                                <h5>
                                    <p className="text-danger">ID : {item.objectID}</p>
                                    Link : <a href={item.url}>{item.title}</a>
                                </h5>
                                <h6>Author Name: {item.author}</h6>
                            </div>
                    ))
                    }
                </div>
                )
            }
    </Fragment>
  );

}

export default SearchElementFromAPI;
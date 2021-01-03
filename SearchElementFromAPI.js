import React, {useState, useEffect} from 'react';
import axios from 'axios';

function SearchElementFromAPI() {
    
    const [data, setData] = useState({ hits: [] });
    const [search, setSearch] = useState('react');
    const [url, setURL] = useState(`https://hn.algolia.com/api/v1/search?query=react`);
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
    <>
    {/* Search Box */}
        <form>
            <h2 className="text-success"> My Posts </h2>
            <center>
                <input type="text" className="form-control col-3" value={search} onChange={e => setSearch(e.target.value)} />
                <button type="submit" className="btn btn-primary col-1 mt-3 w-50" onClick={() => setURL(`https://hn.algolia.com/api/v1/search?query=${search}`)}>Search</button>
            </center>
        </form>

    {/*  Show Error */}
        {error && <div className="text-danger mt-3">Oops... Something Went Wrong... </div>}

            {
    //  Loading Page
                isLoading ? 
                ( 
                    <div className="h3 mt-3 text-danger">Loading...</div> 
                ) : (
    // Show Data
                <div className="row mt-3">
                    {
                        data.hits.map(item => (
                            <div className="col-md-3 mt-2" key={item.objectID}>
                                <p><h5 className="text-danger">{item.objectID}</h5><a href={item.url}>{item.title}</a></p>
                            </div>
                    ))
                    }
                </div>
                )
            }
    </>
  );

}

export default SearchElementFromAPI;
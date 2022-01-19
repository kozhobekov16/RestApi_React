import React, { useEffect, useState } from 'react'
// import BarLoader from 'react-spinners/BarLoader'
function Show() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://api.tvmaze.com/shows')
            .then(resp => resp.json())
            .then(datas => setData(datas))
        setLoading(false)
    }, [data])

    // const getData = async () =>{
    //     const fetchData = await fetch('https://api.tvmaze.com/shows')
    //     const resp = await fetchData.json()
    //     setData(resp)
    // } 
    return (
        <div>
            <p className='text-center text-white pt-4 font text-4xl'>Popular Movies</p>
            <div className='flex flex-wrap justify-between container mx-auto text-slate-300'>
                {loading ? (
                    'Loader'
                ) : (
                    data.map((element, index) => {
                        return (
                            <div key={index} className='shadow-zinc-800 mt-4 shadow-md p-4'>
                                <img src={element.image.medium} alt="images" />
                                <h1 className='text-2xl'>{element.name}</h1>
                                <h1>Language: {element.language}</h1>
                                <h1>Type: {element.type}</h1>
                                <h1>Premiered: {element.premiered}</h1>
                                <h2>Genres: {element.genres[0]}</h2>
                                <a target="_blank" className='italic' href={element.officialSite} rel='noreferrer'>More...</a>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Show

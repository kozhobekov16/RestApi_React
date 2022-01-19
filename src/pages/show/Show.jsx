import React, { useState } from 'react'
// import s from './homePage.module.scss'
// import axios from 'axios'
function HomePage() {
    const [materials, setMaterials] = useState([])
    React.useEffect(() => {
        // fetch(`http://omdbapi.com/?s=%22popular%22&apikey=499c59f2`)
        fetch(`https://api.tvmaze.com/search/shows?q=serials`)
            .then(json => json.json())
            .then((resp) => {
                setMaterials(resp)
            })
        // .then(resp => console.log(resp.Search))
        // axios.get(`https://api.tvmaze.com/search/shows?q=films`)
        //     .then((resp) => {
        //         setMaterials(resp)
        //     })
    })
    return (
        <div>
            <p className='text-center text-white pt-4 font text-4xl'>Shows</p>
            <div className={`text-slate-300 flex flex-wrap gap-4 flex-row flex-end container mx-auto pt-4`}>
                {materials.map((item, i) => {
                    return (
                        <div key={i}>
                            <div className='shadow-slate-700 shadow-md p-4' >
                                <img
                                    src={item.show.image ? item.show.image.medium : 'https://static.tvmaze.com/uploads/images/medium_portrait/244/610552.jpg'}
                                    alt="images"
                                />
                                {(item.Title)}
                                <h1 className='uppercase text-center text-md text-emerald-100'>{item.show.name}</h1>
                                <h2 className='text-blue-200'>Language: {item.show.language}</h2>
                                <h2 className='text-blue-200'>Type: {item.show.type}</h2>
                                <h2 className='text-blue-200'>Premiered: {item.show.premiered}</h2>
                                <span className='text-blue-200'>Genre:</span>
                                <ol className='gap-7'>
                                    <li className='text-blue-200'>{item.show.genres[0]}</li>
                                    <li className='text-blue-200'>{item.show.genres[1]}</li>
                                    <li className='text-blue-200'>{item.show.genres[2]}</li>
                                </ol>
                                <a target='_blank' rel='noreferrer' className='bg-sky-900 py-1 px-4 rounded-sm flex items-end' href={item.show.url}>More...</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage

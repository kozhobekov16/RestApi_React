import React from 'react'

const SearchPage = (props) => {
    return (
        <div>
            <p className='text-center text-white pt-4 font text-4xl'>Movies</p>
            {props.dataSearch === undefined ? 'Null' : (
                <div className='container mx-auto text-slate-100 flex flex-wrap gap-10'>
                    {props.dataSearch.map((item, i) => {
                        return (
                            <div key={i}>
                                <img src={item.show.image ? item.show.image.medium : 'https://static.tvmaze.com/uploads/images/medium_portrait/302/755444.jpg'} alt="img" />
                                <p className='whitespace-pre' style={{ whiteSpace: 'wrap' }}>
                                    {item.show.name}
                                </p>
                                <h1 className='text-2xl'>{item.name}</h1>
                                <h1>Language: {item.show.language}</h1>
                                <h1>Type: {item.show.type}</h1>
                                <h1>Premiered: {item.show.premiered}</h1>
                                <h2>Genres: {item.show.genres[0]}</h2>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>

    )
}

export default SearchPage

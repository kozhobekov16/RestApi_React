import React from 'react'

const People = () => {
    const [people, setPeople] = React.useState([])

    React.useEffect(() => {
        const fetchFC = async () => {
            const fetchData = await fetch('https://api.tvmaze.com/people')
            const resp = await fetchData.json()
            setPeople(resp)
        }
        fetchFC()
    }, [people])
    return (
        <div>
            <p className='text-center text-white pt-4 font text-4xl'>Stars</p>
            <div className='flex flex-wrap container mx-auto text-slate-100'>
                {people.map((elem, i) => {
                    return (
                        <div key={i} className='p-4'>
                            <img src={elem.image ? elem.image.medium : 'https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg'} alt="images" />
                            <p className='text-2xl'>{elem.name}</p>
                            <h1>Birthday: {elem.birthday}</h1>
                            <h1>Country: {elem.country ? elem.country.name : 'Undefined'}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default People

import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import SearchPage from '../../pages/searchPage/SearchPage'
import s from './Header.module.scss'
const Header = () => {
    const [inputValue, setInputValue] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
        // fetch(`http://omdbapi.com/?s=%22'lord'%22&apikey=499c59f2`)
            .then(json => json.json())
            .then(datas => setData(datas))
        .catch(
            console.error('error')
        )
    }, [inputValue])
    const eventInputValue = (e) => {
        setInputValue(e.target.value)
    }
    const submitForm = e => {
        e.preventDefault()
    }
    return (
        <div>
            <div className={`${s.header} py-6  shadow shadow-blue-400/10`}>
                <div className={`${s.toolbar} container mx-auto`}>
                    <NavLink to="/" className={`${s.logo} text-sky-800  hover:text-cyan-500 ease-in duration-300 text-4xl uppercase`}>Kindness Movie</NavLink>
                    <form onSubmit={submitForm}>
                        <input
                            type="text"
                            className={`rounded-2xl text-blue-100 py-1 pl-8 px-17 outline-none text-sm focus:text-base duration-300 ease-in ${s.input}`}
                            placeholder='Find movies, TV shows and more'
                            value={inputValue}
                            onChange={eventInputValue}
                        />

                    </form>
                    <div className={`flex items-center gap-1 ${s.signin}`}>
                        <NavLink className="text-slate-300 hover:bg-teal-900 ease-in duration-300 px-4 rounded-sm py-1" to='/resister'>Register</NavLink>
                        <span className='text-slate-300'>|</span>
                        <NavLink className="text-slate-300 hover:bg-teal-900 ease-in duration-300 px-4 rounded-sm py-1" to='/signIn'>Sign In</NavLink>
                    </div>
                </div>
                <header className="flex justify-start gap-20 container items-center mx-auto pt-4 text-slate-300">
                    <NavLink className='bg-teal-900 rounded-sm py-1 px-4 hover:bg-cyan-700 ease-in duration-300' to='/' >Home</NavLink>
                    <NavLink className='bg-teal-900 rounded-sm py-1 px-4 hover:bg-cyan-700 ease-in duration-300' to='/show'>Show</NavLink>
                    <NavLink className='bg-teal-900 rounded-sm py-1 px-4 hover:bg-cyan-700 ease-in duration-300' to='/stars' >Stars</NavLink>
                </header>
                
            </div>
            <SearchPage dataSearch={data}/>
        </div>
    )
}
export default Header
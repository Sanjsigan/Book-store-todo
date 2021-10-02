import React from 'react'
import  Button  from './Button'

function Header({userName,onShowBook,onShow}) {
    return (
        <div className="container col-8 text-center ">
            <h1  className="display-2">Welcome-{userName}</h1>
            <p className="lead">This books shop is very popular and fast servise, if you want any book you can get fo our store.</p>
            <Button onClick={onShowBook} text={onShow? 'Close book' :'Add book'} color={onShow ? 'red': 'green'}/>
        </div>
    )
}

export default Header

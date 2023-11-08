import React from "react";
import "./index.css"

const Navigation = () =>{
    const links = [
        'Услуги',
        'Международные перевозки',
        'Для бизнеса',
        'Частным лицам',
        'О компании',
        'контакты',
        'deliverytrans@gmail.com',
    ]
    const listItems = links.map((link)=>{
        return <li><a href="">{link}</a></li>
    })
    return (
        <nav className="header__nav">
           <ul className="header__nav-items">{listItems}</ul> 
        </nav>
        
        )

}

export default Navigation;
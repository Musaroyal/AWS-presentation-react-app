import { Children } from "react"

export default function Navbar(){
    const path = window.location.pathname
    return <nav className="nav">
        <a href="/home" className="site-title">AWS Cohort</a>
        <ul>
        <CustomLink href="/home">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/testimonial">Testimonial</CustomLink>
        <CustomLink href="/ussd">Ussd</CustomLink>
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname

   
    return(
        <li className={path === href ? "active" : ""}><a href={href}{...props}>{children}</a></li>
    )
}

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import PropTypes, { string } from "prop-types"
import { useContext } from "react"
import { ThemeContext } from "../../context/context"
import cn from 'classnames'
import './Layout.css'

export default function Layout ({children,className}) {
    const {theme} = useContext(ThemeContext)
    console.log(theme)

    return (
        <><Header/><main className={cn(className,theme)}>{children}</main><Footer/></>

    )
}
Layout.propTypes = {
    children: PropTypes.node,
    className:PropTypes.string
}
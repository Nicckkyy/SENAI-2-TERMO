import { Header } from "../../components/header/header"
import { Navigation } from "../../components/navigation/navigation"
import { Footer } from "../../components/footer/footer"
import { Outlet } from "react-router-dom"

export function Inicial(){
    return(
        <>
            <Header />
            <Navigation/>
            <Outlet />
            <Footer/>
        </>
    )
}
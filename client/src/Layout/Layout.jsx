import Footer from '../components/Footer/Footer.jsx'
import Header from '../components/Header/Header.jsx'
import Routes from '../config/RouterApp.jsx'

const Layout = () => {
    return (
        <div>
            <Header />
                <Routes />
            <Footer />
        </div>
    )
}

export default Layout
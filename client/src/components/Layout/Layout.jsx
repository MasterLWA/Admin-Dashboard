import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import AppRoutes from '../../AppRoutes/AppRoutes.jsx'

const Layout = () => {
    return (
    <body>
        <Nav />
        <AppRoutes />
        <Footer />
    </body>
    )
}

export default Layout;
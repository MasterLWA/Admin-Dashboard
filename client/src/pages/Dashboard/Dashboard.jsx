import Cards from "./Cards";
import Headerbar from "./HeaderBar";
const Dashboard = () => {
    const numbers = [1, 2, 3, 4, 5];
  
    return (
      <div className="container text-center" id="headerbar">
            <Headerbar />
            <Cards />
      </div>
    );
  };
  
  export default Dashboard;
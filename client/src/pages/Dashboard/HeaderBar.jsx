import "./style/HeaderBar.css"

const Headerbar = () => {
    return (
        <div className="row">
            <div className="col-4 text-center" id="admin-name">
                Hello, Lakindu
            </div>
            <div className="col-6" id="Searchbar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="col-4 d-flex justify-content-center" id="admin-profile">
                <img src="https://i.pinimg.com/564x/62/ce/f8/62cef82df057acde800d5001d1fa2558.jpg"  alt="Avatar" className="img-fluid mx-auto d-block img-thumbnail" id="profilepic" />
            </div>
        </div>
    );
    }

export default Headerbar;
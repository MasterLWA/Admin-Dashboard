import "./style/Cards.css"

const Cards = () => {
        return (
            <div className="row" id="rowofcards">
                <div className="col-4">
                    <div className="" id="user-card">
                        <div className="card-body" id="user-card">
                            <h5 className="card-title">Total Users</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/users" className="btn btn-primary">View Users</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="" id="user-card">
                        <div className="card-body" id="user-card">
                            <h5 className="card-title">Total Users</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/users" className="btn btn-primary">View Users</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="" id="user-card">
                        <div className="card-body" id="user-card">
                            <h5 className="card-title">Total Users</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/users" className="btn btn-primary">View Users</a>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Cards;
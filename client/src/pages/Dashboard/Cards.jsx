import "./style/Cards.css"

const Cards = () => {
        return (
            <div className="row" id="rowofcards">
                <div className="col-4">
                    <div className="card">
                        <div className="" id="user-card">
                            <h5 className="card-title">Total Users</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/users" className="btn btn-primary">View Users</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total Products</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/products" className="btn btn-primary">View Products</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total Orders</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/orders" className="btn btn-primary">View Orders</a>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Cards;
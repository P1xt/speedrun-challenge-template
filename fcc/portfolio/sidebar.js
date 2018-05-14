import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (

        <div className="col-sm-2" id="navbarToggleExternalContent">
            <nav className="nav flex-column" >
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Frontend
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                <Link to="/tribute-page">Tribute Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>


    );
}


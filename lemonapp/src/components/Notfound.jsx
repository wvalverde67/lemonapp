/* NotFound component */

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="notfound__content">
                            <div className="notfound__content-text">
                                <h1 className="notfound__content-title">404</h1>
                                <p className="notfound__content-desc">Page not found</p>
                            </div>
                            <div className="notfound__content-btn">
                                <Link className="notfound__content-link" to="/">Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NotFound

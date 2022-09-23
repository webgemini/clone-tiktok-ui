import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Couldn't find this page</p>
            <p>Check out more trending videos on TikTok</p>
            <Link to="/">
                <span>Watch now</span>
            </Link>
        </div>
    );
}

export default NotFound;

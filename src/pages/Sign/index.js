import React from 'react';
import './signature.scss'; // Import your CSS or SCSS file

function Signature() {
return (
<div className="gmail">
    <div className="signature-details">
        <h2 className="title">Vishnu Gopy</h2>
        <span className="post">Concepteur et développeur d'applications</span>
    </div>
    <ul className="signature-content">
        <li>
            <i className="fa-solid fa-at"></i>
            <a href="https://www.vishnugopy.dev">vishnugopy.dev</a>
        </li>
        <li>
            <i className="fa-solid fa-mobile"></i>
            <a href="tel:003363376422">06 63 37 64 22</a>
        </li>
        <li>
            <i className="fa-solid fa-location-dot"></i> Ermont , France
        </li>
    </ul>
    <ul className="icon">
        <li>
            <a href="https://www.linkedin.com/in/vishnugopy/" className="fab fa-linkedin"></a>
        </li>
        <li>
            <a href="https://www.instagram.com/vishnugopy" className="fab fa-instagram"></a>
        </li>
        <li>
            <a href="https://twitter.com/_Vishnu_10" className="fa-brands fa-x-twitter"></a>
        </li>
        <li>
            <a href="https://github.com/vishnugopy" className="fab fa-github"></a>
        </li>
    </ul>
</div>
);
}

export default Signature;
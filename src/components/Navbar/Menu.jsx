import { Link } from 'react-router-dom'

export default function Menu({ text, link }) {
    return (
        <li className="nav-item">
            <Link to={link}
                className="nav-link text-dark mx-3 text-center"
                style={{ transform: "scale(1.2)" }}
            >
                {text}
            </Link>
        </li>
    );
}

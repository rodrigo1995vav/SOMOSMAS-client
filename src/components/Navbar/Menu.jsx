export default function Menu({ section }) {
  return (
    <li className="nav-item">
      <a
        href=""
        className="nav-link text-dark mx-3"
        style={{ transform: "scale(1.2)" }}
      >
        {section}
      </a>
    </li>
  );
}

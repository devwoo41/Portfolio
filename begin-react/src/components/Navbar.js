import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">자기소개</Link>
            </li>
            <li>
                <Link to="/posts">글 목록</Link>
            </li>
            <li>
                <Link to="/write">글 쓰기</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;

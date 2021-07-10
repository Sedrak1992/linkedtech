import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import Badge from "@material-ui/core/Badge";
import Diamond from "./linkedtech_img/10.jpg";

function Header() {
  return (
    <div>
      <header className="n">
        <nav className="menyo">
          <div>
            <img src={Diamond} />
          </div>
          <ul className="uli">
            <li>
              <a href="#">Home</a>
              <ExpandMoreIcon />
            </li>
            <li>
              <a href="#">About</a>
              <ExpandMoreIcon />
            </li>
            <li>
              <a href="#">Product</a>
              <ExpandMoreIcon />
            </li>
            <li>
              <a href="#">blog</a>
              <ExpandMoreIcon />
            </li>
            <li>
              <a href="#">shop</a>
              <ExpandMoreIcon />
            </li>
            <li>
              <a href="#">Contact us</a>
              <ExpandMoreIcon />{" "}
            </li>
          </ul>
          <div className="ikoka">
            <div>
              <SearchIcon />
            </div>
            <div>
              <Badge color="secondary" badgeContent={3} showZero>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
            <div className="Shopping1">
                <PersonOutlineOutlinedIcon />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;

import StarIcon from "@material-ui/icons/Star";
import Rectangle1 from "./linkedtech_img/Rectangle 39.png";
import Rectangle2 from "./linkedtech_img/Rectangle 53.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Recent_Product() {
  return (
    <div className="Recent_Product">
      <div>
        <img src={Rectangle1} />
        <span className="Shopping">
          <ShoppingCartOutlinedIcon />
        </span>
      </div>
      <div className="standard">
        <h2>Always in style!</h2>
        <p>
          The standard chunk of Lorem Ipsum below for those interested. The
          standard chunk of for those interested.
        </p>
        <div>
          <span className="span1">$ 249.99</span>{" "}
          <span className="span2">$ 249.99</span>
        </div>
        <div className="StarIcon">
          <span className="StarIcon1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </span>
          <span className="StarIcon11">
            <StarIcon />
          </span>
        </div>
      </div>

      <div>
        <img src={Rectangle2} />
        <span className="Shopping">
          <ShoppingCartOutlinedIcon />
        </span>
      </div>
      <div className="standard">
        <h2>Always in style!</h2>
        <p>
          The standard chunk of Lorem Ipsum below for those interested. The
          standard chunk of for those interested.
        </p>
        <div>
          <span className="span1">$ 249.99</span>{" "}
          <span className="span2">$ 249.99</span>
        </div>
        <div className="StarIcon">
          <span className="StarIcon1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </span>
          <span className="StarIcon11">
            <StarIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Recent_Product;

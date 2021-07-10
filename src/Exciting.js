import Nkar from "./linkedtech_img/9L_1.png";

function Exciting() {
  return (
    <section className="exciting">
      <div  className="box b">
        <spam className='Favorite'>Favorite brands</spam>
        <h1>
          <span className="excitinag">An exciting place <br /></span>
          for the whole family <br />
          to shop.
        </h1>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is
          <br />
          reproduced below for those interested.
        </p>
        <div>
          <button type="button" className='button'>Shop Now</button>
          <span className='span1'>$ 249.99</span> <span  className='span2'>$ 249.99</span>
        </div>
      </div>
      <div className="box">
        <img src={Nkar} />
      </div>
    </section>
  );
}

export default Exciting;

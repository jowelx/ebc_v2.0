import PropTypes from "prop-types";
import AppLink from "../../UI/AppLink";

const CardImage = ({ image, title, text, link }) => {
  return (
    <div className="card" style={{ width: "16rem" }}>
      {image && (
        <img
          src={image}
          className="card-img-top img-fluid"
          alt={title}
          style={{ objectFit: "cover", height: "10rem" }}
        />
      )}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {text && <p className="card-text">{text}</p>}
        {link && (
          <AppLink href={link.url} className={link.className}>
            {link.text}
          </AppLink>
        )}
      </div>
    </div>
  );
};

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
  }),
};

export default CardImage;

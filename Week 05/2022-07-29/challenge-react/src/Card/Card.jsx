import { ReactPropTypes } from "react";
import PropTypes from "prop-types";

const Card = ({ title, description, number }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{number}</p>
        </div>
    );
};

export default Card;

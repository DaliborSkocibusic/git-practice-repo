import styles from "./Card.module.scss";
import PropTypes from "prop-types";

const Card = ({ title, description, number }) => {
    // I can write javascript here
    let numberJsx =
        number !== undefined
            ? `The number is ${number}`
            : "No Number was provided";

    // const sum = () => {
    //     return number + 1;
    // }

    return (
        <div className={styles.Card}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{numberJsx}</p>
        </div>
    );
};

export default Card;

// const Card = (props) => {
//     return (
//         <div>
//             <h2>{props.title}</h2>
//             <p>{props.description}</p>
//         </div>
//     );
// };

// export default Card;

// Defining the required types for each prop
Card.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Card.defaultProps = {
    description: "THIS IS MY DEFAULT DESCRIPTION",
};

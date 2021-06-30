import React from "react";
import PropTypes from "prop-types";
import MainPage from "./MainPage";

const CarouselIndex = ({ carousel }) => (
    <MainPage carousel={carousel} />
);

export default CarouselIndex;

CarouselIndex.propTypes = {
    carousel: PropTypes.func
};
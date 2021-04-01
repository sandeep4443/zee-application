import React from 'react';
import PropTypes from 'prop-types';
import DropDownPopulate from './DropDownPopulate';
import CascadingDropDown from './CascadingDropDown';
import MultiSelect from './MultiSelectDropDown';

const AllDropDowns = ({ dropDown }) => (
    <>
        <DropDownPopulate dropDown={ dropDown } />
        <CascadingDropDown />
        <MultiSelect />
    </>
);

export default AllDropDowns;


AllDropDowns.propTypes = {
    dropDown:PropTypes.func
  }
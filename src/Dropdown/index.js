import DropDownPopulate from './DropDownPopulate';
import CascadingDropDown from './CascadingDropDown';

const AllDropDowns = ({ dropDown }) => {

    return (
        <>
            <DropDownPopulate dropDown={dropDown} />
            <CascadingDropDown />
        </>
    )
};

export default AllDropDowns;
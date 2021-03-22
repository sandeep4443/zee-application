import DropDownPopulate from './DropDownPopulate';
import CascadingDropDown from './CascadingDropDown';
import MultiSelect from './MultiSelectDropDown';

const AllDropDowns = ({ dropDown }) => {

    return (
        <>
            <DropDownPopulate dropDown={dropDown} />
            <CascadingDropDown />
            <MultiSelect/>
        </>
    )
};

export default AllDropDowns;
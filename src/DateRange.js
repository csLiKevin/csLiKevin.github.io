import React from "react";
import PropTypes from "prop-types";

export function DateRange({ startDate, endDate }) {
    const startYear = parseInt(startDate);
    const endYear = parseInt(endDate) || "";
    const colorClass = endYear ? "has-text-grey-light" : "has-text-success";

    return (
        <div
            className={`is-daterange has-text-weight-bold is-size-5 ${colorClass}`}
        >
            {`${startYear} - ${endYear}`}
        </div>
    );
}
DateRange.propTypes = {
    startDate: PropTypes.string,
    endDate: PropTypes.string
};

export default DateRange;

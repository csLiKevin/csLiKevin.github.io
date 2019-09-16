import React from "react";
import PropTypes from "prop-types";

import DateRange from "./DateRange";

export function Education({ education }) {
    const degrees = education.map(
        ({
            institution,
            area,
            studyType,
            startDate,
            endDate,
            gpa,
            pictures
        }) => {
            const degreePictures = pictures.map((picturePath, index) => {
                return (
                    <p
                        className="image is-96x96 is-inline-flex"
                        key={picturePath}
                    >
                        <img
                            alt={`${institution} logo ${index}`}
                            src={`${process.env.PUBLIC_URL}/${picturePath}`}
                        />
                    </p>
                );
            });

            return (
                <article
                    className="media"
                    key={`${institution}-${area}-degree`}
                >
                    <figure className="has-text-centered media-left">
                        <DateRange endDate={endDate} startDate={startDate} />
                        {degreePictures}
                    </figure>
                    <div className="media-content">
                        <h1 className="title is-size-4">{institution}</h1>
                        <h2 className="subtitle">{`${studyType} of ${area}`}</h2>
                        <p>{`GPA: ${gpa}`}</p>
                    </div>
                </article>
            );
        }
    );

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Education</h1>
                {degrees}
            </div>
        </section>
    );
}
Education.propTypes = {
    education: PropTypes.arrayOf(
        PropTypes.shape({
            institution: PropTypes.string,
            area: PropTypes.string,
            studyType: PropTypes.string,
            startDate: PropTypes.string,
            endDate: PropTypes.string,
            gpa: PropTypes.string,
            pictures: PropTypes.arrayOf(PropTypes.string)
        })
    )
};

export default Education;

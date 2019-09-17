import React from "react";
import PropTypes from "prop-types";

import DateRange from "./DateRange";

export function Experience({ work }) {
    const jobs = work.map(
        ({
            company,
            position,
            website,
            startDate,
            endDate,
            summary,
            highlights,
            pictures
        }) => {
            const sanitizedCompanyName = company.replace(/ *\([^)]*\) */g, "");
            const companyPictures = pictures.map((picturePath, index) => {
                return (
                    <p className="image is-128x128" key={picturePath}>
                        <img
                            alt={`${sanitizedCompanyName} logo ${index}`}
                            src={`${process.env.PUBLIC_URL}/${picturePath}`}
                        />
                    </p>
                );
            });

            return (
                <article className="media" key={`${company}-job`}>
                    <figure className="has-text-centered media-left">
                        <DateRange endDate={endDate} startDate={startDate} />
                        {companyPictures}
                    </figure>
                    <div className="media-content">
                        <h1 className="title is-size-4">
                            <a
                                href={website}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {sanitizedCompanyName}
                            </a>
                        </h1>
                        <h2 className="subtitle">{position}</h2>
                        <p>{summary}</p>
                        <div className="content">
                            <ul>
                                {highlights.map((highlight, index) => {
                                    return (
                                        <li
                                            key={`${sanitizedCompanyName}-highlight-${index}`}
                                        >
                                            {highlight}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </article>
            );
        }
    );

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Experience</h1>
                {jobs}
            </div>
        </section>
    );
}
Experience.propTypes = {
    work: PropTypes.arrayOf(
        PropTypes.shape({
            company: PropTypes.string,
            position: PropTypes.string,
            website: PropTypes.string,
            startDate: PropTypes.string,
            endDate: PropTypes.string,
            summary: PropTypes.string,
            highlights: PropTypes.arrayOf(PropTypes.string),
            pictures: PropTypes.arrayOf(PropTypes.string)
        })
    )
};

export default Experience;

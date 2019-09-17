import React from "react";
import PropTypes from "prop-types";

function getNetworkIconClasses(network) {
    switch (network.toLowerCase()) {
        case "github":
            return "fab fa-github-square";
        case "linkedin":
            return "fab fa-linkedin";
        default:
            return "far fa-comment-alt";
    }
}

export function Basics({
    label,
    location: { city, countryCode, region },
    name,
    profiles,
    website
}) {
    const profileLinks = profiles.map(({ network, url }) => {
        return (
            <a
                className="icon is-medium"
                href={url}
                key={`${network}-profile`}
                rel="noopener noreferrer"
                target="_blank"
            >
                <i className={`${getNetworkIconClasses(network)} fa-lg`} />
            </a>
        );
    });

    return (
        <section className="hero is-fullheight is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="is-size-1 title">{name}</h1>
                    <h2 className="is-marginless-bottom is-size-4 subtitle">
                        {label}
                    </h2>
                    <div>{`${city}, ${region}, ${countryCode}`}</div>
                    <a href={website}>{website}</a>
                    <div>{profileLinks}</div>
                </div>
            </div>
        </section>
    );
}
Basics.propTypes = {
    label: PropTypes.string,
    location: PropTypes.shape({
        city: PropTypes.string,
        countryCode: PropTypes.string,
        region: PropTypes.string
    }),
    name: PropTypes.string,
    profiles: PropTypes.arrayOf(
        PropTypes.shape({
            network: PropTypes.string,
            username: PropTypes.string,
            url: PropTypes.string
        })
    ),
    website: PropTypes.string
};

export default Basics;

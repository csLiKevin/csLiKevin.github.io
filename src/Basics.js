import React, {Fragment} from "react";
import PropTypes from "prop-types";

function getNetworkIconClasses(network) {
    switch(network.toLowerCase()) {
        case "github":
            return "fab fa-github-square";
        case "linkedin":
            return "fab fa-linkedin";
        default:
            return "far fa-comment-alt";
    }
}

export function Basics(
    {
        label,
        location: {city, countryCode, region},
        name,
        profiles,
        website
    }
) {
    const profileLinks = profiles.map(({network, url}) => {
        return (
            <a className="icon is-medium" href={url} target="_blank">
                <i className={`${getNetworkIconClasses(network)} fa-lg`} />
            </a>
        );
    });

    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-size-1">{name}</h1>
                    <h2 className="subtitle is-size-4">{label}</h2>
                    <div className="is-flex" style={{marginTop: "-1.25rem"}}>
                        {`${city}, ${region}, ${countryCode}`}
                    </div>
                    <a className="is-block" href={website}>{website}</a>
                    <Fragment className="is-block">{profileLinks}</Fragment>
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
        region: PropTypes.string,
    }),
    name: PropTypes.string,
    profiles: PropTypes.arrayOf(
        PropTypes.shape({
            network: PropTypes.string,
            username: PropTypes.string,
            url: PropTypes.string
        })
    ),
    website: PropTypes.string,
};

export default Basics;

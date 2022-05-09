<script>
    import Fa from "svelte-fa";
    import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
    import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
    import { faCommentAlt } from "@fortawesome/free-regular-svg-icons/faCommentAlt";

    // propTypes = {
    //     label: PropTypes.string,
    //     location: PropTypes.shape({
    //         city: PropTypes.string,
    //         countryCode: PropTypes.string,
    //         region: PropTypes.string
    //     }),
    //     name: PropTypes.string,
    //     profiles: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             network: PropTypes.string,
    //             username: PropTypes.string,
    //             url: PropTypes.string
    //         })
    //     ),
    //     website: PropTypes.string
    // };
    export let label;
    export let location;
    export let name;
    export let profiles;
    export let website;

    const { city, countryCode, region } = location;

    function getNetworkIcon(network) {
        switch (network.toLowerCase()) {
            case "github":
                return faGithubSquare;
            case "linkedin":
                return faLinkedin;
            default:
                return faCommentAlt;
        }
    }
</script>

<section class="hero is-fullheight is-primary">
    <div class="hero-body">
        <div class="container">
            <h1 class="is-size-1 title">{name}</h1>
            <h2 class="is-marginless-bottom is-size-4 subtitle">{label}</h2>
            <div>{`${city}, ${region}, ${countryCode}`}</div>
            <a href={website}>{website}</a>
            <div>
                {#each profiles as { network, url }}
                    <a
                        class="icon is-medium"
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Fa icon={getNetworkIcon(network)} size="lg" />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .is-marginless-bottom {
        margin-bottom: 0 !important;
    }
</style>

<script>
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
                        <i class={`${getNetworkIconClasses(network)} fa-lg`} />
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

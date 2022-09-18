<script lang="ts">
    import Fa from "svelte-fa";
    import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
    import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
    import { faCommentAlt } from "@fortawesome/free-regular-svg-icons/faCommentAlt";

    export let info: Basics;

    const {
        label,
        location: { city, countryCode, region },
        name,
        profiles,
        url,
    } = info;

    function getNetworkIcon(network: string) {
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
            <a href={url}>{url}</a>
            <div>
                {#each profiles as { network, url }}
                    <a
                        class="icon is-medium"
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Fa icon={getNetworkIcon(network)} size="lg" />
                        <span class="is-sr-only">{network}</span>
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

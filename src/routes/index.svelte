<script lang="ts">
    import "bulmaswatch/lux/bulmaswatch.min.css";
    import Basics from "$lib/Basics.svelte";
    import Experience from "$lib/Experience.svelte";
    import Education from "$lib/Education.svelte";

    export let resume;
</script>

<svelte:head>
    <title>{resume.basics.name}</title>
</svelte:head>

<div class="lux">
    <Basics {...resume.basics} />
    <Experience work={resume.work} />
    <Education education={resume.education} />
</div>

<style global>
    .image + .image {
        margin-top: 1rem;
    }

    /* Lux theme overrides. */
    .lux {
        background-color: hsl(0, 0%, 96%);
    }
</style>

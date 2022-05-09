<script lang="ts">
    import DateRange from "./DateRange.svelte";

    export let education: School[];
</script>

<section class="section">
    <div class="container">
        <h1 class="title">Education</h1>
        {#each education as { institution, url, area, studyType, startDate, endDate, score, images }}
            <article class="media">
                <figure class="has-text-centered media-left">
                    <DateRange {endDate} {startDate} />
                    {#each images as picturePath, index}
                        <p class="image is-96x96 is-inline-flex">
                            <img
                                alt={`${institution} logo ${index}`}
                                src={picturePath}
                            />
                        </p>
                    {/each}
                </figure>
                <div class="media-content">
                    <h1 class="title is-size-4">
                        <a href={url} rel="noopener noreferrer" target="_blank">
                            {institution}
                        </a>
                    </h1>
                    <h2 class="subtitle">{`${studyType} of ${area}`}</h2>
                    <p>{`GPA: ${score}`}</p>
                </div>
            </article>
        {/each}
    </div>
</section>

<script lang="ts">
    import DateRange from "./DateRange.svelte";

    export let work: Job[];

    // Sanitize the job name.
    $: work = work.map((job) => ({
        ...job,
        name: job.name.replace(/ *\([^)]*\) */g, ""),
    }));
</script>

<section class="section">
    <div class="container">
        <h1 class="title">Experience</h1>
        {#each work as { name, position, url, startDate, endDate, summary, highlights, images }}
            <article class="media">
                <figure class="has-text-centered media-left">
                    <DateRange {endDate} {startDate} />
                    {#each images as picturePath, index}
                        <p class="image is-128x128">
                            <img
                                alt={`${name} logo ${index}`}
                                loading="lazy"
                                src={picturePath}
                            />
                        </p>
                    {/each}
                </figure>
                <div class="media-content">
                    <h1 class="title is-size-4">
                        <a href={url} rel="noopener noreferrer" target="_blank">
                            {name}
                        </a>
                    </h1>
                    <h2 class="subtitle">{position}</h2>
                    <p>{summary}</p>
                    <div class="content">
                        <ul>
                            {#each highlights as highlight}
                                <li>{highlight}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </article>
        {/each}
    </div>
</section>

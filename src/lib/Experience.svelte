<script>
    // propTypes = {
    //     work: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             company: PropTypes.string,
    //             position: PropTypes.string,
    //             website: PropTypes.string,
    //             startDate: PropTypes.string,
    //             endDate: PropTypes.string,
    //             summary: PropTypes.string,
    //             highlights: PropTypes.arrayOf(PropTypes.string),
    //             pictures: PropTypes.arrayOf(PropTypes.string)
    //         })
    //     )
    // };
    export let work;

    import DateRange from "./DateRange.svelte";

    // Sanitize the company name.
    work.forEach(
        (job) => (job.company = job.company.replace(/ *\([^)]*\) */g, ""))
    );
</script>

<section class="section">
    <div class="container">
        <h1 class="title">Experience</h1>
        {#each work as { company, position, website, startDate, endDate, summary, highlights, pictures }}
            <article class="media">
                <figure class="has-text-centered media-left">
                    <DateRange {endDate} {startDate} />
                    {#each pictures as picturePath, index}
                        <p class="image is-128x128">
                            <img
                                alt={`${company} logo ${index}`}
                                src={picturePath}
                            />
                        </p>
                    {/each}
                </figure>
                <div class="media-content">
                    <h1 class="title is-size-4">
                        <a
                            href={website}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {company}
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

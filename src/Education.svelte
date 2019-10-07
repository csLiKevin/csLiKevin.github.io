<script>
    // propTypes = {
    //     education: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             institution: PropTypes.string,
    //             area: PropTypes.string,
    //             studyType: PropTypes.string,
    //             startDate: PropTypes.string,
    //             endDate: PropTypes.string,
    //             gpa: PropTypes.string,
    //             pictures: PropTypes.arrayOf(PropTypes.string)
    //         })
    //     )
    // };
    export let education;

    import DateRange from "./DateRange.svelte";
</script>

<section class="section">
    <div class="container">
        <h1 class="title">Education</h1>
        {#each education as { institution, area, studyType, startDate, endDate, gpa, pictures }}
            <article class="media">
                <figure class="has-text-centered media-left">
                    <DateRange {endDate} {startDate} />
                    {#each pictures as picturePath, index}
                        <p class="image is-96x96 is-inline-flex">
                            <img
                                alt={`${institution} logo ${index}`}
                                src={`/public/${picturePath}`} />
                        </p>
                    {/each}
                </figure>
                <div class="media-content">
                    <h1 class="title is-size-4">{institution}</h1>
                    <h2 class="subtitle">{`${studyType} of ${area}`}</h2>
                    <p>{`GPA: ${gpa}`}</p>
                </div>
            </article>
        {/each}
    </div>
</section>

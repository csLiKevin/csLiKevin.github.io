<script>
    // propTypes = {
    //     startDate: PropTypes.string,
    //     endDate: PropTypes.string
    // };
    export let startDate;
    export let endDate;

    const startYear = parseInt(startDate);
    const endYear = parseInt(endDate) || "";
    const colorClass = endYear ? "has-text-grey-light" : "has-text-success";
</script>

<div class={`is-daterange has-text-weight-bold is-size-5 ${colorClass}`}>
    {`${startYear} - ${endYear}`}
</div>

<style>
    .is-daterange {
        margin-bottom: 0.2rem;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
    }
</style>

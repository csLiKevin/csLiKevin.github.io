<script>
    import Basics from "./Basics.svelte";
    import Experience from "./Experience.svelte";
    import Education from "./Education.svelte";
    import resume from "./resume.json";
</script>

<div class="lux">
    <Basics {...resume.basics} />
    <Experience work={resume.work} />
    <Education education={resume.education} />
</div>

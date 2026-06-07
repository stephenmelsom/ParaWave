<script lang="ts">
  const appName = 'ParaWave';
</script>

<main class="shell" aria-label="ParaWave app scaffold">
  <h1>{appName}</h1>
  <p>Project scaffold ready.</p>
</main>

<style>
  .shell {
    display: grid;
    min-height: 100vh;
    place-content: center;
    gap: 0.75rem;
    text-align: center;
  }

  h1 {
    margin: 0;
    font-family: 'Fraunces', 'IBM Plex Mono', serif;
    font-size: clamp(2rem, 8vw, 4rem);
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  p {
    margin: 0;
    color: #a99a82;
    font-size: 0.875rem;
    font-variant-numeric: tabular-nums;
  }
</style>

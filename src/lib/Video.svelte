<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Plyr from 'plyr';
  import Hls from 'hls.js';
  const { src, poster } = $props();

  let player : Plyr;

  let video: HTMLMediaElement | undefined = $state();
  let sourceEl:HTMLSourceElement | undefined = $state();

  onMount(() => {
    let hls: Hls | undefined;
    const source = sourceEl?.src;

    const defaultOptions: Plyr.Options = {
      controls: [ 'play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen' ],
    }

    if (Hls.isSupported() && source && video) {
      hls = new Hls();
      hls.loadSource(source);

      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        if (!hls) return;
        const availableQualities = hls.levels.map((l) => l.height);
        defaultOptions.quality = {
          default: availableQualities[availableQualities.length - 1],
          options: availableQualities,
          forced: true,        
          onChange: updateQuality,
        }
        if (video)
            player = new Plyr(video, defaultOptions);
      });

      hls.attachMedia(video);
    } else if (video) {
      player = new Plyr(video, defaultOptions);
    }

    function updateQuality(newQuality: number) {
      hls?.levels.forEach((level, levelIndex) => {
        if (level.height === newQuality) {
          console.log("Found quality match with " + newQuality);
          hls.currentLevel = levelIndex;
        }
      });
    }
  });


  onDestroy(() => { player?.destroy() });

</script>

  <video bind:this={video} 
      id="video-player" controls playsinline
      poster={poster}
  >
      <source bind:this={sourceEl}
        src="{src}" type="application/x-mpegURL" 
      >
      <track kind="captions" >
  </video>

<style>
</style>
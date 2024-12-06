<script>

  import Images from "../components/Images.svelte";
  import Pin from "../components/Pin.svelte";
</script>

<div class="bg-image"></div>
<Pin />

<div class="container flex justify-center items-center mx-auto">

  <div class="photo-container mx-auto sm:mt-2 md:mt-4 lg:mt-6">
    <header class="opacity-90 text-white text-center">

      <h1 class="text-5xl font-semibold lg:text-6xl">Helen Peet's 70th Birthday Celebration</h1>
      <p class="font-medium  text-xl lg:text-2xl">July 10, 1984</p>
    </header>
    <Images />
  </div>
</div>

<style>
  .bg-image {
    background: url('https://raw.githubusercontent.com/35degrees/peet-70/refs/heads/main/src/lib/images/mainbeeg.png') center center/cover
    no-repeat;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -10;

  }

  h1, p {
    color: rgba(75, 47, 47, 0.999);
  }

  .bg-image::before {
    content: '';
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, .26);

  }

  

</style>
<script>
  import Modal from "./Modal.svelte";
  let isModal = $state(false)
  let slide = $state(1)
  let slideArr = $state([])
  $inspect('arr', slideArr.length)

  function handleClick(num) {
    slide = num
    isModal = !isModal
  }
</script>
<div class="gallery grid sm:gap-2 md:gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:mt-2 md:mt-4 grid-flow-row relative">

  <div class="party-img party-img-1 col-span-2 row-span-2" onclick={() => handleClick(1)}>
    <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/1.jpeg?raw=true" alt="">
  </div>
  <div class="party-img party-img-2" onclick={() => handleClick(2)}>
    <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/2.jpeg?raw=true" alt="">
  </div>
  <div class="party-img party-img-3" onclick={() => handleClick(3)}>
    <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/3.jpeg?raw=true" alt="">
  </div>
  <div class="party-img party-img-4" onclick={() => handleClick(4)}>
    <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/4.jpeg?raw=true" alt="">
  </div>
  <div class="party-img party-img-9 row-span-2 contain h-auto" onclick={() => handleClick(9)}>
    <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/9.jpeg?raw=true" alt="" class="h-[96%]">
  </div>
  <div class="party-img party-img-6" onclick={() => handleClick(6)}>
    <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/6.jpeg?raw=true" alt="">
  </div>
  <div class="party-img party-img-7" onclick={() => handleClick(7)}>
    <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/7.jpeg?raw=true" alt="">
  </div>
  <div class="party-img party-img-8" onclick={() => handleClick(8)}>
    <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/8.jpeg?raw=true" alt="">
  </div>
  <div class="party-img party-img-5" onclick={() => handleClick(5)}>
    <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/5.jpeg?raw=true" alt="">
  </div>
  <div class="party-img party-img-10 row-span-2" onclick={() => handleClick(10)}>
     <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/10.jpeg?raw=true" alt="">
  </div>
  <div class="party-img party-img-11" onclick={() => handleClick(11)}>
     <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/11.jpeg?raw=true" alt="">
  </div>

  <div class="party-img party-img-14 row-span-2" onclick={() => handleClick(14)}>
     <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/14.jpeg?raw=true" alt="">
  </div>
  <div class="party-img party-img-13" onclick={() => handleClick(13)}>
     <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/13.jpeg?raw=true" alt="">
  </div>
  <div class="party-img party-img-12" onclick={() => handleClick(12)}>
     <img src="https://github.com/35degrees/hhp-70/blob/main/src/lib/images/12.jpeg?raw=true" alt="">
  </div>
</div>
<Modal bind:isModal bind:slide bind:slideArr/>
<style>

  .party-img:not(.party-img-1, .party-img-9, .party-img-10, .party-img-14) {
    max-height: 220px;
    max-width: 350px;
  }
  img {
    border-radius: 1rem;
    box-shadow: 8px 11px 26px 0px rgba(0,0,0,0.6);
    height: 100%;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
</style>
<script>
  import { fade, fly } from "svelte/transition";
  let { isModal=$bindable(), slide=$bindable(), slideArr=$bindable() } = $props()
  $inspect(isModal)
  $inspect(slide)
  function handleExit() {
    isModal = !isModal
    slideArr = []
  }

  let indexArr = $derived(slideArr[1] - slideArr[0])

  function slideBackward() {
    slide === 1 ? slide = 14 : slide--
    slideArr.splice(2)
    slideArr.unshift(slide)
    slideArr.unshift(slide-1)
  }
  function slideForward() {
    slide === 14 ? slide = 1 : slide++
    slideArr.splice(2)
    slideArr.unshift(slide)
    slideArr.unshift(slide+1)
  }
  $inspect(slideArr)
</script>

{#if isModal}
<div in:fade={{duration: 200, delay: 330}} class="exit" onclick={() => handleExit()}>ⓧ</div>
<div 
  in:fade={{duration: 220}}
  out:fade={{duration: 80}}

class="modal fixed flex flex-row justify-between">


<div onclick={() => slideBackward()} in:fade={{duration: 120, delay: 330}} class="cursor-pointer arrow arrow-left sm:pl-[2rem] md:pl-[3rem] lg:pl-[3.5rem] sm:text-6xl md:text-8xl">
  <p>⃖</p>

</div>

  {#key slide}
  <div 
  in:fly={{x: indexArr === 1 ? -400 : 400 , y: slideArr.length === 0 ? -400: 0, duration: 280, delay: 180}}
  out:fly={{x: indexArr === -1 ? -450 : 450, duration: 280}}
  class="modal-img max-w-50 md:w-[640px] sm:w-[350px] lg:w-[1050px]">
    <img src={`https://github.com/35degrees/hhp-70/blob/main/src/lib/images/${slide}}.jpeg?raw=true`} alt="">
  </div>
  {/key}

  <div onclick={() => slideForward()} in:fade={{duration: 120, delay: 330}} class="cursor-pointer arrow arrow-right sm:pl-[9rem] md:pl-[33rem] lg:pl-[64rem] ml-20 sm:text-6xl md:text-8xl">
    <p>⃗</p>
  </div>
</div>
{/if}

<style>
  .modal {
    height: 100vh;
		width: 100vw;
		/* z-index: 92; */
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: hsla(14, 65%, 9%, 0.941);
		overflow: hidden;
    gap: 12rem;
    
  }
  .modal-img {
    /* display: flex; */
  
    opacity: 100%;
    position: absolute;
    z-index: 99;
    flex-direction: row;

  }

  .modal-img img {
    border-radius: 12px;
    width: 100%;
    opacity: 100%;
    max-height: 900px;
    height: 100%;
    object-fit: contain;
  }

 

  .arrow {
    color: #fff;

  }
 
  /* .arrow-right {
    padding-left: 70rem;
  } */

  .exit {
    position: fixed;
    top: 2%;
    right: 4%;
    font-size: 3rem;
    color: #fff;
    fill: #fff;
    z-index: 99;
    cursor: pointer;
  }

</style>
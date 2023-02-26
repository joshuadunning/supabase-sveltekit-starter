<script lang="ts">
  import StarRating from 'svelte-star-rating'
  import Copyright from 'svelte-material-icons/Copyright.svelte'
</script>
<div class="h-full grid max-md:grid-cols-1 grid-cols-2">
  <div class="h-full bg-purple-700 align-middle max-md:hidden visible">
    <div class="app-name">App Name</div>
    <div class='review-container align-middle'>
      <div class="review-text xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl">We've been using Untitled to kick start every new project and can't imagine working without it</div>
      <img class="avatar" src="http://xsgames.co/randomusers/avatar.php?g=male" />
      <div class="review-name">Frankie Sullivan</div>
      <div class="review-title">CEO, Untitled</div>
      <div class="mt-4"><StarRating rating="{5}"/></div>
    </div>
    <div class="copyright-container">
      <Copyright color="white" />
      <span class="copyright-text">Untitled {new Date().toISOString().split('-')[0]}</span>
    </div>
  </div>
  <div class="flex w-full justify-center">
    <div class="flex xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-11/12 w-11/12 align-middle">
      <slot />
    </div>
  </div>
</div>

<style lang="postcss">
  .app-name {
    position: absolute;
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    padding: 20px;
  }
  .avatar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: 0 10px;
    border: 2px solid white;
  }
  .copyright-container {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    align-items: center;
  }
  .copyright-text {
    font-size: 0.8rem;
    font-weight: 500;
    color: white;
    padding: 0 10px;
  }
  .review-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 70px;
    text-align: center;
    margin-text-outline: 20%;
  }
  .review-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }
  .review-title {
    font-size: 1rem;
    font-weight: 500;
    color: white;
  }
  .review-text {
    font-weight: 500;
    color: white;
    padding: 20px;
  }
</style>

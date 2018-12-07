<template>
  <div>
    <banner></banner>
    <flash-sale></flash-sale>
  </div>
</template>
<script>
  import Banner from  '@@/themes/default/components/home/Banner';
  import FlashSale from  '@@/themes/default/components/home/FlashSale';

  export default {
    name: 'Home',
    components : {
      'banner': Banner,
      'flash-sale': FlashSale,
    }
  }
</script>

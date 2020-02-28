<template>
  <div>
    <Carousel :initSelected="'three'" :interval="6">
      <CarouselItem name="one">
        <div class="carouse-box">1</div>
      </CarouselItem>
      <CarouselItem name="two">
        <div class="carouse-box">2</div>
      </CarouselItem>
      <CarouselItem name="three">
        <div class="carouse-box">3</div>
      </CarouselItem>
    </Carousel>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>


<script>
  import Carousel from '../../../src/Carousel/Carousel/Carousel';
  import CarouselItem from '../../../src/Carousel/CarouselItem/Carousel-item';
  export default {
    components: {
      Carousel,
      CarouselItem
    },
    methods: {

    },
    data() {
      return {
        content: `
<Carousel :initSelected="carouselSelected" :interval="6">
  <CarouselItem name="one">
    <div class="carouse-box">1</div>
  </CarouselItem>
  <CarouselItem name="two">
    <div class="carouse-box">2</div>
  </CarouselItem>
  <CarouselItem name="three">
    <div class="carouse-box">3</div>
  </CarouselItem>
</Carousel>
    `.replace(/^\t+| +$/g, '').trim()

      }
    }
  }
</script>

<style lang="less">
  .carouse-box {
    width: 100%;
    height: 170px;
    background: #666666;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
</style>

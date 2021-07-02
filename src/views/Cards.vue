<template>
  <div class="container">
    <section v-on:click="alert()" class="cards" id="card-1" tabindex="-1">
      <CoverImg/>
      <div class="header">
        <span class="thumb">
          <Thumbnail/>
        </span>
        <span class="title">
          <Titles :key="cardData.id" :cardData="cardData" />
        </span>
      </div>
      <Body :key="cardData.id" :lorem="cardData.lorem" />
      <Footer :key="cardData.id" :footerText="cardData.footerText" />
    </section>
    <section v-on:click="goToKasaPage()" class="cards" id="card-2" tabindex="-1">
      <div class="header">
        <span class="thumb">
          <Thumbnail/>
        </span>
        <span class="title">
          <Titles :key="cardData.id" :cardData="cardData" />
        </span>
      </div>
      <CoverImg/>
      <Body :key="cardData.id" :lorem="cardData.lorem" />
      <Footer :key="cardData.id" :footerText="cardData.footerText" />
    </section>
    <section class="cards" id="card-3" tabindex="-1">
      <div class="header">
        <span class="thumb">
          <Thumbnail/>
        </span>
        <span class="title">
          <Titles :key="cardData.id" :cardData="cardData" />
        </span>
      </div>
      <Body :key="cardData.id" :lorem="cardData.lorem" />
    </section>
    <section class="cards" id="card-4" tabindex="-1">
      <CoverImg/>
      <Body :key="cardData.id" :lorem="cardData.shortLorem" />
    </section>
  </div>
</template>

<script>
import CoverImg from '@/components/CoverImg.vue'
import Titles from '@/components/Titles.vue'
import Thumbnail from '@/components/Thumbnail.vue'
import Body from '@/components/Body.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Cards',
  components: {
    CoverImg,
    Titles,
    Thumbnail,
    Body,
    Footer
  },
  data() {
    return {
      cardData: {
        id: 123,
        title: 'Card title',
        subTitle: 'Card subtitle',
        shortLorem: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        lorem: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit neque beatae odit labore, suscipit magnam quidem. Porro nulla esse fugiat consequatur recusandae enim. Non pariatur quasi libero facilis recusandae provident!',
        footerText: 'Card footer'
      }
    }
  },
  methods: {
    alert: function() {
      window.alert('You have clicked on the first Card.')
    },
    goToKasaPage: function() {
      window.location.href = "https://www.kasa.com"
    }
  }
}
</script>

<style scoped>
  .container {
    box-sizing:border-box;
  }

  .cards {
    padding: 30px 5px;
    border: 2px solid rgb(206, 203, 203);
    overflow: hidden;
  }

  .cards:hover, .cards:active {
      background-color: #b9b4ae;
  }

  .cards:focus {
      border: 2px solid rgb(75, 77, 236);    
  }

  .footer {
    position: relative;
    bottom: 0%;
  }

  .header {
    display: block;
  }

  .thumb {
    width: 30%;
    display: inline-block;
  }

  .title {
    width: 60%;
    display: inline-block;
  }

@media screen and (min-width: 320px) {
    .cards {
        max-height: 550px;
    }
}

@media screen and (min-width: 696px) and (max-width: 985px) {
    .cards {
        display: inline-block;
        width: 45%;
        margin: 20px 10px;
        height: 600px;
    }
}

@media screen and (min-width: 986px) {
    .cards {
        display: inline-block;
        width: 20%;
        margin: 20px 10px;
        height: 600px;
    }
}
</style>
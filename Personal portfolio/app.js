const { createApp } = Vue;

createApp({
  data() {
    return {
      carouselImages: [
        { imgSrc: "1.png",},
        { imgSrc: "2.png",},
        { imgSrc: "3.png",},
      ],
    };
  },
}).mount("#carouselApp");

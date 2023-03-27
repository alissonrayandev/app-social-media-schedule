<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/components/Commom/Header.vue";

export default {
  components: {
    Header,
  },
  metaInfo() {
    return {
      title: "Social Media Schedule",
      meta: [
        {
          name: "description",
          content: "An application to schedule your social media posts",
        },
        {
          name: "keywords",
          content: "social media, schedule, posts, management, marketing",
        },
        {
          property: "og:title",
          content: "Social Media Schedule",
        },
        {
          property: "og:description",
          content: "An application to schedule your social media posts",
        },
        {
          property: "og:image",
          content: "https://example.com/your-image.png",
        },
        {
          property: "og:url",
          content: "https://example.com",
        },
        {
          property: "twitter:title",
          content: "Social Media Schedule",
        },
        {
          property: "twitter:description",
          content: "An application to schedule your social media posts",
        },
        {
          property: "twitter:image",
          content: "https://example.com/your-image.png",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: $base-color-background;
}

div,
header,
footer,
section {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

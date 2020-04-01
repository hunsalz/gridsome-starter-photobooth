<template>
  <div class="card-layout">
    {{ item.name }}
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.card-layout {
  position: relative;
  margin: 0 0 1em 0;
  border-radius: var(--radius) var(--radius) 0 0;
  background-color: var(--bg-content-color);

  &__header {
    border-radius: var(--radius) var(--radius) 0 0;
    overflow: hidden;

    &:empty {
      display: none;
    }

    .g-image {
      width: 100%;
      height: auto;
      height: 20vh;
      object-fit: cover;
    }
  }

  &__content {
    padding: 3em;
  }

  &__title {
    margin-top: 0;
  }

  &__link_to_painting {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0%;
    z-index: 0;
  }
}
</style>

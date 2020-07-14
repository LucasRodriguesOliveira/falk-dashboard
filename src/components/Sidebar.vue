<template>
  <aside>
    <transition name="slide">
      <div class="container" v-if="menuIsOpen">
        <slot></slot>
      </div>
    </transition>
    <div class="actions">
      <div class="button" v-if="!menuIsOpen" @click="toggleMenu()">
        <i class="fas fa-bars"></i>
        <div class="tooltip">Abrir</div>
      </div>
      <div class="button" v-else @click="toggleMenu()">
        <i class="fas fa-times"></i>
        <div class="tooltip">Fechar</div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      menuIsOpen: true
    }
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    }
  }
}
</script>

<style scoped>
  aside {
    height: 100%;
    position: fixed;
    top: 54px;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: space-around;
  }

  .content {
    box-shadow: 3px 1px 2px rgba(0, 0, 0, 0.15);
  }

  .actions {
    padding: 10px 0;
  }

  .button .fas {
    opacity: 0.3;
    padding: 8px 16px;
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
    background-color: #49DC89;
    cursor: pointer;
    transition: all 0.4s ease 0.1s;
    text-align: center;
  }

  .button:hover .fas {
    opacity: 1;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
    box-shadow: 3px 1px 3px rgba(0, 0, 0, 0.2);
    padding: 8px 16px 8px 24px;
    background-color: #41c279;
  }

  .button:hover .tooltip {
    opacity: 1;
    width: 100px;
    font-size: 1rem;
  }

  .tooltip {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    left: 100%;
    top: 12px;
    width: 0;
    height: 33px;
    font-size: 0.4rem;
    font-weight: 400;
    opacity: 0;
    color: white;
    text-align: center;
    padding: 5px;
    transition: all 0.4s ease 0.3s;
  }

  .container {
    height: 100%;
    box-shadow: 3px 1px 2px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    background-color: white;
    z-index: 1;
  }

  .container, .content {
    width: 350px;
    animation: slideInLeft;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .slide-leave-active {
    animation: slideOutLeft;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes slideOutLeft {
    from {
      width: 350px;
      opacity: 1;
    }

    to {
      width: 0;
      opacity: 0;
    }
  }

  @keyframes slideInLeft {
    from {
      width: 0;
      opacity: 0;
    }

    to {
      width: 350px;
      opacity: 1;
    }
  }

</style>
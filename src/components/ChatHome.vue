<template>
  <div class="chat-home">
    <i class="fas fa-comments"></i>
    <div>Selecione uma conversa ao lado.</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .chat-home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 55px;
    cursor: default;
  }

  .fa-comments {
    font-size: 4rem;
    color: #49DC89;
    opacity: 0.5;
  }
</style>
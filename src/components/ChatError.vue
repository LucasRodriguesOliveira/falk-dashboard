<template>
  <div class="chat-error">
    <div class="oops">Oops!</div>
    <div class="message">Parece que aconteceu algum problema. Talvez essa conversa não exista!</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .chat-error {
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

  .oops {
    font-size: 4rem;
    color: #F55555;
    font-weight: bold;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    padding: 10px;
  }

  .message {
    font-size: 1.2rem;
    color: #444;
  }
</style>
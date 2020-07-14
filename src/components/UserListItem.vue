<template>
  <router-link :to="{name: 'Chat', params: { id: user.id }}">
    <div class="user-list-item" v-if="user">
      <div class="user-icon">
        <i class="fas fa-user"></i>
      </div>
      <div class="user-info" :id="user.id">
        <div class="user-name">{{user.name}}</div>
        <div class="user-last-message">{{user.text}}</div>
      </div>
      <div class="notification" :hidden="!user.notification">{{user.notification}}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #666;
  }

  .user-list-item {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 10px 5px 20px 5px;
    cursor: pointer;
    transition: all 0.4s ease 0.1s;
    animation: opacity;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .user-icon {
    padding: 10px;
    background-color: #49DC89;
    border-radius: 50%;
  }

  .fa-user {
    font-size: 1.5rem;
    color: white;
  }

  .user-info {
    max-width: 200px;
    max-height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .user-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: #49DC89;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.15);
    margin: 5px 5px 5px 0;
  }

  .user-last-message {
    font-size: 1.1rem;
  }

  .notification {
    position: absolute;
    top: 20px;
    right: 20px;
    font-weight: bold;
    background-color: #49DC89;
    color: white;
    border-radius: 15px;
    padding: 3px 8px;
  }

  .user-list-item:hover {
    background-color: #EEE;
  }

  @keyframes opacity {
    from {
      opacity: 0;
      transform: translate(0, -50%);
    }

    to {
      opacity: 1;
    }
  }
</style>
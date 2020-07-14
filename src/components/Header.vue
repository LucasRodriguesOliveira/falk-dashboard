<template>
  <header>
    <div class="project-name">Dashboard</div>
    <div class="logo">Falk</div>
    <div class="actions">
      <router-link exact to="/" active-class="active">Conversas</router-link>
      <router-link :to="{ name: 'Config' }" active-class="active">Configurações</router-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #49DC89;
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.15),
                0 1px 1px rgba(0, 0, 0, 0.05);
  }

  .project-name {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
    margin-left: 10px;
  }

  .logo {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
  }

  .actions > * {
    font-size: 1.1rem;
    font-weight: bold;
    color: #3A634C;
    display: inline-block;
    padding: 16px 24px;
    text-decoration: none;
    transition: 0.4s ease 0.1s;
  }

  .actions > *:hover, .active {
    color: white;
    background-color: #41c279;
  }
</style>
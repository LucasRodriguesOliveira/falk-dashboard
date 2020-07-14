<template>
  <div class="configuration">
    <Sidebar />
  </div>
</template>

<script>
const Sidebar = () => import(/* webpackChunkName: "config" */ '@/components/Sidebar');

export default {
  components: {
    Sidebar
  }
}
</script>

<style>

</style>
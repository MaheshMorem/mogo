<template>
   <DashBoard>
      <router-view></router-view>
   </DashBoard>
</template>

<script>
import DashBoard from '../src/components/DashBoard.vue'

export default {
   components: {
      DashBoard,
   },
};
</script>
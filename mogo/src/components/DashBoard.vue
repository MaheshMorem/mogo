<template>
   <div class="layout">
      <TopNavBar class="TopNavBar" />
      <div class="content-container">
         <main class="main-content">
            <slot></slot>
         </main>
      </div>
   </div>
</template>

<script>
import TopNavBar from './TopNavBar.vue';

export default {
   components: {
      TopNavBar,
   },
};
</script>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.TopNavBar {
    flex-shrink: 0;
    height: 60px;
}

.content-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    overflow: auto;
}

.main-content {
    width: 100%;
    height: 100%;
    display: flex;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .TopNavBar {
    height: auto;
  }
  
  .main-content {
    flex-direction: column;
  }
}
</style>

<template>
  <Teleport to="body">
    <transition name="toast">
      <div v-if="isVisible" class="toast-container">
        <div class="toast-content">
          {{ message }}
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: "Product added to cart",
  },
  duration: {
    type: Number,
    default: 3000,
  },
});

const isVisible = ref(false);

const show = () => {
  isVisible.value = true;
  setTimeout(() => {
    isVisible.value = false;
  }, props.duration);
};

defineExpose({ show });
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}

.toast-content {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.toast-enter-to,
.toast-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>

<template>
  <component
    ref="_ref"
    class="ec-button"
    :is="tag"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`ec-button--${type}`]: props.type,
      [`ec-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-loading': loading,
      'is-disabled': disabled,
    }"
    @click="(e: MouseEvent) => (useThrottle ? onThrottle(e) : onClick(e))">
    <template v-if="loading">
      <slot name="loading">
        <ec-icon
          class="loading-icon"
          icon="spinner"
          :style="iconStyle"
          size="1x"
          spin />
      </slot>
    </template>
    <ec-icon
      :icon="icon"
      size="1x"
      :style="iconStyle"
      v-if="icon && !loading" />
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
  import { throttle } from 'lodash-es';
  import EcIcon from "../Icon/Icon.vue";

  const _ref = ref<HTMLButtonElement>();
  const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: 'button',
    size: 'large',
    type: 'primary',
    useThrottle: false,
    throttleTime: 500,
  });
  const emits = defineEmits<ButtonEmits>();
  const slots = defineSlots();
  defineOptions({
    name: 'EcButton',
  });
  defineExpose<ButtonInstance>({
    ref: _ref,
  });

  const iconStyle = computed(() => ({
    marginRight: slots.default ? '6px' : '0px',
  }));

  const onClick = (e: MouseEvent) => {
    emits('click', e);
  };

  const onThrottle = throttle(onClick, props.throttleTime);
</script>
<style scoped>
  @import './style.css';
</style>

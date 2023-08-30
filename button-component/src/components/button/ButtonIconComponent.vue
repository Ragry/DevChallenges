<template>
    <span class="material-symbols-rounded text-center font-medium text-sm/normal"
        :class="{
            'text-[var(--text-color-default)]': isColorDefault,
            'text-[var(--text-color-text)]': isColorText,
            'text-[var(--text-color-inverted)]': isColorInverted,
            'text-[var(--text-color-disabled)]': isDisabled }"
    >
        {{ iconName }}
    </span>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ButtonColor, ButtonVariant } from './button.types';
import { useButtonTextColor } from './button.composables';

const props = defineProps({
    iconName: String,
    color: String as PropType<ButtonColor>,
    variant: String as PropType<ButtonVariant>,
    disabled: Boolean
});

const {
    isColorDefault,
    isColorText,
    isColorInverted,
    isDisabled
} = useButtonTextColor(props.color, props.disabled, props.variant);
</script>
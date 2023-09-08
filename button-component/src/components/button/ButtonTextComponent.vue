<template>
    <span class="text-center font-['Noto_Sans_JP'] font-medium text-sm/normal"
        :class="{
            'text-[var(--text-color-default)]': colorDefault,
            'text-[var(--text-color-primary)]': colorPrimary,
            'text-[var(--text-color-secondary)]': colorSecondary,
            'text-[var(--text-color-danger)]': colorDanger,
            'text-white': colorWhite,
            'text-[var(--text-color-disabled)]': disabled,
            'group-hover:text-[var(--text-color-default)]': hoverColorDefault,
            'group-hover:text-white': hoverColorWhite,
            'group-focus:text-[var(--text-color-default)]': hoverColorDefault,
            'group-focus:text-white': hoverColorWhite
        }"
    >
        {{ caption }}
    </span>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ButtonColor, ButtonVariant } from './button.types';
import { useButtonTextColor } from './button.composables';

const props = defineProps({
    caption: String,
    color: String as PropType<ButtonColor>,
    variant: String as PropType<ButtonVariant>,
    disabled: Boolean
});

const {
    colorDefault,
    colorPrimary,
    colorSecondary,
    colorDanger,
    colorWhite,
    hoverColorDefault,
    hoverColorWhite
} = useButtonTextColor(props.color, props.disabled, props.variant);
</script>
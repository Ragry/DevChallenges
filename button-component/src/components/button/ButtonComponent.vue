<template>
    <button class="flex items-center border rounded-md group" :class="{
        'shadow-[0_2px_3px_0px] shadow-[var(--shadow-color)]': shadow,
        'border-transparent': !border,
        'border-[var(--text-color-default)]': border && borderIsDefault,
        'border-[var(--text-color-primary)]': border && borderIsPrimary,
        'border-[var(--text-color-secondary)]': border && borderIsSecondary,
        'border-[var(--text-color-danger)]': border && borderIsDanger,
        'cursor-not-allowed': disabled,
        'py-1.5 px-3': sizeSm,
        'py-2 px-4': sizeMd,
        'py-[11px] px-[22px]': sizeLg,
        'bg-white': bgIsWhite,
        'bg-[var(--color-default)]': bgColorDefault,
        'bg-[var(--color-primary)]': bgIsPrimary,
        'bg-[var(--color-secondary)]': bgIsSecondary,
        'bg-[var(--color-danger)]': bgIsDanger,
        'hover:border-[var(--color-default-hover)]': hoverColorDefault,
        'hover:border-[var(--color-primary-hover)]': hoverIsPrimary,
        'hover:border-[var(--color-secondary-hover)]': hoverIsSecondary,
        'hover:border-[var(--color-danger-hover)]': hoverIsDanger,
        'hover:bg-[var(--color-default-hover)]': hoverColorDefault,
        'hover:bg-[var(--color-primary-hover)]': hoverIsPrimary,
        'hover:bg-[var(--color-secondary-hover)]': hoverIsSecondary,
        'hover:bg-[var(--color-danger-hover)]': hoverIsDanger,
        'hover:bg-[var(--color-default-light)]': hoverIsDefaultLight,
        'hover:bg-[var(--color-primary-light)]': hoverIsPrimaryLight,
        'hover:bg-[var(--color-secondary-light)]': hoverIsSecondaryLight,
        'hover:bg-[var(--color-danger-light)]': hoverIsDangerLight,
        'focus:border-[var(--color-default-hover)]': hoverColorDefault,
        'focus:border-[var(--color-primary-hover)]': hoverIsPrimary,
        'focus:border-[var(--color-secondary-hover)]': hoverIsSecondary,
        'focus:border-[var(--color-danger-hover)]': hoverIsDanger,
        'focus:bg-[var(--color-default-hover)]': hoverColorDefault,
        'focus:bg-[var(--color-primary-hover)]': hoverIsPrimary,
        'focus:bg-[var(--color-secondary-hover)]': hoverIsSecondary,
        'focus:bg-[var(--color-danger-hover)]': hoverIsDanger,
        'focus:bg-[var(--color-default-light)]': hoverIsDefaultLight,
        'focus:bg-[var(--color-primary-light)]': hoverIsPrimaryLight,
        'focus:bg-[var(--color-secondary-light)]': hoverIsSecondaryLight,
        'focus:bg-[var(--color-danger-light)]': hoverIsDangerLight
    }" :disabled="disabled">
        <ButtonIconComponent v-if="startIcon" class="pr-2" :iconName="startIcon" :color="color" :disabled="disabled"
            :variant="variant" />
        <ButtonTextComponent :caption="caption" :color="color" :disabled="disabled" :variant="variant" />
        <ButtonIconComponent v-if="endIcon" class="pl-2" :iconName="endIcon" :color="color" :disabled="disabled"
            :variant="variant" />
    </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ButtonColor, ButtonSize, ButtonVariant } from './button.types';
import ButtonIconComponent from './ButtonIconComponent.vue';
import ButtonTextComponent from './ButtonTextComponent.vue';
import { useButtonStyles } from './button.composables';

const props = defineProps({
    caption: String,
    color: String as PropType<ButtonColor>,
    disabled: Boolean,
    disableShadow: Boolean,
    size: String as PropType<ButtonSize>,
    startIcon: String,
    endIcon: String,
    variant: String as PropType<ButtonVariant>
});

const { border, borderIsDefault, borderIsPrimary, borderIsSecondary, borderIsDanger,
    shadow,
    sizeSm, sizeMd, sizeLg,
    bgIsWhite, bgColorDefault, bgIsPrimary, bgIsSecondary, bgIsDanger,
    hoverColorDefault, hoverIsPrimary, hoverIsSecondary, hoverIsDanger,
    hoverIsDefaultLight, hoverIsPrimaryLight, hoverIsSecondaryLight, hoverIsDangerLight
} = useButtonStyles(props.color, props.disabled, props.disableShadow, props.variant, props.size);
</script>
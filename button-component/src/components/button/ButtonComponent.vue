<template>
    <button class="flex items-center border rounded-md" :class="{
        'shadow-[0_2px_3px_0px_rgba(51,51,51,0.2)]': shadow,
        'border-transparent': !border,
        'border-[var(--text-color-default)]': border && bgColorDefault,
        'border-[var(--text-color-primary)]': border && borderIsPrimary,
        'border-[var(--text-color-secondary)]': border && borderIsSecondary,
        'border-[var(--text-color-danger)]': border && borderIsDanger,
        'cursor-default': disabled,
        'py-1.5 px-3': isSm,
        'py-2 px-4': isMd,
        'py-[11px] px-[22px]': isLg,

        'bg-white': bgIsWhite,
        'bg-[var(--color-default)]': bgColorDefault,
        'bg-[var(--color-primary)]': bgIsPrimary,
        'bg-[var(--color-secondary)]': bgIsSecondary,
        'bg-[var(--color-danger)]': bgIsDanger,
        'hover:border-none': variantOutline,
        'hover:bg-[var(--color-default-hover)]': hoverColorDefault,
        'hover:bg-[var(--color-primary-hover)]': hoverIsPrimary,
        'hover:bg-[var(--color-secondary-hover)]': hoverIsSecondary,
        'hover:bg-[var(--color-danger-hover)]': hoverIsDanger
    }">
        <ButtonIconComponent v-if="startIcon" class="pr-2" :iconName="startIcon" :color="color" :disabled="disabled"
            :variant="variant" />
        <ButtonTextComponent :caption="caption" :color="color" :disabled="disabled" :variant="variant" />
        <ButtonIconComponent v-if="endIcon" class="pl-2" :iconName="endIcon" :color="color" :disabled="disabled"
            :variant="variant" />
    </button>
</template>

<script setup lang="ts">
import { Ref, ref, PropType } from 'vue';
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

const variantOutline = props.variant === "outline";

const { border, borderIsPrimary, borderIsSecondary, borderIsDanger, shadow, bgIsWhite,
    bgColorDefault, bgIsPrimary, bgIsSecondary, bgIsDanger,
    hoverColorDefault, hoverIsPrimary, hoverIsSecondary, hoverIsDanger
} = useButtonStyles(props.color, props.disabled, props.disableShadow, props.variant);

const isSm: Ref<boolean> = ref(props.size === "sm");
const isMd: Ref<boolean> = ref(props.size === "md" || !props.size);
const isLg: Ref<boolean> = ref(props.size === "lg");

</script>
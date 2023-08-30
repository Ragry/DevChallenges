import { Ref, ref } from "vue";
import { ButtonColor, ButtonVariant } from "./button.types";

export function useButtonTextColor(color: ButtonColor | undefined, disabled: boolean, variant: ButtonVariant | undefined) {
    const variantDefault = !variant;
    const variantOutline = variant === "outline";
    const variantText = variant === "text";
    const propColorPrimary = color === "primary";
    const propColorSecondary = color === "secondary";
    const propColorDanger = color === "danger";
    const useParticularColor = propColorPrimary || propColorSecondary || propColorDanger;

    const colorDefault: Ref<boolean> = ref((variantDefault || variantOutline) && !disabled && !useParticularColor);
    const colorPrimary: Ref<boolean> = ref(variantOutline && !disabled && propColorPrimary);
    const colorSecondary: Ref<boolean> = ref(variantOutline && !disabled && propColorSecondary);
    const colorDanger: Ref<boolean> = ref(variantOutline && !disabled && propColorDanger);

    const colorText: Ref<boolean> = ref(variantText && !disabled && !useParticularColor);
    const colorInverted: Ref<boolean> = ref(variantDefault && !disabled && useParticularColor);
    const isDisabled: Ref<boolean> = ref(disabled === true);

    return {
        colorDefault,
        colorPrimary,
        colorSecondary,
        colorDanger,
        isColorText: colorText,
        isColorInverted: colorInverted,
        isDisabled
    }
}

export function useButtonStyles(color: ButtonColor | undefined, disabled: boolean, disableShadow: boolean, variant: ButtonVariant | undefined) {
    const variantDefault = !variant;
    const variantOutline = variant === "outline";
    const variantText = variant === "text";
    const colorDefault = color === "default" || !color;
    const colorPrimary = color === "primary";
    const colorSecondary = color === "secondary";
    const colorDanger = color === "danger";

    const border: Ref<boolean> = ref(variantOutline);
    const borderIsPrimary: Ref<boolean> = ref(variantOutline && colorPrimary);
    const borderIsSecondary: Ref<boolean> = ref(variantOutline && colorSecondary);
    const borderIsDanger: Ref<boolean> = ref(variantOutline && colorDanger);

    const shadow: Ref<boolean> = ref(!disableShadow && !disabled && variantDefault);

    const bgIsWhite: Ref<boolean> = ref(variantText ||
        (variantOutline && color === "default") ||
        (variantOutline && !color));
    const bgColorDefault: Ref<boolean> = ref(colorDefault &&
        (variantDefault));
    const bgIsPrimary: Ref<boolean> = ref(colorPrimary &&
        (variantDefault) &&
        (!disabled));
    const bgIsSecondary: Ref<boolean> = ref(colorSecondary &&
        (variantDefault) &&
        (!disabled));
    const bgIsDanger: Ref<boolean> = ref(colorDanger &&
        (variantDefault) &&
        (!disabled));

    const hoverColorDefault: Ref<boolean> = ref(colorDefault &&
        (variantDefault || variantOutline) &&
        (!disabled));
    const hoverIsPrimary: Ref<boolean> = ref(colorPrimary &&
        (variantDefault || variantOutline) &&
        (!disabled));
    const hoverIsSecondary: Ref<boolean> = ref(colorSecondary &&
        (variantDefault || variantOutline) &&
        (!disabled));
    const hoverIsDanger: Ref<boolean> = ref(colorDanger &&
        (variantDefault || variantOutline) &&
        (!disabled));

    return {
        border,
        borderIsPrimary,
        borderIsSecondary,
        borderIsDanger,
        shadow,
        bgIsWhite,
        bgColorDefault,
        bgIsPrimary,
        bgIsSecondary,
        bgIsDanger,
        hoverColorDefault,
        hoverIsPrimary,
        hoverIsSecondary,
        hoverIsDanger
    }
}
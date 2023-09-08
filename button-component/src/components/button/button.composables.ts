import { Ref, ref } from "vue";
import { ButtonColor, ButtonSize, ButtonVariant } from "./button.types";

interface ButtonTextColor {
    colorDefault: Ref<boolean>;
    colorPrimary: Ref<boolean>;
    colorSecondary: Ref<boolean>;
    colorDanger: Ref<boolean>;
    colorWhite: Ref<boolean>;
    hoverColorDefault: Ref<boolean>;
    hoverColorWhite: Ref<boolean>;
}

export function useButtonTextColor(
    color: ButtonColor | undefined,
    disabled: boolean,
    variant: ButtonVariant | undefined
): ButtonTextColor {
    const variantDefault = !variant;
    const variantOutline = variant === "outline";
    const propColorPrimary = color === "primary";
    const propColorSecondary = color === "secondary";
    const propColorDanger = color === "danger";
    const useParticularColor = propColorPrimary || propColorSecondary || propColorDanger;

    if (disabled) {
        return {
            colorDefault: ref(false),
            colorPrimary: ref(false),
            colorSecondary: ref(false),
            colorDanger: ref(false),
            colorWhite: ref(false),
            hoverColorDefault: ref(false),
            hoverColorWhite: ref(false)
        };
    }

    if (variantDefault) {
        return {
            colorDefault: ref(!disabled && !useParticularColor),
            colorPrimary: ref(!disabled && propColorPrimary),
            colorSecondary: ref(!disabled && propColorSecondary),
            colorDanger: ref(!disabled && propColorDanger),
            colorWhite: ref(!disabled && useParticularColor),
            hoverColorDefault: ref(!disabled && !useParticularColor),
            hoverColorWhite: ref(!disabled && useParticularColor)
        };
    } else if (variantOutline) {
        return {
            colorDefault: ref(!disabled && !useParticularColor),
            colorPrimary: ref(propColorPrimary),
            colorSecondary: ref(propColorSecondary),
            colorDanger: ref(propColorDanger),
            colorWhite: ref(false),
            hoverColorDefault: ref(false),
            hoverColorWhite: ref(false)
        };
    } else {
        return {
            colorDefault: ref(!useParticularColor),
            colorPrimary: ref(propColorPrimary),
            colorSecondary: ref(propColorSecondary),
            colorDanger: ref(propColorDanger),
            colorWhite: ref(false),
            hoverColorDefault: ref(false),
            hoverColorWhite: ref(false)
        };
    }
}

export function useButtonStyles(
    color: ButtonColor | undefined,
    disabled: boolean,
    disableShadow: boolean,
    variant: ButtonVariant | undefined,
    size: ButtonSize | undefined
) {
    const variantDefault = !variant;
    const variantOutline = variant === "outline";
    const variantText = variant === "text";
    const colorDefault = color === "default" || !color;
    const colorPrimary = color === "primary";
    const colorSecondary = color === "secondary";
    const colorDanger = color === "danger";

    const border: Ref<boolean> = ref(variantOutline);
    const borderIsDefault: Ref<boolean> = ref(variantOutline && colorDefault && !disabled);
    const borderIsPrimary: Ref<boolean> = ref(variantOutline && colorPrimary && !disabled);
    const borderIsSecondary: Ref<boolean> = ref(variantOutline && colorSecondary && !disabled);
    const borderIsDanger: Ref<boolean> = ref(variantOutline && colorDanger && !disabled);

    const shadow: Ref<boolean> = ref(!disableShadow && !disabled && variantDefault);

    const sizeSm: Ref<boolean> = ref(size === "sm");
    const sizeMd: Ref<boolean> = ref(size === "md" || !size);
    const sizeLg: Ref<boolean> = ref(size === "lg");

    const bgIsWhite: Ref<boolean> = ref(variantText || (variantOutline && colorDefault) || (variantOutline && !color));
    const bgColorDefault: Ref<boolean> = ref(colorDefault && (variantDefault || variantOutline));
    const bgIsPrimary: Ref<boolean> = ref(colorPrimary && variantDefault && !disabled);
    const bgIsSecondary: Ref<boolean> = ref(colorSecondary && variantDefault && !disabled);
    const bgIsDanger: Ref<boolean> = ref(colorDanger && variantDefault && !disabled);

    const hoverColorDefault: Ref<boolean> = ref(colorDefault && variantDefault && !disabled);
    const hoverIsPrimary: Ref<boolean> = ref(colorPrimary && variantDefault && !disabled);
    const hoverIsSecondary: Ref<boolean> = ref(colorSecondary && variantDefault && !disabled);
    const hoverIsDanger: Ref<boolean> = ref(colorDanger && variantDefault && !disabled);

    const hoverIsDefaultLight: Ref<boolean> = ref(colorDefault && !variantDefault && !disabled);
    const hoverIsPrimaryLight: Ref<boolean> = ref(colorPrimary && !variantDefault && !disabled);
    const hoverIsSecondaryLight: Ref<boolean> = ref(colorSecondary && !variantDefault && !disabled);
    const hoverIsDangerLight: Ref<boolean> = ref(colorDanger && !variantDefault && !disabled);

    return {
        border,
        borderIsDefault,
        borderIsPrimary,
        borderIsSecondary,
        borderIsDanger,
        shadow,
        sizeSm,
        sizeMd,
        sizeLg,
        bgIsWhite,
        bgColorDefault,
        bgIsPrimary,
        bgIsSecondary,
        bgIsDanger,
        hoverColorDefault,
        hoverIsPrimary,
        hoverIsSecondary,
        hoverIsDanger,
        hoverIsDefaultLight,
        hoverIsPrimaryLight,
        hoverIsSecondaryLight,
        hoverIsDangerLight
    };
}
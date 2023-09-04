import { Ref, ref } from "vue";
import { ButtonColor, ButtonSize, ButtonVariant } from "./button.types";

export function useButtonTextColor(
    color: ButtonColor | undefined,
    disabled: boolean,
    variant: ButtonVariant | undefined
) {
    const variantDefault = !variant;
    const variantOutline = variant === "outline";
    const propColorPrimary = color === "primary";
    const propColorSecondary = color === "secondary";
    const propColorDanger = color === "danger";
    const useParticularColor = propColorPrimary || propColorSecondary || propColorDanger;

    if (variantDefault) {
        return {
            colorDefault: ref(!disabled && !useParticularColor),
            colorPrimary: ref(!disabled && propColorPrimary),
            colorSecondary: ref(!disabled && propColorSecondary),
            colorDanger: ref(!disabled && propColorDanger),
            colorWhite: ref(!disabled && useParticularColor),
            colorBlack: ref(false),
            hoverColorDefault: ref(!disabled && !useParticularColor),
            hoverColorWhite: ref(!disabled && useParticularColor),
            hoverColorBlack: ref(false)
        };
    }
    else if (variantOutline) {
        return {
            colorDefault: ref(!disabled && !useParticularColor),
            colorPrimary: ref(propColorPrimary),
            colorSecondary: ref(propColorSecondary),
            colorDanger: ref(propColorDanger),
            colorWhite: ref(false),
            colorBlack: ref(false),
            hoverColorDefault: ref(false),
            hoverColorWhite: ref(!disabled && useParticularColor),
            hoverColorBlack: ref(!disabled && !useParticularColor)
        };
    }
    else {
        return {
            colorDefault: ref(!useParticularColor),
            colorPrimary: ref(propColorPrimary),
            colorSecondary: ref(propColorSecondary),
            colorDanger: ref(propColorDanger),
            colorWhite: ref(false),
            colorBlack: ref(false),
            hoverColorDefault: ref(false),
            hoverColorWhite: ref(!disabled && useParticularColor),
            hoverColorBlack: ref(!disabled && !useParticularColor)
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
    const borderIsPrimary: Ref<boolean> = ref(variantOutline && colorPrimary);
    const borderIsSecondary: Ref<boolean> = ref(variantOutline && colorSecondary);
    const borderIsDanger: Ref<boolean> = ref(variantOutline && colorDanger);

    const shadow: Ref<boolean> = ref(!disableShadow && !disabled && variantDefault);

    const sizeSm: Ref<boolean> = ref(size === "sm");
    const sizeMd: Ref<boolean> = ref(size === "md" || !size);
    const sizeLg: Ref<boolean> = ref(size === "lg");

    const bgIsWhite: Ref<boolean> = ref(
        variantText || (variantOutline && colorDefault) || (variantOutline && !color)
    );
    const bgColorDefault: Ref<boolean> = ref(colorDefault && (variantDefault || variantOutline));
    const bgIsPrimary: Ref<boolean> = ref(colorPrimary && variantDefault && !disabled);
    const bgIsSecondary: Ref<boolean> = ref(colorSecondary && variantDefault && !disabled);
    const bgIsDanger: Ref<boolean> = ref(colorDanger && variantDefault && !disabled);

    const hoverColorDefault: Ref<boolean> = ref(colorDefault && !disabled);
    const hoverIsPrimary: Ref<boolean> = ref(colorPrimary && !disabled);
    const hoverIsSecondary: Ref<boolean> = ref(colorSecondary && !disabled);
    const hoverIsDanger: Ref<boolean> = ref(colorDanger && !disabled);

    return {
        border,
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
        hoverIsDanger
    };
}
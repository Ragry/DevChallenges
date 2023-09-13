import { expect, it, describe, afterEach } from "vitest";
import { shallowMount, enableAutoUnmount } from "@vue/test-utils";
import ButtonIconComponent from "../../components/button/ButtonIconComponent.vue";

enableAutoUnmount(afterEach);

describe("button's icon", () => {
    it("has default structure and classes", () => {
        const wrapper = shallowMount(ButtonIconComponent);

        expect(wrapper.element.tagName).toBe("SPAN");
        expect(wrapper.classes()).toContain("material-symbols-rounded");
        expect(wrapper.classes()).toContain("text-center");
        expect(wrapper.classes()).toContain("font-medium");
        expect(wrapper.classes()).toContain("text-sm/normal");
    });

    it("has attribute disabled and proper classes when prop disabled set", () => {
        const wrapper = shallowMount(ButtonIconComponent, {
            props: {
                disabled: true
            }
        });

        expect(wrapper.classes()).toContain("text-[var(--text-color-disabled)]");
    });

    it("has proper classes when prop variant=default and color=primary", () => {
        const wrapper = shallowMount(ButtonIconComponent, {
            props: {
                color: "primary"
            }
        });

        expect(wrapper.classes()).toContain("text-white");
        expect(wrapper.classes()).toContain("group-hover:text-white");
        expect(wrapper.classes()).toContain("group-focus:text-white");
    });

    it("has proper classes when prop variant=outline and color=secondary", () => {
        const wrapper = shallowMount(ButtonIconComponent, {
            props: {
                color: "secondary",
                variant: "outline"
            }
        });

        expect(wrapper.classes()).toContain("text-[var(--text-color-secondary)]");
    });

    it("has proper classes when prop variant=text and color=danger", () => {
        const wrapper = shallowMount(ButtonIconComponent, {
            props: {
                color: "danger",
                variant: "text"
            }
        });

        expect(wrapper.classes()).toContain("text-[var(--text-color-danger)]");
    });
});
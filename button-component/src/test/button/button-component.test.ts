import { expect, it, describe, afterEach, vi } from "vitest";
import { shallowMount, mount, enableAutoUnmount } from "@vue/test-utils";
import ButtonComponent from "../../components/button/ButtonComponent.vue";
import ButtonIconComponent from "../../components/button/ButtonIconComponent.vue";

enableAutoUnmount(afterEach);

describe("button", () => {
    it("has default structure and classes", () => {
        const wrapper = mount(ButtonComponent);

        expect(wrapper.element.tagName).toBe("BUTTON");
        expect(wrapper.classes()).toContain("flex");
        expect(wrapper.classes()).toContain("items-center");
        expect(wrapper.classes()).toContain("py-2");
        expect(wrapper.classes()).toContain("px-4");
        expect(wrapper.classes()).toContain("border");
        expect(wrapper.classes()).toContain("px-4");
        expect(wrapper.classes()).toContain("group");
        expect(wrapper.classes()).toContain("shadow-[0_2px_3px_0px]");
        expect(wrapper.classes()).toContain("shadow-[var(--shadow-color)]");
        expect(wrapper.find("span")).toBeDefined();
    });

    it("should emit click event when clicked", async () => {
        const wrapper = mount(ButtonComponent);
        const event = vi.fn();
        const button = wrapper.find("button");
        button.element.onclick = event;
        expect(event).toHaveBeenCalledTimes(0);
        button.trigger("click");
        expect(event).toHaveBeenCalledTimes(1);
    });

    it("shouldn't emit click event when it's disabled", () => {
        const wrapper = mount(ButtonComponent, {
            props: {
                disabled: true
            }
        });
        const event = vi.fn();
        const button = wrapper.find("button");
        button.element.onclick = event;
        expect(event).toHaveBeenCalledTimes(0);
        button.trigger("click");
        expect(event).toHaveBeenCalledTimes(0);
    });

    it("has proper caption when it passed", () => {
        const wrapper = mount(ButtonComponent, {
            props: {
                caption: "Default"
            }
        });

        expect(wrapper.find("span").text()).toBe("Default");
    });

    it("has attribute disabled and proper classes when prop disabled set", () => {
        const wrapper = shallowMount(ButtonComponent, {
            props: {
                disabled: true
            }
        });

        expect(wrapper.classes()).toContain("cursor-not-allowed");
    });

    it("has proper classes when prop disableShadow set", () => {
        const wrapper = shallowMount(ButtonComponent, {
            props: {
                disableShadow: true
            }
        });
        expect(wrapper.classes()).not.toContain("shadow-[0_2px_3px_0px]");
        expect(wrapper.classes()).not.toContain("shadow-[var(--shadow-color)]");
    });

    it("has proper classes when prop size set sm", () => {
        const wrapper = shallowMount(ButtonComponent, {
            props: {
                size: "sm"
            }
        });
        expect(wrapper.classes()).toContain("py-1.5");
        expect(wrapper.classes()).toContain("px-3");
    });

    it("has proper classes when prop size set md", () => {
        const wrapper = shallowMount(ButtonComponent, {
            props: {
                size: "md"
            }
        });
        expect(wrapper.classes()).toContain("py-2");
        expect(wrapper.classes()).toContain("px-4");
    });

    it("has proper classes when prop size set lg", () => {
        const wrapper = shallowMount(ButtonComponent, {
            props: {
                size: "lg"
            }
        });
        expect(wrapper.classes()).toContain("py-[11px]");
        expect(wrapper.classes()).toContain("px-[22px]");
    });

    it("has proper classes when prop variant=default", () => {
        const wrapper = shallowMount(ButtonComponent);
        expect(wrapper.classes()).toContain("border-transparent");
        expect(wrapper.classes()).toContain("bg-[var(--color-default)]");
        expect(wrapper.classes()).toContain("hover:border-[var(--color-default-hover)]");
        expect(wrapper.classes()).toContain("hover:bg-[var(--color-default-hover)]");
    });

    it("has proper classes when prop variant=outline and color=secondary", () => {
        const wrapper = shallowMount(ButtonComponent, {
            propsData: {
                color: "secondary",
                variant: "outline"
            }
        });
        expect(wrapper.classes()).not.toContain("border-transparent");
        expect(wrapper.classes()).toContain("border-[var(--text-color-secondary)]");
        expect(wrapper.classes()).toContain("hover:bg-[var(--color-secondary-light)]");
        expect(wrapper.classes()).toContain("focus:bg-[var(--color-secondary-light)]");
    });

    it("has proper classes when prop variant=text and color=danger", () => {
        const wrapper = shallowMount(ButtonComponent, {
            propsData: {
                color: "danger",
                variant: "text"
            }
        });
        expect(wrapper.classes()).toContain("border-transparent");
        expect(wrapper.classes()).toContain("bg-white");
        expect(wrapper.classes()).toContain("hover:bg-[var(--color-danger-light)]");
        expect(wrapper.classes()).toContain("focus:bg-[var(--color-danger-light)]");
    });


    it("has left icon when prop startIcon set", () => {
        const wrapper = mount(ButtonComponent, {
            propsData: {
                color: "danger",
                startIcon: "face"
            }
        });
        expect(wrapper.findComponent(ButtonIconComponent).text()).toContain("face");
    });

    it("has right icon when prop endIcon set", () => {
        const wrapper = mount(ButtonComponent, {
            propsData: {
                color: "danger",
                endIcon: "add_shopping_cart"
            }
        });
        expect(wrapper.findComponent(ButtonIconComponent).text()).toContain("add_shopping_cart");
    });
});

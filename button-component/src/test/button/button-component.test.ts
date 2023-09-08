import { expect, it, describe, afterEach, vi } from "vitest";
import { shallowMount, mount, enableAutoUnmount } from "@vue/test-utils";
import ButtonComponent from "../../components/button/ButtonComponent.vue";

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

    it("has attribute disabled and proper classes qwhen prop disabled set", () => {
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

    it("applies primary background color with variant=default", () => {
        const wrapper = shallowMount(ButtonComponent, {
            propsData: {
                color: "primary"
            }
        });
        expect(wrapper.classes()).toContain("bg-[var(--color-primary)]");
    });

    it("applies secondary background color with variant=default", () => {
        const wrapper = shallowMount(ButtonComponent, {
            propsData: {
                color: "secondary"
            }
        });
        expect(wrapper.classes()).toContain("bg-[var(--color-secondary)]");
    });

    it("applies danger background color with variant=default", () => {
        const wrapper = shallowMount(ButtonComponent, {
            propsData: {
                color: "danger"
            }
        });
        expect(wrapper.classes()).toContain("bg-[var(--color-danger)]");
    });
});

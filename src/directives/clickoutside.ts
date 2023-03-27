import { Directive } from "vue";

interface HTMLElementWithClickOutsideEvent extends HTMLElement {
  clickOutsideEvent: (event: MouseEvent) => void;
}

const ClickOutside: Directive<HTMLElementWithClickOutsideEvent> = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!el.contains(event.target as Node) && el !== event.target) {
        binding.value(event);
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};

export default ClickOutside;

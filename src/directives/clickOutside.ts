// v-delay:1000="{fun:submit,data:{id:1}}"

interface RippleHTMLElement extends HTMLElement {
  _clickOutsideEvent: any;
}

export default {
  mounted(el: RippleHTMLElement, binding: any) {
    el._clickOutsideEvent = function(event:any) {
      // 检查点击是否发生在元素之外
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(); // 调用绑定的方法
      }
    };
    document.addEventListener('click', el._clickOutsideEvent);
  },
  unmounted(el: RippleHTMLElement) {
    el.removeEventListener("click", el._clickOutsideEvent);
    el._clickOutsideEvent = null;
  },
};

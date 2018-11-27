import Vue from 'vue';

Vue.directive('drag', {
    bind(el, binding) {
        el.onmousedown = (e) => {
            console.log('down');
            console.log(binding.value);
            console.log(typeof binding.value);
            if (binding.value === true) {
                let disX = e.clientX - el.offsetLeft;
                let disY = e.clientY - el.offsetTop;

                document.onmousemove = (e) => {
                    console.log(e.clientX);
                    let left = e.clientX - disX + 'px';
                    let top = e.clientY - disY + 'px';
                    el.style.left = left;
                    el.style.top = top;
                };

                document.onmouseup = (e) => {
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
            }
        };
    }
});
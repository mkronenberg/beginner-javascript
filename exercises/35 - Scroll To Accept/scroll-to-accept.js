const wrapper = document.querySelector('.terms-and-conditions')
const tcScrollEnd = document.querySelector('.tc-scroll-end')
const btnAccept = document.querySelector('button.accept')

console.log(tcScrollEnd)

let options = {
  root: wrapper,
  rootMargin: "0px",
  threshold: 0.5,
};

let callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting === true) {
      btnAccept.removeAttribute('disabled');
      observer.unobserve(tcScrollEnd);
    }  
  });
};

let observer = new IntersectionObserver(callback, options);
observer.observe(tcScrollEnd);

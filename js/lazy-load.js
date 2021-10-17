const script = `<script
  src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
  integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>`;
if ('loading' in HTMLImageElement.prototype) {
  console.log('this browser supports lazy-loading');
  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  console.log(lazyImgs);
  lazyImgs.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  document.body.insertAdjacentHTML('beforeend', script);
}
console.log(script);
// const onImageLoaded = e => {
//   console.log('image loaded');
// };
// lazyImgs.forEach(img => {
//   img.addEventListener('load', onImageLoaded, { once: true });
// });

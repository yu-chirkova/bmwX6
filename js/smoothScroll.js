document.addEventListener('DOMContentLoaded', () => {

    const smoothScrollLink = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
    const SPEED = 0.3;

    const scrolled = (e) => {
        e.preventDefault();
         const target = e.target;

         if (target.matches('[href^="#"]')) {
             let start = 0;


             const pageY = window.pageYOffset;
             const hash = target.getAttribute('href');

             if (hash === '#') {
                 return false
             }

             const elem = document.querySelector(hash);
             const coord = elem.getBoundingClientRect().top;


             const step = time => {
                 if (!start) {
                     start = time;
                 }

                 const progress = time - start;
                 const r = (coord < 0 ?
                     Math.max(pageY - progress / SPEED, pageY + coord) :
                     Math.min(pageY + progress / SPEED, pageY + coord))

                 window.scrollTo(0, r);

                 if (r < pageY + coord) {
                     requestAnimationFrame(step);
                 }

             }

             requestAnimationFrame(step);

         }
    }

    document.body.addEventListener('click', scrolled)
    /*smoothScrollLink.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const id = link.getAttribute('href').substring(1);
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })*/

})



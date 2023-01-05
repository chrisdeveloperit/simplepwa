let t1 = gsap.timeline({ paused: true, reversed: true });
let t2 = gsap.timeline({ paused: true, reversed: true });
let t3 = gsap.timeline({ paused: true, reversed: true });

const album1 = document.querySelector(".albums-1");
const album2 = document.querySelector(".albums-2");
const reverseButton = document.querySelector(".back-button");
const reverseButton2 = document.querySelector(".back-button-2");
const playButton = document.querySelector(".play-button");

album1.addEventListener("click", (e) => {
  t1.play();
});

album2.addEventListener("click", e => {
   t3.play();
 });

reverseButton.addEventListener("click", (e) => {
  t1.reverse();
  t3.reverse();
});

playButton.addEventListener("click", (e) => {
  t2.play();
});

reverseButton2.addEventListener("click", (e) => {
  t2.reverse();
});

// t1.to(
//   ".screen-1 h1",
//   {
//     ease: "power1.inOut",
//     yPercent: -100,
//     opacity: 0,
//   },
//   0
// );

// t1.to(
//   ".screen-1 .album-title",
//   {
//     ease: "power1.inOut",
//     yPercent: -200,
//     duration: 0.5,
//     opacity: 0,
//   },
//   0
// );

t1.to(
  ".album-row",
  {
    ease: "power1.inOut",
    yPercent: 100,
    opacity: 0,
  },
  0
);

t1.to(
  ".albums-1",
  {
    ease: "power1.inOut",
     y: -20,
    height: 500,
  },
  0.1
);


t1.to(
  ".albums-1 img",
  {
    ease: "power1.inOut",
    height: 300,
    opacity: 0.3,
  },
  0.3
);

t1.to(".album-release", {
  ease: "power1.inOut",
  y: -375,
  opacity: 1,
});

t1.to(
  ".play-row h3",
  {
    ease: "back.inOut(1.7)",
    x: 124,
    y:130,
    opacity: 1,
  },
  1
);

t1.to(
  ".album-desc",
  {
    ease: "power1.inOut",
    y: -695,
    opacity: 1,
  },
  1
);

t1.to(
  ".play-button",
  {
    scale: 1,
    y: 120,
    ease: "bounce.out",
    duration: 1,
  },
  1
);

t1.to(
  ".back-button",
  {
    ease: "power1.inOut",
    y: -95,
    opacity: 1,
  },
  1.5
);

// 2nd Timeline

t2.to(
  ".albums-1",
  {
    height: 500,
    ease: "power1.inOut",
  },
  0
);

t2.to(
  ".albums-1 img",
  {
    height: 300,
    ease: "power1.inOut",
  },
  0
);

t2.to(
  ".album-release",
  {
    opacity: 0,
    ease: "power1.inOut",
  },
  0
);

t2.to(
  ".album-desc",
  {
    y: 410,
    ease: "power1.inOut",
  },
  0
);

t2.to(
  ".back-button",
  {
   y: -85,
    ease: "power1.inOut",
  },
  0
);

t2.to(
  ".play-button",
  {
    scale: 0,
    ease: "power1.inOut",
  },
  0
);

t2.to(
  ".play-row h3",
  {
    ease: "back.inOut(1.7)",
    x: -124,
    opacity: 1,
  },
  0
);

t2.to(".song-1", {
  ease: "power1.inOut",
  x: 532,
  y: 85,
  opacity: 1,
});

t2.to(
  ".song-2",
  {
    ease: "power1.inOut",
    x: 532,
    y: 85,
    opacity: 1,
  },
  0.6
);

t2.to(
  ".song-3",
  {
    ease: "power1.inOut",
    x: 532,
    y: 85,
    opacity: 1,
  },
  0.7
);

t2.to(
  ".song-4",
  {
    ease: "power1.inOut",
    x: 532,
    y: 85,
    opacity: 1,
  },
  0.8
);

t2.to(
  ".song-5",
  {
    ease: "power1.inOut",
    x: 532,
    y: 85,
    opacity: 1,
  },
  0.9
);

t2.to(
  ".song-6",
  {
    ease: "power1.inOut",
    x: 532,
    y: 85,
    opacity: 1,
  },
  1
);

t2.to(
  ".song-7",
  {
    ease: "power1.inOut",
    x: 532,
    y: 85,
    opacity: 1,
  },
  1.1
);

t2.to(
  ".song-8",
  {
    ease: "power1.inOut",
    x: 532,
    y: 85,
    opacity: 1,
  },
  1.2
);

t2.to(
  ".back-button-2",
  {
    ease: "power1.inOut",
    y: -120,
    x: 100,
    opacity: 1,
  },
  1.5
);

// t2.to(
//    ".song svg",
//    {
//      opacity: 1,
//    },
//    1.5
//  );

// Third timeline
// t3.to(
//    ".screen-1 h1",
//    {
//      ease: "power1.inOut",
//      yPercent: -100,
//      opacity: 0,
//    },
//    0
//  );
 
 t3.to(
   ".screen-1 .album-title",
   {
     ease: "power1.inOut",
     yPercent: -200,
     duration: 0.5,
     opacity: 0,
   },
   0
 );

 t3.to(
   ".screen-1 .albums-1",
   {
     ease: "power1.inOut",
     yPercent: -300,
     duration: 0.5,
     opacity: 0,
   },
   0
 );
 
//  t3.to(
//    ".album-row",
//    {
//      ease: "power1.inOut",
//      yPercent: 100,
//      opacity: 0,
//    },
//    0
//  );
t3.to(
   ".screen-1 .albums-3",
   {
     ease: "power1.inOut",
     xPercent: 100,
     duration: 0.5,
     opacity: 0,
   },
   0
 );
 
 t3.to(
   ".albums-2",
   {
     ease: "power1.inOut",
     y: -250,
   },
   0.1
 );
 
 t3.to(".albums-2", {
   ease: "power1.inOut",
   width: 280,
 });
 
 t3.to(
   ".albums-2 img",
   {
     ease: "power1.inOut",
     height: 100,
   },
   0.5
 );
 
 t3.to(".album-release", {
   ease: "power1.inOut",
   opacity: 1,
 });
 
 t3.to(
   ".play-row h3",
   {
     ease: "back.inOut(1.7)",
     x: 124,
     opacity: 1,
   },
   1
 );
 
 t3.to(
   ".album-desc",
   {
     ease: "power1.inOut",
     y: -410,
     opacity: 1,
   },
   1
 );
 
 t3.to(
   ".play-button",
   {
     scale: 1,
     ease: "bounce.out",
     duration: 1,
   },
   1
 );
 
 t3.to(
   ".back-button",
   {
     ease: "power1.inOut",
     y: -244,
     opacity: 1,
   },
   1.5
 );
 const audio = new Audio();
 function play(file) {
   if (file) {
      audio.src = `music/${file}`;
      audio.play();
   }
 }

 function stopSounds() {
   audio.pause();
   audio.currentTime = 0;
 }


const mp3 = document.querySelectorAll(".mp3");
mp3.forEach( function(mp, index) {
   mp.addEventListener('click', (e) => {
   let song = e.target.dataset.song;
   play(song);
   return false;
   });
});
   
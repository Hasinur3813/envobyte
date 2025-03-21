const useAnimation = () => {
  return {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: (delay) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: "easeInOut",
        },
      }),
    },

    fadeDown: {
      hidden: { opacity: 0, y: -30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      },
    },
    slideFromLeft: {
      hidden: { x: -100, opacity: 0 },
      visible: (delay) => ({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: delay,
          ease: "easeOut",
        },
      }),
    },
    slideFromRight: {
      hidden: { x: 100, opacity: 0 },
      visible: (delay) => ({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: delay,
          ease: "easeOut",
        },
      }),
    },
    zoomIn: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: (delay) => ({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, delay: delay, ease: "easeIn" },
      }),
    },
    zoomOut: {
      hidden: { scale: 1.5, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      },
      exit: {
        scale: 1.5,
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
  };
};

export default useAnimation;

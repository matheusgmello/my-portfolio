export const randomAnimation = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return "svg-shapes__anim__" + number;
};

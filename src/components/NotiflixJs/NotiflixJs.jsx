import Notiflix from "notiflix";

const LoadingFallback = () => {
  function reloadF() {
    Notiflix.Loading.hourglass('PLEASE WAIT');
  }

  function removeF() {
    Notiflix.Loading.remove(400);
  }

  Notiflix.Loading.init({
    className: 'notiflix-loading',
    zindex: 4000,
    backgroundColor: 'rgba(0,0,0,0.8)',
    rtl: false,
    fontFamily: 'Roboto,sans-serif',
    cssAnimation: true,
    cssAnimationDuration: 400,
    clickToClose: false,
    customSvgUrl: null,
    customSvgCode: null,
    svgSize: '80px',
    svgColor: 'rgb(26, 255, 0)', 
    messageID: 'NotiflixLoadingMessage',
    messageFontSize: '12px',
    messageMaxLength: 34,
    messageColor: 'orange',
  });

  reloadF(); // Викликати функцію тут

  removeF()

  return null; // Повернення замість пустого return;
};

export default LoadingFallback;
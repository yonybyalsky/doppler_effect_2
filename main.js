imgColor = document.querySelector('.imgColor');
speedData = document.querySelector('.speedData');
input = document.querySelector('.userInput');
btn = document.querySelector('.btn')
wavelengthData = document.querySelector('.wavelengthData');
waveInput = 550;
let i = 0;

btn.addEventListener('click', () => {
    changeColor(wavelenghtToRgb(input.value));
    waveInput = input.value
})

document.addEventListener('keydown', function (event) {

  if (event.key === 'd') {
    i += 0.001;
    i = Number(i.toFixed(3));
    color_arr = wavelenghtToRgb(dopplerEffect(i, waveInput));
    wavelengthData.innerHTML = dopplerEffect(i, waveInput);
    speedData.innerHTML = i;
    changeColor(color_arr);
  }
  if (event.key === 'a') {
    i -= 0.001;
    i = Number(i.toFixed(3));
    color_arr = wavelenghtToRgb(dopplerEffect(i, waveInput));
    wavelengthData.innerHTML = dopplerEffect(i, waveInput);
    speedData.innerHTML = i;
    changeColor(color_arr);
  }
});

const dopplerEffect = (observorSpeed, wavelengthUser) => {
  let wavelength = wavelengthUser;
  c = 3e8;
  observorSpeed *= c;
  wavelength *= Math.sqrt((1 + observorSpeed / c) / (1 - observorSpeed / c));

  if (wavelength > 700) {
    wavelength = 700;
  }
  if (wavelength < 400) {
    wavelength = 400;
  }

  wavelength = Math.round(wavelength);

  return wavelength;
};

const wavelenghtToRgb = (wavelenght) => {
  let r;
  let g;
  let b;
  if (wavelenght >= 380 && wavelenght <= 410) {
    r = 0.6 - (0.41 * (410 - wavelenght)) / 30;
    g = 0;
    b = 0.39 + (0.6 * (410 - wavelenght)) / 30;
  } else if (wavelenght >= 410 && wavelenght <= 440) {
    r = 0.19 - (0.19 * (440 - wavelenght)) / 30;
    g = 0;
    b = 1;
  } else if (wavelenght >= 440 && wavelenght <= 490) {
    r = 0;
    g = 1 - (490 - wavelenght) / 50;
    b = 1;
  } else if (wavelenght >= 490 && wavelenght <= 510) {
    r = 0;
    g = 1;
    b = (510 - wavelenght) / 20;
  } else if (wavelenght >= 510 && wavelenght <= 580) {
    r = 1 - (580 - wavelenght) / 70;
    g = 1;
    b = 0;
  } else if (wavelenght >= 580 && wavelenght <= 640) {
    r = 1;
    g = (640 - wavelenght) / 60;
    b = 0;
  } else if (wavelenght >= 640 && wavelenght <= 700) {
    r = 1;
    g = 0;
    b = 0;
  }

  r *= 255;
  g *= 255;
  b *= 255;

  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);

  let rgb_arr = [r, g, b];

  return rgb_arr;
};

const changeColor = (arr) => {
  let r = arr[0];
  let g = arr[1];
  let b = arr[2];
  imgColor.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
};

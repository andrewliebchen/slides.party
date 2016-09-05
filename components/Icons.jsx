import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  renderGraphic() {
    switch (this.props.type) {
      case 'arrow-left':
        return <path d="M0.00,24.00c0.00,13.254, 10.746,24.00, 24.00,24.00s 24.00-10.746, 24.00-24.00s-10.746-24.00-24.00-24.00S0.00,10.746,0.00,24.00z M 42.00,24.00c0.00,9.939-8.061,18.00-18.00,18.00s-18.00-8.061-18.00-18.00s 8.061-18.00, 18.00-18.00S 42.00,14.061, 42.00,24.00zM 12.876,21.879 L 18.876,15.879 C 19.734,15.024 21.024,14.766 22.149,15.228 C 23.268,15.69 24.00,16.788 24.00,18.00 L 24.00,21.00 L 33.00,21.00 C 34.659,21.00 36.00,22.341 36.00,24.00 C 36.00,25.659 34.659,27.00 33.00,27.00 L 24.00,27.00 L 24.00,30.00 C 24.00,31.212 23.268,32.31 22.149,32.772 C 21.027,33.234 19.734,32.979 18.876,32.121 L 12.876,26.121 C 12.291,25.536 11.997,24.768 11.997,24.00 C 11.997,23.232 12.291,22.464 12.876,21.879 Z"/>;
      case 'arrow-right':
        return <path d="M 24.00,0.00C 10.746,0.00,0.00,10.746,0.00,24.00s 10.746,24.00, 24.00,24.00s 24.00-10.746, 24.00-24.00S 37.254,0.00, 24.00,0.00z M 24.00,6.00c 9.939,0.00, 18.00,8.061, 18.00,18.00s-8.061,18.00-18.00,18.00s-18.00-8.061-18.00-18.00S 14.061,6.00, 24.00,6.00zM 35.124,21.879C 35.709,22.464, 36.003,23.232, 36.003,24.00 s-0.294,1.536-0.879,2.121l-6.00,6.00c-0.858,0.858-2.151,1.113-3.273,0.651C 24.732,32.31, 24.00,31.212, 24.00,30.00L24.00,27.00 L15.00,27.00 C 13.341,27.00, 12.00,25.659, 12.00,24.00 s 1.341-3.00, 3.00-3.00l9.00,0.00 L24.00,18.00 c0.00-1.212, 0.732-2.31, 1.851-2.772c 1.125-0.462, 2.415-0.204, 3.273,0.651L 35.124,21.879z"/>;
      case 'contrast':
        return <path d="M 24.00,48.00c-13.254,0.00-24.00-10.746-24.00-24.00s 10.746-24.00, 24.00-24.00s 24.00,10.746, 24.00,24.00 S 37.254,48.00, 24.00,48.00z M 24.00,6.00C 14.061,6.00, 6.00,14.061, 6.00,24.00c0.00,9.942, 8.061,18.00, 18.00,18.00s 18.00-8.058, 18.00-18.00C 42.00,14.061, 33.939,6.00, 24.00,6.00z M 24.00,39.00L24.00,9.00 c 8.286,0.00, 15.00,6.717, 15.00,15.00 C 39.00,32.286, 32.286,39.00, 24.00,39.00z"/>;
      case 'close':
        return <path d="M 32.484,32.484c-1.173,1.173-3.069,1.173-4.242,0.00 L 24.00,28.242l-4.242,4.242c-1.173,1.173-3.072,1.173-4.245,0.00s-1.173-3.069,0.00-4.242L 19.758,24.00L 15.513,19.758 c-1.173-1.173-1.173-3.072,0.00-4.245s 3.072-1.173, 4.245,0.00L 24.00,19.758l 4.242-4.245c 1.173-1.173, 3.069-1.173, 4.242,0.00s 1.173,3.072,0.00,4.245 L 28.242,24.00l 4.242,4.242C 33.657,29.415, 33.657,31.314, 32.484,32.484z"/>;
      case 'delete':
        return <path d="M 42.00,15.00l0.00,24.00 c0.00,4.971-4.032,9.00-9.00,9.00L15.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L6.00,15.00 C 4.344,15.00, 3.00,13.659, 3.00,12.00 s 1.344-3.00, 3.00-3.00l9.00,0.00 l0.00,0.00c0.00-4.971, 4.029-9.00, 9.00-9.00c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,0.00l9.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00S 43.659,15.00, 42.00,15.00z M 24.00,6.00C 22.344,6.00, 21.00,7.341, 21.00,9.00l6.00,0.00 C 27.00,7.341, 25.659,6.00, 24.00,6.00z M 12.00,15.00l0.00,24.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l18.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L36.00,15.00 L12.00,15.00 z M 28.50,36.00C 27.675,36.00, 27.00,35.328, 27.00,34.50l0.00,-12.00 C 27.00,21.672, 27.675,21.00, 28.50,21.00C 29.328,21.00, 30.00,21.672, 30.00,22.50l0.00,12.00 C 30.00,35.328, 29.328,36.00, 28.50,36.00z M 19.50,36.00C 18.672,36.00, 18.00,35.328, 18.00,34.50l0.00,-12.00 C 18.00,21.672, 18.672,21.00, 19.50,21.00C 20.328,21.00, 21.00,21.672, 21.00,22.50l0.00,12.00 C 21.00,35.328, 20.328,36.00, 19.50,36.00z"/>;
      case 'edit':
        return <path d="M 43.437,19.437L 28.515,4.515L 33.00,0.00l 15.00,15.00L 43.437,19.437z M 38.997,23.76 C 38.895,23.859, 38.814,23.913, 38.718,24.00L36.00,24.00 l-3.00,0.00 l-3.00,12.00l-24.00,12.00L3.00,48.00 l 9.54-9.54C 13.293,38.802, 14.121,39.00, 15.00,39.00c 3.312,0.00, 6.00-2.688, 6.00-6.00S 18.312,27.00, 15.00,27.00 s-6.00,2.688-6.00,6.00c0.00,0.879, 0.198,1.707, 0.54,2.46L0.00,45.00l0.00,-3.00 l 12.00-24.00l 12.00-3.00L24.00,12.00 L24.00,9.084 C 24.057,9.024, 24.084,8.973, 24.147,8.91l 1.377-1.386l 14.874,14.874 L 38.997,23.76z"/>;
      case 'fast-forward':
        return <path d="M 1.584,38.646 C 0.609,38.121 0.00,37.107 0.00,36.00 L 0.00,12.00 C 0.00,10.893 0.612,9.876 1.587,9.354 C 2.562,8.832 3.744,8.892 4.665,9.504 L 22.665,21.504 C 23.499,22.062 24.00,22.995 24.00,24.00 C 24.00,25.002 23.499,25.938 22.662,26.496 L 4.662,38.496 C 3.744,39.111 2.559,39.168 1.584,38.646 Z M 25.584,38.646 C 24.609,38.121 24.00,37.107 24.00,36.00 L 24.00,24.00 L 24.00,12.00 C 24.00,10.893 24.612,9.876 25.587,9.354 C 26.562,8.832 27.744,8.892 28.665,9.504 L 46.665,21.504 C 47.499,22.062 48.00,22.995 48.00,24.00 C 48.00,25.002 47.499,25.938 46.662,26.496 L 28.662,38.496 C 27.744,39.111 26.559,39.168 25.584,38.646 Z"/>;
      case 'grid':
        return <path d="M 21.00,36.00l6.00,0.00 l0.00,-6.00 L21.00,30.00 L21.00,36.00 z M 12.00,18.00l6.00,0.00 L18.00,12.00 L12.00,12.00 L12.00,18.00 z M 21.00,27.00l6.00,0.00 L27.00,21.00 L21.00,21.00 L21.00,27.00 z M 12.00,36.00l6.00,0.00 l0.00,-6.00 L12.00,30.00 L12.00,36.00 z M 12.00,27.00l6.00,0.00 L18.00,21.00 L12.00,21.00 L12.00,27.00 z M 39.00,0.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 c0.00,4.968, 4.029,9.00, 9.00,9.00l30.00,0.00 c 4.968,0.00, 9.00-4.032, 9.00-9.00L48.00,9.00 C 48.00,4.029, 43.968,0.00, 39.00,0.00z M 42.00,39.00 c0.00,1.659-1.341,3.00-3.00,3.00L9.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,9.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l30.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00L42.00,39.00 z M 30.00,27.00l6.00,0.00 L36.00,21.00 l-6.00,0.00 L30.00,27.00 z M 30.00,18.00l6.00,0.00 L36.00,12.00 l-6.00,0.00 L30.00,18.00 z M 21.00,18.00l6.00,0.00 L27.00,12.00 L21.00,12.00 L21.00,18.00 z M 30.00,36.00l6.00,0.00 l0.00,-6.00 l-6.00,0.00 L30.00,36.00 z"/>;
      case 'logout':
        return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00l0.00,-6.00 l6.00,0.00 l0.00,6.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,6.00 L0.00,15.00 L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.971, 43.971,48.00, 39.00,48.00z M 13.851,15.225c 1.122-0.462, 2.412-0.207, 3.27,0.651l 6.00,6.00C 23.706,22.461, 24.00,23.229, 24.00,23.997 S 23.706,25.533, 23.121,26.118l-6.00,6.00c-0.858,0.855-2.148,1.113-3.27,0.651C 12.732,32.307, 12.00,31.209, 12.00,29.997L12.00,27.00 L3.00,27.00 C 1.344,27.00,0.00,25.659,0.00,24.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l9.00,0.00 L12.00,17.997 C 12.00,16.785, 12.732,15.687, 13.851,15.225z"/>;
      case 'menu':
        return <path d="M 12.00,30.00l24.00,0.00 l0.00,6.00 L12.00,36.00 L12.00,30.00 z M 12.00,21.00l24.00,0.00 l0.00,6.00 L12.00,27.00 L12.00,21.00 z M 12.00,12.00l24.00,0.00 l0.00,6.00 L12.00,18.00 L12.00,12.00 z"/>;
      case 'outgoing':
        return <path d="M 39.00,48.00L9.00,48.00 c-4.968,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.032-9.00, 9.00-9.00l13.617,0.00 C 21.582,1.788, 21.00,3.837, 21.00,6.00L9.00,6.00 C 7.341,6.00, 6.00,7.344, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00l0.00,-6.75 l 6.00-4.50L48.00,39.00 C 48.00,43.971, 43.971,48.00, 39.00,48.00z M 34.80,26.40C 34.272,26.796, 33.636,27.00, 33.00,27.00c-0.456,0.00-0.918-0.105-1.341-0.315C 30.642,26.175, 30.00,25.137, 30.00,24.00 L30.00,21.126 L30.00,21.00 c-9.513,0.00-17.538,6.327-20.118,15.00C 9.312,34.095, 9.00,32.085, 9.00,30.00c0.00-11.598, 9.402-21.00, 21.00-21.00L30.00,6.00 c0.00-1.137, 0.642-2.175, 1.659-2.685 C 32.082,3.105, 32.544,3.00, 33.00,3.00c 0.636,0.00, 1.272,0.204, 1.80,0.60l 12.00,9.00C 47.556,13.167, 48.00,14.055, 48.00,15.00s-0.444,1.833-1.20,2.40L 34.80,26.40z"/>;
      case 'play':
        return <path d="M 12.00,39.00c-0.549,0.00-1.095-0.15-1.578-0.447C 9.54,38.004, 9.00,37.041, 9.00,36.00L9.00,12.00 c0.00-1.041, 0.54-2.007, 1.422-2.553C 10.905,9.153, 11.451,9.00, 12.00,9.00c 0.456,0.00, 0.921,0.105, 1.341,0.315l 24.00,12.00C 38.358,21.825, 39.00,22.863, 39.00,24.00 s-0.642,2.178-1.659,2.685l-24.00,12.00C 12.921,38.895, 12.456,39.00, 12.00,39.00z"/>;
      case 'plus':
        return <path d="M 33.00,27.00L27.00,27.00 l0.00,6.00 c0.00,1.659-1.341,3.00-3.00,3.00s-3.00-1.341-3.00-3.00L21.00,27.00 L15.00,27.00 C 13.341,27.00, 12.00,25.656, 12.00,24.00s 1.341-3.00, 3.00-3.00l6.00,0.00 L21.00,15.00 c0.00-1.656, 1.341-3.00, 3.00-3.00 s 3.00,1.344, 3.00,3.00l0.00,6.00 l6.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00S 34.659,27.00, 33.00,27.00z"/>;
      case 'presentation':
        return <path d="M 42.00,38.448L42.00,15.00 c0.00-4.971-4.029-9.00-9.00-9.00L9.552,6.00 C 10.791,2.511, 14.085,0.00, 18.00,0.00l21.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,21.00 C 48.00,33.915, 45.486,37.209, 42.00,38.448z M 39.00,18.00l0.00,21.00 c0.00,4.968-4.029,9.00-9.00,9.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,18.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l21.00,0.00 C 34.971,9.00, 39.00,13.029, 39.00,18.00z M 6.00,18.00l0.00,21.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l21.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L33.00,18.00 c0.00-1.656-1.341-3.00-3.00-3.00L9.00,15.00 C 7.341,15.00, 6.00,16.344, 6.00,18.00z"/>;
      case 'previous':
        return <path d="M 40.416,38.646c-0.975,0.522-2.16,0.465-3.078-0.15l-18.00-12.00C 18.501,25.938, 18.00,25.002, 18.00,24.00 c0.00-1.005, 0.501-1.938, 1.335-2.496l 18.00-12.00c 0.921-0.612, 2.103-0.672, 3.078-0.15S 42.00,10.893, 42.00,12.00l0.00,24.00 C 42.00,37.107, 41.391,38.121, 40.416,38.646z M 15.00,39.00L9.00,39.00 c-1.659,0.00-3.00-1.341-3.00-3.00L6.00,12.00 c0.00-1.659, 1.341-3.00, 3.00-3.00l6.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,12.00 l0.00,12.00 C 18.00,37.659, 16.659,39.00, 15.00,39.00z"/>;
      case 'rulers':
        return <path d="M 45.00,48.00L12.00,48.00 l0.00,-3.00 l33.00,0.00 L45.00,12.00 l3.00,0.00 l0.00,33.00 l0.00,3.00 L45.00,48.00 z M 45.00,9.00l-3.00,0.00 L42.00,6.00 l-3.00,0.00 l0.00,3.00 l-3.00,0.00 L36.00,3.00 l-3.00,0.00 l0.00,6.00 l-3.00,0.00 L30.00,6.00 L27.00,6.00 l0.00,3.00 L24.00,9.00 L24.00,6.00 L21.00,6.00 l0.00,3.00 L18.00,9.00 L18.00,6.00 L15.00,6.00 l0.00,3.00 L12.00,9.00 L12.00,0.00 l36.00,0.00 l0.00,6.00 l-3.00,0.00 L45.00,9.00 z M 6.00,48.00L0.00,48.00 L0.00,12.00 l9.00,0.00 l0.00,3.00 L6.00,15.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 L6.00,21.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 L6.00,27.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 L3.00,33.00 l0.00,3.00 l6.00,0.00 l0.00,3.00 L6.00,39.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 L6.00,45.00 L6.00,48.00 z M0.00,0.00l9.00,0.00 l0.00,9.00 L0.00,9.00 L0.00,0.00 z"/>;
      case 'rewind':
        return <path d="M 46.416,38.646c-0.975,0.522-2.16,0.465-3.078-0.15l-18.00-12.00C 24.501,25.938, 24.00,25.002, 24.00,24.00 c0.00-1.005, 0.501-1.938, 1.335-2.496l 18.00-12.00c 0.921-0.612, 2.103-0.672, 3.078-0.15S 48.00,10.893, 48.00,12.00l0.00,24.00 C 48.00,37.107, 47.391,38.121, 46.416,38.646z M 22.416,38.646c-0.975,0.522-2.16,0.465-3.078-0.15l-18.00-12.00C 0.501,25.938,0.00,25.002,0.00,24.00c0.00-1.005, 0.501-1.938, 1.335-2.496l 18.00-12.00 c 0.921-0.612, 2.103-0.672, 3.078-0.15S 24.00,10.893, 24.00,12.00l0.00,12.00 l0.00,12.00 C 24.00,37.107, 23.391,38.121, 22.416,38.646z"/>;
      case 'settings':
        return <path d="M 45.00,21.00l-3.00,0.00 c-0.105,0.00-0.192,0.051-0.297,0.06 c-0.456-2.769-1.527-5.316-3.093-7.506c 0.075-0.063, 0.168-0.087, 0.24-0.159l 2.121-2.121c 1.173-1.173, 1.173-3.069,0.00-4.242 s-3.072-1.173-4.245,0.00L 34.605,9.15c-0.069,0.069-0.096,0.165-0.159,0.24C 32.259,7.821, 29.709,6.753, 26.94,6.297 C 26.949,6.192, 27.00,6.105, 27.00,6.00L27.00,3.00 c0.00-1.656-1.341-3.00-3.00-3.00S 21.00,1.344, 21.00,3.00l0.00,3.00 c0.00,0.105, 0.051,0.192, 0.06,0.297 C 18.291,6.753, 15.741,7.821, 13.554,9.39C 13.491,9.315, 13.464,9.222, 13.395,9.15L 11.274,7.029c-1.173-1.173-3.072-1.173-4.245,0.00 c-1.17,1.173-1.17,3.069,0.00,4.242l 2.124,2.121C 9.222,13.464, 9.312,13.491, 9.39,13.554C 7.821,15.744, 6.753,18.291, 6.297,21.06 C 6.192,21.051, 6.105,21.00, 6.00,21.00L3.00,21.00 C 1.341,21.00,0.00,22.344,0.00,24.00s 1.341,3.00, 3.00,3.00l3.00,0.00 c 0.105,0.00, 0.192-0.048, 0.297-0.06 c 0.456,2.769, 1.527,5.316, 3.093,7.506c-0.075,0.063-0.168,0.087-0.237,0.159l-2.124,2.121c-1.17,1.173-1.17,3.072,0.00,4.242 c 1.173,1.173, 3.072,1.173, 4.245,0.00l 2.121-2.121c 0.069-0.069, 0.096-0.165, 0.159-0.24c 2.187,1.569, 4.737,2.637, 7.506,3.096 C 21.051,41.808, 21.00,41.895, 21.00,42.00l0.00,3.00 c0.00,1.659, 1.341,3.00, 3.00,3.00s 3.00-1.341, 3.00-3.00l0.00,-3.00 c0.00-0.105-0.051-0.192-0.06-0.297 c 2.769-0.459, 5.316-1.527, 7.506-3.096c 0.063,0.075, 0.087,0.171, 0.159,0.24l 2.121,2.121c 1.173,1.173, 3.072,1.173, 4.245,0.00 c 1.173-1.17, 1.173-3.069,0.00-4.242l-2.121-2.121c-0.072-0.069-0.165-0.093-0.24-0.159c 1.566-2.19, 2.637-4.737, 3.093-7.506 C 41.808,26.952, 41.895,27.00, 42.00,27.00l3.00,0.00 c 1.659,0.00, 3.00-1.344, 3.00-3.00S 46.659,21.00, 45.00,21.00z M 24.00,33.00c-4.971,0.00-9.00-4.032-9.00-9.00c0.00-4.971, 4.029-9.00, 9.00-9.00s 9.00,4.029, 9.00,9.00 C 33.00,28.968, 28.971,33.00, 24.00,33.00z"/>;
      case 'user':
        return <path d="M 45.00,48.00L3.00,48.00 c0.00-5.427, 6.348-9.96, 15.00-11.442l0.00,-2.22 C 14.43,32.256, 12.00,28.431, 12.00,24.00L12.00,23.697 C 10.26,23.073, 9.00,21.453, 9.00,19.50c0.00-1.953, 1.26-3.573, 3.00-4.197L12.00,15.00 c0.00-6.627, 5.373-12.00, 12.00-12.00s 12.00,5.373, 12.00,12.00l0.00,0.303 c 1.74,0.624, 3.00,2.244, 3.00,4.197c0.00,1.953-1.26,3.573-3.00,4.197L36.00,24.00 c0.00,4.431-2.43,8.256-6.00,10.335l0.00,2.22 C 38.655,38.04, 45.00,42.573, 45.00,48.00z"/>;
      case 'view':
        return <path d="M 24.00,45.00c-16.218,0.00-24.00-21.00-24.00-21.00s 7.782-21.00, 24.00-21.00s 24.00,21.00, 24.00,21.00S 40.218,45.00, 24.00,45.00z M 24.00,9.00 C 15.714,9.00, 9.00,15.714, 9.00,24.00s 6.714,15.00, 15.00,15.00s 15.00-6.714, 15.00-15.00S 32.286,9.00, 24.00,9.00z M 24.00,33.00c-4.971,0.00-9.00-4.029-9.00-9.00c0.00-1.059, 0.216-2.058, 0.552-3.00L21.00,21.00 L21.00,15.552 C 21.942,15.216, 22.941,15.00, 24.00,15.00c 4.971,0.00, 9.00,4.029, 9.00,9.00S 28.971,33.00, 24.00,33.00z"/>;
      default:
        return false;
    }
  }

  render() {
    const { size, onClick, title } = this.props;
    return (
      <svg
        version="1.1"
        className="icon"
        height={size}
        viewBox="0 0 48 48"
        onClick={onClick}
        title={title}>
        {this.renderGraphic()}
      </svg>
    );
  }
}

Icon.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.oneOf([
    'arrow-left',
    'arrow-right',
    'contrast',
    'close',
    'edit',
    'delete',
    'fast-forward',
    'grid',
    'logout',
    'menu',
    'outgoing',
    'play',
    'plus',
    'presentation',
    'previous',
    'rulers',
    'rewind',
    'settings',
    'user',
    'view'
  ]).isRequired
};

Icon.defaultProps = {
  size: `1rem`
}

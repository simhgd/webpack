import config from '../config';

export default {
  cacheBusting: config.dev.cacheBusting,
  transformAssetUrls: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
};

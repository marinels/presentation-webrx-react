// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

const images = {
  me: require('../assets/me.png'),
  logo: require('../assets/logo.png')
};

preloader(images);

export default images;

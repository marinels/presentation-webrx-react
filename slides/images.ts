// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

const Images = {
  me: require('../assets/me.png'),
  logo: require('../assets/logo.png'),
  todolist: undefined,  // TODO: screenshot from codepen
};

preloader(Images);

export { Images };

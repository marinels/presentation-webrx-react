// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

const Images = {
  me: require('../assets/me.png'),
  logo: require('../assets/logo.png'),
  todolist: require('../assets/todolist.png'),
  todolistFiltered: require('../assets/todolist-filtered.png'),
  questions: require('../assets/questions.png'),
};

preloader(Images);

export { Images };

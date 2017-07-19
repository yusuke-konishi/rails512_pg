import Greeter from '../modules/greeter';

document.getElementById('button').onclick = function() {
  const g = new Greeter('Alice');
  g.hello();
}

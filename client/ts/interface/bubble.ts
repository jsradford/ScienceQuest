import {Timer} from '../utils/timer';

import * as $ from 'jquery';

export class Bubble {

  id;
  element;
  timer: Timer;

  constructor(id, element, time) {
    this.id = id;
    this.element = element;
    this.timer = new Timer(500000000, time);
  }

  isOver(time) {
    if (this.timer.isOver(time)) {
      return true;
    }
    return false;
  }

  destroy() {
    $(this.element).remove();
  }

  reset(time) {
    this.timer.lastTime = time;
  }
}

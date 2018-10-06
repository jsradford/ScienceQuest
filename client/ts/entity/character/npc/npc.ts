import {Types} from '../../../../../shared/ts/gametypes';
import {Character} from '../character';


export const NpcTalk = {
    'guard': [
      'Welcome to ScienceQuest! Go to house on the hill in the center of the village to play a game.',
      'My name is guard. I am a guard.'
    ],

    'king': [
      'Hi, I\'m the King',
      'Leave this house and go South and West to the house on the hill to play a game'
    ],

    'villagegirl': [
      'Welcome to ScienceQuest! Go South and East to the house on the hill to play a game.',
      'You can play games from <a target="blank" href="http://volunteerscience.com/experiments/">here</a>. Eventually.',
      'My name is Village Girl. Apparently.'
    ],

    'villager': [
      'Welcome to ScienceQuest! Go South to the house on the hill to play a game.',
      'My name is villager. I\'m a villager. How\'s that for nominative determanism?'
    ],

    'agent': [
      'Welcome to ScienceQuest! Go South and West to the house on the hill to play a game.',
      'I am agent.'
    ],

    'rick': [
      'We\'re no strangers to love',
      'You know the rules and so do I',
      'A full commitment\'s what I\'m thinking of',
      'You wouldn\'t get this from any other guy',
      'I just wanna tell you how I\'m feeling',
      'Gotta make you understand',
      'Never gonna give you up',
      'Never gonna let you down',
      'Never gonna run around and desert you',
      'Never gonna make you cry',
      'Never gonna say goodbye',
      'Never gonna tell a lie and hurt you'
    ],

    'scientist': [
      'Do you want to play <iframe src="https://volunteerscience.com/experiments" onunload="unlockVSAchievement(economics)">an economics game</iframe>?'
    ],

    'nyan': [
      'nyan nyan nyan nyan nyan',
      'nyan nyan nyan nyan nyan nyan nyan',
      'nyan nyan nyan nyan nyan nyan',
      'nyan nyan nyan nyan nyan nyan nyan nyan'
    ],

    'forestnpc': [
      'lorem ipsum dolor sit amet',
      'consectetur adipisicing elit, sed do eiusmod tempor'
    ],

    'lavanpc': [
      'lorem ipsum dolor sit amet',
      'consectetur adipisicing elit, sed do eiusmod tempor'
    ],

    'priest': [
      'Go South and East to the house on the hill to play a game.',
      'I\'m a priest!'
    ],

    'sorcerer': [
      'Welcome to ScienceQuest! Go East to the house on the hill to play a game.',
      'So sayeth me the sorcerer.'
    ],

    'octocat': [
      'Welcome to ScienceQuest!',
      'The code is based on BrowserQuest.',
      'Check out <a target="_blank" href="http://github.com/mozilla/BrowserQuest">the repository on GitHub</a>'
    ],

    'coder': [
      'Do you want to play <iframe src="https://volunteerscience.com/experiments/" onunload="unlockVSAchievement(psychology)">a psychology game</iframe>?'
    ],

    'beachnpc': [
      'Don\'t mind me, I\'m just here on vacation.',
      'I have to say...',
      'These giant crabs are somewhat annoying.',
      'Could you please get rid of them for me?'
    ],

    'desertnpc': [
      'One does not simply walk into these mountains...',
      'An ancient undead lord is said to dwell here.',
      'Nobody knows exactly what he looks like...',
      '...for none has lived to tell the tale.',
      'It\'s not too late to turn around and go home, kid.'
    ],

    'othernpc': [
      'lorem ipsum',
      'lorem ipsum'
    ]
  };

  export class Npc extends Character {

    itemKind;
    talkCount;
    talkIndex;

    constructor(id, kind) {
      super(id, kind);
      this.itemKind = Types.getKindAsString(this.kind);
      this.talkCount = NpcTalk[this.itemKind].length;
      this.talkIndex = 0;
    }

    talk() {
      var msg = null;

      if (this.talkIndex > this.talkCount) {
        this.talkIndex = 0;
      }
      if (this.talkIndex < this.talkCount) {
        msg = NpcTalk[this.itemKind][this.talkIndex];
      }
      this.talkIndex += 1;

      return msg;
    }
  }

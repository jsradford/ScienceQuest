import {Types} from '../../../../../shared/ts/gametypes';
import {Character} from '../character';


export const NpcTalk = {
    'guard': [
      'Hello there',
      'We don\'t need to see your identification',
      'You are not the player we\'re looking for',
      'Move along, move along...'
    ],

    'king': [
      'Hi, I\'m the King',
      'I run this place',
      'Like a boss',
      'I talk to people',
      'Like a boss',
      'I wear a crown',
      'Like a boss',
      'I do nothing all day',
      'Like a boss',
      'Now leave me alone',
      'Like a boss'
    ],

    'villagegirl': [
      'Welcome to ScienceQuest!',
      'You can play games from <iframe src="http://volunteerscience.com/experiments/">here</iframe>. Eventually.'
    ],

    'villager': [
      'Howdy stranger. Do you like poetry?',
      'Roses are red, violets are blue...',
      'I like hunting rats, and so do you...',
      'The rats are dead, now what to do?',
      'To be honest, I have no clue.',
      'Maybe the forest, could interest you...',
      'or instead, cook a rat stew.'
    ],

    'agent': [
      'Do not try to bend the sword',
      'That\'s impossible',
      'Instead, only try to realize the truth...',
      'There is no sword.'
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
      'Do you want to play <iframe src="https://volunteerscience.com/experiments">an economics game</iframe>?'
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
      'Oh, hello, my friend.',
      'Wisdom is everything, so I\'ll share a few guidelines with you.',
      'You are free to go wherever you like in this world',
      'but beware of the many foes that await you.',
      'You can find many weapons and armors by killing enemies.',
      'The tougher the enemy, the higher the potential rewards.',
      'You can also unlock achievements by exploring and hunting.',
      'Click on the small cup icon to see a list of all the achievements.',
      'Please stay a while and enjoy the many surprises of ScienceQuest.',
      'Farewell, young friend.'
    ],

    'sorcerer': [
      'Ah... I had foreseen you would come to see me.',
      'Well? How do you like my new staff?',
      'Pretty cool, eh?',
      'Where did I get it, you ask?',
      'I understand. It\'s easy to get envious.',
      'I actually crafted it myself, using my mad wizard skills.',
      'But let me tell you one thing...',
      'There are lots of items in this game.',
      'Some more powerful than others.',
      'In order to find them, exploration is key.',
      'Good luck.'
    ],

    'octocat': [
      'Welcome to ScienceQuest!',
      'The code is based on BrowserQuest.',
      'Check out <a target="_blank" href="http://github.com/mozilla/BrowserQuest">the repository on GitHub</a>'
    ],

    'coder': [
      'Do you want to play <iframe src="https://volunteerscience.com/experiments/">a psychology game</iframe>?'
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

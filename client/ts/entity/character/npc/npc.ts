import {Types} from '../../../../../shared/ts/gametypes';
import {Character} from '../character';


export const NpcTalk = {
    'guard': [
      'My name is guard. I am a guard.',
      "Don't muck around. Your health will not regenerate outside of town!"
    ],

    'king': [
      "Hi, I'm King Philbert! Tom for short."
      "You should visit my Scientist. She has a study just for you.",
      "You'll find her in her house on the hill in the center of town.",
      "Leave this house and go Southwest."
    ],

    'villagegirl': [
      "Welcome to ScienceQuest! My grandma is a scientists here.",
      "She keeps building crazy experiments for us to play.",
      "You should check them out! She would love your help!",
      "Go Southeast to the house on the hill to play a game."
    ],

    'villager': [
      "Hello Stranger! Welcome to ScienceQuest.",
      "My name is Villager! Villager!"
      "I hear the scientist is cooking up something special for you.",
      "Go southwest to the house on the hill to play a game."
    ],

    'agent': [
      "Welcome to ScienceQuest!",
      "I'm a secret agent, so don't tell anyone.",
      "I have a special quest for you.",
      "Head south toward the beach and you'll find a cave with a special game."
      "Alright, be cool. Stay in school."
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
      "Welcome to my lab!",
      'Let\'s play our first game - <iframe src="https://volunteerscience.com/experiments" onunload="unlockVSAchievement(economics)">Play an economics game</iframe>?'
    ],

    'nyan': [
      'nyan nyan nyan nyan nyan',
      'nyan nyan nyan nyan nyan nyan nyan',
      'nyan nyan nyan nyan nyan nyan',
      'nyan nyan nyan nyan nyan nyan nyan nyan'
    ],

    'forestnpc': [
      "I'm the forestnpc. If you've found me, you've gone in the wrong direction!",
      "",
    ],

    'lavanpc': [
      'lorem ipsum dolor sit amet',
      'consectetur adipisicing elit, sed do eiusmod tempor'
    ],

    'priest': [
      "Welcome to ScienceQuest, I'm the priest!"
      'Go South and East to the house on the hill to play a game.',
    ],

    'sorcerer': [
      'Welcome to ScienceQuest, I am the sorcerer!',
      "We need you to make the magic happen.",
      "Head East to the scientist's house to "
    ],

    'octocat': [
      'Welcome to ScienceQuest!',
      'The code is based on BrowserQuest.',
      'Check out <a target="_blank" href="http://github.com/mozilla/BrowserQuest">the repository on GitHub</a>'
    ],

    'coder': [
      'Would you like to play a game? <iframe src="https://volunteerscience.com/experiments/" onunload="unlockVSAchievement(psychology)">Play a psychology game</iframe>?'
    ],

    'beachnpc': [
      "Hey there fellow traveler! I'm the Barry the Beachlover";
      "Congratulations for surviving all these crabs."
      "Looks like you could use a better sword."
      'Let\'s play <iframe src="https://volunteerscience.com/experiments/">Wildcat Wells</iframe>?'
      "Excellent work. Here's the sword I promised."
      'Want to play again? <iframe src="https://volunteerscience.com/experiments/">Play Again</iframe>?'
      "Alright, good work! Head back into town for more studies."
    ],

    'desertnpc': [
      'One does not simply walk into these mountains...',
      'An ancient undead lord is said to dwell here.',
      'Nobody knows exactly what he looks like...',
      '...for none has lived to tell the tale.',
      'It\'s not too late to turn around and go home, kid.'
    ],

    'othernpc': [
      "I'm othernpc. No one knows where I am",
      'If you find me, tell Jason.'
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

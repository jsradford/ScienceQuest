import {Types} from '../../../../../shared/ts/gametypes';
import {Character} from '../character';


export const NpcTalk = {
    'guard': [
      'My name is guard. I am a guard.',
      "Don't muck around. Your health will not regenerate outside of town!"
    ],

    'king': [
      "Hi, I'm King Philbert! Tom for short.",
      "You should visit my Scientist. She has a study just for you.",
      "You'll find her in her house on the hill in the center of town.",	  
      "Leave this house and go Southwest."
    ],


    'villagegirl': [
      "Welcome to ScienceQuest! My grandma is a scientist here.",
      "She keeps building crazy experiments for us to play.",
      "You should check them out! She would love your help!",
      "Go Southeast to the house on the hill to play a game."
	],	
	

    'villager': [
      "Hello Stranger! Welcome to ScienceQuest.",
      "My name is Villager! Villager!",
      "I hear the scientist is cooking up something special for you.",
      "Go southwest to the house on the hill to play a game."
    ],

    'agent': [
      "Welcome to ScienceQuest!",
      "I'm a secret agent, so don't tell anyone.",
      "I have a special quest for you.",
      "Head south toward the beach and you'll find a cave with a special game.",
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
	  'dropdown:Three Cows,228,Decision,32,All Games Page,A',		  
	  'Thanks for playing!'	  	  
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
      "Welcome to ScienceQuest, I'm the priest!",
      'Go South and East to the house on the hill to play a game.',
    ],

    'sorcerer': [
      'Welcome to ScienceQuest, I am the sorcerer!',
      "We need you to make the magic happen.",
      "Head East to the scientist's house to play a game."
    ],

    'octocat': [
      'Welcome to ScienceQuest!',
      'The code is based on BrowserQuest.',
      'Check out <a target="_blank" href="http://github.com/mozilla/BrowserQuest">the repository on GitHub</a>'
    ],

    'coder': [
      'Welcome to ScienceQuest, I am your friendly neighborhood coder!',	  	  
      "Head southwest to the scientist's house to play a game."
    ],

    'beachnpc': [
      "Hey there fellow traveler! I'm the Barry the Beachlover",
      "Congratulations for surviving all these crabs.",
      "Looks like you could use a better sword.",
	  'dropdown:Wildcat Wells,68,All Games Page,A',
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
	gameListIdentifier;

    constructor(id, kind) {
      super(id, kind);
      this.itemKind = Types.getKindAsString(this.kind);
      this.talkCount = NpcTalk[this.itemKind].length;
      this.talkIndex = 0;
	  this.gameListIdentifier = "dropdown:";	  	  
    }

    talk() {
      var msg = null;
	  var msgToCheck = "";

      if (this.talkIndex > this.talkCount) {
        this.talkIndex = 0;
      }
      if (this.talkIndex < this.talkCount) {
        msgToCheck = NpcTalk[this.itemKind][this.talkIndex];
		if (this.isGameMsg(msgToCheck)) {
			msg = this.playGames(msgToCheck);
		}
		else {
			msg = msgToCheck;
		}
      }
      this.talkIndex += 1;

      return msg;
    }

	/* Identify msg that starts with the game list identifier */
	isGameMsg(msg) {				
		var startOptionPos = msg.indexOf(this.gameListIdentifier);
		if (startOptionPos == -1)
			return false;
		else
			return true;		
	}
	
	/* Change msg starting with game list identifier to the dropdown/iframe msg - ex. 'dropdown:Three Cows,228,Decision,32' */
	playGames(msg) {	
		var allGamePage = "A";
		var optionList = msg.replace(this.gameListIdentifier,"");
		var dropdownStartHTML = '<form position:relative; z-index:10>Choose game from dropdown and <a href="javascript:setiframe()" style="background-color:black;color:yellow">click here to play</a>. (If general game page appears, click again)&nbsp;&nbsp; <select id="games">';
		var dropdownEndHTML = '</select></form>';		
	    var optionHTMLTemplate = '<option value="valueX">textX</option>';		
		var optionArray = optionList.split(',');
		var optionsHTML = "";
		var optionHTML = "";		
		var optionText = "";
		var optionValue = "";
		var i;		
		for (i = 0; i < optionArray.length; i += 2) { 	
			optionText = optionArray[i];
			optionValue = optionArray[i+1];		
			optionHTML = optionHTMLTemplate.replace("textX", optionText);	
			optionHTML = optionHTML.replace("valueX", optionValue);				
			optionsHTML = optionsHTML + optionHTML;
		}
		var bubbleButtonHTML = '<div><button id="bubblebutton" onclick="document.getElementById(\'iframe\').parentNode.removeChild(document.getElementById(\'iframe\'))">When done playing, press here, then talk to me!</button>'		
		var gameLink = '?join_category=';
		var iframeHTML = '<iframe height="430px" width="100%" id="iframe"></iframe></div>';		
		var scriptHTMLPart1 = '<script>function setiframe(){var sel=document.getElementById(\'games\');var gameValue="";if (sel.value!="' + allGamePage + '") {gameValue = "' + gameLink + '" + sel.value;}';
		var scriptHTMLPart2 = 'var url ="http://volunteerscience.com/experiments/" + gameValue;document.getElementById(\'iframe\').src = url;}</script>';	  
		var playGamesMsg = dropdownStartHTML + optionsHTML + dropdownEndHTML + bubbleButtonHTML + iframeHTML + scriptHTMLPart1 + scriptHTMLPart2;
		return playGamesMsg;
	}

  }	
	
import * as _ from 'lodash';

export class Storage {
  data: any;

  constructor() {
    if (this.hasLocalStorage() && localStorage.data) {
      this.data = JSON.parse(localStorage.data);
    } else {
      this.resetData();
    }
  }

  resetData() {
    this.data = {
      hasAlreadyPlayed: false,
      player: {
        name: '',
        weapon: '',
        armor: '',
        image: ''
      },
      achievements: {
        unlocked: [],
        ratCount: 0,
        skeletonCount: 0,
        totalKills: 0,
        totalDmg: 0,
        totalRevives: 0,
        gameTypePlayedCounts: {
          economics: 0,
          psychology: 0,
          human_intelligence: 0,
          problem_solving: 0,
          surveys: 0,
        }
      }
    };
  }

  hasLocalStorage() {
    return true;
    // return Modernizr.localstorage;
  }

  save() {
    if (this.hasLocalStorage()) {
      localStorage.data = JSON.stringify(this.data);
    }
  }

  clear() {
    if (this.hasLocalStorage()) {
      localStorage.data = '';
      this.resetData();
    }
  }

  // Player
  hasAlreadyPlayed() {
    return this.data.hasAlreadyPlayed;
  }

  initPlayer(name) {
    this.data.hasAlreadyPlayed = true;
    this.setPlayerName(name);
  }

  setPlayerName(name) {
    this.data.player.name = name;
    this.save();
  }

  setPlayerImage(img) {
    this.data.player.image = img;
    this.save();
  }

  setPlayerArmor(armor) {
    this.data.player.armor = armor;
    this.save();
  }

  setPlayerWeapon(weapon) {
    this.data.player.weapon = weapon;
    this.save();
  }

  savePlayer(img, armor, weapon) {
    this.setPlayerImage(img);
    this.setPlayerArmor(armor);
    this.setPlayerWeapon(weapon);
  }

  // Achievements
  hasUnlockedAchievement(id) {
    return _.include(this.data.achievements.unlocked, id);
  }

  unlockAchievement(id) {
    if (!this.hasUnlockedAchievement(id)) {
      this.data.achievements.unlocked.push(id);
      this.save();
      return true;
    }
    return false;
  }

  getAchievementCount() {
    return _.size(this.data.achievements.unlocked);
  }

  // Angry rats
  getRatCount() {
    return this.data.achievements.ratCount;
  }

  incrementRatCount() {
    if (this.data.achievements.ratCount < 10) {
      this.data.achievements.ratCount++;
      this.save();
    }
  }

  // Skull Collector
  getSkeletonCount() {
    return this.data.achievements.skeletonCount;
  }

  incrementSkeletonCount() {
    if (this.data.achievements.skeletonCount < 10) {
      this.data.achievements.skeletonCount++;
      this.save();
    }
  }

  // Meatshield
  getTotalDamageTaken() {
    return this.data.achievements.totalDmg;
  }

  addDamage(damage) {
    if (this.data.achievements.totalDmg < 5000) {
      this.data.achievements.totalDmg += damage;
      this.save();
    }
  }

  // Hunter
  getTotalKills() {
    return this.data.achievements.totalKills;
  }

  incrementTotalKills() {
    if (this.data.achievements.totalKills < 50) {
      this.data.achievements.totalKills++;
      this.save();
    }
  }

  // Still Alive
  getTotalRevives() {
    return this.data.achievements.totalRevives;
  }

  incrementRevives() {
    if (this.data.achievements.totalRevives < 5) {
      this.data.achievements.totalRevives++;
      this.save();
    }
  }

  //VS Game stuff
  getTotalGamesPlayed() {
    var gameTypePlayedCounts = Object["values"](this.data.achievements.gameTypePlayedCounts)
    return gameTypePlayedCounts.reduce((total, count) => total + count)
  }

  incrementGameTypePlayedCount(gameType) {
    if (gameType in this.data.achievements.gameTypePlayedCounts) {
     this.data.achievements.gameTypePlayedCounts[gameType]++;
     this.save();
    }
  }

  // Get number of different game types played
  getGameTypesPlayed() {
    var gameTypePlayedCounts = Object["values"](this.data.achievements.gameTypePlayedCounts)
    var gameTypesPlayed = 0;
    for (var i = 0; i < gameTypePlayedCounts.length; i++) {
      if (gameTypePlayedCounts[i] > 0) {
        gameTypesPlayed++;
      }
    }
    return gameTypesPlayed;
  }

  getGameTypePlayedCount(gameType) {
    if (gameType in this.data.achievements.gameTypePlayedCounts) {
      return this.data.achievements.gameTypePlayedCounts[gameType];
    } else{
      return 0;
    }
  }

  isGameTypeCountGreaterThan(count) {
    var gameTypePlayedCounts = Object["values"](this.data.achievements.gameTypePlayedCounts)
    for (var i = 0; i < gameTypePlayedCounts.length; i++) {
      if (gameTypePlayedCounts[i] >= count) {
          return true
      }
    }
    return false
  }

  isAllGameTypesPlayed() {
    return this.getGameTypesPlayed() == Object.keys(this.data.achievements.gameTypePlayedCounts).length
  }
 
}
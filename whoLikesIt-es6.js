/*
 * Who likes it?
 *
 * 98% of 494572 of 6520BattleRattle8 Issues Reported
 * JavaScript
 * Node v6.0.0
 * VIM
 * EMACS
 * Instructions
 * Output
 * You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
 *
 * Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
 *
 * likes [] // must be "no one likes this"
 * likes ["Peter"] // must be "Peter likes this"
 * likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
 * likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
 * likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
 *
 */

//My Anwser (ES6)
//


let likes = (names) => {
  if (names.length===1) {
      return names[0] + ' likes this' 
    }
  else if (names.length===2) {
      return names[0] + ' and ' + names[1] + ' like this';
      }
  else if (names.length === 3) {
      return names[0] +', ' + names[1] + ' and ' + names[2] + ' like this';
    }
  else if (names.length > 3) {
      return names[0] + ', ' + names[1] + ' and ' + names.slice(2).length + ' others like this';
      }
  else {
      return 'no one likes this'
      }
}



//Suggested Answer
//

function likes(names) {
  names = names || [];
  switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}

//Comments
/* I originally considered a switch, but I thought it might have lesser performance versus an if/else. Turns out, based on this Reddit post: https://www.reddit.com/r/javascript/comments/2582qv/is_switch_ever_a_good_idea_in_javascript/, a switch would've been just as good.
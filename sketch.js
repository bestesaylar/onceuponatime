
var grammar;

// the grammar
var data = {
  "start": ["Once upon a time, there was a #adj# #hero# and it was a #adj# and lonely night. The #hero# was very #adj#. #story#. #story2# #story3# #story4# #story5# It makes the #hero# so #adj# and they lived happly after."  ],
  "hero":["girl"],
  "story": ["So, she wanted to go out to take some air.", "So, she wanted to go see her #adj# #noun","So, she wanted to go see some #adj# movie."],
  "story2":["On her way, she felt like she's #adverb# hungry and she decided to buy some #food# from the store."],
  "story3":["But Wait! #exclamation#, she coudn't believe what she saw in front of her. There was a #adverb# #adj# #character# in the store."],
  "story4":["Don't you be in the #noun2#? she asked #adverb#.","Aren't you suppose to be be with the #adj# #character? she ased #adj# eyes."],
  "story5":["No, I'm here to #verb# you, He answered."],
  "character": ["man", "prince","frog","wolf","fox", "bear","panda",'dragon', 'dinosaur', 'chupacabra', 'jaguar', 'Joker', 'Voldemort'],
  "adj": ['😎', '😍', '💚', "🔥", 'cold', 'weird','sad','dark','boring', 'empty','happy', 'unnecessary','sexy','bad','indecent'],
  "food": ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🍅", "🍆", "🌽", "🌶", "🍄", "🌰", "🍞", "🧀", "🍖", "🍗", "🍔", "🍟", "🍕", "🌭", "🌮", "🌯", "🍳", "🍲", "🍿", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🍡", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", 'pizza', 'dumplings', 'hamburger', 'ice cream', 'french fries', 'salmon'],
  "exclamation": ['🙉', "🔥🔥🔥🔥🔥🔥🔥", 'Nooooooo', 'Yehhuuuuuuuuu', 'Whaaaat', 'Ohhhh'],
  "noun":["friend","sister","uncle","family"],
  "noun2":["grave","backyard","forest","palace","space","shower"],
  "verb":["eat","love","cuddle","hug","kill","murder","destroy","cut"],
  "adverb":["enourmousy","fortunately","honestly","innocently","kindly","politely","curiously","confidently","quietly","slowly"]
}

function setup() {
  noCanvas();
  // Make the grammar
  grammar = tracery.createGrammar(data);

  // A button to generate a new sentence
  var button = select('#generate');
  button.mousePressed(generate);

  // A button to clear everything
  var clear = select('#clear');
  clear.mousePressed(clearAll);
}

// Remove everything
function clearAll() {
  var elements = selectAll('.text');
  for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

function generate() {
  var expansion = grammar.flatten('#start#');
  var par = createP(expansion);
  // var r = floor(random(100, 255));
  // var g = floor(random(150, 255));
  // var b = floor(random(200, 255));
  // par.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  par.class('text');
}
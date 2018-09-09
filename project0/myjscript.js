//Paragraph hiding
if (($(".biolist").css("display")) == "block") {
  $("#toggle_button").text("-");
} else{
  $("#toggle_button").text("+");
};
    
$("#toggle_button").click(function(){
  $(".biolist").toggle("slow", function() {
    if (($(".biolist").css("display")) == "block") {
      $("#toggle_button").text("-");
    } else{
      $("#toggle_button").text("+");
    }
  });
});

//Random quote generator
var quotes=["In ancient times cats were worshipped as gods; they have not forgotten this.","Most gods throw dice, but Fate plays chess, and you don't find out til too late that he's been playing with two queens all along.","The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.","Build a man a fire, and he'll be warm for a day. Set a man on fire, and he'll be warm for the rest of his life.","Light thinks it travels faster than anything but it is wrong. No matter how fast light travels, it finds the darkness has always got there first, and is waiting for it.","They say a little knowledge is a dangerous thing, but it's not one half so bad as a lot of ignorance.","The truth may be out there, but lies are inside your head.","The intelligence of the creature known as a crowd, is the square root of the number of people in it.","The harder I work, the luckier I become.","In the beginning there was nothing, which exploded.","It occurred to me that at one point it was like I had two diseases - one was Alzheimer's, and the other was knowing I had Alzheimer's.","Opera happens because a large number of things amazingly fail to go wrong."]



$("#roll_quote").click(function(){
  var quote_selected = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[quote_selected];
});

$("#roll_quote").click();



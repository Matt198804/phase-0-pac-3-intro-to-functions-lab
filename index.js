function shout (string) {
    return string.toUpperCase();
} 

function whisper (string) {
    return string.toLowerCase();
}

function logShout (Hello) {
    console.log(Hello.toUpperCase())
}

function logWhisper (Hello) {
    console.log(Hello.toLowerCase())
}

function sayHiToGrandma (aWord) {
    var cantHear = "I can't hear you!";
    var yes = "YES INDEED!";
    var love = "I love you, too.";
    if (aWord.toLowerCase(aWord) === aWord) {
        return cantHear;
}
else if (aWord.toUpperCase(aWord) === aWord) {
    return yes;
}
 else if ("I love you, Grandma." === aWord) {
        return love
      }
}
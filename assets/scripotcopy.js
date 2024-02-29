//Declaring a constant variable that is set to equal to the string "circle."
//Const or constant means that the variable cannot be reassigned another value alike how a var declaration or variable can be.

//In this example, "shape" is the name of our container, or variable, and the data it stores is "circle".

//const shape = "circle";
//const topics = "HTML, CSS, Git, JavaScript";

//console.log(topics);

//const topic = "HTML";


// if (topic === 'HTML') {
//   console.log("Let's study HTML!");
// } else if (topic === 'CSS') {
//   console.log("Let's study CSS!");
// } else if (topic === 'Git') {
//   console.log("Let's study Git!");
// } else if (topic === 'JavaScript') {
//   console.log("Let's study JavaScript!");
// } else {
//   console.log('Please try again!');
// }


const shapes = ["triangle", "square", "pentagon", "circle"];
const studentInfo = ["Lu", 54, true];
// console.log(shapes[0]);
// console.log(shapes[1]);
// console.log(shapes[2]);
// console.log(shapes[3]);


//practice for loop
for(let x = 0; x < shapes.length; x++) {
    console.log(shapes[x]);
   }

console.log("-------------break----------------");

const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

for (let x = 0; x < topics.length; x++) {
    console.log(topics[x]);
   }

console.log("-------------break----------------");

function helloWorld() {
    console.log("Hello World! This is a operational function!")
}

helloWorld();

console.log("-------------break----------------");

const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (let x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
  }
  console.log('Here are the topics we learned through Prework:');
  listTopics();

  console.log("-------------break----------------");

  function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }
  console.log('Which topic should we study first?');
  selectTopic();

  //adding a comment here to update the script for a push to main
  
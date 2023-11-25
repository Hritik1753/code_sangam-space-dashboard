
let questions = [
  {
    id: 1,
    question: "The minimum speed needed for an object to get free from the gravitational attraction of a planet or moon is known as ?",
    answer: "escape velocity",
    options: [
      "terminal velocity",
      "initial velocity",
      "escape velocity",
      "final velocity"
    ]
  },
  {
    id: 2,
    question: "First moon landing mission?",
    answer: "Apollo 11",
    options: [
      "Sputnik 1",
      " Salyut 1",
      "Apollo 11",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "First human to travel into space",
    answer: "Yuri Gagarin",
    options: [
      "Alan Shepard",
      " Neil Armstrong",
      "Vladimir Komarov",
      "Yuri Gagarin"
    ]
  },
  {
    id: 4,
    question: "The observation of objects in space, known as",
    answer: "Astronomy",
    options: [
      "Astronomy",
      "Telescopy",
      "Space exploration",
      "Meterology"
    ]
  },
  {
    id: 5,
    question: "The first animal sent in orbit",
    answer: "Dog",
    options: [
      "CAT",
      "Dog",
      "HORSE",
      "RAT"
    ]
  },
  {
    id: 6,
    question: "The Luna Programme was a series of unmanned space mission launched by which country?",
    answer: "Soviet Union",
    options: [
      "United States of America",
      "Soviet Union",
      "China",
      "None of above"
    ]
  },
  {
    id: 7,
    question: "Which of the following was the first artificial satellite?",
    answer: " Sputnik",
    options: [
      "Lander Beagle",
      "Sojourner",
      "Apollo 11",
      " Sputnik"
    ]
  },
  {
    id: 8,
    question: "Which of the following is the India's first lunar probe launched by the Indian Space Research Organisation?",
    answer: "Chandrayaan Program",
    options: [
      "Mangalyaan Program",
      "Chandrayaan Program",
      "Both A and B",
      "Discovery program"
    ]
  },
  {
    id: 9,
    question: "Calculate the time taken for light to reach the Earth from the Sun.?",
    answer: "8 minutes",
    options: [
      "8 seconds",
      "8 milliseconds",
      "8 minutes",
      "8 hours"
    ]
  },
  {
    id: 10,
    question: "Identify which term describes an object which orbits a star.?",
    answer: "Planet",
    options: [
      "moon",
      "Planet",
      "Galaxy",
      "Asteroid"
    ]
  }
  // {
  //   id: 5,
  //   question: "Which is the largest moon of Saturn?",
  //   answer: "Titan",
  //   options: [
  //     "Avenger",
  //     "Sputanik",
  //     "moon-1",
  //     "None Of the above"
  //   ]
  // }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

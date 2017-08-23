let state = {};
state.correct = 0;
state.incorrect = 0;
state.questionIndex = 0;//keeps track of incrementing question
//add alternate description
state.questions = [
  {
    image:{
      src:'http://cdn3-www.dogtime.com/assets/uploads/gallery/siberian-husky-dog-breed-pictures/siberian-husky-dog-breed-pictures-5.jpg',
      alt: 'A medium size working dog breed that originated in North-Eastern Russia'
    },
    answer1:{
      select:'Bull dog',
      choice:'incorrect'
    },
    answer2:{
      select:'Shitzu' ,
      choice:'incorrect',
    },
    answer3:{
      select:'Siberian Husky',
      choice: 'correct'
    },
    answer4:{
      select: 'Australian Shepherd',
      choice: 'incorrect'
    },
    correctAnswer: 'Siberian Husky',
  },
  {
    image:{
      src:'http://cdn2-www.dogtime.com/assets/uploads/gallery/labrador-retriever-dog-breed-pictures/labrador-retriever-dog-pictures-6.jpg',
      alt: 'A favorite disability breed in many countries, who are trained to aid blind and those with autism. They are medium-large. Their head is broad with a pronounced stop.'
    },
    answer1:{
      select:'Labrador Retriever',
      choice: 'correct'
    },
    answer2:{
      select:'Rhodesian Ridgeback',
      choice: 'incorrect'
    },
    answer3:{
       select: 'Dalmation',
       choice: 'incorrect'
     },
     answer4:{
       select: 'Golden retriever',
       choice: 'incorrect'
     },
    correctAnswer: 'Labrador Retriever'
  },
  {
    image:{
     src :'https://vetstreet.brightspotcdn.com/dims4/default/10dae76/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F3a%2F54%2F5ae8bfcc41b381c27a792e0dd891%2FAP-KWDHXS-645sm8113.jpg',
     alt: 'Has a wrinkly, short-muzzled face and curled tail. The breed has a fine glossy coat that comes in a variety of colors, most often fawn or black and a compact square body with well-developed muscles.'
    },
    answer1:{
      slect: 'Bulldog',
      choice: 'incorrect'
    },
    answer2:{
      select: 'Pug',
      choice: 'correct'
    },
    answer3:{
      select: 'Rhodesian Ridgeback',
      choice: 'incorrect'
    },
    answer4:{
      select:'Golden Retriever',
      choice: 'incorrect'
    },

    correctAnswer: 'Pug'
  },
  {
    image:{
    src: 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Beagle-3.jpg',
    alt: 'Small scent hound used for hunting and tracking down small game'
    },
    answer1:{
      select: 'Chihuaha',
      choice: 'incorrect'
    },
    answer2:{
      select: 'Papillon',
      choice: 'incorrect'
    },
    answer3:{
      select: 'Beagle',
      choice: 'correct'
    },
    answer4:{
      select: 'Basset Hound',
      choice: 'incorrect'
    },

    correctAnswer: 'Beagle'
  },
  {
    image: {
     src: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/side-3.jpg',
     alt: 'This breed is also known as the Alsatian in Britain and Ireland. This is a relatively new breed of dog, with their origin dating to 1899. They are medium to large-sized dogs. They have a domed forehead, a long square-cut muzzle with strong jaws and a black nose.'
    },
    answer1:{
      select: 'German Shepherd',
      choice: 'correct'
    },
    answer2:{
      select: 'Beagle',
      choice: 'incorrect'
    },
    answer3:{
      select: 'Chihuaha',
      choice: 'incorrect'
    },

    answer4:{
      select: 'Australian Shepherd',
      choice: 'incorrect'
    },
    correctAnswer: 'German Shepherd'
  },
  {
    image: {
      src: 'http://www.petwave.com/~/media/Images/Center/Breed/Dogs/Working-Group/Boxer/Boxer-show-dog.ashx',
    alt: 'This is a medium-sized, short-haired breed of dog, developed in Germany. The coat is smooth and tight-fitting. Colors are fawn or brindled. It is a member of the Working Group.'
    },
    answer1:{
      select: 'Papillon',
      choice: 'incorrect'
    },
    answer2:{
      select: 'Beagle',
      choice: 'incorrect',
    },
    answer3:{
      select: 'German Shepherd',
    },
    answer4:{
      select: 'Boxer',
      choice: 'correct'
    },

      correctAnswer: 'Boxer'
  },
  {
    image:{
    src: 'https://s-media-cache-ak0.pinimg.com/736x/d4/6b/91/d46b917dd9be51d3129bd709ff299880--yorkie-puppies-yorkshire-terrier-puppies.jpg',
    alt: 'This is a small dog breed of the Terrier type, developed during the 19th century in the UK to catch rats in clothing mills. It has a grey, black and tan coat.'
    },
    answer1:{
      select: 'Poodle',
      choice: 'incorrect',
    },
    answer2:{
      select: 'Yorkshire Terrier',
      choice: 'correct',
    },
    answer3:{
      select: 'Scottish Terrier',
      choice: 'incorrect',
    },
    answer4:{
      select: 'German Shepherd',
      choice: 'incorrect'
    },
      correctAnswer: 'Yorkshire Terrier'
  },
  {
    image:{
      src : 'https://vetstreet.brightspotcdn.com/dims4/default/467e30f/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa8%2Fc895909e8d11e0a2380050568d634f%2Ffile%2FBorder-Collie-2-645mk062111.jpg',
      alt: 'It is a working and herding dog breed developed in the Anglo-Scottish border region for herding livestock, especially sheep. It was specifically bred for intelligence and obedience.'
    },
    answer1:{
     select: 'Sheep Dog',
     choice: 'incorrect'
    },
    answer2:{
      select: 'Lassie',
      choice: 'incorrect'
    },
    answer3:{
      select: 'Border Collie',
      choice: 'correct'
    },
    answer4:{
      select: 'Rotweiler',
      choice: 'incorrect'
    },
    correctAnswer: 'Border Collie'
  },
  {
    image:{
    src: 'https://vetstreet.brightspotcdn.com/dims4/default/d742db0/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F98%2Fd98250a0d311e0a2380050568d634f%2Ffile%2FGolden-Retriever-3-645mk062411.jpg',
    alt:'The Golden Retriever is a large-sized breed of dog bred as gun dogs to retrieve shot waterfowl such as ducks. They are able to retrieve game undamaged. They are a long-coaed breed, with a dense inner coat that provides them with adequate warmthn in the outdoors.'
    },
    answer1:{
      select: 'Poodle',
      choice: 'incorrect'
    },
    answer2:{
      select: 'Labrador Retriever',
      choice: 'incorrect'
    },
    answer3:{
      select: 'Mutt',
      choice: 'incorrect'
    },
    answer4: {
      select: 'Golden Retriever',
      choice: 'correct'
    },

    correctAnswer: 'Golden Retriever'
    },
  {
    image: {
    src :'http://www.dogbreedstandards.com/wp-content/uploads/2012/01/Papillon-Continental-toy-spaniel.jpg',
    alt:'Also called the continental toy spaniel, this is one of the oldest toy spaniels. It derives its name from its characteristic butterfly-like look of the long and fringed hair on the ears.'
    },
    answer1:{
      select: 'Papillon',
      choice: 'correct'
    },
    answer2:{
      select: 'Long-haired Chihuaha',
      choice: 'incorrect'
    },
    answer3:{
      select: 'Pomeranian',
      choice: 'incorrect'
    },
    answer4:{
      select: 'Toy Poodle',
      choice: 'incorrect'
    },
    correctAnswer: 'Papillon'
  }
  ];



function handleQuestion(){
  $('#dog-quiz-form').on('click', `.incorrect`, event => {
    event.preventDefault();
    alert(`That is incorrect! The correct answer is ${state.questions[state.questionIndex].correctAnswer}.`);
    state.incorrect+=1;
    state.questionIndex+=1;
    const itemElement = getItemElement(event.currentTarget);
    deleteItem(itemElement);
    if(state.questionIndex == state.questions.length){
      showAnswerPage();
    }
    else{
    generateQuestionElement(state);
    }
  });

  $('#dog-quiz-form').on('click', `.correct`, event => {
    event.preventDefault();
    alert("That is correct!");
    state.correct+=1;
     state.questionIndex+=1;
    const itemElement = getItemElement(event.currentTarget);
    deleteItem(itemElement);
     if(state.questionIndex == state.questions.length){
      showAnswerPage();
    }
    else{
    generateQuestionElement(state);
    }
  });
}

function handleShowAnswer(){
 $('#dog-quiz-form').submit(function(event) {
    event.preventDefault();
    state.correct = 0;
    state.incorrect = 0;
    state.questionIndex = 0;
    console.log('startQuiz ran');
    const itemElement = getItemElement(event.currentTarget);
     deleteItem(itemElement);
    generateQuestionElement(state);
   });
}

 function generateQuestionElement(state){
  $('.container').html
  (`<form id = "dog-quiz-form">
      <h1>What Breed of dog is this?</h1>
      <img src ="${state.questions[state.questionIndex].image.src}" class = "intro-pic" alt = "${state.questions[state.questionIndex].image.alt}">
      <button class = "${state.questions[state.questionIndex].answer1.choice}"> ${state.questions[state.questionIndex].answer1.select}</button>
      </button>
      <button class = "${state.questions[state.questionIndex].answer2.choice}"> ${state.questions[state.questionIndex].answer2.select}</button>
      <button class = "${state.questions[state.questionIndex].answer3.choice}"> ${state.questions[state.questionIndex].answer3.select}</button>
      <button class = "${state.questions[state.questionIndex].answer4.choice}">${state.questions[state.questionIndex].answer4.select}</button>
      <h3>Question ${state.questionIndex +1} out of ${state.questions.length}</h3>
      <h3>Correct answers: ${state.correct} Incorrect answers: ${state.incorrect} </h3>
    </form>`);
  handleQuestion();
}

function showAnswerPage(){
  console.log('showing answer page');
  $('.container').html
  (`<form id = "dog-quiz-form"><h3>Answers correct: ${state.correct} out of ${state.questionIndex}</h3><button type = "submit"> Start Quiz Over</button></form>`);
  handleShowAnswer();
}


function getItemElement(item){
  const itemElemString = $(item)
  .closest('#dog-quiz-form');
  return itemElemString;
}

function deleteItem(itemElement){
  console.log(`removing page`);
  itemElement.remove();
}

function startQuiz(){
  $('#dog-quiz-form').submit(function(event) {
    event.preventDefault();
    console.log('startQuiz ran');
    const itemElement = getItemElement(event.currentTarget);
    deleteItem(itemElement);
    generateQuestionElement(state);

  });
}

function handleQuiz(){
  startQuiz();
}

$(handleQuiz);



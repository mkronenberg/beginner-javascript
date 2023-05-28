// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy

const testImage = {
  width: '250',
  height: '400',
  get source() {
    return `https://place-puppy.com/${this.width}x${this.height}`
  },
  classList: 'cute',
  alt_text:'Cute Puppy'
}

function imageHTML({
  width,
  height,
  source,
  classList,
  alt_text
}) {
  return `<img  src="${source}" 
            width="${width}px"
            height="${height}px" 
            alt="${alt_text}"
            class="${classList}"
          />`
    }

// add three list items with the words "one, two, three" in them
const wordList = [`one`, `two`, `three`];

function arrayToList(array) {
  let listItems = ``;
  for (const element of array) {
    const li = `<li>${element}</li>`;
    listItems += li;
  }
  return `
  <ul class="unorderedList">
    ${listItems}
  </ul>
  `;
}

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard({
  name = 'missing name',
  age = 'missing age',
  height = 'missing height'
} = {}) {
  return `
    <div id="${name}Card" class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
      <button class"destruct">Delete</button>
    </div>
  `;
}

// Grab Page
const page = document.querySelector('#page');

const pageHTML = `
  <div>
    <p>Paragraph One</p>
    <p class="warning">Paragraph Two</p>
  </div>
  ${arrayToList(wordList)}
  <div class="wrapper">
    ${imageHTML(testImage)}    
  </div>
  <div class="cards">
    ${generatePlayerCard({
      name: 'Mike',
      age: '35',
      height: '6ft'
      })
    }
    ${generatePlayerCard({
      name: 'Nora',
      age: '32',
      height: '5ft 5in'
      })
    }
    ${generatePlayerCard()
    }
  </div>
`;

const myFragment = document.createRange().createContextualFragment(pageHTML);

myFragment.querySelector('.warning').remove();

// put it into the body
page.append(myFragment);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph




// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const deleteButton = page.querySelectorAll('.destruct');
// make out delete function
function deleteCard() {
  this.parentElement.addAttribute('hidden');
}
// loop over them and attach a listener
// deleteButton.addEventListener('onclick', deleteCard)
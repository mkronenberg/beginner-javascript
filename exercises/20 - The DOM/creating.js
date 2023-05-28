const listValues = [`one`, `two`, `three`, `four`, `five`]

const mainArea = document.querySelector('div.items')
const unorderedList = document.createElement('ul');

for (let index = 0; index < listValues.length; index++) {
  const listItem = document.createElement('li');
  listItem.id = index;
  listItem.textContent = listValues[index];
  unorderedList.append(listItem); 
}

mainArea.append(unorderedList);
const tabs = document.querySelector('div.tabs');
  const tabButtons = tabs.querySelectorAll('[role="tab"]');
  const panels = tabs.querySelectorAll('[role="tabpanel"]');

function selectTab(event) {

  // change tab buttons
  tabButtons.forEach(button => {
    if (event.currentTarget.id === button.id) {
      button.setAttribute("aria-selected", "true")
    } else {
      button.setAttribute("aria-selected", "false")
    }
  });

  // change tab panel
  panels.forEach(panel => {
    if (event.currentTarget.id === panel.getAttribute("aria-labelledby")) {
      panel.hidden = false;
    } else {
      panel.hidden = true;
    }
  });
}

tabButtons.forEach(button => {
  button.addEventListener("click", selectTab);
});
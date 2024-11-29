document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const submitPasswordBtn = document.getElementById('submit-password');
    const createEventBtn = document.getElementById('create-event-btn');
    const createEventFormSection = document.getElementById('create-event-form-section');
    const eventCardsContainer = document.getElementById('event-cards');
  
    const correctPassword = 'admin123';
  
    let events = [];
  
    submitPasswordBtn.addEventListener('click', function () {
      const enteredPassword = passwordInput.value;
  
      if (enteredPassword === correctPassword) {
        createEventBtn.classList.remove('hidden');
        passwordInput.disabled = true;
        submitPasswordBtn.disabled = true;
        passwordInput.value = '';
      } else {
        alert('Incorrect password. Please try again.');
      }
    });
  
    createEventBtn.addEventListener('click', function () {
      createEventFormSection.classList.remove('hidden');
    });
  
    document.getElementById('create-event-form').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('event-name').value;
      const description = document.getElementById('event-description').value;
      const image = document.getElementById('event-image').value;
  
      const newEvent = {
        name,
        description,
        image
      };
  
      events.push(newEvent);
  
      const eventCard = createEventCard(newEvent);
      eventCardsContainer.appendChild(eventCard);
  
      document.getElementById('create-event-form').reset();
      createEventFormSection.classList.add('hidden');
    });
  
    function createEventCard(event) {
      const eventCard = document.createElement('div');
      eventCard.classList.add('event-card');
      
      const img = document.createElement('img');
      img.src = event.image;
      img.alt = event.name;
      
      const title = document.createElement('h3');
      title.textContent = event.name;
      
      const description = document.createElement('p');
      description.textContent = event.description;
      
      eventCard.appendChild(img);
      eventCard.appendChild(title);
      eventCard.appendChild(description);
      
      return eventCard;
    }
});

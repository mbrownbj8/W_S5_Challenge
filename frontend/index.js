async function sprintChallenge5() { // Note the async keyword so you can use `await` inside sprintChallenge5

  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇

  // 👇 ==================== TASK 1 START ==================== 👇

  // 🧠 Use Axios to GET learners and mentors.
  // ❗ Use the variables `mentors` and `learners` to store the data.
  // ❗ Use the await keyword when using axios.

  let learners = [] 
  let mentors = []

  async function fetchData() {
    const learnersResponse = await axios.get("http://localhost:3003/api/learners")
    learners = learnersResponse.data

    const mentorsResponse = await axios.get("http://localhost:3003/api/mentors")
    mentors = mentorsResponse.data
  }

  await fetchData();

  // 👆 ==================== TASK 1 END ====================== 👆


  // 👇 ==================== TASK 2 START ==================== 👇

  // ❗ Fix the `learners` array so that each learner ends up with this exact structure:
  // {
  //   id: 6,
  //   fullName: "Bob Johnson",
  //   email: "bob.johnson@example.com",
  //   mentors: [
  //     "Bill Gates",
  //     "Grace Hopper"
  //   ]
  // }

  learners = learners.map(learner => {
    const fullMentorNames = learner.mentors.map(id => {
      const mentor = mentors.find(m => m.id === id)
      return mentor ? `${mentor.firstName} ${mentor.lastName}` : 'Unknown Mentor'
    })

    return {
      ...learner,
      mentors: fullMentorNames
    }
  })

  // 👆 ==================== TASK 2 END ====================== 👆


  const cardsContainer = document.querySelector('.cards')
  const info = document.querySelector('.info')
  info.textContent = 'No learner is selected'


  // 👇 ==================== TASK 3 START ==================== 👇

  for (let learner of learners) { 
    
    const card = document.createElement('div')
    const heading = document.createElement('h3')
    const email = document.createElement('div')
    const mentorsHeading = document.createElement('h4')
    const mentorsList = document.createElement('ul')

    card.classList.add('card')

    heading.classList.add('name')
    heading.textContent = learner.fullName

    email.classList.add('email')
    email.textContent = learner.email

    mentorsHeading.classList.add('closed')
    mentorsHeading.textContent = 'Mentors'

    learner.mentors.forEach(name => {
      const li = document.createElement('li')
      li.textContent = name
      mentorsList.appendChild(li)
    })

    card.appendChild(heading)
    card.appendChild(email)
    card.appendChild(mentorsHeading)
    card.appendChild(mentorsList)

    card.dataset.fullName = learner.fullName

    cardsContainer.appendChild(card)

    card.addEventListener('click', evt => {
      const mentorsHeading = card.querySelector('h4')
      const didClickTheMentors = evt.target === mentorsHeading
      const isCardSelected = card.classList.contains('selected')


      document.querySelectorAll('.card').forEach(crd => {
        crd.classList.remove('selected')
        crd.querySelector('h3').textContent = crd.dataset.fullName
      })
      info.textContent = 'No learner is selected'

      if (!didClickTheMentors) {
        if (!isCardSelected) {
          card.classList.add('selected')
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      } else {
        card.classList.add('selected')
        if (mentorsHeading.classList.contains('open')) {
          mentorsHeading.classList.replace('open', 'closed')
        } else {
          mentorsHeading.classList.replace('closed', 'open')
        }
        if (!isCardSelected) {
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      }
    })
  }

  // 👆 ==================== TASK 3 END ====================== 👆

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
}

// ❗ DO NOT CHANGE THIS CODE. WORK ONLY INSIDE TASKS 1, 2, 3
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
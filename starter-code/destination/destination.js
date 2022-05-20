const img = document.getElementById('img');
const buttons = document.querySelectorAll('.des-btn')
const title = document.getElementById('des-name');
const description = document.getElementById('des-desc');
const distance = document.getElementById('des-dis');
const travelTime = document.getElementById('des-tra');
// const active = document.querySelector('.activ')

destinations = [
    {
      "name": "Moon",
      "images": "../assets/destination/image-moon.png",
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": "../assets/destination/image-mars.png",
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": "../assets/destination/image-europa.png",
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": "../assets/destination/image-titan.png",
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ]


    for(let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', () => {
            title.textContent = destinations[i].name.toUpperCase();
            img.src = destinations[i].images;
            description.textContent = destinations[i].description;
            distance.textContent = destinations[i].distance;
            travelTime.textContent = destinations[i].travel;
        })
        
    }

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const pre = document.querySelector(".activ")
            if (pre) {
                pre.classList.remove("activ")
                
            }
            btn.classList.add('activ')
        })
    })

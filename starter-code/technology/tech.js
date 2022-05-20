const img = document.querySelector('.tech-img');
const buttons = document.querySelectorAll('.button')
const title = document.querySelector('.tech-name');
const desc = document.querySelector('.tech-desc');


technology = [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "../assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "../assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "../assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]

    for(let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', () => {
            title.textContent = technology[i].name;
            img.src = technology[i].images.portrait;
            desc.textContent = technology[i].description;
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

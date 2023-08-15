
const apiKey = 'live_cteDUOIuNwlPb6zgk1RgzMWUZkhP90TZihR3GcGAirNtNRxVZu491dqCdsPLeGjV';

fetch("https://api.thedogapi.com/v1/breeds", {
  headers: {
    'x-api-key': apiKey
  }
})
.then((res) => res.json())
.then((res) => handleDogs(res));


let dogContainer = document.querySelector("#dogContainer");


function handleDogs(dogs) {
console.log(dogs)
 

  document.querySelector("h1").innerHTML = "Dog Breeds";
  document.querySelector("h3").innerHTML = "Double-Click to see breed details!";

  dogs.forEach((dog) => {


    let dogList = document.createElement("div");
    let newDog = document.createElement("div");
    let icon = document.createElement("img");
    let dogName = document.createElement("p");


    newDog.className = "dogDiv";
    icon.className = "icon";
    dogName.className = "dogName";
    dogName.innerText = dog.name.toUpperCase();
    icon.src = dog.image.url;

   
    dogList.appendChild(newDog);
    dogContainer.appendChild(dogList);
    newDog.appendChild(icon);
    newDog.appendChild(dogName);

   
    newDog.addEventListener("mouseover", (e) => {
      e.target.style.cursor = "pointer";
    });


    newDog.addEventListener("dblclick", () => {


      document.querySelector("h3").innerHTML = " ";
      document.querySelector("h1").innerHTML = " ";
      dogContainer.innerHTML = " ";

      let backButton = document.createElement("button");
      let dogWrapper = document.createElement("div");
      let dogPic = document.createElement("img");
      let dogName = document.createElement("h3");
      let dogBredFor = document.createElement("p");
      let breedGroup = document.createElement("p");


      backButton.className = "btn";
      dogPic.className = "pictures";
      dogWrapper.className = "dogWrapper";
      backButton.innerText = "Go Back";
      dogPic.src = dog.image.url;   
      dogName.innerText = `My breed name : ${dog.name}`;
      breedGroup.innerText = `My breed group is ${dog.breed_group}`;
      

      if (dog.bred_for === undefined) {
      dogBredFor.innerText = "Bred for unknown purposes";
      } else {
      dogBredFor.innerText = `I'm bred for: ${dog.bred_for}!`;
      }   


      dogContainer.appendChild(dogWrapper);
      dogWrapper.appendChild(dogPic);
      dogWrapper.appendChild(dogName);
      dogWrapper.appendChild(dogBredFor);
      dogWrapper.appendChild(backButton);


      backButton.addEventListener("click", () => {
        dogContainer.innerHTML = " ";
        handleDogs(dogs);
      });
    });
  });
}

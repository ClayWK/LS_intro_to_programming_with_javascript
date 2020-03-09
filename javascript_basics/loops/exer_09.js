let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let counter = 0; counter < fish.length; counter += 1) {
  console.log(fish[counter]);
  if (fish[counter] === 'Nemo') break;
}
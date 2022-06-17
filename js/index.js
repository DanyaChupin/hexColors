const btn = document.querySelector('.btn').addEventListener('click', changeColors);
function changeColors() {
   const hexIndex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
   let hexCode = '';
   for (let i = 0; i < 6; i++) {
      let hexRandom = Math.floor(Math.random() * hexIndex.length);
      hexCode += hexIndex[hexRandom];
      console.log(Math.random() * hexIndex.length)
   }
   document.querySelector('#hex-code').innerHTML = hexCode;
   document.querySelector('body').style.background = '#' + hexCode
}
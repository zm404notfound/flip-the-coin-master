const result = document.querySelector('.result');    
    const btn = document.querySelector('.btn') ;
    const coin = document.querySelector('.coin');
     let rotation = 0;
  
    function flipcoin (){
    
     const isHeads = Math.random() < 0.5;
      result.textContent = "Flipping...";

 if (isHeads) {
  rotation += 360*5;  
    
 } else { 
  rotation += 360*5.5;
  
 };

  coin.style.transform = `rotateY(${rotation}deg)`;
  
 

 setTimeout(()=> {
  const angle = Math.round(rotation%360);
   if (angle === 0) {
    result.textContent = 'Heads';
   } else if (angle === 180) {
    result.textContent = 'Tails';
   }}, 1000);
      
  };

btn.addEventListener('click',  flipcoin);
coin.addEventListener('click', flipcoin);   
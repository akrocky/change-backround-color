let color= [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']; 


document.getElementById('button').addEventListener('click',function(){

let hex ='#'
 for (let i = 0; i < 6; i++) {
    const colorLength= Math.floor(Math.random()*color.length);

    hex+= color[colorLength];
 }



   
  
    const div =document.getElementById('button-div');
    div.style.backgroundColor = hex;
    document.getElementById('button').innerText=hex;
  
  
  
  })

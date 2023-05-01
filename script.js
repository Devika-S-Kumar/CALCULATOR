(function() {

    let screen = document.querySelector('.scr');
    let buttons = document.querySelectorAll('.b1');
    let eq = document.querySelector('.g');
    let clear = document.querySelector('.r');
  
    
  
  
    buttons.forEach(function(button)
    {
      button.addEventListener('click',function(e)
                              {
  
  
                                let val = e.target.dataset.num;
                                 screen.value += val;
                                 
                              });
  
      eq.addEventListener('click',function(e) 
                          {
  
                            if(screen.value === '')
                            {
                              screen.value = "please enter";
                            }
  
                            else
                            {
                              let answer = eval(screen.value);
                              screen.value = answer;
                            }
        
      })
  
  
      clear.addEventListener('click',function(e)
                              {
  
  
                                
                                 screen.value = "";
                                 
                              });
  
      
                               
    });
  
    
  
  
  }
  )();
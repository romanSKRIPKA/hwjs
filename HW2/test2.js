  var a = prompt('Количество вопросов', 0);
  var b = prompt('Количество вариантов ответа', 0);

  var div = document.createElement('div');
  div.innerHTML = "Тест по программированию";
  document.body.appendChild(div);
  div.style.textAlign = 'center';
  div.style.fontSize = '25px';
  div.style.marginBottom ='50px';

  function getQuestion(a, b) {
    for(var i = 1; i <= a; i++) {
      
      var outDiv = document.createElement('div') ;
      outDiv.innerHTML = i + '. Вопрос№' + i;
      document.body.appendChild(outDiv);
      outDiv.style.fontSize = '25px';
      outDiv.style.margin = '10px 100px';

    for (var j = 1; j <= b; j++) {
    
      var innDiv = document.createElement('div');
      outDiv.appendChild(innDiv);
      innDiv.style.fontSize = '20px';
      innDiv.style.margin = '10px 50px';
      
      var inp = document.createElement('input');
      inp.type = 'checkbox';
      innDiv.appendChild(inp);

      var label = document.createElement('label')
      label.appendChild(document.createTextNode('Вариант ответа №'+j));
      innDiv.appendChild(label);
    }
    }
  };
  getQuestion(a,b);




  
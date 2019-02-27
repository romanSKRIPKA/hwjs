  var a = prompt('Количество вопросов', 0);
  var b = prompt('Количество вариантов ответа', 0);

  var div = document.createElement('div'); //   раз ми учили ХТМЛ і всякі теги, то давай их использувать по назначению :) Тут лучше заголовок Н1 поставить, а не обичний DIV. Переменним лучше давать осмислени названия, а не просто DIV (считай це перша заповедь в JS ))))
  div.innerHTML = "Тест по программированию"; // стиль кавичок лучше видержувать одинаковий (рекомендую одинарни)
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


//   Вариант рабочий, но давай попробуем внести больше абстракции.
//   Попробуй написать фунцию с 3 параметрами, яка буде создавать елемент указаного типа/тега (1-й параметр), вставлять      в указаний родительский елемент/тег (2-й параметр) и добавлять в созданий елемент текст (если нада) (3-й                необязательний параметр).
//   Для создания input напиши похожу функцию, но з параметром який указуе тип инпута


//   --- БОНУС ---
//   Если захочеш, то можна ще дальше пойти і написать функцию, яка буде задавать атрибути для тегов.
//   Например, атрибут style, свойтво fontSize, значение 20px; Або атрибут type, значение input; Або атрибут id,             значение question-1-answer-1

//   ПОДСКАЗКА: обращаться до свойств обектов можна 2 способами
//   innDiv.style.fontSize = '30px' це всьо равно шо innDiv['style']['fontSize'] = '30px'


//   ОСОБОГО СМИСЛА ПОКА НЕ ШУКАЙ В ЗАДАНИЯХ ШО Я НАПИСАВ. ПОКА ПРОСТО УЧИМСЯ ПИСАТЬ ФУНКЦИИ, А ЗАОДНО И СТРОИМ DOM          ЧЕРЕЗ JS. ПОДХОД С ТАКИМ НАПИСАНИЕМ КОДА РОБИТЬ ЙОГО БОЛЕЕ ГИБКИМ, ТО ЕСТЬ ТИ НЕ ЗАВЯЗУЕШСЯ НА КОНКРЕТНИХ ЗАДАЧАХ.



  
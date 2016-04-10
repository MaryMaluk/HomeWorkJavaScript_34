var Test = {
	
Container:function(parentElem){
	var container=document.createElement('div');
	container.className='container';
	parentElem.appendChild(container);
},

printTitle: function(){
    var title = document.createElement('h1');
    title.className='title';
	title.innerHTML='Тест по программированию';
	var container=document.querySelector('.container');

	container.appendChild(title);
},

printMenu: function(){
	var menu=document.createElement('ul');
	menu.className='list';
	var container=document.querySelector('.container');
	container.appendChild(menu);
},


questions: [
	{
		title: 'Вопрос № 1',
		answers: [
		    {
			text: 'Ответ 1',
			correct: true
		    },
		    {
			text: 'Ответ 2',
			correct: false
		    },
		    {
			text: 'Ответ 3',
			correct: false
		    },
		        ]
		
	},
	
    {
		title: 'Вопрос № 2',
		answers: [
		    {
			text: 'Ответ 1',
			correct: true
		    },
		    {
			text: 'Ответ 2',
			correct: false
		    },
		    {
			text: 'Ответ 3',
			correct: false
		    },
		         ]
		
	},
	
    {
		title: 'Вопрос № 3',
		answers: [
		    {
			text: 'Ответ 1',
			correct: true
		    },
		    {
			text: 'Ответ 2',
			correct: false
		    },
		    {
			text: 'Ответ 3',
			correct: false
		    },
		         ]
		
	}
		
	              ],
				  
/*generateQuestions: function(){
	
   var list=document.createElement('div');
	for (var i=0; i<3; i++){
    alert(i);
	list.innerHTML=this.questions[i].title;
    var container=document.querySelector('.container');
	//var container=document.getElementsByClassName('container');
    container.appendChild(list);
		
	}
	
},*/			  
	
printQuestion:function(){
	
	var question1=document.createElement('li');
	question1.className='question1';
    question1.innerHTML='1. Вопрос № 1';
	var k=document.querySelector('.list');
	k.appendChild(question1);
	
	var question2=document.createElement('li');
	question2.className='question2';
    question2.innerHTML='2. Вопрос № 2';
	var k=document.querySelector('.list');
	k.appendChild(question2);
	
    var question3=document.createElement('li');
	question3.className='question3';
    question3.innerHTML='3. Вопрос № 3';
	
	var k=document.querySelector('.list');
	k.appendChild(question3); 	
},	
	

printAnswer1: function(){
	
	var answer1=document.createElement('div');
	var answer2=document.createElement('div');
	var answer3=document.createElement('div');
	
	answer1.className='answer';
	answer2.className='answer';
	answer3.className='answer';
	
    answer1.innerHTML='<input type="checkbox" value="">' + 'Вариант ответа № 1';
    answer2.innerHTML='<input type="checkbox" value="">' + 'Вариант ответа № 2';
    answer3.innerHTML='<input type="checkbox" value="">' + 'Вариант ответа № 3';
	
	var k=document.querySelector('.question1');
	k.appendChild(answer1);
	k.appendChild(answer2);
	k.appendChild(answer3);

},
printAnswer2: function(){
	
	var answer1=document.createElement('div');
	var answer2=document.createElement('div');
	var answer3=document.createElement('div');
	
	answer1.className='answer';
	answer2.className='answer';
	answer3.className='answer';
	
    answer1.innerHTML='<input type="checkbox" value="">' + 'Вариант ответа № 1';
    answer2.innerHTML='<input type="checkbox" value="">' + 'Вариант ответа № 2';
    answer3.innerHTML='<input type="checkbox" value="">' + 'Вариант ответа № 3';
	
	var k=document.querySelector('.question2');
	k.appendChild(answer1);
	k.appendChild(answer2);
	k.appendChild(answer3);

},

printAnswer3: function(){
	
	var answer1=document.createElement('div');
	var answer2=document.createElement('div');
	var answer3=document.createElement('div');
	
	answer1.className='answer';
	answer2.className='answer';
	answer3.className='answer';
	
    answer1.innerHTML='<input type="checkbox" value="">' + 'Вариант ответа № 1';
    answer2.innerHTML='<input type="checkbox" value="">' + 'Вариант ответа № 2';
    answer3.innerHTML='<input type="checkbox" value="">' + 'Вариант ответа № 3';
	
	var k=document.querySelector('.question3');
	k.appendChild(answer1);
	k.appendChild(answer2);
	k.appendChild(answer3);

},

Button: function(){
    var check=document.createElement('button');
	
    check.className='button';
	check.innerHTML='Проверить мои результаты';
	
	var k=document.querySelector('.container');
	k.appendChild(check);
}	
	
}

Test.Container(document.body);
Test.printTitle();
Test.printMenu();
Test.printQuestion();
Test.printAnswer1();
Test.printAnswer2();
Test.printAnswer3();
Test.Button();
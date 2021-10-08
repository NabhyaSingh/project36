class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name here...");
   
    //Create a input box to enter the number
    
    this.input2 = createInput("").attribute("placeholder", "Enter your answer number");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3")
    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")

    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.question.hide()
    this.option1.hide()
    this.option2.hide()
    this.option3.hide()
    this.option4.hide()

    this.input2.hide();


  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

  
    //Create html() and position() for each question, input and answers.
    var riddle = "Question: What starts and ends with E but has only one letter?"
    var a = "1. Everyone";
    var b ="2. Envelope";
    var c = "3. Estimate";
    var d = "4. Example";
    var messages = "Thankyou, your answer has been submitted"

    this.question.html(riddle)
    this.question.position(width/2-210, height/2 - 140)
    
    this.option1.html(a)
    this.option2.html(b)
    this.option3.html(c)
    this.option4.html(d)

    this.option1.position(width/2-200,height/2 - 100)
    this.option2.position(width/2-200,height/2 - 80);
    this.option3.position(width/2-200,height/2 - 60)
    this.option4.position(width/2-200,height/2 - 40)

    this.input2.position(350, 230);
    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    
    this.question.hide()
    this.option1.hide()
    this.option2.hide()
    this.option3.hide()
    this.option4.hide()
    this.input2.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.html(messages);
    this.message.position(width/2-200, height/2)

    })


  }
}

//read file json ==============================================================
fetch('./data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {

//quiz for maths ===================================================
  console.log("gia tri cua phan tu maths: " + Object.keys(data.quiz.maths).length);
  //vong lap phan tu cua maths
  let temp;
  var text = "";
  
//xét từng câu hỏi trong maths  
  for(let ques_index = 0; ques_index < Object.keys(data.quiz.maths).length; ques_index++)
  {
    switch (ques_index) {
      case 0:
        temp = data.quiz.maths.q1;
        break;
      case 1:
        temp = data.quiz.maths.q2;
        break;
      case 2:
        temp = data.quiz.maths.q3;
        break;
      case 3:
        temp = data.quiz.maths.q4;
        break;
    }
      
      text += '<div class="quiz-container">' + ' <div class="question box">';
      text += '<p>Q'+ (ques_index + 1)+ ": " + temp.question + '</p>';
      text += '</div>';
      text += '<ul class="answers">';
      var ans_index;

      //not working------------------------------
              var order_of_ans = 1;
              for(var i = 0; i < temp.options.length; i++)
              {
                  if(temp.options[i] === temp.answer)
                  {
                    ans_index = i;
                    console.log("In ans_index = " + ans_index);
                  }
                  //text += '<li class="answer"><p><span>a</span>' + temp.options[i] + '</p></li>';
                  text += '<li class="answer"><p><span>Ans' + (order_of_ans++) +'</span>' + temp.options[i] + '</p></li>';
              }
      //not working------------------------------

      text += '</ul><button class="box">Send</button></div>';
      document.getElementById("demo").innerHTML = text;
        //
        //
      console.log(text);
      console.log("Ans_index = " + ans_index)
      $(".quiz-container").ready(function() {
        $(".answer").click(function () {
          /*mỗi lần click vào 1 class answer thì tất cả các phần tử có class answer khác
          đều unactive*/
          $(this).siblings(".answer").removeClass("active");
          /*thêm class active cho phần tử có class answer vừa click*/
          $(this).addClass("active");
        });
      });
  
    }    
    $("button").click(function () {
        if ($(".active").length) {
          if (($("div.quiz-container:nth-child(1) .active").index() === 2) || ($("div.quiz-container:nth-child(2) .active").index() === 3)
          || ($("div.quiz-container:nth-child(3) .active").index() === 0) || ($("div.quiz-container:nth-child(4) .active").index() === 1)) {
            alert("Well done!");
          } else {
            alert("Wrong answer 😗🤔🙄!");
          }
        } else {
          alert("Please select an answer!");
        }
      });
})
.catch(function (err) {
    console.log(err);
});


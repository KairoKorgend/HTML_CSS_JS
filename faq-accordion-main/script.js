document.addEventListener('DOMContentLoaded', function() {
  var questionContainers = document.querySelectorAll('.question-container');

  questionContainers.forEach(function(container) {
      var button = container.querySelector('.opening-button');
      var answer = container.querySelector('.answer');

      button.addEventListener('click', function() {
        
          // Kontrollib, kas paragrahv on nähtav
          var isAnswerVisible = !answer.classList.contains('hidden');

          if (isAnswerVisible) {
              // Peida paragrahv ja muuda nupu ikoon plussiks
              answer.classList.add('hidden');
              button.querySelector('img').src = 'assets/images/icon-plus.svg';
          } else {
              // Kuva paragrahv ja muuda nupu ikoon miinuseks
              answer.classList.remove('hidden');
              button.querySelector('img').src = 'assets/images/icon-minus.svg';
          }
      });
  });
});

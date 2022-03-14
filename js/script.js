$(document).ready(function () {

  $('button').click(function () {


    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')


      .done(function (data) {
        
        $('button').after('<div id="dane-programisty"></div>');
        
        $('#dane-programisty').append(`<p>Imię: ${data.imie}</p>`);
        
        $('#dane-programisty').append(`<p>Nazwisko: ${data.nazwisko}</p>`);
        
        $('#dane-programisty').append(`<p>Firma: ${data.firma}</p>`);
        
        $('#dane-programisty').append(`<p>Zawód: ${data.zawod}</p>`);

      })


      .fail(function (error) {
        console.error(error)

      })


  })









})
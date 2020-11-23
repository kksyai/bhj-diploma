/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    preventDefault();
    console.log(options)
};

// const createRequest = options => {
//     // ...
//     const xhr = new XMLHttpRequest;
//     // ...
//     try {
//       xhr.open( method, url );
//       xhr.send( data );
//     }
//     catch ( e ) {
//       // перехват сетевой ошибки
//       callback( e );
//     }
//   }


// const xhr = createRequest({
//     url: 'https://example.com', // адрес
//     headers: { // произвольные заголовки, могут отсутствовать
//       'Content-type': 'application/json' 
//     },
//     data: { // произвольные данные, могут отсутствовать
//       email: 'ivan@poselok.ru',
//       password: 'odinodin'
//     },
//     responseType: 'json', // формат, в котором необходимо выдать результат
//     method: 'GET', // метод запроса
//     /*
//       Функция, которая сработает после запроса.
//       Если в процессе запроса произойдёт ошибка, её объект
//       должен быть в параметре err.
//       Если в запросе есть данные, они должны быть переданы в response.
//     */
//     callback: (err, response) => {
//       console.log( 'Ошибка, если есть', err );
//       console.log( 'Данные, если нет ошибки', response );
//     }
//   });
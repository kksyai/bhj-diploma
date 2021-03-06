/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    this.element = element;
    this.registerEvents();
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    this.element.addEventListener('click', (event)=>{
      if((event.target.getAttribute('data-dismiss') == 'modal') ||(event.target.parentElement.getAttribute('data-dismiss') == 'modal')){
        this.onClose(event)
      } 
    })
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose( event ) {
     event.preventDefault();
     this.close();
     this.unregisterEvents();
  }
  /**
   * Удаляет обработчики событий
   * */
  unregisterEvents() {
    this.element.removeEventListener('click', ( event )=>{
      if((event.target.getAttribute('data-dismiss') == 'modal') ||(event.target.parentElement.getAttribute('data-dismiss') == 'modal')){
        this.onClose( event )
      } 
    })
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.element.style.display = 'block';
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
    this.element.style.display = 'none';
  }
}

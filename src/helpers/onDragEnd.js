export const onDragEnd = (result, state) => {
    if (!result.destination) 
      return state;
  
    // Копируем входящий массив данных
    const copiedItems = [...state];
  
    // Вытаскиваем объекты source и destination из result
    const { source, destination } = result;
    // Запихиваем в переменные необходимые данные (index захваченной карты, index колонки в котором карту захватили)
    const { index: sourceCardIndex, droppableId: sourcePanelId } = source;
    const { index: destinationCardIndex, droppableId: destinationPanelId } = destination;
  
    //Убираем лишние символы, парсим в integer
    const sourceColumnIndex = parseInt(sourcePanelId.replace("panel-", ""));
    const destinationColumnIndex = parseInt(destinationPanelId.replace("panel-", ""));
  
    // Мапим массив данных
    copiedItems.map((item, currentIndex) => {
      // Если индекс объекта совпал с индекстом куда бросаем карту, то
      if (destinationColumnIndex === currentIndex) {
        // удаляем нужную карту из массива в переменную
        const [sourceCard] = copiedItems[sourceColumnIndex].cards.splice(sourceCardIndex, 1 );
        // копируем тот массив, куда будем дропать карту
        const destinationCards = Array.from(copiedItems[destinationColumnIndex].cards);
        // вставляем карту в нужную колонку
        destinationCards.splice(destinationCardIndex, 0, sourceCard);
        // присваиваем новый массив с добавленный карточкой в текущей МАПающийся
        item.cards = destinationCards;
      }
    })
    return copiedItems;
  };
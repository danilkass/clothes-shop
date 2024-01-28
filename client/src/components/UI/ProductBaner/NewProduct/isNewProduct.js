export default function isNewProduct(createdAt) {
  //Преобразовываем строку времени в объект Date
  const created = new Date(createdAt);
  // Получаем текущую дату и время
  const now = new Date();
  // Вычисляем разницу в миллисекундах
  const differenceInMilliseconds = now - created;
  // Определяем количество миллисекунд в одной неделе
  const millisecondsInAWeek = 8 * 24 * 60 * 60 * 1000;
  // Проверяем, что разница меньше или равна одной неделе
  const isNew = differenceInMilliseconds <= millisecondsInAWeek;
  //   console.log("Is within a week:", isNew);

  return isNew;
}

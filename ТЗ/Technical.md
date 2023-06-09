Ціль: реалізувати веб-додаток для вивчення англійських слів.

Стек: JS, React, Redux Toolkit.

Потрібно реалізувати веб-додаток для вивчення слів. Додаток - це онлайн-словник
з невеликим інтерактивом. Основна ідея в тому, що користувач вводить якісь слова
і їхній переклад, наприклад “dog - собака”, користувач вводить в словник деяке
число слів і потім може перевіряти чи пам'ятає їх. Перевірка проходить у вигляді
простої гри:

Користувач натискає на кнопку “Повторити слова”

З всього словника обираються слова, у яких є активний стан чекбоксу.

Слова перемішуються між собою в рандомному порядку. Можна використати функціонал
нижче:

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

З'являється екран зі словом на англійській чи українській мові.

Користувач вводить переклад, якщо він вірний - з'являється модальне вікно про
успішний переклад і стан чекбоксу знімається.

Коли користувач завершує тест його переводить на екран “Результати”, на якому
він бачить результати свого тесту, у вигляді відсотка успішності. 100% - всі
слова вірні, 0% - всі слова не вірні.

В додатку повинні бути реалізовані наступні сторінки:

Онлайн словник - головна сторінка зі списком всіх слів.

Сторінка додавання слова - сторінка з формою для додавання нового слова та його
перекладу. Перехід з головної сторінки.

Сторінка перевірки слів - інтерактив, який описаний вище. Перехід з головної
сторінки.

Результати перевірки - описано вище.

Додатково (реалізація по бажанню):

Можна взяти стиль з одного з цих дизайнів (https://dribbble.com/tags/admin_ui),
на дизайн не потрібно витрачати багато часу.

Історія перевірок — всі перевірки, які проходить користувач мають зберігатись,
щоб користувач мав можливість подивитись свої перевірки. Також на цій сторінці
має відображатись середній відсоток активності.

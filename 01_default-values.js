function fetchData(data, count = 0) {
    //        count =count || 0; 
    //  Устаревший способ избежать ошибки
    //при отсутствии значения у аргумента
    console.log(`Данные: ${data} в количестве ${count}`);
}

fetchData('something');
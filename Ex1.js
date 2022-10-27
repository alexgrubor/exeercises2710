// Exercise 4: Calculate the number of all completed-todo entries
const todos = [
    {
      "userId": 10,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }, {
      "userId": 7,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": true
    }, {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }, {
      "userId": 2,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    }, {
      "userId": 2,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }, {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    }, {
      "userId": 31,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    }, {
      "userId": 90,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    }, {
      "userId": 90,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    }
  ];
  
  const doneCount = todos.reduce((acc,current) => {
    if (current.completed) {
        acc++
    }
    return acc;
  },0);
  console.log(doneCount);
fetch('https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024')
    .then((response) => response.json())
    .then((data) => console.log(data));
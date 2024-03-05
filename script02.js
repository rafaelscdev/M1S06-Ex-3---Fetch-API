function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(jsonData => {
            document.getElementById('json-content').textContent = JSON.stringify(jsonData, null, 2);
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
}

fetchData();

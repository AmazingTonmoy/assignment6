const loadUniverse = async ()=>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json()
    showUniverse(data.data.tools)
}

// function for display
const showUniverse = allData =>{
    const cardContainer = document.getElementById('card-container');
    // console.log(allData)
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('col')
    cardDiv.innerHTML =``
    cardContainer.appendChild(cardDiv)
}

loadUniverse()
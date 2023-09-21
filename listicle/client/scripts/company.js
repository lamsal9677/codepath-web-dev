//LOCATE THE ELEMENT id="single-content
const singleContent = document.getElementById('single-content');

//make a div
const bigCard = document.createElement('div');
bigCard.className = 'big-card';

//image
const companyImg = document.createElement('img');
companyImg.className = 'company-logo';


//make a h2
const bigCardTitle = document.createElement('h2');
bigCardTitle.className = 'big-card-title';
// bigCardTitle.textContent = 'Reddit';

//make a p
const bigCardText = document.createElement('p');
bigCardText.className = 'big-card-text';
// bigCardText.textContent = 'Reddit was accepted in S23 and is currently worth $6.0B. The company is based in San Francisco, CA.';

//append h2 and p to div
bigCard.appendChild(companyImg);
bigCard.appendChild(bigCardTitle);
bigCard.appendChild(bigCardText);

//append div to single-content
singleContent.appendChild(bigCard);

const renderCompany = async () => {
    console.log('renderCompany function')
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/companies')
    const data = await response.json()
    let company = data.find(gift => gift.id === requestedID)
    if (company){
        companyImg.src = `https://logo.clearbit.com/${company.name.replace(' ', '').toLowerCase()}.com`;
        bigCardTitle.textContent = company.name;
        const companyDesc = company.name + ' was accepted in ' + company.y_combinator_season + ' and is currently worth ' + company.valuation + '. The company is based in ' + company.headquarters + '.';
        console.log(companyDesc);
        bigCardText.textContent = companyDesc;
        
    }
    else{
        bigCardTitle.textContent = 'No Company Found 😞';
    }
}

renderCompany();
const mainContent = document.getElementById('main-content')

const response = await fetch('/companies')
const companies = await response.json()

console.log(companies)
//for each company, create a div with the company name and description
companies.forEach(company => {
    const companyDiv = document.createElement('div')
    companyDiv.className = 'card'
    mainContent.appendChild(companyDiv)


    const companyImg = document.createElement('img')
    const companyLogo = `https://logo.clearbit.com/${company.name.replace(' ', '').toLowerCase()}.com`;
    companyImg.src = companyLogo
    companyImg.className = 'company-logo'

    const companyName = document.createElement('h2')
    companyName.textContent = company.name
    companyName.className = 'company-name'

    const companyValuation = document.createElement('p')
    companyValuation.textContent = company.valuation
    companyValuation.className = 'company-valuation'

    const companyYcSeason = document.createElement('p')
    companyYcSeason.textContent = company.yc_season
    companyYcSeason.className = 'company-y_combinator_season'

    const companyHeadquarters = document.createElement('p')
    companyHeadquarters.textContent = company.headquarters
    companyHeadquarters.className = 'company-headquarters'
    

    companyDiv.appendChild(companyImg)
    companyDiv.appendChild(companyName)
    companyDiv.appendChild(companyValuation)
    companyDiv.appendChild(companyYcSeason)
    companyDiv.appendChild(companyHeadquarters)

})
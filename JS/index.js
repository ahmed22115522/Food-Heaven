$(document).ready(() => {
    $('#loading .spinner').fadeOut(100, () => {
        $('#loading').slideUp(1, () => {
            $('loading').remove()
            $('body').css('overflow', 'visible')
        })
    })
})
async function fetchApi1(api){
    let meals = await fetch(api)
    let response = await meals.json();
    return response.meals;
}

async function displayData() {
    let api = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    let mealsFromAPI = await fetchApi1(api);
    let temp = '';
    for (let i = 0; i < 24; i++) {
        let imgSrc = mealsFromAPI[i].strMealThumb
        let foodName = mealsFromAPI[i].strMeal
        let mealID = mealsFromAPI[i].idMeal
        temp += `
            <div onclick="displayDiscription('${mealID}')" class="col-md-6 col-lg-3 text-center food">
                <div class="food-img-disc rounded position-relative overflow-hidden">
                    <img src="${imgSrc}" alt="" class="w-100">
                    <div class="img-layer position-absolute d-flex align-items-center rounded">
                        <p class="text-dark ms-2 fs-2">${foodName}</p>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('firstData').innerHTML = temp;
}
displayData()
async function displayDiscription(id) {
    $('#foodDiscription').fadeIn(700)
    sections[2].style.display = 'none'
    sections[1].style.display = 'none'
    sections[4].style.display = 'none' 
    sections[5].style.display = 'none' 
    sections[6].style.display = 'none' 
    sections[7].style.display = 'none'
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    let discription = await fetchApi1(api);
    let temp = '';
    for (let i = 0; i < discription.length; i++) {
        let mealName = discription[i].strMeal
        let mealCateg = discription[i].strCategory
        let mealArea = discription[i].strArea
        let mealInstr = discription[i].strInstructions
        let mealTag = discription[i].strTags
        let mealImg = discription[i].strMealThumb
        let youTube = discription[i].strYoutube
        let source = discription[i].strSource
        let mealstrIngredient1 = discription[i].strIngredient1
        let mealstrIngredient2 = discription[i].strIngredient2
        let mealstrIngredient3 = discription[i].strIngredient3
        let mealstrIngredient4 = discription[i].strIngredient4
        let mealstrIngredient5 = discription[i].strIngredient5
        let mealstrIngredient6 = discription[i].strIngredient6
        let mealstrIngredient7 = discription[i].strIngredient7
        let mealstrIngredient8 = discription[i].strIngredient8
        let mealstrIngredient9 = discription[i].strIngredient9
        let mealstrIngredient10 = discription[i].strIngredient10
        let mealstrIngredient11 = discription[i].strIngredient11
        let mealstrIngredient12 = discription[i].strIngredient12
        let mealstrIngredient13 = discription[i].strIngredient13
        let mealstrIngredient14 = discription[i].strIngredient14
        let mealstrIngredient15 = discription[i].strIngredient15
        let mealstrIngredient16 = discription[i].strIngredient16
        let mealstrIngredient17 = discription[i].strIngredient17
        let mealstrIngredient18 = discription[i].strIngredient18
        let mealstrIngredient19 = discription[i].strIngredient19
        let mealstrIngredient20 = discription[i].strIngredient20
        let strMeasure1 = discription[i].strMeasure1
        let strMeasure2 = discription[i].strMeasure2
        let strMeasure3 = discription[i].strMeasure3
        let strMeasure4 = discription[i].strMeasure4
        let strMeasure5 = discription[i].strMeasure5
        let strMeasure6 = discription[i].strMeasure6
        let strMeasure7 = discription[i].strMeasure7
        let strMeasure8 = discription[i].strMeasure8
        let strMeasure9 = discription[i].strMeasure9
        let strMeasure10 = discription[i].strMeasure10
        let strMeasure11 = discription[i].strMeasure11
        let strMeasure12 = discription[i].strMeasure12
        let strMeasure13 = discription[i].strMeasure13
        let strMeasure14 = discription[i].strMeasure14
        let strMeasure15 = discription[i].strMeasure15
        let strMeasure16 = discription[i].strMeasure16
        let strMeasure17 = discription[i].strMeasure17
        let strMeasure18 = discription[i].strMeasure18
        let strMeasure19 = discription[i].strMeasure19
        let strMeasure20 = discription[i].strMeasure20

        temp += 
        `
        <div class="col-md-4 offset-md-1">
        <div class="discImg text-center">
            <img src="${mealImg}" alt="" class="w-75 mb-3 rounded">
            <h3 class="mb-3">${mealName}</h3>
            <h3>Tags</h3>
            <p class="w-75 m-auto fs-5 p-1 alert alert-primary">${mealTag == null ? mealTag = 'Food' : truncate(mealTag, 30).replaceAll(',', ' ') }</p>
        </div>
    </div>
    <div class="col-md-7">
        <div class="discTxt">
            <h2>Instructions:</h2>
            <p>
                ${mealInstr}
            </p>
            <p>Area: <span>${mealArea}</span></p>
            <p>Category : <span>${mealCateg}</span></p>
            <h3>Recipes :</h3>
            <ul class="Recipe mb-3 ms-0 ps-0">
                <li class="p-1 alert alert-info d-inline-block">${strMeasure1  == "" || strMeasure1  == null  ? strMeasure1  = '' : strMeasure1 }${mealstrIngredient1 == "" || mealstrIngredient1 == null  ? mealstrIngredient1 = '' : mealstrIngredient1}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure2  == "" || strMeasure2  == null  ? strMeasure2  = '' : strMeasure2 }${mealstrIngredient2 == "" || mealstrIngredient2 == null  ? mealstrIngredient2 = '' : mealstrIngredient2}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure3  == "" || strMeasure3  == null  ? strMeasure3  = '' : strMeasure3 }${mealstrIngredient3 == "" || mealstrIngredient3 == null  ? mealstrIngredient3 = '' : mealstrIngredient3}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure4  == "" || strMeasure4  == null  ? strMeasure4  = '' : strMeasure4 }${mealstrIngredient4 == "" || mealstrIngredient4 == null  ? mealstrIngredient4 = '' : mealstrIngredient4}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure5  == "" || strMeasure5  == null  ? strMeasure5  = '' : strMeasure5 }${mealstrIngredient5 == "" || mealstrIngredient5 == null  ? mealstrIngredient5 = '' : mealstrIngredient5}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure6  == "" || strMeasure6  == null  ? strMeasure6  = '' : strMeasure6 }${mealstrIngredient6 == "" || mealstrIngredient6 == null  ? mealstrIngredient6 = '' : mealstrIngredient6}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure7  == "" || strMeasure7  == null  ? strMeasure7  = '' : strMeasure7 }${mealstrIngredient7 == "" || mealstrIngredient7 == null  ? mealstrIngredient7 = '' : mealstrIngredient7}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure8  == "" || strMeasure8  == null  ? strMeasure8  = '' : strMeasure8 }${mealstrIngredient8 == "" || mealstrIngredient8 == null  ? mealstrIngredient8 = '' : mealstrIngredient8}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure9  == "" || strMeasure9  == null  ? strMeasure9  = '' : strMeasure9 }${mealstrIngredient9 == "" || mealstrIngredient9 == null  ? mealstrIngredient9 = '' : mealstrIngredient9}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure10  == "" || strMeasure10  == null  ? strMeasure10  = '' : strMeasure10 }${mealstrIngredient10 == "" || mealstrIngredient10 == null  ? mealstrIngredient10 = '' : mealstrIngredient10}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure11  == "" || strMeasure11  == null  ? strMeasure11  = '' : strMeasure11 }${mealstrIngredient11 == "" || mealstrIngredient11 == null  ? mealstrIngredient11 = '' : mealstrIngredient11}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure12  == "" || strMeasure12  == null  ? strMeasure12  = '' : strMeasure12 }${mealstrIngredient12 == "" || mealstrIngredient12 == null  ? mealstrIngredient12 = '' : mealstrIngredient12}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure13  == "" || strMeasure13  == null  ? strMeasure13  = '' : strMeasure13 }${mealstrIngredient13 == "" || mealstrIngredient13 == null  ? mealstrIngredient13 = '' : mealstrIngredient13}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure14  == "" || strMeasure14  == null  ? strMeasure14  = '' : strMeasure14 }${mealstrIngredient14 == "" || mealstrIngredient14 == null  ? mealstrIngredient14 = '' : mealstrIngredient14}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure15  == "" || strMeasure15  == null  ? strMeasure15  = '' : strMeasure15 }${mealstrIngredient15 == "" || mealstrIngredient15 == null  ? mealstrIngredient15 = '' : mealstrIngredient15}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure16  == "" || strMeasure16  == null  ? strMeasure16  = '' : strMeasure16 }${mealstrIngredient16 == "" || mealstrIngredient16 == null  ? mealstrIngredient16 = '' : mealstrIngredient16}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure17  == "" || strMeasure17  == null  ? strMeasure17  = '' : strMeasure17 }${mealstrIngredient17 == "" || mealstrIngredient17 == null  ? mealstrIngredient17 = '' : mealstrIngredient17}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure18  == "" || strMeasure18  == null  ? strMeasure18  = '' : strMeasure18 }${mealstrIngredient18 == "" || mealstrIngredient18 == null  ? mealstrIngredient18 = '' : mealstrIngredient18}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure19  == "" || strMeasure19  == null  ? strMeasure19  = '' : strMeasure19 }${mealstrIngredient19 == "" || mealstrIngredient19 == null  ? mealstrIngredient19 = '' : mealstrIngredient19}</li>
                <li class="p-1 alert alert-info d-inline-block">${strMeasure20  == "" || strMeasure20  == null  ? strMeasure20  = '' : strMeasure20 }${mealstrIngredient20 == "" || mealstrIngredient20 == null  ? mealstrIngredient20 = '' : mealstrIngredient20}</li>
            </ul>
            <a href="${source}" target="_blank" class="btn btn-success w-100 my-2">Source</a>
            <a href="${youTube}" target="_blank" class="btn btn-danger w-100">YouTube</a>
        </div>
    </div>
        `
    }
    document.getElementById('discriptionMeal').innerHTML = temp
}
// Catigoreis section
async function fetchApi(api){
    let meals = await fetch(api)
    let response = await meals.json();
    return response.categories;
}
function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
}
async function displayCategories() {
    let api = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    let categoriesFromAPI = await fetchApi(api);
    let temp = '';
    for (let i = 0; i < categoriesFromAPI.length; i++) {
        let imgSrc = categoriesFromAPI[i].strCategoryThumb
        let foodName = categoriesFromAPI[i].strCategory
        let catigeoriesData = categoriesFromAPI[i].strCategoryDescription
        let catigeoriesDataHandler = truncate(catigeoriesData, 75)
        temp += `
            <div onclick="displayCategorieInfo('${foodName}')" class="col-md-6 col-lg-3 text-center">
                <div class="categories-img-disc rounded position-relative overflow-hidden">
                    <img src="${imgSrc}" alt="" class="w-100">
                    <div class="img-layer position-absolute d-flex align-items-center rounded flex-column">
                        <p class="text-dark ms-2 fs-2">${foodName}</p>
                        <p class="text-dark mb-2 p-3">${catigeoriesDataHandler}</p>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('catigeoriesData').innerHTML = temp;
}
displayCategories()
async function displayCategorieInfo(categories) {
    let api = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`
    let catigoryInfo = await fetchApi5(api);
    let temp = '';
    for (let i = 0; i < catigoryInfo.length; i++) {
        let imgSrc = catigoryInfo[i].strMealThumb
        let foodName = catigoryInfo[i].strMeal
        let mealID = catigoryInfo[i].idMeal
        temp += `
            <div class="col-md-6 col-lg-3 text-center">
                <div onclick="displayDiscription('${mealID}')" class="categories-img-disc rounded position-relative overflow-hidden">
                    <img src="${imgSrc}" alt="" class="w-100">
                    <div class="img-layer position-absolute d-flex align-items-center justify-content-center rounded flex-column">
                        <p class="text-dark ms-2 fs-2">${foodName}</p>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('catigeoriesData').innerHTML = temp;
}

function displayAreas() { 
    let imagesArray = [
        {
            countryFlag: 'united-states',
            countryName: 'American'
        },
        {
            countryFlag: 'united-kingdom',
            countryName: 'British'
        },
        {
            countryFlag: 'canada',
            countryName: 'Canadian'
        },
        {
            countryFlag: 'china',
            countryName: 'Chinese'
        },
        {
            countryFlag: 'croatia',
            countryName: 'Croatian'
        },
        {
            countryFlag: 'germany',
            countryName: 'Dutch'
        },
        {
            countryFlag: 'egypt',
            countryName: 'Egyptian'
        },
        {
            countryFlag: 'france',
            countryName: 'French'
        },
        {
            countryFlag: 'greece',
            countryName: 'Greek'
        },
        {
            countryFlag: 'india',
            countryName: 'Indian'
        },
        {
            countryFlag: 'ireland',
            countryName: 'Irish'
        },
        {
            countryFlag: 'italy',
            countryName: 'Italian'
        },
        {
            countryFlag: 'jamaica',
            countryName: 'Jamaican'
        },
        {
            countryFlag: 'japan',
            countryName: 'Japanese'
        },
        {
            countryFlag: 'kenya',
            countryName: 'Kenyan'
        },
        {
            countryFlag: 'malaysia',
            countryName: 'Malaysian'
        },
        {
            countryFlag: 'mexico',
            countryName: 'Mexican'
        },
        {
            countryFlag: 'morocco',
            countryName: 'Moroccan'
        },
        {
            countryFlag: 'poland',
            countryName: 'Polish'
        },
        {
            countryFlag: 'portugal',
            countryName: 'Portuguese'
        }
    ]
    let temp = '';
    for (let i = 0; i < imagesArray.length; i++) {
        temp += `
        <div class="col-md-3 col-sm-6">
        <div onclick="displayEachArea('${imagesArray[i].countryName}')" class="country">
            <img src="imgs/Flags/${imagesArray[i].countryFlag}.png" alt="" class="w-50">
            <p class="mt-2">${imagesArray[i].countryName}</p>
        </div>
        </div>
        `
    }
    document.getElementById('areasFlags').innerHTML = temp;
}
displayAreas()

async function displayEachArea(area) {
    let api = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    let AreaInfo = await fetchApi5(api);
    let temp = '';
    for (let i = 0; i < AreaInfo.length; i++) {
        let imgSrc = AreaInfo[i].strMealThumb
        let AreaName = AreaInfo[i].strMeal
        let mealID = AreaInfo[i].idMeal
        temp += `
            <div onclick="displayDiscription('${mealID}')" class="col-md-6 col-lg-3 text-center">
                <div  class="categories-img-disc rounded position-relative overflow-hidden">
                    <img src="${imgSrc}" alt="" class="w-100">
                    <div class="img-layer position-absolute d-flex align-items-center justify-content-center rounded flex-column">
                        <p class="text-dark ms-2 fs-2">${AreaName}</p>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('areasFlags').innerHTML = temp;
    
  }


async function fetchApi5(api){
    let meals = await fetch(api)
    let response = await meals.json();
    return response.meals;
}


async function fetchApi2(api){
    let meals = await fetch(api)
    let response = await meals.json();
    return response.meals;
}
async function displayingredients() {
    let api = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
    let ingredientsFromAPI = await fetchApi2(api);
    let temp = '';
    for (let i = 0; i < 20; i++) {
        let IngreName = ingredientsFromAPI[i].strIngredient
        let ingredientsData = ingredientsFromAPI[i].strDescription
        let ingredientsDataHandler = truncate(ingredientsData, 100)
        temp += `
         <div class="col-md-3">
            <div onclick="displayEachingredients('${IngreName}')" class="ingredients-item">
                <i class="fa-solid fa-bowl-food"></i>
                <h3 class="py-2">${IngreName}</h3>
                <p class="text-muted">${ingredientsDataHandler}</p>
                </div>
            </div>
        `
    }
    document.getElementById('ingredientsItems').innerHTML = temp;
}
displayingredients()
async function displayEachingredients(ingredient) {
    let api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    let ingredientInfo = await fetchApi5(api);
    let temp = '';
    for (let i = 0; i < ingredientInfo.length; i++) {
        let imgSrc = ingredientInfo[i].strMealThumb
        let ingredientName = ingredientInfo[i].strMeal
        let mealID = ingredientInfo[i].idMeal
        temp += `
            <div class="col-md-6 col-lg-3 text-center">
                <div onclick="displayDiscription('${mealID}')" class="categories-img-disc rounded position-relative overflow-hidden">
                    <img src="${imgSrc}" alt="" class="w-100">
                    <div class="img-layer position-absolute d-flex align-items-center justify-content-center rounded flex-column">
                        <p class="text-dark ms-2 fs-2">${ingredientName}</p>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('ingredientsItems').innerHTML = temp;
    
}
async function fetchApi3(api){
    let meals = await fetch(api)
    let response = await meals.json();
    return response.meals;
}
async function displaySearchByName() {
    let mealName = document.getElementById('mealName').value
    let apiByName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    let mealsFromAPIByName = await fetchApi3(apiByName);
    console.log(mealsFromAPIByName);
    let temp = '';
    for (let i = 0; i < mealsFromAPIByName.length; i++) {
        let imgSrc = mealsFromAPIByName[i].strMealThumb
        let foodName = mealsFromAPIByName[i].strMeal
        let mealID = mealsFromAPIByName[i].idMeal
        temp += `
            <div class="col-md-6 col-lg-3 text-center food">
                <div onclick="displayDiscription('${mealID}')" class="food-img-disc rounded position-relative overflow-hidden">
                    <img src="${imgSrc}" alt="" class="w-100">
                    <div class="img-layer position-absolute d-flex align-items-center rounded">
                        <p class="text-dark ms-2 fs-2">${foodName}</p>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('searchBy').innerHTML = temp;
}
async function displaySearchByFirstL() {
    let mealFirstL = document.getElementById('mealFirstL').value
    let apiByFirstL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${mealFirstL}`
    let mealsFromAPIByFirstL = await fetchApi3(apiByFirstL);
    console.log(mealsFromAPIByFirstL);
    let temp = '';
    for (let i = 0; i < mealsFromAPIByFirstL.length; i++) {
        let imgSrc = mealsFromAPIByFirstL[i].strMealThumb
        let foodName = mealsFromAPIByFirstL[i].strMeal
        let foodNameHandler = truncate(foodName, 25)
        let mealID = mealsFromAPIByFirstL[i].idMeal
        temp += `
            <div class="col-md-6 col-lg-3 text-center food">
                <div onclick="displayDiscription('${mealID}')" class="food-img-disc rounded position-relative overflow-hidden">
                    <img src="${imgSrc}" alt="" class="w-100">
                    <div class="img-layer position-absolute d-flex align-items-center rounded">
                        <p class="text-dark ms-2 fs-2">${foodNameHandler}</p>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('searchBy').innerHTML = temp;
}
$('#mealName').on('keyup', ()=> {
    displaySearchByName()
})
$('#mealFirstL').on('keyup', ()=> {
    displaySearchByFirstL()
})
// $('.item-1').click(() => {
//     slideDown()
// })
$('#toggle').click(() => {
    let width = $('.side-menu').innerWidth()
    if ($('.side-menu').css('left') == '0px' ) {
        $('.side-menu').animate({'left' : `-${width}px`}, 700)
        $('.side-nav').animate({'left' : `0px`}, 700)
        document.getElementById('toggle').classList.remove('fa-xmark')
        document.getElementById('toggle').classList.add('fa-align-justify')
        $('.item-1').animate({ 'top': '100%'}, 700)
        $('.item-2').animate({ 'top': '100%'}, 800 )
        $('.item-3').animate({ 'top': '100%'}, 900 )
        $('.item-4').animate({ 'top': '100%'}, 1000 )
        $('.item-5').animate({ 'top': '100%'}, 1100 )
        
    }
    else{
        $('.side-menu').animate({'left' : `0px`}, 700)
        $('.side-nav').animate({'left' : `${width}px`}, 700)
        document.getElementById('toggle').classList.add('fa-xmark')
        document.getElementById('toggle').classList.remove('fa-align-justify')
        $('.item-1').animate({'paddingTop' : '15px' , 'top': '0'}, 1000)
        $('.item-2').animate({'paddingTop' : '15px' , 'top': '0'}, 1100 )
        $('.item-3').animate({'paddingTop' : '15px' , 'top': '0'}, 1200 )
        $('.item-4').animate({'paddingTop' : '15px' , 'top': '0'}, 1300 )
        $('.item-5').animate({'paddingTop' : '15px' , 'top': '0'}, 1400 )
    
        


    }
    console.log(document.getElementById('toggle').classList[1]);
})
let sections = Array.from($(document.body).children('section'))
let dBlock = 'block';
$('.item-1 a').click(() => {
    if (sections[2].style.display != 'none' ||
        sections[3].style.display != 'none' ||
        sections[4].style.display != 'none' ||
        sections[5].style.display != 'none' ||
        sections[6].style.display != 'none' ||
        sections[7].style.display != 'none' ) {

            sections[2].style.display = 'none' 
            sections[3].style.display = 'none' 
            sections[4].style.display = 'none' 
            sections[5].style.display = 'none' 
            sections[6].style.display = 'none' 
            sections[7].style.display = 'none' 
    }
    $('#search').fadeIn(500)
    let width = $('.side-menu').innerWidth()
    $('.side-menu').animate({'left' : `-${width}px`}, 400)
    $('.side-nav').animate({'left' : `0px`}, 400)
    document.getElementById('toggle').classList.remove('fa-xmark')
    document.getElementById('toggle').classList.add('fa-align-justify')
})
$('.item-2 a').click(() => {
    if (sections[2].style.display != 'none' ||
    sections[3].style.display != 'none' ||
    sections[1].style.display != 'none' ||
    sections[5].style.display != 'none' ||
    sections[6].style.display != 'none' ||
    sections[7].style.display != 'none' ) {

        sections[2].style.display = 'none' 
        sections[3].style.display = 'none' 
        sections[1].style.display = 'none' 
        sections[5].style.display = 'none' 
        sections[6].style.display = 'none' 
        sections[7].style.display = 'none' 
}
    $('#catigeories').fadeIn(500)
    let width = $('.side-menu').innerWidth()
    $('.side-menu').animate({'left' : `-${width}px`}, 400)
    $('.side-nav').animate({'left' : `0px`}, 400)
    document.getElementById('toggle').classList.remove('fa-xmark')
    document.getElementById('toggle').classList.add('fa-align-justify')
})
$('.item-3 a').click(() => {
    if (sections[2].style.display != 'none' ||
    sections[3].style.display != 'none' ||
    sections[4].style.display != 'none' ||
    sections[1].style.display != 'none' ||
    sections[6].style.display != 'none' ||
    sections[7].style.display != 'none' ) {

        sections[2].style.display = 'none' 
        sections[3].style.display = 'none' 
        sections[4].style.display = 'none' 
        sections[1].style.display = 'none' 
        sections[6].style.display = 'none' 
        sections[7].style.display = 'none' 
}
    $('#area').fadeIn(500)
    let width = $('.side-menu').innerWidth()
    $('.side-menu').animate({'left' : `-${width}px`}, 400)
    $('.side-nav').animate({'left' : `0px`}, 400)
    document.getElementById('toggle').classList.remove('fa-xmark')
    document.getElementById('toggle').classList.add('fa-align-justify')
})
$('.item-4 a').click(() => {
    if (sections[2].style.display != 'none' ||
    sections[3].style.display != 'none' ||
    sections[4].style.display != 'none' ||
    sections[5].style.display != 'none' ||
    sections[1].style.display != 'none' ||
    sections[7].style.display != 'none' ) {

        sections[2].style.display = 'none' 
        sections[3].style.display = 'none' 
        sections[4].style.display = 'none' 
        sections[5].style.display = 'none' 
        sections[1].style.display = 'none' 
        sections[7].style.display = 'none' 
}
    $('#ingredients').fadeIn(500)
    let width = $('.side-menu').innerWidth()
    $('.side-menu').animate({'left' : `-${width}px`}, 400)
    $('.side-nav').animate({'left' : `0px`}, 400)
    document.getElementById('toggle').classList.remove('fa-xmark')
    document.getElementById('toggle').classList.add('fa-align-justify')
})
$('.item-5 a').click(() => {
    if (sections[2].style.display != 'none' ||
    sections[3].style.display != 'none' ||
    sections[4].style.display != 'none' ||
    sections[5].style.display != 'none' ||
    sections[6].style.display != 'none' ||
    sections[1].style.display != 'none' ) {

        sections[2].style.display = 'none' 
        sections[3].style.display = 'none' 
        sections[4].style.display = 'none' 
        sections[5].style.display = 'none' 
        sections[6].style.display = 'none' 
        sections[1].style.display = 'none' 
}
    $('#contact-form').fadeIn(500)
    let width = $('.side-menu').innerWidth()
    $('.side-menu').animate({'left' : `-${width}px`}, 400)
    $('.side-nav').animate({'left' : `0px`}, 400)
    document.getElementById('toggle').classList.remove('fa-xmark')
    document.getElementById('toggle').classList.add('fa-align-justify')
})

let inputName = document.getElementById('PName')
let inputNameAlert = document.getElementById('PNameAlert')
let inputUrl = document.getElementById('PEmail')
let inputUrlAlert = document.getElementById('PEmailAlert')
let inputPhone = document.getElementById('PPhone')
let inputPhoneAlert = document.getElementById('PPhoneAlert')
let inputAge = document.getElementById('PAge')
let inputAgeAlert = document.getElementById('PAgeAlert')
let inputPassword = document.getElementById('PPassword')
let inputPasswordAlert = document.getElementById('PPasswordAlert')
let reinputPassword = document.getElementById('PRePassword')
let reinputPasswordAlert = document.getElementById('PRePasswordAlert')

function validateName() {
    let regex1 = /^[A-Z][a-z]{3,15}$/gm;
    let t = regex1.test(inputName.value);
    if (t == true) {
        inputName.classList.add('is-valid')
        inputNameAlert.classList.add('d-none')
        $(inputName).css('border-color', 'green')
        return true
    }
    else {
        inputNameAlert.classList.remove('d-none')
        inputName.classList.remove('is-valid')
        $(inputName).css('border-color', 'red')
        return false
    }
}
$(inputName).on('keyup', () => {
    validateName()
    enabled()
})
function validateURL() {
    let regex2 = /[a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{2,10}\.[a-zA-Z0-9]{2,7}/gm;

    let t = regex2.test(inputUrl.value);
    if (t == true) {
        inputUrlAlert.classList.add('d-none')
        inputUrl.classList.add('is-valid')
        $(inputUrl).css('border-color', 'green')
        return true
    }
    else {
        inputUrlAlert.classList.remove('d-none')
        inputUrl.classList.remove('is-valid')
        $(inputUrl).css('border-color', 'red')
        return false
    }
}
$(inputUrl).on('keyup', () => {
    validateURL()
    enabled()
})
function validatePhone() {
    let regex3 = /^01[0-25][0-9]{8}/gm
    let t = regex3.test(inputPhone.value);
    if (t == true) {
        inputPhone.classList.add('is-valid')
        inputPhoneAlert.classList.add('d-none')
        $(inputPhone).css('border-color', 'green')
        return true
    }
    else {
        inputPhoneAlert.classList.remove('d-none')
        inputPhone.classList.remove('is-valid')
        $(inputPhone).css('border-color', 'red')
        return false
    }

}
$(inputPhone).on('keyup', () => {
    validatePhone()
    enabled()
})

function validateAge() {
    let regex4 = /^[1-9]{1}[0-9]{1}$/gm
    let t = regex4.test(inputAge.value);
    if (t == true) {
        inputAge.classList.add('is-valid')
        inputAgeAlert.classList.add('d-none')
        $(inputAge).css('border-color', 'green')
        return true
    }
    else {
        inputAgeAlert.classList.remove('d-none')
        inputPhone.classList.remove('is-valid')
        $(inputAge).css('border-color', 'red')
        return false
    }

}
$(inputAge).on('keyup', () => {
    validateAge()
    enabled()
})


function validatePassword() {
    validateRePassword()
    let regex5 = /^[A-Za-z\d]{8,}$/gm
    let t = regex5.test(inputPassword.value);
    if (t == true) {
        inputPassword.classList.add('is-valid')
        inputPasswordAlert.classList.add('d-none')
        $(inputPassword).css('border-color', 'green')
        return true
    }
    else {
        inputPasswordAlert.classList.remove('d-none')
        inputPassword.classList.remove('is-valid')
        $(inputPassword).css('border-color', 'red')
        return false
    }

}
$(inputPassword).on('keyup', () => {
    validatePassword()
    enabled()
})

function validateRePassword() {

    if (inputPassword.value == reinputPassword.value) {
        reinputPassword.classList.add('is-valid')
        reinputPasswordAlert.classList.add('d-none')
        $(reinputPassword).css('border-color', 'green')
        return true
    }
    else {
        reinputPasswordAlert.classList.remove('d-none')
        reinputPassword.classList.remove('is-valid')
        $(reinputPassword).css('border-color', 'red')
        return false
    }
}
$(reinputPassword).on('keyup', () => {
    validateRePassword()
    enabled()
})
let btn = document.getElementById('btn')
    btn.disabled = true;
function enabled() { 
    
    if (validateName() === true && validateURL() === true && validatePhone() === true  && validateAge() === true 
    && validatePassword() === true && validateRePassword() === true ) {
        btn.disabled = false
        return true
    } 
    else{
        btn.disabled = true
        return false
    }
 }



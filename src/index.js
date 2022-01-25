console.log('%c HI', 'color: firebrick')



const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const placeForImgs = document.querySelector("#dog-image-container")
const breedUrl = 'https://dog.ceo/api/breeds/list/all'




document.addEventListener("DOMContentLoaded", main);

function main() {

    fetch(imgUrl)
        .then((r) => r.json())
        .then(data => addImagestoDom(data));

    fetch(breedUrl)
        .then(r => r.json())
        .then(breeds => addBreadsToDom(breeds));
    

    
}



function addImagestoDom(objLinks) {
    let arrLinks = Object.values(objLinks.message);
    // console.log(arrLinks);
    arrLinks.forEach(link => {
        // console.log(link);
        const placeForImgs = document.querySelector("#dog-image-container")
        let imgElement = document.createElement('img');
        imgElement.src = link;
        // console.log(imgElement);
        placeForImgs.append(imgElement);
    })

}

function hideElements(ArrayOfElements) {
    ArrayOfElements.forEach(item => item.style.display = "none");
    
}

function showElements(ArrayOfElements) {
    ArrayOfElements.forEach(item => item.style.display = "block");
    
}

function testCondition(ele, condition){
    let 
    return 
}

function filterElements(criteria) {
    let arrElements = document.querySelectorAll(`.lib`);
    let pattern = `^${criteria}`;
    let myRegExpession = new RegExp(pattern);
    
    let filteredArr = arrElements.filter(item => myRegExpession.test(item.text) 
    )
    return filteredArr;
}


function addBreadsToDom(breedsObj) {

  
    let List = document.querySelector("#dog-breeds");
    let arr = Object.keys(breedsObj.message);
    // console.log(arr);
    arr.map(breed => {
        let breedItem = document.createElement('li');
        breedItem.className = "lib"
        breedItem.textContent = breed;
        breedItem.addEventListener('click', (e) => {
            // e.preventDefault();
            breedItem.style.color = "red"
        });
        List.appendChild(breedItem);


    })

    let listBreedLi = document.querySelectorAll(`.lib`);

    let dropdownM = document.querySelector("#breed-dropdown");
    dropdownM.addEventListener('change', (e)=>{
        console.log(e.target.value);

        hideElements(listBreedLi);

        if(e.target.value ==="all" ){
            showElements(listBreedLi);
        } else{
            let arrF =  filterElements(e.target.value);
            showElements(arrF);
                
        }


        }
        
    )



}




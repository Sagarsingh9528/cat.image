let CAT_URL = "https://api.thecatapi.com/v1/images/search?api_key=live_4UDyK5VNv64AZgWiOix7zo7VGsHvZiGZ4NMBsY08hXnxb8d5PvJ23njfHE8Yla0a";
// console.log(CAT_URL);
let div = document.querySelector(".root");
// console.log(div);
let limit = document.getElementById("limit");

let page = document.getElementById("page");
// console.log(page); 
let btn = document.getElementById("btn");
// console.log(btn);
let img = document.getElementById("img");


btn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    let newLimit = limit.value;
    // console.log(newLimit);
    let newPage = page.value;
    const URL = `${CAT_URL}&limit=${newLimit}&page=${newPage}`;
    // console.log(URL);
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(data);
    // let image = data.response.image;
    // console.log(image);
    clear();
    myFunction(data);
    

})

function clear(){
   let div = document.getElementById("someId");
   if(div !== null){
    document.getElementById("someId").remove();
   }
}


function myFunction(data){
    const div = document.createElement("div");
    div.setAttribute('id', "someId");
    for (let i = 0; i < data.length; i++){
        // console.log(data.Array);
       div1 = document.createElement("div")

       let img = document.createElement('img');

       img.src = data[i].url;
    //    console.log(img.src);
       img.classList.add('cat');

       div1.appendChild(img);

       div.appendChild(div1);

    }
    document.body.appendChild(div);
}

// function clear(){
//     if(img.src !== null){
//         img.src.remove(); 
//     }
// }
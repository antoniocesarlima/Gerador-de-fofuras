const urlApiDog = "https://dog.ceo/api/breeds/image/random";
const urlApiCat = "https://api.thecatapi.com/v1/images/search";
const HTMLimg = document.createElement('img');

function consultar() {
  let randomNumber = 100 * Math.random();

  if(Math.ceil(randomNumber) % 2 == 0) {
    doguinho();
  } else {
    gatinho();
  }
}

async function doguinho(){
  let div = document.querySelector("#div-box");
  const getApi = fetch(urlApiDog);
  console.log(getApi);
  let urlImg = await getApi.then(corpoApi => {
    return corpoApi.json();
  })
  .then(objetoDaApi => {
    return objetoDaApi.message;
  });
  
  div.insertBefore(HTMLimg, div.lastChild);
  const img = document.querySelector("img");
  img.setAttribute("src", `${urlImg}`);
}

async function gatinho() {
  let div = document.querySelector("#div-box");
  const getApi = fetch(urlApiCat);
  console.log(getApi);
  let urlImg = await getApi.then(corpoApi => {
    return corpoApi.json();
  })
  .then(objetoDaApi => {
    return objetoDaApi["0"].url;
  });
  console.log(urlImg);

  div.insertBefore(HTMLimg, div.lastChild);
  const img = document.querySelector("img");
  img.setAttribute("src", `${urlImg}`);
}
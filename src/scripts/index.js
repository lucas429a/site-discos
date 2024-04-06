/* Desenvolva sua lógica aqui ... */
const creatCard = (obj)=>{
    const container = document.querySelector(".ul_container");

    const card = document.createElement("li");
    const img = document.createElement("img");
    const paragraph = document.createElement("p");
    const h2 = document.createElement("h2");
    const span = document.createElement("span");
    const price = document.createElement("p");
    const btn = document.createElement("button");

    img.src = obj.img;
    paragraph.innerText = `${obj.band} ${obj.year}`;
    h2.innerText = obj.title;
    price.innerText = `R$ ${obj.price}`;
    btn.innerText = "Comprar";

    span.appendChild(price);
    span.appendChild(btn);
    card.appendChild(img);
    card.appendChild(paragraph);
    card.appendChild(h2);
    card.appendChild(span);

    card.classList.add("Li_container");
    img.classList.add("Li_img");
    paragraph.classList.add("Li_paragraph");
    h2.classList.add("Li_h2");
    span.classList.add("Li_span-container");
    price.classList.add("Li_span-price");
    btn.classList.add("Li_span-btn");

    container.appendChild(card)
    return card
}

const render= (array)=>{
    const container = document.querySelector(".ul_container");
    container.innerHTML = '';
    array.forEach(product => {
        const card = creatCard(product);
        container.appendChild(card)
    });
}
const filterByRange = (array)=>{
    const inputRange = document.querySelector("#inputRange")
    
    inputRange.addEventListener('input',()=>{
        const span = document.querySelector("#span")
        span.innerText = `  R$ ${inputRange.value}`
        const arrayFilter = array.filter((product) =>{
            return product.price <= inputRange.value
        })
        render(arrayFilter)
    })
}

const filter = ()=>{
    const buttonList = document.querySelectorAll(".nav__button");
    console.log(buttonList)
    const buttonArray = Array.from(buttonList);

    buttonArray.forEach(button=>{
        button.addEventListener("click",function(e){
            const list = products.filter(product => product.category == button.value);
            if(list == 0){
              return  render(products)
            }
            render(list);
            filterByRange(list)
        })
    })
}
filter()
render(products)
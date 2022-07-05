let modal = document.querySelector(".modal"),
modal_body = document.querySelector(".modal_body"),
modal_data = document.querySelector(".modal_data"),
close = document.querySelector(".close"),
shop = document.querySelector(".shop"),
cards = document.querySelector(".cards"),
cate_cards = document.querySelector(".cate_cards"),
card_cate = document.querySelectorAll(".card_cate"),
umumiy1 = document.querySelector("#umumiy1");


// 1 cards

// CARDLARDAGI MALUMOTLAR: MASSIV
let mevalar = [
    {
        id:0,
        nema:"Fresh organic apricot",
        narxi:25,
        count:0,
        img:"./img/1.png",
        like:true,
        chegirma:15
    },
    {
        id:1,
        nema:"Cucumber",
        narxi:22,
        count:0,
        img:"./img/2.png",
        like:true,
        chegirma:15
    },
    {
        id:2,
        nema:"Hazelnuts filbert nut",
        narxi:28,
        count:0,
        img:"./img/3.png",
        like:true,
        chegirma:15
    },
    {
        id:3,
        nema:"Raw broccoli",
        narxi:26,
        count:0,
        img:"./img/4.png",
        like:true,
        chegirma:15
    },
    {
        id:4,
        nema:"Organic quince",
        narxi:18,
        count:0,
        img:"./img/5.png",
        like:true,
        chegirma:15
    }
]

// CARDLAR forEach BILAN TUZISH
function mevalarbaza() {
    cards.innerHTML = ""
    mevalar.forEach((btn,i) => {
        cards.innerHTML += `
            <div class="card">
                <div class="card_header">
                    <div><p>${btn.chegirma}%Off</p></div>
                    <div><button onclick="like(${i})" style="background: ${btn.like ? "" : "#b8e673"}"><img src="./icon/cardlike.svg"/></button></div>
                </div>
                <div class="card_body">
                    <span><img src="${btn.img}" alt=""></span>
                    <h2>${btn.nema}</h2>
                    <p>$${parseInt(btn.narxi - (btn.narxi / 100 * btn.chegirma))} <del>$${btn.narxi}</del></p>
                </div>
                <div class="card_footer">
                    <div class="count">
                        <button class="btn btn_minus" onclick="minus(${i})">-</button>
                        <p>${btn.count}</p>
                        <button class="btn btn_plus" onclick="plus(${i})">+</button>
                    </div>
                    <div class="narx_btn">
                        <button onclick="modalFun(${i})"><img src="./icon/shopnarx.svg"/></button>
                    </div>
                </div>
            </div>
        `
    })
}



const like = (i) => {
    console.log(i);
    console.log(mevalar[i].like);
    if(mevalar[i].like){
        mevalar[i].like = false
    }else{
        mevalar[i].like = true
    }
    likeCount()
    mevalarbaza()
}

// CARDDAGI BTN + -
const minus = (i) => {
    console.log();
    if(mevalar[i].count){
        mevalar[i].count = mevalar[i].count - 1
    }
    mevalarbaza()
}
const plus = (i) => {
    console.log();
    mevalar[i].count = mevalar[i].count + 1
    mevalarbaza()
}

// MODALGA HISSOBNI CHIQARISH
const modalFun = (i) => {
    modal.classList.add("activ")
    modal_body.classList.add("activ");
    let baza = `
    <h1>${mevalar[i].nema}</h1>
    <p>soni: ${mevalar[i].count}</p>
    <p>narxi: $${mevalar[i].count * parseInt(mevalar[i].narxi - (mevalar[i].narxi / 100 * mevalar[i].chegirma))}</p>
    <img src="${mevalar[i].img}" />
    `
    modal_data.innerHTML = baza;
}

close.addEventListener("click", () => {
    modal.classList.remove("activ")
    modal_body.classList.remove("activ")
})

umumiy1.addEventListener("click", () => {
    
})

// <<CARD>>NILARNI CHAQIRISH FUNCTION
mevalarbaza()



// 2 cards

// MASSIV
let olma = [
    {
        id:0,
        img:"./img/cr1.png",
        name:"Vegetables & Fruits",
        haqida:"1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio optio animi unde laudantium facere ut maxime doloremque, possimus, similique aliquam quisquam delectus dolorum soluta iste rem accusantium maiores! Iure, magni?"
    },
    {
        id:1,
        img:"./img/cr2.png",
        name:"Grocery & Staples",
        haqida:"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio optio animi unde laudantium facere ut maxime doloremque, possimus, similique aliquam quisquam delectus dolorum soluta iste rem accusantium maiores! Iure, magni?"
    },
    {
        id:2,
        img:"./img/milk 1.png",
        name:"Dairy & Eggs",
        haqida:"3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio optio animi unde laudantium facere ut maxime doloremque, possimus, similique aliquam quisquam delectus dolorum soluta iste rem accusantium maiores! Iure, magni?"
    },
    {
        id:3,
        img:"./img/cr3.png",
        name:"Beverages",
        haqida:"4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio optio animi unde laudantium facere ut maxime doloremque, possimus, similique aliquam quisquam delectus dolorum soluta iste rem accusantium maiores! Iure, magni?"
    },
    {
        id:4,
        img:"./img/cr4.png",
        name:"Snacks",
        haqida:"5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio optio animi unde laudantium facere ut maxime doloremque, possimus, similique aliquam quisquam delectus dolorum soluta iste rem accusantium maiores! Iure, magni?"
    },
    {
        id:5,
        img:"./img/cr5.png",
        name:"Home Care",
        haqida:"6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio optio animi unde laudantium facere ut maxime doloremque, possimus, similique aliquam quisquam delectus dolorum soluta iste rem accusantium maiores! Iure, magni?"
    }
]

// Funcsiya
function shops () {
    cate_cards.innerHTML = ""
    olma.forEach((btn,i) => {
        cate_cards.innerHTML += `
            <div class="card_cate">
                <img src="${btn.img}" alt="">
                <h2>${btn.name}</h2>
                <button onclick="malumot(${i})" class="ml_btn">Read More</button>
                <button class="ml_close">X</button>
            </div>
        `
    })
}

// modal oynaga ma'lumot jo'natish
const malumot = (i) =>{
    modal.classList.add("activ")
    modal_body.classList.add("activ")
    let shopping = `
    <img src="${olma[i].img}" class="shoppingimg"/>
    <h2 class="shoppingh2">${olma[i].name}</h2>
    <h4 class="shoppingh4">${olma[i].haqida}</h4>
    `
    modal_data.innerHTML = shopping;
}

// cate_cardni chaqirish
shops()



// 2 sectiondagi cadrlarni uchirich funksiyasi
let ml_close = document.querySelectorAll(".ml_close");
card_cate = document.querySelectorAll(".card_cate")
ml_close.forEach((btn,i) => {
    btn.addEventListener("click", (e) => {
        card_cate[i].style.display = "none"
        console.log(e);
    })
})


// 3 cards

// carddagi ma'lunotlar
let sabzavot = [
    {
        id:0,
        nema:"Red apple",
        narxi:25,
        count:0,
        img:"./img/pr1.png",
        like:true,
        chegirma:15
    },
    {
        id:1,
        nema:"Capsicum-green",
        narxi:22,
        count:0,
        img:"./img/pr2.png",
        like:true,
        chegirma:15
    },
    {
        id:2,
        nema:"Pear fruit",
        narxi:28,
        count:0,
        img:"./img/pr3.png",
        like:true,
        chegirma:15
    },
    {
        id:3,
        nema:"Blueberry",
        narxi:26,
        count:0,
        img:"./img/pr4.png",
        like:true,
        chegirma:15
    },
    {
        id:4,
        nema:"Fresh raspberry",
        narxi:18,
        count:0,
        img:"./img/pr5.png",
        like:true,
        chegirma:15
    }
]

// cardlar funksiyasi
function sabzavotlar() {
    cards2.innerHTML = ""
    sabzavot.forEach((btn,i) => {
        cards2.innerHTML += `
            <div class="card">
                <div class="card_header">
                    <div><p>15%Off</p></div>
                    <div><button onclick="like2(${i})" style="background: ${btn.like ? "" : "#b8e673"}"><img src="./icon/cardlike.svg"/></button></div>
                </div>
                <div class="card_body">
                    <span><img src="${btn.img}" alt=""></span>
                    <h2>${btn.nema}</h2>
                    <p>$${parseInt(btn.narxi - (btn.narxi / 100 * btn.chegirma))} <del>$${btn.narxi}</del></p>
                </div>
                <div class="card_footer">
                    <div class="count">
                        <button class="btn btn_minus" onclick="minus2(${i})">-</button>
                        <p>${btn.count}</p>
                        <button class="btn btn_plus" onclick="plus2(${i})">+</button>
                    </div>
                    <div class="narx_btn">
                        <button onclick="sazavotnarx(${i})"><img src="./icon/shopnarx.svg"/></button>
                    </div>
                </div>
            </div>
        `
    })
}

// card btn soni qo'shish
const minus2 = (i) => {
    if (sabzavot[i].count){
        sabzavot[i].count = sabzavot[i].count - 1
    }
    // bazaga jo'natish
    sabzavotlar() 
}
const plus2 = (i) => {
    sabzavot[i].count = sabzavot[i].count + 1
    // bazaga jo'natish
    sabzavotlar()
}

// modalga ma'lumot jonatish sabzavotning narxni haqida
const sazavotnarx = (i) => {
    modal.classList.add("activ")
    modal_body.classList.add("activ")
    let sabzavotmodal = `
    <h1>${sabzavot[i].nema}</h1>
    <p>soni : ${sabzavot[i].count}</p>
    <p>narxa : ${sabzavot[i].count * parseInt(sabzavot[i].narxi - (sabzavot[i].narxi / 100 * sabzavot[i].chegirma))}$</p>
    <img src="${sabzavot[i].img}" alt="">
    `
    modal_data.innerHTML = sabzavotmodal
}

// carddagi sabzavotlar yoqqanligini hissoblash
let like2 = (i) => {
    console.log(i);
    console.log(sabzavot[i].like);
    if (sabzavot[i].like){
        sabzavot[i].like = false
    }
    else {
        sabzavot[i].like = true
    }
    likeCount()
    sabzavotlar()
}

// cardlarni chaqirish
let cards2 = document.querySelector(".cards2");

// cards Bazani chaqirish
sabzavotlar()


//  4 cards
let cards3 = document.querySelector(".cards3");

// MASSIV CARDS
let freesh = [
    {
        id:0,
        nema:"Ginger",
        narxi:25,
        count:0,
        img:"./img/pr6.png",
        like:true,
        chegirma:15
    },
    {
        id:1,
        nema:"Strawberry",
        narxi:22,
        count:0,
        img:"./img/pr7.png",
        like:true,
        chegirma:15
    },
    {
        id:2,
        nema:"Eggplant",
        narxi:28,
        count:0,
        img:"./img/pr8.png",
        like:true,
        chegirma:15
    },
    {
        id:3,
        nema:"Blueberry",
        narxi:26,
        count:0,
        img:"./img/pr9.png",
        like:true,
        chegirma:15
    },
    {
        id:4,
        nema:"Egg",
        narxi:18,
        count:0,
        img:"./img/pr10.png",
        like:true,
        chegirma:15
    }
]

// funksiya cards
function freeshcard() {
    cards3.innerHTML = ""
    freesh.forEach((btn,i) => {
        cards3.innerHTML += `
            <div class="card">
                <div class="card_header">
                    <div><p>15%Off</p></div>
                    <div><button onclick="like3(${i})" style="background: ${btn.like ? "" : "#b8e673"}"><img src="./icon/cardlike.svg"/></button></div>
                </div>
                <div class="card_body">
                    <span><img src="${btn.img}" alt=""></span>
                    <h2>${btn.nema}</h2>
                    <p>$${parseInt(btn.narxi - (btn.narxi / 100 * btn.chegirma))} <del>$${btn.narxi}</del></p>
                </div>
                <div class="card_footer">
                    <div class="count">
                        <button class="btn btn_minus" onclick="minus3(${i})">-</button>
                        <p>${btn.count}</p>
                        <button class="btn btn_plus" onclick="plus3(${i})">+</button>
                    </div>
                    <div class="narx_btn">
                        <button onclick="freeshnarx(${i})"><img src="./icon/shopnarx.svg"/></button>
                    </div>
                </div>
            </div>
        `
    })
}

// cards btn sanog'i
const minus3 = (i) => {
    if (freesh[i].count){
        freesh[i].count = freesh[i].count - 1
    }
    // bazaga jo'natish
    freeshcard() 
}
const plus3 = (i) => {
    freesh[i].count = freesh[i].count + 1
    // bazaga jo'natish
    freeshcard()
}

// modalga ma'lumot
const freeshnarx = (i) => {
    modal.classList.add("activ")
    modal_body.classList.add("activ")
    let freeshmodal = `
    <h1>${freesh[i].nema}</h1>
    <p>soni : ${freesh[i].count}</p>
    <p>narxa : ${freesh[i].count * parseInt(freesh[i].narxi - (freesh[i].narxi / 100 * freesh[i].chegirma))}$</p>
    <img src="${freesh[i].img}" alt="">
    `
    modal_data.innerHTML = freeshmodal
}

// cardsdagi mevalar yoqqanligi haqida
let like3 = (i) => {
    console.log(i);
    console.log(freesh[i].like);
    if (freesh[i].like){
        freesh[i].like = false
    }
    else {
        freesh[i].like = true
    }
    likeCount()
    freeshcard()
}

// cards bazani chaqirish
freeshcard()












// likeni HISSOBLASH
let sub1 = document.querySelector(".sub1");
function likeCount() {
    let s = mevalar.filter((val) => {
        return val.like == false
    }).length;
    sub1.innerHTML = s

    let k = sabzavot.filter((value) => {
        return value.like == false
    }).length;
    sub1.innerHTML = k + s

    let n = freesh.filter((value) => {
        return value.like == false
    }).length;
    sub1.innerHTML = k + s + n
}
likeCount()
mevalarbaza()
sabzavotlar()
freeshcard()

// UMUMIY SUMMANI HISSOBLASH
let umumiy = document.querySelector(".umumiy"),
modal2 = document.querySelector(".modal2"),
modal_body2 = document.querySelector(".modal_body2"),
modal_data2 = document.querySelector(".modal_data2"),
modal_new = document.querySelector(".modal_new"),
close2 = document.querySelectorAll(".close2"),
table = document.querySelector(".table"),
savatcha = document.querySelector(".savatcha");

umumiy.addEventListener("click", () => {
        modal2.classList.add("activ")
        modal_body2.classList.add("activ")
        let umumiyhissob = mevalar.filter((value) => {
            return value.count > 0
        }),
        atchot = 0;
        umumiyhissob.forEach((value) => {
            atchot += parseInt(value.narxi - value.narxi / 100 * value.chegirma) * value.count
        })
        umumiyhissob.forEach((savatt,i) => {
            table.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td><img src="${savatt.img}"/></td>
                    <td>${savatt.nema}</td>
                    <td><del>${savatt.narxi}</del>${parseInt(savatt.narxi - savatt.narxi / 100 * savatt.chegirma) * savatt.count}</td>
                    <td>${savatt.count}</td>        
                    <td>${parseInt(savatt.narxi - savatt.narxi / 100 * savatt.chegirma) * savatt.count}</td>
                </tr>
            `
        })
        modal_new.innerHTML = umumiyhissob
        // console.log(table);
})

close2.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        modal2.classList.remove("activ")
        modal_body2.classList.remove("activ")
    })
})



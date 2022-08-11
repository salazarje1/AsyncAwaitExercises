
const url = 'http://numbersapi.com/';
const multiNumsEl = document.querySelector('#multi-nums');
const favNumEl = document.querySelector('#fav-num');

async function multiNums(...nums) {
    let res = await axios.get(`${url}${nums}?json`);
    showOnScreen(multiNumsEl, res.data, 'object');
}

multiNums(1,4,7,2);

async function favNum(num) {
    let res = await Promise.all([
        axios.get(`${url}${num}`),
        axios.get(`${url}${num}`),
        axios.get(`${url}${num}`),
        axios.get(`${url}${num}`)
    ])

    showOnScreen(favNumEl, res, 'array');
}

favNum(7);


function showOnScreen(el, data, type){
    if(type === 'object' ) {
        for(fact in data) {
            let p = document.createElement('p');
            p.innerText = `${fact}: ${data[fact]}`;
            el.appendChild(p);
        }
    } else if (type === 'array') {
        for(fact of data) {
            let p = document.createElement('p');
            p.innerText = `${fact.data}`;
            el.appendChild(p);
        }
    }
}
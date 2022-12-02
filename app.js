const btn = document.querySelector('#btn');
const main = document.querySelector('.container');
const message = pagesEles(main, 'div', 'Appuyez sur le bouton start', 'message');
const output = pagesEles(main, 'div',"", 'game', "");
const url = 'BDD.json'
const game = {score:0};

btn.onclick = loadData;


function pagesEles(parent, t, html, c){
    const ele = document.createElement(t);
    ele.innerHTML = html;
    ele.classList.add(c);
    return parent.appendChild(ele);
}

function loadData(){
    btn.style.display = 'none';
    fetch(url)
        .then(res=>res.json())
        .then(data=>{
            const temp = {
                total : data.length,
                q : data,
                counter: 0
            };
            createQuestion(temp);
        })
}

function createQuestion(data){
    const el = pagesEles(output, 'div', "", 'question');
    
    //console.log(data);
    if(data.q.length == 0){
        message.innerHTML = `<h1>Merci d'avoir joué !</h1><br><div>Votre score est de ${game.score} / ${data.total}.</div>`;
    }

    else{
        const tBtn = pagesEles(el, 'button', 'Next', 'next');
        tBtn.onclick = () => {
            el.remove();
            createQuestion(data);
            console.log(data);
        }
        var question = data.q.shift();
        data.counter++;
        message.textContent = `Question : ${data.counter} of ${data.total}`;
        if (data.q.length == 0) tBtn.textContent = 'Fin du jeu';
        tBtn.style.display = 'none';
        outputQuestion(question, el, tBtn);
    }
}

function outputQuestion(question, parent, tBtn){
    console.log(question);
    const que = pagesEles(parent, 'div', `${question.question}?`, 'question');
    const arr = question.opt;
    arr.push(question.answer);
    arr.sort(()=>{
        return Math.random() - 0.5;
    })
    const btns = pagesEles(parent, 'div', '', 'opts');
    arr.forEach(e => {
        const optemp = pagesEles(btns, 'button', e, 'btns')
        optemp.onclick = () =>{
            if(question.answer == e){
                message.textContent = "Bonne réponse !";
                game.score++;
            }

            else{
                message.textContent = "Faux";
            }
            const temps = parent.querySelectorAll('.btns');
            temps.forEach(el=> {
                el.disabled = true;
                const bgc = (question.answer == el.textContent)?'green':'red';
                el.style.backgroundColor = bgc;
                el.style.color = (question.answer == el.textContent)?'white':'white';
            })
            tBtn.style.display = "block";
            parent.appendChild(tBtn);
        }
    });
    console.log(arr);
}

function pagesEles(parent, t, html, c){
    const ele = document.createElement(t);
    ele.innerHTML = html;
    ele.classList.add(c);
    return parent.appendChild(ele);
}
//Kristo Tammelehtl
//6.12.2023
//ylesanne 15


const nupp = document.querySelector('#theme');
let darkmod = false;
nupp.addEventListener("click", ()=>{
    darkmod = !darkmod;
    if (darkmod){
        const ps = document.querySelectorAll('p');
        ps.forEach(p => {
            p.setAttribute("class", "dark");
        });
        const lis = document.querySelectorAll('li');
        lis.forEach(li => {
            li.setAttribute("class", "dark");
        });
        const spans = document.querySelectorAll('span');
        spans.forEach(span => {
            if (span.getAttribute("class") == "peida"){
                span.setAttribute("class", "peida dark");
            } else {
                span.setAttribute("class", "dark");
            }
        });
        const h1s = document.querySelectorAll('h1');
        h1s.forEach(h1 => {
            h1.setAttribute("class", "dark");
        });
        const divs = document.querySelectorAll('body');
        divs.forEach(div => {
            div.setAttribute("class", "container dark");
        });
        nupp.setAttribute("class", "btn btn-light float-end");
        nupp.innerText = "Light Theme";
    }   else {
        const ps = document.querySelectorAll('p');
        ps.forEach(p => {
            p.setAttribute("class", "");
        });
        const lis = document.querySelectorAll('li');
        lis.forEach(li => {
            li.setAttribute("class", "");
        });
        const spans = document.querySelectorAll('span');
        spans.forEach(span => {
            if (span.getAttribute("class") == "peida dark"){
                span.setAttribute("class", "peida");
            } else {
                span.setAttribute("class", "");
            }
            
        });
        const h1s = document.querySelectorAll('h1');
        h1s.forEach(h1 => {
            h1.setAttribute("class", "");
        });
        const divs = document.querySelectorAll('body');
        divs.forEach(div => {
            div.setAttribute("class", "container");
        });
        nupp.setAttribute("class", "btn btn-dark float-end");
        nupp.innerText = "Dark Theme";
    }
});

const lis = document.querySelectorAll('li');

lis.forEach(li => {
    li.addEventListener("click", ()=>{
        console.log("pider");
        const span = li.querySelector("span")
        if ( span.getAttribute("class") == "peida dark" ){
            span.setAttribute("class", "dark");
        } else if ( span.getAttribute("class") == "peida" ){
            span.setAttribute("class", "");
        } else if ( span.getAttribute("class") == "" ){
            span.setAttribute("class", "peida");

        }   else {
            span.setAttribute("class", "peida dark");

        }


    });
});
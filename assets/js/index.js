let $puzzle = document.getElementById('puzzle');

let obj = {}
let sections = [];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let section = {
            gridRow: `${i+1}/${i+2}`,
            gridColumn: `${j+1}/${j+2}`
        };
        sections.push(section);
    }
}
sections.pop();
sections.sort(function(a, b) {return Math.random() - 0.5});
let i = 1
sections.forEach(e=>{
    let div = document.createElement('div');
    div.classList.add('img');
    div.classList.add('clas'+i);
    div.style.gridRow = e.gridRow
    div.style.gridColumn = e.gridColumn
    $puzzle.appendChild(div);
    i++
})
let div = document.createElement('div');
    div.setAttribute('id','empty');
    div.style.gridRow = "3/4"
    div.style.gridColumn = "3/4"
    $puzzle.appendChild(div);

let $empty = document.getElementById('empty')
$puzzle.addEventListener('click', function(e){

    let targetRowStart =  parseInt(e.target.style.gridRowStart);
    let targetRowEnd =  parseInt(e.target.style.gridRowEnd);
    let targetColumnStart =  parseInt(e.target.style.gridColumnStart);
    let targetColumnEnd =  parseInt(e.target.style.gridColumnEnd);

    let emptyRowStart = parseInt($empty.style.gridRowStart);
    let emptyRowEnd = parseInt($empty.style.gridRowEnd);
    let emptyColumnStart = parseInt($empty.style.gridColumnStart);
    let emptyColumnEnd = parseInt($empty.style.gridColumnEnd);

    if(Math.abs(targetRowStart-emptyRowStart+
    targetRowEnd-emptyRowEnd+
    targetColumnStart-emptyColumnStart+
    targetColumnEnd-emptyColumnEnd) == 2){
        e.target.style.gridRow = `${emptyRowStart}/${emptyRowEnd}`
        e.target.style.gridColumn = `${emptyColumnStart}/${emptyColumnEnd}`
        $empty.style.gridRow = `${targetRowStart}/${targetRowEnd}`
        $empty.style.gridColumn = `${targetColumnStart}/${targetColumnEnd}`
    }
    // console.log(e.target)
    // console.log(e)
    // console.log(e.target.style.gridRow)
    // this.style.gridRow = "2/3"
});
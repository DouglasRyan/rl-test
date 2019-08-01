let firstDay, lastDay
let currentDate = new Date()

text.innerText = currentDate.toLocaleDateString()
let table = document.createElement('table')
rl.appendChild(table)



initDate()

//上一周
pre.onclick = () => {
    setCurrDTBefore()
    text.innerText = currentDate.toLocaleDateString()

    //在表格中显示一周的日期
}

//上一周当天
function setCurrDTBefore() {
    currentDate.setDate(currentDate.getDate() - 7);
}

function baseDate() {
    let tr = document.createElement('tr')
    let head = ['日', '一', '二', '三', '四', '五', '六']
    for (let i = 0; i < 7; i++) {
        let th = document.createElement('th')
        th.innerText = head[i]
        tr.appendChild(th)
    }
    table.appendChild(tr)
}

function initDate() {
    baseDate();
    let days = getDays();
    let tr = document.createElement('tr')
    for (let i = 0; i < 7; i++) {
        let td = document.createElement('td')
        td.innerText = days[i].getDate();
        tr.appendChild(td);
    }
    table.appendChild(tr);

    //重新赋值
    lastDay = getDays()[6]; //本周的最后一天
    firstDay = getDays()[0]; //本周的第一天
}

//在表格中显示一周的日期
function getDays() {
    let days = new Array();
    for (let i = 1; i <= 7; i++) {
        days[i - 1] = getInWeek(i);
    }
    return days;
}

//取得当前日期一周内的某一天
function getInWeek(i) {
    let now = new Date();
    let n = now.getDay(); //今天星期几
    let start = new Date();
    start.setDate(now.getDate() - n + i); //一周内的第i天
    return start;
}
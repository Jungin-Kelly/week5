const startbtn = document.querySelector('#t_start');
const resetbtn = document.querySelector('#t_reset');
const m_timer = document.getElementById("m_timer");
const s_timer = document.getElementById("s_timer");
const timer_minute = m_timer.Value;
const timer_second = s_timer.Value;

let timer_time= timer_minute*60+timer_second;

let timerFucntion = function(){
    let timer_time = timer_time - 1;
    let minute = Math.floor(timer_time/60);
    let second = timer_time % 60;

    if(minute<10) minute = '0'+minute;
    if(second<10) second = '0'+second;
    let timenow = minute + ':' + second;

    let timeshwon = document.querySelector('#w_timer h1');
    timeshwon.textContent = timenow;
}

let a;
startbtn.onclick = function(){

    let curstate = document.querySelector('#t_start').textContent;
    if(curstate === 'start'){
        document.querySelector('#t_start').textContent = 'stop';
        a = setInterval(timerFucntion,1000);
    } else{
        document.querySelector('#t_start').textContent = 'start';
        clearInterval(a);
    }
}

resetbtn.onclick = function(){
    timer_time =0;
    let timeshwon = document.querySelector('#w_timer h1')
    textshown.textContent = '00:00'
    m_timer.value='';
    s_timer.value='';
    m_timer.focus();
}
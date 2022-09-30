const cityname=document.getElementById('cityname')
const SubmitBtn=document.getElementById('SubmitBtn')
const city_name=document.getElementById('city-name')
const temp=document.getElementById('temp')
const temp_status=document.getElementById('temp-status')
const datahide=document.querySelector('.middle-layer')
const day=document.getElementById('day')
const date=document.getElementById('date')
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityname.value;
    if(cityVal=="")
    {
        city_name.innerText=`Please enter the city`;
        datahide.classList.add('data-hide')
    }
    else
    {
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=99b90a6cc6f70e1011e02c3eb279552e`;
        const response=await fetch(url)
        const data=await response.json();
        const arrData=[data]
        city_name.innerText=`${cityVal},${arrData[0].sys.country}`;
        temp.innerHTML=`${arrData[0].main.temp},<sup>o</sup>F`;
        const tempMood=arrData[0].weather[0].main;
        console.log(tempMood)
        if(tempMood=="Clear")
        {
            temp_status.innerHTML='<i class="fa-solid fa-sun" style="color:#eccc68; font-size:5rem;"></i>';
        }
        else if(tempMood=="Clouds")
        {
            temp_status.innerHTML='<i class="fa-solid fa-cloud" style="color:#03a9f4; font-size:5rem;"></i>';
        }
        else if(tempMood=="Rain")
        {
            temp_status.innerHTML='<i class="fa-solid fa-cloud-rain" style="color:#a4b0be; font-size:5rem;"></i>';
        }
        else{
            temp_status.innerHTML='<i class="fa-solid fa-cloud" style="color:#03a9f4; font-size:5rem;"></i>';
        }
        datahide.classList.remove('data-hide')
        
        }catch{
            city_name.innerText=`Enter Valid City Name`;
            datahide.classList.add('data-hide')
        }
    }
}
const curdate=document.getElementById("date");
        let weekday=new Array(7);
        weekday[0]="Sunday";
        weekday[1]="Monday";
        weekday[2]="Tuesday";
        weekday[3]="Wednesday";
        weekday[4]="Thrusday";
        weekday[5]="Friday";
        weekday[6]="Saturday";
        const Currentday=()=>{
            let currenTime=new Date();
            let Today=weekday[currenTime.getDay()];
            day.innerText=`${Today}`
        };
        let months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
        const getCurrentTime=()=>{
            var now=new Date();
            var month=months[now.getMonth()];
            var curdate=now.getDate();
            let hours=now.getHours();
            let min=now.getMinutes();
            let period="AM"
            if(hours>11)
            {
                period="PM";
                if(hours>12)
                {
                    hours=hours-12;
                }
            }
            if(min<10)
            {
                min="0"+min;
            }
            date.innerText=`${month} ${curdate} | ${hours}:${min} ${period}`
        };
        getCurrentTime();
        setInterval(getCurrentTime,1000);
        Currentday();
SubmitBtn.addEventListener('click',getInfo)

window.onload=function(){
	var seat=document.getElementById("seat");
	var start=document.getElementById("start");
	var reset=document.getElementById("reset");
	var lucky=document.getElementById("lucky");
	var clear=document.getElementById("clear");
	var red=document.getElementById("red");
	var music=document.getElementById("music");
	var isOpera=true;
	var maxquestion=0;
	var timer;
	var a=new Array();//防重复数组
	for(var i=0;i<10;i++)
	{
		a[i]=0;
	}

	//音乐播放
	red.onmouseover=function(){
		music.style.display='block';
	}

	red.onmouseout=function(){
		music.style.display='none';
	}
    
    //开始
    start.onclick=function(){
		if (isOpera) 
		{
			maxquestion+=1;
			if (maxquestion>=4) 
				{
				isOpera=true;
				window.alert("最多能够选择三道题哦！");
				}
			if (maxquestion<=3)
			 {
			clearInterval(timer);
			timer=setInterval(function(){
				show();
			},50);
			start.innerHTML = "&nbsp;停止";
			start.style.backgroundColor = "#BD1B0A";
			start.style.borderColor = "#004490";
			isOpera = false;
			}
		} 
		else {
			start.innerHTML = "&nbsp;开始";
			start.style.backgroundColor = "#004490";
			start.style.borderColor = "#BD1B0A";
			isOpera = true;
			if(a[num-1]==0)
			{
			lucky.style.display = "block";
			clear.style.display = "block";
			var oDivs = document.createElement("div");
				oDivs.innerHTML = "第" + num + "题<span onclick='deleteDivs(this)'>-<span>";
				a[num-1]+=1;		
				lucky.appendChild(oDivs);
				oDivs.appendChild(o1);
				//跳出卡片

				o1.onclick=function cardtoggle()
	            {
		        const card=document.getElementById('card');
		        card.classList.toggle('active')
	            }

			}
			else
			{
				window.alert("该题目已选择过，请再次点击开始");
				maxquestion-=1;
			}
			clearInterval(timer);
		}
	}
	//重置
	reset.onclick =function(){
		clearInterval(timer);
		if (!isOpera) {
			start.innerHTML = "&nbsp;开始";
			start.style.backgroundColor = "#004490";
			start.style.borderColor = "#BD1B0A";
			isOpera = true;

		}
		seat.innerHTML = "00";
	}

	//清空
	clear.onclick = function(){
		clear.style.display = "none";
		lucky.style.display = "none";
		lucky.innerHTML = "";

		seat.innerHTML = "00";
		clearInterval(timer);
		if (!isOpera) {
			start.innerHTML = "&nbsp;开始";
			start.style.backgroundColor = "#004490";
			start.style.borderColor = "#BD1B0A";
			isOpera = true;

			}
				maxquestion=0;
				for(var i=0;i<10;i++)
				a[i]=0;
	}

	//随机数
	function show(){
		var seatNum = random(1,11);
		seatNum = doubleNum(seatNum);

		seat.innerHTML = seatNum;

		num = seatNum;
	}

	function doubleNum(num){
		if(num < 10) {
			num = "0" + num;
		}
		return num;
	}

	function random(lower,upper){
		return Math.floor(Math.random() * (upper - lower)) + lower;
	}

}
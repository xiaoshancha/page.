setInterval("countDown()", 1000);
function countDown()
{
	var item=document.getElementById("time_p");
	const newYear=new Date("2023-01-21 0:0:0");
	var d=new Date();
	var temp=newYear.getTime()-d.getTime();
	var rm_time=new Date(temp);
	item.innerHTML=Math.floor(temp/1000/60/60/24)+"天"+
	Math.floor(temp/1000/60/60%24)+"时"+
	Math.floor(temp/1000/60%60)+"分"+
	Math.floor(temp/1000%60)+"秒";
}
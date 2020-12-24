let from,to;
function countryname(){
    fetch('https://restcountries.eu/rest/v2/all')
        .then((data)=>{ return data.json(); }) 
            .then((actualdata)=>{ storenames(actualdata)}) 
                .catch((error)=>{console.log(error);})
}
function storenames(data){
    for(i in data)
    {
        $("#countries_1").append(new Option(data[i].name+" ("+data[i].currencies[0].code+" )",data[i].currencies[0].code));
        $("#countries_2").append(new Option(data[i].name+" ("+data[i].currencies[0].code+" )",data[i].currencies[0].code));
    }
    
}
function fun1(value){
    from=value;
}
function fun3(value){
    to=value;
}
function fun2(value)
{
    if(from!='none' && to!='none' && typeof(from)!="undefined" && typeof(to)!="undefined" && value.length>0)
    {
        result(from,value,to)
    }
}
function result(from,value,to)
{
    fetch("https://free.currconv.com/api/v7/convert?q="+from+"_"+to+"&compact=ultra&apiKey=d26bc732d1499fcadbc5")
        .then(res=>res.json())
            .then(actualdata=>{
            $("#amt").text(value);
            $("#country1").text(" "+from);
            $("#country2").text(" "+to);
            var a=from+"_"+to;
            var amount=value*actualdata[a];
            $("#converted_amt").text(amount);
            }) .catch((error)=>{console.log(error);})
}





























/*
function countryname(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200)
            {
                var x=xhr.responseText;
                x=JSON.parse(x);
                console.log(x[1]);
            }
    }
    xhr.open("GET","https://restcountries.eu/rest/v2/all",true);
    xhr.send();
}*/
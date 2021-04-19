var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
var data=JSON.parse(this.response);
//console.log(data);
//task 1
var asia = data.filter((li)=> li.region==='Asia');
for(var i in asia){
console.log(asia[i].name);
}
console.log("-------------------------------------------------------------");
//task 2

var pn = data.filter((x)=>x.population<200000);
for(var i in pn){
    console.log(pn[i].name);
}
console.log("-------------------------------------------------------------");
//task 3
data.forEach(lis =>{
    console.log(`${lis.name} -${lis.capital}- ${lis.flag}`)
})
console.log("-------------------------------------------------------------");
//task 4
var tpl = data.reduce((x,y)=>x+y.population,0);
console.log(tpl);
console.log("-------------------------------------------------------------");
//task 5
var cur = data.filter((cu)=> cu.currencies[0].code==='USD');
for(var i in cur){
console.log(cur[i].name);
}
}
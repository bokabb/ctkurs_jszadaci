var stat=[
    {
        url:"js1_9.html",
        visits:0,
        browser:"Firefox"
    }
];

var storage=localStorage.getItem('statistika');
if(storage===null){
    storage="[]";
}
var storageParsed=JSON.parse(storage);
var urlExist=false;
for(var key in storageParsed){
    var statRow=storageParsed[key];
    if(statRow["url"]==location.href && statRow["browser"]==navigator.userAgent){
        statRow["visits"]++;
        urlExist=true;
    }
}
if(!urlExist){
    storageParsed.push({
        url:location.href,
        visits:1,
        browser:navigator.userAgent
    });
}

localStorage.setItem('statistika',JSON.stringify(storageParsed));
//moze se napisati i ovako: window.localStorage





/*
var stat={
    {
        visits:0,
        browser:"Firefox"
    }
};
*/








/*var stat3=[
    ["url","browser",5],
    ["url","browser",5],
    ["url","browser",12],
    ["url2","browser2",3],
    ["url2","browser",44],
    ["url","browser",24],
    ["url","browser",33],
];
var brojPoseta={};
for(var i=0;i<stat3.length;i++){
    var trenutniRed=stat3[i];
    var url=trenutniRed[0];
   if(typeof brojPoseta[url]=='undefined'){
    brojPoseta[url]=0;
   }
   brojPoseta[url]++;
}
console.log(brojPoseta);



var stat2={
    url1:brojPoseta,
    url2:brojPoseta2
};
*/





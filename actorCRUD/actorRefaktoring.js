const actors ={};  //objekat sa svim glumcima po Id-u

function createActor(actorId,name,lastName,bio,birthDate,movieId) 
{
   
    if(!actors[actorId])
    { 
        actors[actorId]=
        {
        name,
        lastName,
        bio,
        birthDate,
        movies:movieId
        }
        return actors;
        
    }
    else
    {
        return document.getElementById("prompt").style.display="block";
    }
    
}
// dodavanje glumca iz forme u localStorage
document.getElementById("create").addEventListener("submit",e => {
    e.preventDefault();
    const actorId=document.getElementById("idCreate").value;
    const name=document.getElementById("firstname").value;
    const lastName=document.getElementById("lastname").value;
    const bio=document.getElementById("bio").value;
    const birthDate=document.getElementById("birthDate").value;
    console.log(birthDate.value);
    createActor(actorId, name, lastName, bio, birthDate);    
    saveToDatabase('actor',actors);
    document.contact-form.reset();  //resetovanje forme
    
});

// ovo su 4 nova glumca
//createActor("abc123","Pera","Peric","Ziveo i radio u nekom gradu bla bla",1988, [1,2,3,4]);
//createActor("abc111","ana","alic","Ziveo i radio u nekom gradu bla bla",1990, [17,25,37,47]);
//createActor("abc222","sara","saric","Ziveo i radio u nekom gradu bla bla",1889, [1,26,8,0]);
//createActor("aaa111","Marko","Markovic","",1999,[12,34,]);           

//ovaj glumac ima isti Id kao pera i zato ne moze da se kreira
//createActor("abc123","aaa","cccc","Ziveo i radio u nekom gradu bla bla",1988, [1,2,3,4]);

function updateActor(actorId,key,text)
{
    actors[actorId][key]=text;

}
//  ovo ispod ubacuje biografiju gde je nije bilo
//updateActor("aaa111","bio","ko je on sta je radio");

function deleteActor(actorId) 
{
    delete actors[actorId];
}

// ovo ispod brise saru iz actors
//deleteActor("abc222");

//ovo ispod menja peru u petra po Id-u
//updateActor("abc123","name","Petar"); 

//Storing data:
function saveToDatabase(key,object)
{
    const myJSON = JSON.stringify(object);
    localStorage.setItem(key, myJSON);   
}
//saveToDatabase("actorsJSON",actors);

//Retrieving data:
function loadFromDatabase(key) {
    const text = localStorage.getItem(key); 
    const obj=JSON.parse(text);
    return obj;
}
//var myJSON = JSON.stringify(actors);
//localStorage.setItem("actorsJSON", myJSON);


//var text = localStorage.getItem("actorsJSON");
//obj = JSON.parse(text);
//document.getElementById("demo").innerHTML = obj.name;


const deleteGenre = function (){
    
}

const deleteProfile = function (){
    
}

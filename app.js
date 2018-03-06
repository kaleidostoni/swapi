function loadPage(){
apiRequest();
};




function apiRequest(){
    $.ajax({
        url: `https://swapi.co/api/films/`
    }).done(getData)
    .fail(failedRequest)
};

function getData (json){
    // console.log(json);
    let results = json.results;
    // console.log(results);
    paintData(results);
};

  

function paintData (result){
    template = ' ';
    let charactersTemplate = ' ';   
    result.forEach(movie =>{
        let name = movie.title;
        // console.log(name);
        let episodeID = movie.episode_id;
        // console.log(episodeID);
        let characters = movie.characters;
        //console.log(characters);
    
        template += `<div><h1>Name: ${name}</h1>
        <h3>Episode: ${episodeID}</h3>
        <h3>Characters: </h3>
        <section id="characters"></section>
        </div>` 
      
        // $.ajax({
        //     url: characters
        // }).done(gettingCharacters)
      
        function addingCharacters (characters,template){
            console.log(characters);
              let charactersTemplate = ' ';   
              characters.forEach(character => {
                  let characterURL = character; 
              //console.log(characterURL);
                  charactersTemplate += `<p>${characterURL}</p>`  
                  }); $('template').append(charactersTemplate);
          }
    });$('#container').html(template);
   };


   function gettingCharacters(json){
    console.log(json);
   };







function failedRequest(error){
    console.log('Ha habido un error');
}

$(document).ready(loadPage);
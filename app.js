
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
        let characterTemplate = ' ';
      characters.forEach(character=>{
          characterTemplate += `<p>
          <a class="modal-trigger" href="#modal1">${character}</a>
          </p>`
      })
    
        template += `<div><h1>Name: ${name}</h1>
        <h3>Episode: ${episodeID}</h3>
        <h3>Characters: </h3>
        <section id="characters">
        <div>${characterTemplate}</div>
        </section>` 
      
        $.ajax({
            url: characters
        }).done(gettingCharacters)
      
    })
    $('#container').html(template);
   };

   function gettingCharacters(json){
    console.log(json);
    let name = $('#name');
    let height = $('#height');
    let mass = $('#mass');
    let hairColor = $('#hair-color');
    let skinColor = $('#skin-color');
    name.text(json.name);
    height.text(json.height);
    mass.text(json.mass);
    hairColor.text(json.hair_color);
    skinColor.text(json.skin_color);
   };


function failedRequest(error){
    console.log('Ha habido un error');
}

$(document).ready(function(){
    $('#modal1').modal();
    apiRequest();
  });
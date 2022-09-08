

function empty (example){
    if(example == undefined){
        example = "";
    }else {
        example = "Example:" + example
    }
    return example;
}



let display = document.getElementById("display")


let form1 = document.forms['form1'];
form1.addEventListener('submit',(e) =>{
    e.preventDefault();

    var details = "";
        fetch ('https://api.dictionaryapi.dev/api/v2/entries/en/ '+ searchBox.value)
        .then (res => res.json())
        .then (data => {
            if (data[0] == undefined){
                details = `
                <h5>${searchBox.value}  </h5>
                <p class="err">"pls input a valid word"</p>
                `
            }else{
                details = `
                <h5>Search Word: ${searchBox.value} </h5>
                `
                let j=0   
        for(let i=0; i < data[0].meanings.length; i++){
            for(let j=0; j < data[0].meanings[i].definitions.length; j++){
                
            
        
            details += `
            <div class="inner-display">
                <p> Phonetics: ${data[0].phonetics[0].text} </p>
                <p>Definition: ${data[0].meanings[i].definitions[j].definition} </p>
                <p> ${empty (data[0].meanings[i].definitions[0].example)} </p>
            </div>
            `
            j++
        }}
    }
        display.innerHTML = details;
        })
    

    
}) 
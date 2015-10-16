(function(){
    'use strict';

    var body;

    

    var InputBox = function(options){
        var button = $("<button id='start-search-btn'>Start Search</button>"),
            recognizer = new webkitSpeechRecognition();
        
        var recognizer_result = function(event) {
            if (event.results.length > 0) {
                var result = event.results[event.results.length-1];
                if(result.isFinal) {
                    console.log(result[0].transcript);
                }
            }  
        };

        recognizer.lang = options.language || "en";
        recognizer.onresult = recognizer_result;
        
        var start_voice_search = function(){
            recognizer.start();
        }
        $(button).bind('click',start_voice_search);
        $(options.append_to).append(button);
    }
    


    function cache_nodes(){
        body = $('body');
    }


    var initialize = function(){
        cache_nodes();

        var input_button = new InputBox({append_to:"#main-content"});
        console.log('load app');
    }


    $(document).ready(initialize());

})();
(function(){
    'use strict';

    var body;
    var extra_elements_apartments = ['apartment', 'flat', 'home', 'house'];
    var apartment_type_id = [
        ['1 RK', '1 Room Kitchen', '1 Room'],
        ['1 BHK', '1 Bedroom Hall Kitchen', '1 Bedroom Kitchen Hall', '1 Kitchen Bedroom Hall', '2 Rooms', '1 Bedroom'],
        ['1.5 BHK', '2 BHK', '2 RK', '2 BH','3 R', '3 RK', '2 Bedroom', '2 Rooms', '2 Room'],
        ['2.5 BHK', '2.5 BH', '3 BHK', '3 RK', '3 Room Kitchen', '3 Bedroom', '2.5 Bedroom', '3 Room', '3 R'],
        ['4 BHK', '5 BHK', '6 BHK', '4 Bedroom', '5 Bedroom', '6 Bedroom', '7 Bedroom', '4 BH', '5 BH', '6 BH'
        , '4 Bedroom Hall Kitchen', '5 Bedroom Hall Kitchen', '6 Bedroom Hall Kitchen', '7 Bedroom Hall Kitchen']
    ];
    function get_locality_filter(text){
        extra_elements_apartments.forEach(function(val){
            text = text.replace(val, '')
        })
        text = text.replace(' s ', '');
        var exp_text = text;
        var apt_type
        exp_text = exp_text.toLowerCase()
        var i = 0;
        while(i < apartment_type_id.length){
            var j = 0;
            while(j < apartment_type_id[i].length){
                apt_type = apartment_type_id[i][j].toLowerCase()
                if (exp_text.indexOf(apt_type) > -1){
                    text = text.replace(apartment_type_id[i][j].toLowerCase() , '');
                    return {id: i, updated_text: text};
                }
                j++;
            }
            i++;
        }
        return{}
    }

    function analyse_elements(text){
        var element
        // Convert tokens to lowercase
        var lowerText = text.toLowerCase()
        // Remove All is am are
        // Analyse BHK
        element = get_locality_filter(lowerText)
        console.log(element)
        return element
        // Analyse Locality
        // Analyse Budget
    }
    
    var InputBox = function(options){
        var button = $("<button id='start-search-btn'>Start Search</button>"),
            recognizer = new webkitSpeechRecognition();
        
        var recognizer_result = function(event) {
            if (event.results.length > 0) {
                var result = event.results[event.results.length-1];
                if(result.isFinal) {
                    console.log(result[0].transcript);
                    analyse_elements(result[0].transcript) 
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
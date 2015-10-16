(function(){
    'use strict';

    //DOM Node Caching
    var body,results_list;

    var extra_elements_apartments = ["apartment", "flat", "home", "house"];
    var filter_tokens = ["Apartment","of","type","kind","size","specifications","area","rooms","home","house","for","a","an","apartment","flight","flat","property","duplex","search","find","me","get","query","Google","give","need","want","look","up","requirement","provide","result","the","bring","in","Indore","location","near","around","nearby","15","Powai","should","be","locationshould","I","am","looking","searching","locate","locality","city","within","star","villas","situated","located","locations","you","to","Kishan","built","created","made","put","lookup","constructed","construction","aided","situation","locationin","price","range","budget","cost","MRP","money","specification","value","selling","costing","upto","expensive","cheap","and","silsele","caused","by","face","middle", "within", "between", "mid"];
    var apartment_type_id = [
        ['1 RK', '1 Room Kitchen', '1 Room'],
        ['1 BHK', '1 Bedroom Hall Kitchen', '1 Bedroom Kitchen Hall', '1 Kitchen Bedroom Hall', '2 Rooms', '1 Bedroom'],
        ['1.5 BHK', '2 BHK', '2 RK', '2 BH','3 R', '3 RK', '2 Bedroom', '2 Rooms', '2 Room'],
        ['2.5 BHK', '2.5 BH', '3 BHK', '3 RK', '3 Room Kitchen', '3 Bedroom', '2.5 Bedroom', '3 Room', '3 R'],
        ['4 BHK', '5 BHK', '6 BHK', '4 Bedroom', '5 Bedroom', '6 Bedroom', '7 Bedroom', '4 BH', '5 BH', '6 BH'
        , '4 Bedroom Hall Kitchen', '5 Bedroom Hall Kitchen', '6 Bedroom Hall Kitchen', '7 Bedroom Hall Kitchen']
    ];
    function get_apartment_type(text){
        
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

    function get_budget_range(text){
        return true
    }

    function analyse_elements(text){
        var apartment_element, budget_element;
        // Convert tokens to lowercase
        var lowerText = text.toLowerCase();
        // Remove All is am are
        // Analyse BHK
        apartment_element = get_apartment_type(lowerText);
        budget_element = get_budget_range(apartment_element.updated_text);
        return apartment_element;
        // Analyse Locality
        // Analyse Budget
        
    }
    
    
    //INPUT BOX Component
    var InputBox = function(options){
        var element = $(options.append_to),
            button = $("<button id='start-search-btn' class='app-btn'>Start Search</button>"),
            recognizer = new webkitSpeechRecognition(),
            cb = options.done_callback,
            self = this;
        
        var start_recording = function(){
            if(self.listening)
                return;
            self.listening = true;
            element.addClass("loading");
            recognizer.start();
        }

        var recognizer_result = function(event) {
            var cb = options.done_callback
            if (event.results.length > 0) {
                var result = event.results[event.results.length-1];
                if(result.isFinal) {
                    if(typeof cb === "function"){
                        cb.call(this,result[0].transcript);
                    }
                    element.removeClass('loading');
                    self.listening = false;
                }
            }  
        };

        recognizer.lang = options.language || "en";
        recognizer.onresult = recognizer_result;
        button.bind('click',start_recording);
        element.append(button);
    }

    


    function cache_nodes(){
        body = $('body');
        results_list = $("#results-list");
    }

    var initialize = function(){
        cache_nodes();
        var input_button = new InputBox({
            append_to     : "#search-box",
            done_callback : analyse_elements
        });
    }

    $(document).ready(initialize());
})();
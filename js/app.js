(function(){
    'use strict';

    var body, results_list;
    var filter_tokens = ["type","kind","size","specifications","for","Google","requirement","in","location","near","around","nearby","should","be","locationshould",,"am","looking","searching","locate","locality","city","within","star","villas","situated","located","locations","you","to","Kishan","built","created","made","put","lookup","constructed","construction","aided","situation","locationin","price","range","budget","cost","MRP","money","specification","value","selling","costing","upto","expensive","cheap","and","silsele","caused","by","middle", "within", "between", "mid"];
    // var filter_tokens = ["Apartment","of","type","kind","size","specifications","area","rooms","home","house","for","a","an","apartment","flight","flat","property","duplex","search","find","me","get","query","Google","give","need","want","look","up","requirement","provide","result","the","bring","in","Indore","location","near","around","nearby","15","Powai","should","be","locationshould","I","am","looking","searching","locate","locality","city","within","star","villas","situated","located","locations","you","to","Kishan","built","created","made","put","lookup","constructed","construction","aided","situation","locationin","price","range","budget","cost","MRP","money","specification","value","selling","costing","upto","expensive","cheap","and","silsele","caused","by","face","middle", "within", "between", "mid"];
    

    function get_apartment_type_mapping(){
        return [
            ['1 RK', '1 Room', '1 Room'],
            ['1 BHK', '1 Bedroom', '1 Bedroom', '1 Bedroom', '2 Rooms', '1 Bedroom'],
            ['1.5 BHK', '2 BHK', '2 RK', '2 BH','3 R', '3 RK', '2 Bedroom', '2 Bedrooms', '2 Rooms', '2 Room'],
            ['2.5 BHK', '2.5 BH', '3 BHK', '3 RK', '3 Room', '3 Bedroom', '2.5 Bedroom', '3 Room','3 Rooms', '3 R'],
            ['4 BHK', '5 BHK', '6 BHK', '4 Bedroom', '5 Bedroom', '6 Bedroom', '7 Bedroom', '4 BH', '5 BH', '6 BH'
            , '4 Bedroom', '5 Bedroom', '6 Bedroom', '7 Bedroom']
        ];
    }
    
    function get_filter_keywords(){
        var arr = []
        var extra_apartment_types = ["apartment", "flat", "home", "house", 'kitchen', 'halls', 'hall', 'halls', 'bath', 'bathroom','bathroom', 'area', "property","duplex", "triplex"];
        var artilces = ["of","a","an","the","I"]
        var random_words = ["search", "find", "give", "need","want","look","up","provide","result","bring","face"]
        return arr.concat(extra_apartment_types, artilces, random_words);
    }

    function get_post_filter_keywords(){
         var post_elements = ['Bedroom', 'Room']
         return post_elements;
    }

    function get_apartment_type(text){
        var extra_elements_apartments = get_filter_keywords();
        var apartment_type_id = get_apartment_type_mapping();
        extra_elements_apartments.forEach(function(val){
            text = text.replace(val, '')
        })
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
                    text = text.replace(' s ', '');
                    return {id: i+1, updated_text: text};
                }
                j++;
            }
            i++;
        }

        return{id: null, updated_text: text}
    }

    function get_budget_range(text){
        var budget_range_arr = text.split(' ').filter(function(elem){ if (parseInt(elem)) { return parseInt(elem);}});
        var return_obj = {};
        if (budget_range_arr.length){
            var final_budget_arr = [];
            final_budget_arr = budget_range_arr.filter(function(elem){if (elem > 3500){ return elem; }});
            if (final_budget_arr.length){
                final_budget_arr = final_budget_arr.sort()
                return_obj.max_budget = null;
                return_obj.min_budget = null;
                if (final_budget_arr.length == 1){
                    return_obj.max_budget = final_budget_arr[0];
                }
                else if (final_budget_arr.length == 2){
                    return_obj.min_budget = final_budget_arr[0];
                    return_obj.max_budget = final_budget_arr[1];
                }
                else{
                    return_obj.min_budget = final_budget_arr[0];
                    return_obj.max_budget = final_budget_arr[final_budget_arr.length-1];
                }
                return return_obj
            }
            return null;
        }
        return null;
    }

    function analyse_elements(text){
        var apartment_element, budget_element;
        // Convert tokens to lowercase
        var lowerText = text.toLowerCase();
        // Analyse service
        // Remove All is am are
        // Analyse BHK
        // Analyse Budget
        apartment_element = get_apartment_type(lowerText);
        budget_element = get_budget_range(apartment_element.updated_text);
        if(apartment_element.updated_text){
            search_locality(apartment_element.updated_text, getLocalityResults);
        }
        return apartment_element;
        // Analyse Locality
    }

    function getLocalityResults(localityId){
        console.log("Location id is "+localityId);
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

    


    



    var ResultsList = function(options){

        var s_map = {
            'rent' : {
                url : "https://rails.housing.com//api/v3/rent/filter?",
                transform_results : function(search_result){
                    return search_result.hits.hits.map(function(hit){
                        return hit._source;
                    });
                },
                base_filters : { details : true },
                get_rendered_item : function(result){
                    var temp_str = "<div class='result' service='rent' data-id="+result.id+">"+result.apartment_type
                                    +" "+result.furnish_type+"</div>";
                    return $(temp_str);
                }
            },
            'buy' : {
                url : "https://buy.housing.com/api/v1/buy/index/filter?",
                transform_results : function(search_result){
                    return search_result.hits;
                },
                get_rendered_item : function(result){
                    var temp_str = "<div class='result' service='buy' data-id="+result.id+">"+result.title
                                    +" "+result.street_info+"</div>";
                    return $(temp_str);
                }
            }
        }


        //Default Options
        var defaults = {
            services : ['buy','rent']
        };
        var base_filters = {
            sort_key         : "relevance",
            results_per_page : 30
        };
        
        
        var options = $.extend(defaults,options),
            $element = $(options.append_to);
        
        options.filter = $.extend(options.filters,base_filters);

     
        //build filter url
        var build_url = function(filter_object,service){
            var service_obj = s_map[service],
                url = service_obj && service_obj.url,
                filters = $.extend(filter_object,service_obj.base_filters);
            
            if(!url){
                console.error('did not find url for service');
                return;
            }
            
            for(var key in filters){
                switch(key){
                    case 'apartment_type_id' :
                        url = url+"apartment_type_id="+filter_object[key].join(",");
                        break;
                    case 'sort_key':
                    case 'results_per_page' :
                    case 'details':
                        url = url+"&"+key+"="+filter_object[key].toString();
                        break;
                    default :
                        url = url;
                }
            }
            return url;            
        }


        //filter call wrapper
        var filter_call = function(url,service){
            var service_obj = s_map[service];
            return new RSVP.Promise(function(resolve,reject){
                $.getJSON(url).then(function(data){
                    resolve(service_obj.transform_results(data));
                },function(err){
                    reject(err);
                });
            });
        }



        RSVP.Promise.all(options.services.map(function(service){
            var url = build_url(options.filters,service);
            return RSVP.hash({ 
                results : filter_call(url,service),
                service : service
            });
        })).then(function(service_results){
            
            var rendered = service_results.map(function(s_result){
                var results = s_result.results,
                    service_obj = s_map[s_result.service];

                return results.reduce(function(list,result){
                    return list.append(service_obj.get_rendered_item(result));
                },$("<div class='result-list'></div>"));
            });
            
            $element.append(rendered);
        });
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

        var results_list = new ResultsList({
            services : ['buy','rent'],
            filters : {
                apartment_type_id : [1,2]
            },
            append_to : "#results-list"
        });
    }

    $(document).ready(initialize());
})();
(function(city_location,location_cities, cities){
    'use strict';

    var body, results_list;



    var TextAnalyser = function(query,done_callback){
        
        var filter_object = {
                                services : [],
                                filters : {}
                            },
            supported_services = ['rent','buy','pg'],
            filter_tokens = ["type","kind","size","specifications","for","Google","requirement","in","location","near","around","nearby","should","be","locationshould",,"am","looking","searching","locate","locality","city","within","star","villas","situated","located","locations","you","to","Kishan","built","created","made","put","lookup","constructed","construction","aided","situation","locationin","price","range","budget","cost","MRP","money","specification","value","selling","costing","upto","expensive","cheap","and","silsele","caused","by","middle", "within", "between", "mid"],
            price_keywords = ['lakhs', 'lakh', 'million', 'millions', 'crore', 'crores', 'thousand', 'thousands'],
            price_value = ['100000','100000', '1000000','1000000','10000000','10000000', '10000', '10000'],
            query = query.toLowerCase();

        
        console.log('initial query ', query);
        //Service Analyser
        function analyse_service(){
            var i = 0
            while(i < supported_services.length){
                var service = supported_services[i++];
                if(query.indexOf(service) > -1){
                    query = query.replace(service, '');
                    filter_object.services.push(service);
                }
            }
        }


       
        //Apartment Type Analyser Methods
        function analyse_apartment_type(text){
            var post_elements;
            var extra_elements_apartments = get_filter_keywords();
            var apartment_type_id = get_apartment_type_mapping();
            extra_elements_apartments.forEach(function(val){
                text = text.replace(val, '')
            })

            var artilces = get_articles()
            artilces.forEach(function(val){
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
                        return {id: [i+1], updated_text: text};
                    }
                    j++;
                }
                i++;
            }

            exp_text = exp_text.toLowerCase().replace(/ /, '')
            i = 0;
            while(i < apartment_type_id.length){
                j = 0;
                while(j < apartment_type_id[i].length){
                    apt_type = apartment_type_id[i][j].toLowerCase().replace(/ /, '');
                    if (exp_text.indexOf(apt_type) > -1){
                        text = text.replace(apartment_type_id[i][j].toLowerCase() , '');
                        text = text.replace(' s ', '');
                        return {id: [i+1], updated_text: text};
                    }
                    j++;
                }
                i++;
            }
            post_elements = get_post_filter_keywords()
            return{id: [], updated_text: text}
        }

        function get_filter_keywords(){
            var arr = []
            var extra_apartment_types = ["apartment", "flat", "home", "house", 'kitchen', 'halls', 'hall', 'halls', 'bath', 'bathroom','bathroom', 'area', "property","duplex", "triplex"];
            var random_words = ["search", "find", "give", "need","want","look","up","provide","result","bring","face"]
            return arr.concat(extra_apartment_types, random_words);
        }
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
        function get_post_filter_keywords(){
             return ['Bedroom', 'Room']
        }




        //Budget Analyser Methods
        function analyse_budget(){
            query = purify_budget(query.replace('-', ' '));
            var budget_element = get_budget_range(query);
            filter_object.filters.min_price = budget_element.min_budget;
            filter_object.filters.max_price = budget_element.max_budget;
        }
        function purify_budget(text){
            var purified_text = [],
                text = text.split(' '),
                new_text = [];
            text.forEach(function(elem, index){
                var price_index = price_keywords.indexOf(elem);
                var usable_index = text.indexOf(elem);
                var converted_value = 0;
                var converted_value_key = 0;
                if ((price_index != -1) && (usable_index > 0)){
                    converted_value_key = text[usable_index-1];
                    if (parseInt(converted_value_key)){
                        converted_value = converted_value_key*price_value[price_index];
                        text[index] += 'x'
                        new_text.push(converted_value);
                    }
                    else
                    {
                        new_text.push(elem);
                    }
                }
                else {
                    new_text.push(elem);
                }
            })
            return new_text.join(' ');
        }
        function get_budget_range(text){
            var budget_range_arr = text.split(' ').filter(function(elem){ if (parseInt(elem)) { return parseInt(elem);}});
            var return_obj = {};
            if (budget_range_arr.length){
                var final_budget_arr = [];
                final_budget_arr = budget_range_arr.filter(function(elem){
                    if (elem > 3500){ return elem; }
                });
                
                if (final_budget_arr.length){
                    final_budget_arr = final_budget_arr.map(function(elem){return parseInt(elem);});
                    final_budget_arr = final_budget_arr.sort(sortNumber);
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
                    return return_obj;
                }
                return {};
            }
        }
        function sortNumber(a,b) {
            return a - b;
        }


        //Locality Analyser
        function analyse_locality(){
            if(query){
                search_locality(query, getLocalityResults.bind(this, filter_object.filters));
            }
            else{
                done_callback.call(null,filter_object);
            }
        }
        function search_locality(str,callback){
             var matched_str, 
                 match_city;
             
             location_cities.forEach(function(state){
                 if(!match_city){
                     var cities = city_location[state];
                     match_city = cities.filter(function(city){
                         var reg = new RegExp(city, "i");
                         return str.match(reg);
                     });
                     if(match_city && !match_city.length > 0){
                         match_city = undefined;
                     }
                 }
             });
             if(!match_city || !match_city[0]){
                 match_city = cities.filter(function(city){
                     var reg = new RegExp(city, "i");
                     return str.match(reg);
                 })
             }

             if(match_city && match_city[0]){
                 $.ajax({
                     url: 'https://buy.housing.com/api/v0/search/suggest/?&string=' + match_city[0],
                     success: function(data){
                         console.log("housing api result is ");
                         console.log(data);
                         callback(data[0].uuid);
                     }
                 })
             }
             else{
                 done_callback.call(null,filter_object);
             }
        }
        function getLocalityResults(filters, localityId){
            console.log("Location id is "+localityId);
            filters.poly = localityId;
            done_callback.call(null,filter_object);
        }


        function get_articles(){
            return [" of "," a "," an "," the "," I ", ' in ', ' near '];
        }


        analyse_service();
        var apt_result = analyse_apartment_type(query);
        query = apt_result.updated_text;
        filter_object.filters.apartment_type_id = apt_result.id;
        
        analyse_budget();
        analyse_locality();

        return this;
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
                        console.log(result[0].transcript);
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

    //RESULTS LIST 
    var ResultsList = function(options){
        debugger
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
        
        
        var options = $.extend(options,defaults),
            $element = $(options.append_to);
        
        options.filter = $.extend(options.filters,base_filters);

        if(options.services.length === 0)
            options.services = defaults.services;

     
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
                    case 'max_price':
                    case 'min_price':
                        if(filter_object[key])
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



    
    function analysis_done(filter_object){
        var results_list = new ResultsList($.extend(filter_object,{append_to:"#results-list"}));
    }

    function analyse_elements(text){
        var analyzer = new TextAnalyser(text,analysis_done);
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

    $(document).ready(initialize);
})(city_location,location_cities, cities);






// window.search_locality = function(str, callback){

    
// }

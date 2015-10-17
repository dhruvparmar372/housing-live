(function(city_location,location_cities, cities, states){
    'use strict';

    var body, results_list, tags_list,currentSearchBar = 'center';
    var wave_form,wave_container;



    var TextAnalyser = function(query,done_callback){
        
       
        var filter_object = {
                                services : [],
                                filters : {}
                            },
            supported_services = ['rent','buy','pg','paying guest'],
            filter_tokens = ["type","kind","size","specifications","for","Google","requirement","in","location","near","around","nearby","should","be","locationshould",,"am","looking","searching","locate","locality","city","within","star","villas","situated","located","locations","you","to","Kishan","built","created","made","put","lookup","constructed","construction","aided","situation","locationin","price","range","budget","cost","MRP","money","specification","value","selling","costing","upto","expensive","cheap","and","silsele","caused","by","middle", "within", "between", "mid", "ready", "to","move"],
            price_keywords = ['lakhs', 'lakh', 'million', 'millions', 'crore', 'crores', 'thousand', 'thousands'],
            price_value = ['100000','100000', '1000000','1000000','10000000','10000000', '10000', '10000'],
            query = query && query.toLowerCase();
        
        query = " " + query + " "
        query = replaceAll(' to ', ' 2 ', query);
        query = replaceAll(' by ', ' buy ', query);
        query = replaceAll(' bye ', ' buy ', query);

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
            i = 0;
            while(i < filter_object.services.length){
                if(filter_object.services[i] === 'paying guest') {
                    filter_object.services.splice(i,1);
                    filter_object.services.push('pg');
                }
                i++;
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
                        return {id: [i+1], updated_text: text, apartment_type_tag : apartment_type_id[i][j]};
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
                        return {id: [i+1], updated_text: text, apartment_type_tag : apartment_type_id[i][j]};
                    }
                    j++;
                }
                i++;
            }
            post_elements = get_post_filter_keywords()
            return{id: [], updated_text: text, apartment_type_tag: []}
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
            query = purify_budget(replaceAll('-', ' ',query));
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
            else
                return {};
        }
        function sortNumber(a,b) {
            return a - b;
        }
        function replaceAll(find, replace, str) {
            return str.replace(new RegExp(find, 'g'), replace);
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
                 match_city,
                 state_match;
             
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

             state_match = states.filter(function(state){
                var reg = new RegExp(state, "i");
                return str.match(reg);
             });

             if(state_match && state_match[0]){
                state_match = state_match[0]
             }
             else{
                state_match = ""
             }

             if(match_city && match_city[0]){
                match_city = match_city[0]
             }
             else{
                match_city = ""
             }

             if(match_city || state_match){
                if(match_city && state_match){
                    state_match = ", " + state_match
                }
                var query_string = encodeURIComponent(match_city + state_match);
                 $.ajax({
                     url: 'https://buy.housing.com/api/v0/search/suggest/?&string=' + query_string,
                     success: function(data){
                         console.log("housing api result is ");
                         console.log(data);
                         callback({
                            id   : data[0].uuid,
                            name : data[0].name
                         });
                     }
                 })
             }
             else{
                 done_callback.call(null,filter_object);
             }
        }
        function getLocalityResults(filters, locality_details){
            console.log("Location is "+locality_details);
            filters.poly = locality_details.id;
            filters.poly_tag = locality_details.name;
            done_callback.call(null,filter_object);
        }


        function get_articles(){
            return [" of "," a "," an "," the "," I ", ' in ', ' near '];
        }


        analyse_service();
        var apt_result = analyse_apartment_type(query);
        query = apt_result.updated_text;
        filter_object.filters.apartment_type_id = apt_result.id;
        filter_object.apartment_type_tag = apt_result.apartment_type_tag;
        analyse_budget();
        analyse_locality();

        return this;
    }


    
    

    
    
    //INPUT BOX Component
    var InputBox = function(options){
        var element = $(options.append_to),
            button = $("<button id='start-search-btn' class='app-btn'>Start Search</button>"),
            close_button = $("<button id='close-search-btn' class='app-btn'>Stop</button>"),
            recognizer = new webkitSpeechRecognition(),
            cb = options.done_callback,
            self = this;
        var start_recording = function(){
            if(self.listening)
                return;
            self.listening = true;
            button = $("#start-search-btn");
            element.addClass("loading");
            button.addClass('pulse')
            setTimeout(function(){
                $("#start-search-btn").removeClass('pulse')
            },400)
            wave_container.removeClass('inactive');
            $('#guide-text').text('I am listening now ... ')
            recognizer.start();
        }
        var start_recording_and_scroll = function(){
            $("html, body").animate({ scrollTop: 0 }, 500)
            start_recording()
        }
        var stop_recording = function(){
            if(self.listening){
                self.listening = false;
            }
            element.removeClass("loading");
            wave_container.addClass('inactive');
            $('#guide-text').text('Say 1 BHK in Powai between 10000 to 20000...');
            recognizer.stop();
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
        close_button.bind('click',stop_recording);
        $('.search-float').bind('click',start_recording_and_scroll);
        element.append(button);
        element.append(close_button);
    }

    //RESULTS LIST 
    var ResultsList = function(options){
        if(options.filters && options.filters.min_price > 100000){
            if(options.services.length == 0){
                options.services[0] = 'buy'
            }
        }
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
                    var image = result.thumb_url_new ? result.thumb_url_new.replace('version', 'medium') : ''
                    var bg_url = "background-image: url("+image+");";
                    var h_url = result.canonical_url;
                    var temp_str = "<a class='result pull-left' target='_blank' service='rent' data-id="+ result.id +" href="+h_url+">" +
                                        "<div class='image-wrapper'><div class='image-container' style='"+bg_url+"'>" +
                                        "</div></div>" +
                                        "<div class='details-container'>" +
                                            "<div class='apartment-type ellipsis'>" + result.seo_title +"</div>" +
                                            "<div class='locality'>" + result.street_info +"</div>" +
                                            "<div class='price'> &#8377; " + result.formatted_rent + "</div>" +
                                        "</div>" +
                                    "</a>";
                    return $(temp_str);
                }
            },
            'buy' : {
                url : "https://buy.housing.com/api/v1/buy/index/filter?",
                transform_results : function(search_result){
                    return search_result.hits;
                },
                get_rendered_item : function(result){
                    var tag = result.type == 'project' ? '_m' : 'medium';
                    var h_url = "https://housing.com"+result.inventory_canonical_url;
                    var image = result.thumb_image_url ? result.thumb_image_url.replace('version', tag) : '';
                    var bg_url = "background-image: url("+image+");"
                    var temp_str = "<a class='result pull-left' target='_blank' service='buy' data-id="+ result.id+" href="+h_url +">" +
                                        "<div class='image-wrapper'><div class='image-container' style='"+bg_url+"'>" +
                                        "</div></div>" +
                                        "<div class='details-container'>" +
                                            "<div class='apartment-type ellipsis'>" + result.title +"</div>" +
                                            "<div class='locality'>" + result.street_info +"</div>" +
                                            "<div class='price'> &#8377; " + result.formatted_price + "</div>" +
                                        "</div>" +
                                    "</a>";
                    return $(temp_str);
                }
            },
            'pg' : {
                url : "https://pg.housing.com/api/v3/pg//filter?",
                base_filters : { details : true },
                transform_results : function(search_result){
                    return search_result.hits.hits.map(function(hit){
                        return hit._source;
                    });
                },
                get_rendered_item : function(result){
                    var image = result.thumb_url ? result.thumb_url.replace('thumb', 'medium').replace('version', 'medium') : '';
                    var bg_url = "background-image: url("+image+");"
                    var h_url = result.canonical_url;
                    var temp_str = "<a class='result pull-left' target='_blank' service='pg' data-id="+ result.id+" href='"+h_url +"'>" +
                                        "<div class='image-wrapper'><div class='image-container' style='"+bg_url+"'>" +
                                        "</div></div>" +
                                        "<div class='details-container'>" +
                                            "<div class='apartment-type ellipsis'>" + result.apartment_type +"</div>" +
                                            "<div class='locality'>" + result.street_info +"</div>" +
                                            "<div class='price'> &#8377; " + result.formatted_min_rent + "</div>" +
                                        "</div>" +
                                    "</a>";
                    return $(temp_str);
                }
            }
        }

        //Default Options
        var default_services = ['buy','rent'];
        var base_filters = {
            sort_key         : "relevance",
            results_per_page : 30
        };

        var tags = [];
        if(options.apartment_type_tag)
            tags.push(options.apartment_type_tag);
        
        
        var filter_tags = [],
            $element    = $(options.append_to);
        
        options.filter = $.extend(options.filters,base_filters);

        if(options.services.length === 0)
            options.services = default_services;

        if(options.filter && options.filter.poly_tag)
            tags.push(options.filter.poly_tag);

        var price_tag = "";
        if(options.filters && options.filters['min_price']){
            price_tag = get_formatted_price(options.filters['min_price']);
        }
        if(options.filters && options.filters['max_price']){
            if(price_tag)
                price_tag += " - " + get_formatted_price(options.filters['max_price']);
            else
                price_tag = get_formatted_price(options.filters['max_price']);
        }
        if(price_tag)
            tags.push(price_tag);

        if(options.services){
            tags = tags.concat(options.services);
        }
     
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
                        if(filter_object[key] && filter_object[key].length){
                            url = url+"apartment_type_id="+filter_object[key].join(",");
                        }
                        break;
                    case 'sort_key':
                    case 'poly':
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


        function get_formatted_price(price){
            return "Rs. "+price;
        }


        RSVP.Promise.all(options.services.map(function(service){
            var url = build_url(options.filters,service);
            return RSVP.hash({ 
                results : filter_call(url,service),
                service : service
            });
        })).then(function(service_results){
            var is_empty = true;
            service_results.forEach(function(val){
                if(val.results && val.results.length){
                    is_empty = false
                }
            })
            if(is_empty){
                return $('#main-content').addClass('empty-list')
            }else{
                $('#main-content').removeClass('empty-list')
            } 
            tags_list.empty();
            var tag_nodes = [];
            tags.forEach(function(tag){
                if(tag){
                    var str = "<li class='tag-item'>"+tag+"</li>";
                    tag_nodes.push($(str));    
                }
            });
            tags_list.append(tag_nodes);
            results_list.empty();
            var nodes = [];
            service_results.forEach(function(s_result){
                var results = s_result.results,
                    service_obj = s_map[s_result.service];

                results.forEach(function(result){
                    nodes.push(service_obj.get_rendered_item(result));
                });
            });
            setTimeout(function(){
                var top = $('#results-list').offset().top - $('#top-header').height() - 10
                $("html, body").animate({ scrollTop: top }, 500)
            },100)
            results_list.append(nodes);
            $('#results-list .result').slice(0,9).each(function(i){
                setTimeout(function(){
                    $('#results-list .result').eq(i).addClass('show');
                }, 150*(i+1))
                
            })
            setTimeout(function(){
                $('#results-list .result').addClass('show');
            },2100)

        });
    }

    
    function analysis_done(filter_object){
        var filter_results_list = new ResultsList($.extend(filter_object,{append_to:"#results-list"}));
        wave_container.addClass('inactive');
    }

    function analyse_elements(text){
        var analyzer = new TextAnalyser(text,analysis_done);
    }
    
    function cache_nodes(){
        body           = $('body');
        results_list   = $("#results-list");
        tags_list      = $("#tags-list");
        wave_container = $("#wave-container");
    }

    var initialize = function(){
        cache_nodes();
        bind_events();
        var input_button = new InputBox({
            append_to     : "#search-box",
            done_callback : analyse_elements
        });
        animations();
        var wave_width = Math.min($(window).innerWidth()*0.8,600),
            wave_container = $('#wave-container').addClass('inactive');
        wave_form = new SiriWave9({
                        width     : wave_width,
                        height    : Math.floor(wave_width/3),
                        color     : ['#f2b632','#b5b5b7','#677077','#252839'],
                        speed     : 1,
                        container : document.getElementById('wave-container'),
                        autostart : true,

                    });


    }

    function animations(){
        $('#page-title').addClass('animate')
        $('#wave-container').addClass('animate')
        $('#search-box').addClass('animate')
        $('#help-text').addClass('animate')
        setTimeout(function(){
            $('.dummy-line').addClass('addWidth')
        },1000)
        
        setTimeout(function(){
            $('.dummy-line').addClass('addColor')
        },1500)
        setTimeout(function(){
            $('#powered-by-housing').addClass('move')
        },2500)
        
    }
    function bind_events(){
        $(window).on('scroll', throttle(function (event) {
            scroll_events();
        }, 50));
    }

    function scroll_events(){
        var yPos =  pageYOffset;
        if ((yPos > 75) && (currentSearchBar == 'center')){
            currentSearchBar = 'top';
            $(body).addClass('top-search-bar');
        }

        if ((yPos < 75) && (currentSearchBar == 'top')){
            currentSearchBar = 'center';
            $(body).removeClass('top-search-bar');
        }

    }
    
    function throttle(fn, threshhold, scope) {
      threshhold || (threshhold = 250);
      var last,
          deferTimer;
      return function () {
        var context = scope || this;

        var now = +new Date,
            args = arguments;
        if (last && now < last + threshhold) {
          // hold on to it
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function () {
            last = now;
            fn.apply(context, args);
          }, threshhold);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    }

    $(document).ready(initialize);
})(city_location,location_cities, cities, states);






// window.search_locality = function(str, callback){

    
// }

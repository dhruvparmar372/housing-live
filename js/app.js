(function(){
    'use strict';

    var body;

    
    function cache_nodes(){
        body = $('body');
    }


    var initialize = function(){
        cache_nodes();
        console.log('load app');
    }


    $(document).ready(initialize());

})();
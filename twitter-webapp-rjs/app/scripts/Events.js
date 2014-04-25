define('Events',['Controller','quo'],function(Controller,$){

    $(document).on('datachange',Controller.showLatestTweets);

});
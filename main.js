$(document).ready(function(){
    var nextPageToken="";
    var checkEnd="False";
    var ajaxFunction=function(keyword){
        $.ajax({
            url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=`+keyword+`&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=`+nextPageToken+`
            `,
            type:'GET',
            success:function(body){
                    console.log(body)
                    for( var i=0;i<body.items.length;i++){
                        $("#result-list").append(`
                            <a class="result col-md-12" href="https://www.youtube.com/watch?v=${body.items[i].id.videoId}?autoplay=true" target ="_blank">
                                <div class="row" style="height:170px">
                                    <img src="${body.items[i].snippet.thumbnails.high.url}" alt="" class="col-md-3 img-fluid">
                                    <div class="video_info col-md-9">
                                        <h2 class="title">${body.items[i].snippet.title}</h2>
                                        <div>${body.items[i].snippet.channelTitle}</div>
                                        <p class="description">${body.items[i].snippet.description}</p>
                                        <span>View >></span>
                                    </div>
                                </div>
                            </a>`
                        );
                    }
                    nextPageToken=body.nextPageToken;
            } ,
            error:function(body){
                if(checkEnd=="False"){
                    $("#result-list").append(`<div>Không có kết quả nào khác</div>`)
                    checkEnd="True"
                }
                
            } 
        })
    }
    $("#search").on("submit",function(event){
        $("#result-list").html("")
        var keyword=$("#keyword").val();
        event.preventDefault();
        ajaxFunction(keyword);
    })
    $(window).scroll(function(){
        if (($(window).innerHeight() + $(window).scrollTop()) >= $("#result-list").height()+100) {
            //do stuff
            var keyword=$("#keyword").val();
            ajaxFunction(keyword);
        }
    });
})
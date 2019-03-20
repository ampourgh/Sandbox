var videos = [
  {
    title: "title 1",
    description: "N/A",
    sumary: "N/A",
    id: "rf34t235f",
	poster: "1"
  }, {
    title: "title 2",
    description: "N/A",
    sumary: "N/A",
    id: "J8jrj&l2",
	poster: "2"
  }
];

function updateFeatured(index){
  var featuredVideo = jQuery('#featuredVideo'),
      featuredInfo = jQuery('#featuredInfo'),
      iframe = jQuery('<iframe/>'),
      video = videos[index];
  
  featuredVideo.stop().fadeOut(200).empty();
  featuredInfo.stop().fadeOut(200).empty();
  
  iframe.attr('src', 'vid/' + video.id + '.mp4');
  iframe.attr('frameborder', 0);
  iframe.attr('allowfullscreen', true);
  iframe.attr('width', 560);
  iframe.attr('height', 315);
  
  featuredVideo.append(iframe);
  featuredInfo
    .append($('<h4/>', { text: video.title }))
    .append($('<div/>', { html: video.description }));
  
  featuredVideo.stop().fadeIn(200);
  featuredInfo.stop().fadeIn(200);
  
  iframe.reload();
}

var html = '<ul class="small-block-grid-4">';
for(var i = 0; i < videos.length; i++){
  var video = videos[i];
  
  html += '<li onclick="updateFeatured(' + i + ')"><div class="video">';
  html += '<div class="yt-thumb text-center"><img src="img/poster' + video.poster + '.jpg"></div>'
  html += '<h4>' + video.title + '</h4>';
  html += '<div class="yt-description">' + video.description + '</div>'
  html += '</div></li>';
}

html += '</ul>';

jQuery('.videos').html(html).find('li:first-child');
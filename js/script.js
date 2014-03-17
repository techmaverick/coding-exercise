//Created by Chris Armstrong
//MassRelevance Front-End Dev Exercise

$(function() {
  //DOM ready;
  //Check leaders every 15 seconds and limit to the top 5 bands per requirements
  var options = {frequency: 15, limit: 5};
  //New massrel Poller with callback function set
  var bandList = new massrel.Poller(options, function(awesomeBands) {
  	var htmlContent = '';
  	//load HTML into leaderboard div with each top band's name and mention count
  	awesomeBands.forEach(function(band) {
  		htmlContent+= '<div class="band-details"><div class="band-name">' + band.name + 
  		'</div><div class="mention-count"><span class="highlight">' + numberWithCommas(band.count) + 
  		'</span> <span class="mentions">Mentions</span></div><div class="clear-float"></div></div>';
  	});
  	//Hide first, so animation is possible
  	$('.leaderboard').hide();
  	//Bonus = Animation on each loading of the Leaderboard
  	$('.leaderboard').html(htmlContent).fadeToggle(1000);
  });
  
  //now start the Band Leaderboard / Mentions Poller
  bandList.start();

});

//Quick RegEx function I got off of Google to add commas to 'mention' counts to match PSD
function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
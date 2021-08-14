document.addEventListener('DOMContentLoaded', function() {

	var elems = document.querySelectorAll('.fixed-action-btn');
	var instances = M.FloatingActionButton.init(elems, {
		direction: 'left',
		hoverEnabled: false
	});
});

function _(el) {
  return document.getElementById(el);
}

function ScrollToView(el){
	_(el).scrollIntoView({behavior: "smooth"});
}
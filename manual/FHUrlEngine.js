//© Copyright Auric Visions Ltd, 2015. All Rights Reserved. http://www.Fast-Help.com
function setUrlByHref(obj, byId){
  if(URLMatchesCurrentPage === true){
    var chromium = window.chrome, vendName = window.navigator.vendor, protoc = document.location.protocol;
    if(chromium !== null && chromium !== undefined && vendName === "Google Inc." && protoc.indexOf('file') > -1) return true;
    var state;
    if(typeof byId == 'undefined') state = obj.getAttribute('href').indexOf('?') != -1 ? obj.getAttribute('href').split('?')[0] : obj.getAttribute('href');
    else{
    	if(obj.length > 0) state = obj;
    	else state = byId;
    }
    parent.history.pushState('', '', parent.location.href.split('?')[0] + '?' + state); //added
    console.log(state);
  }
}
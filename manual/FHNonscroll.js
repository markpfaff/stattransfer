//© Auric Visions Ltd, 2014 v1.7
var type = "IE";

IdentifyBrowser();
window.onload=resizeSplitWndw;
window.onresize=resizeSplitWndw;
window.onbeforeprint=set_to_print;
window.onafterprint=reset_form;
window.onerror = errorHandler;

function getDocHeight() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}

function resizeSplitWndw()
{
  if (type == "MO")
  {
    document.getElementById('FHScroll').style.top= document.getElementById('FHNonScroll').offsetHeight;
  }
  //-------------------------------------------------
  if (type=="NN") 
  { 
    document.layers.FHScroll.style.top=document.layers.FHNonScroll.offsetHeight;
  }
  if (type=="OP") 
  { 
    document.all.FHScroll.style.top=document.all.FHNonScroll.offsetHeight;
    document.all.FHNonScroll.style.width= document.body.offsetWidth;
  }
  //-------------------------------------------------
    var oNonScroll=document.all.item("FHNonscroll");
    var oScroll=document.all.item("FHScroll");
    if (oScroll ==null) return;
    if (oNonScroll != null)
    document.all.FHNonScroll.style.position= "absolute";
    document.all.FHScroll.style.position= "absolute";
    document.all.FHScroll.style.overflow= "auto";
    document.all.FHScroll.style.height= "100%";
    document.all.FHNonScroll.style.width= document.body.offsetWidth;
    document.all.FHScroll.style.width= document.body.offsetWidth-4;
    document.all.FHScroll.style.top = document.all.FHNonScroll.offsetHeight;
    var iHeight = document.body.offsetHeight;
    if (iHeight == 0)
    { iHeight = getDocHeight(); }
    if (type == "MO") {
        iHeight = document.getElementById('FHScroll').offsetHeight - document.all.FHNonScroll.offsetHeight;
     }
    if (iHeight > document.all.FHNonScroll.offsetHeight)
    {
        if (type == "IE")
            {document.getElementById('FHScroll').style.height = (iHeight - document.all.FHNonScroll.offsetHeight) - 5;}
        else
        {
			var hgt1 = $("#get_height").val();
			var hgt2 = $("#set_height").val();

			if(hgt1 == hgt2)
			{
            	document.getElementById('FHScroll').style.height = (iHeight - document.all.FHNonScroll.offsetHeight) + 12;
			}
			else
			{
				var new_hgt = hgt1 - hgt2;
				document.getElementById('FHScroll').style.height = (iHeight - document.all.FHNonScroll.offsetHeight) + 12 + new_hgt;
			}
			$("#get_height").val(document.all.FHNonScroll.offsetHeight);
        }        
    }
}

function errorHandler() { 
  //When printing pages that contain mixed elements of hidden paragraphs and links, printing will
  //mistakenly raise an exception when parsing the elements, so we suppress it here.
  return true;
}

function set_to_print()
{
  var i;
  document.all.FHScroll.style.overflow="visible";
  document.all.FHScroll.style.width="100%";
  if (window.FHScroll)document.all.FHScroll.style.height = "auto";
  for (i=0; i < document.all.length; i++)
  {
    if (document.all[i].tagName == "BODY") 
    {
      document.all[i].scroll = "auto";
    }
    if (document.all[i].tagName == "A") 
    {
      document.all[i].outerHTML = "<a href=''>" + document.all[i].innerHTML + "</a>";
    }
  }
}

function reset_form()
{
  document.location.reload();
}

function IdentifyBrowser() 
{
  if (navigator.userAgent.indexOf("Opera")!=-1 && document.getElementById) type="OP";//Opera
  else if (document.all) type="IE";													//Internet Explorer
  else if (navigator.userAgent.indexOf("rv:11")!=-1) type="IE";
  else if (document.layers) type="NN";													//Netscape
  else if (!document.all && document.getElementById) type="MO"; //Mozila
  else type = "IE";
}

function OpenFileRelativeToCHMFolder(stFileName)
{
  var X, Y, sl, a, ra, link;
  ra = /:/;
  a = location.href.search(ra);
  if (a == 2)
    X = 14;
  else
    X = 7;
  sl = "\\";
  Y = location.href.lastIndexOf(sl) + 1;
  link = 'file:///' + location.href.substring(X, Y) + stFileName;
  location.href = link;
}

$(document).ready(function() {
	var elem = document.createElement("input");
	elem.type = "hidden";
	elem.id = "get_height";
	document.getElementById("FHScroll").appendChild(elem);
	
	var elem2 = document.createElement("input");
	elem2.type = "hidden";
	elem2.id = "set_height";
	document.getElementById("FHScroll").appendChild(elem2);
	
	$("#get_height").val(document.all.FHNonScroll.offsetHeight);
	$("#set_height").val(document.all.FHNonScroll.offsetHeight);
});
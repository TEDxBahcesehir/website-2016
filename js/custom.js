Array.prototype.shuffle = function() {
	var input = this;
	for (var i = input.length-1; i >=0; i--) {
		var randomIndex = Math.floor(Math.random()*(i+1));
		var itemAtIndex = input[randomIndex];
		input[randomIndex] = input[i];
		input[i] = itemAtIndex;
	}
	return input;
}
var sp = [
	'guntar.png|',
	'markoc.png|',
	'ozgun.png|',
	'isezero.png|',
	'sh.png|',
	'etohum.png|',
	'vis.png|',
	'mes.png|',
	'abbox.png|//abbox.com',
];

var g = [
	"ss.png",
	"DSC_0021",
	"DSC_0064",
	"DSC_0087",
	"DSC_0112",
	"DSC_0115",
	"DSC_0131",
	"DSC_0135",
	"DSC_0143",
	"DSC_0148",
	"DSC_0155",
	"DSC_0167",
	"DSC_0190",
	"DSC_0202",
	"DSC_0218",
	"DSC_0234",
	"DSC_0237",
	"DSC_0242",
	"DSC_0246",
	"DSC_0258",
	"DSC_0270",
	"DSC_0276",
];
var vids15 = [
	"//youtube.com/embed/pnDDU16JXQA",
	"//youtube.com/embed/1PBkHmb5VlE",
	"//youtube.com/embed/BgsIWMdGpQA",
	"//youtube.com/embed/QpxCpjmcPgg",
	"//youtube.com/embed/WVJMeOc2MCw",
	"//youtube.com/embed/GVfxI4othCg",
	"//youtube.com/embed/Tskvrwsa_Qo",
	"//youtube.com/embed/xNVrCumNnAI",
	"//youtube.com/embed/i519o64tj5w",
	"//youtube.com/embed/hX_BykD4cVQ",
	"//youtube.com/embed/tXSqx5ZOAF4",
	"//youtube.com/embed/-ejVR8xqkfs",
];
var vids16 = [
	"//youtube.com/embed/1Zz9cuJok-A",
	"//youtube.com/embed/xt6Jt7AUEhA",
	"//youtube.com/embed/qesvZLmjQtY",
	"//youtube.com/embed/DtK5O3-ZymE",
	"//youtube.com/embed/Qbnc4g7pmSk",
	"//youtube.com/embed/pUvbPTpXtVI",
	"//youtube.com/embed/rkMUtLtTAhg",
	"//youtube.com/embed/48h_900ykyQ",
	"//youtube.com/embed/RQeuM1xhpOU",
	"//youtube.com/embed/lVKqlNOx5Do",
	"//youtube.com/embed/R2GKZ1e9pMI",
	"//youtube.com/embed/1eweH9KE_XQ",
];
//document.getElementsByTagName("body")[0].style.webkitFilter = "blur(0.2em)";
setTimeout(function() {
	document.getElementsByTagName("body")[0].style.opacity = "1";
},6666);
document.getElementsByTagName("body")[0].style.opacity = "0";
window.onload = function() {
	document.getElementsByTagName("body")[0].style.animation = "lite 3s ease-in-out 0s 1 normal";
	document.getElementsByTagName("body")[0].style.opacity = "1";
	sp.shuffle();
	g.shuffle();
	vids15.shuffle();
	vids16.shuffle();
	$(document).ready(function() {
		for(i=0;i<vids16.length;i++)
			document.getElementById("vidz").innerHTML = "<iframe allowfullscreen frameborder=0 class='vid' src='"+vids16[i]+"'></iframe>\n"+document.getElementById("vidz").innerHTML;
		return;
	});
	for(i=0;i<sp.length;i++)
		document.getElementById('sps').innerHTML = "<a target=_blank href='"+sp[i].split("|")[1]+"' class='img pic contain' data-img='sp/"+sp[i].split("|")[0]+"''>.</a>\n"+document.getElementById('sps').innerHTML;
	for(i=0;i<g.length/2;i++)
		document.getElementById('pics').innerHTML = "<a target=_blank href='g/"+g[i]+".lite.jpg' class='block img pic' data-img='g/"+g[i]+".lite.jpg'>.</a>\n"+document.getElementById('pics').innerHTML;
//	for(i=0;i<4;i++)
//		document.getElementById("vmain").innerHTML = "<iframe class='vid vm' src='"+vids17[i]+"' frameborder=0 allowfullscreen ></iframe>"+document.getElementById("vmain").innerHTML;
	fix_links();
	fix_images();
	document.getElementById('map').src = "https://google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.2347980040045!2d29.006860315569625!3d41.041994179297376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a2a2c3b963%3A0x7671d1b9817b8519!2zQmFow6dlxZ9laGlyIMOcbml2ZXJzaXRlc2k!5e0!3m2!1str!2str!4v1452865206865";
	$('#sps').owlCarousel({loop:true,center:true,nav:false,autoplay:true,autoplayTimeout:2500,autoplayHoverPause:true,navText:["&lt;","&gt;"],lazyLoad:true,items:Math.round(window.screen.width/420)});
	$('#pics').owlCarousel({loop:true,center:true,nav:false,autoplay:true,autoplayTimeout:2500,autoplayHoverPause:true,navText:["&lt;","&gt;"],lazyLoad:true,items:Math.round(window.screen.width/480)});
	/*
	pics = document.getElementsByClassName('pic');
	for(i=0;i<pics.length;i++)
		pics[i].onclick = function(e) {
			$(this).toggleClass('fs');
		};
	*/
	return;
};
var ajax = new XMLHttpRequest();
ajax.open("GET","//tedx.analytics.livin.ws/",true);
ajax.send(null);
delete ajax;

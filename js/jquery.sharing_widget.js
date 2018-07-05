// load jquery leanModal plugin if it does not already exists
if (!$.fn.leanModal) {
// leanModal v1.1 | by Ray Stone (http://finelysliced.com.au) | Dual licensed under the MIT and GPL
(function($){$.fn.extend({leanModal:function(options){var defaults={top:100,overlay:0.4,closeButton:null};var overlay=$("<div id='lean_overlay'></div>");$("body").append(overlay);options=$.extend(defaults,options);return this.each(function(){var o=options;$(this).click(function(e){var modal_id=$(this).attr("href");$("#lean_overlay").click(function(){close_modal(modal_id)});$(o.closeButton).click(function(){close_modal(modal_id)});var modal_height=$(modal_id).outerHeight();var modal_width=$(modal_id).outerWidth();$("#lean_overlay").css({"display":"block",opacity:0});$("#lean_overlay").fadeTo(200,o.overlay);$(modal_id).css({"display":"block","position":"fixed","opacity":0,"z-index":11000,"left":50+"%","margin-left":-(modal_width/2)+"px","top":o.top+"px"});$(modal_id).fadeTo(200,1);e.preventDefault()})});function close_modal(modal_id){$("#lean_overlay").fadeOut(200);$(modal_id).css({"display":"none"})}}})})(jQuery);
}

// load jquery cookie plugin if it does not already exists
if (!$.cookie) {
// jQuery Cookie Plugin v1.3.1 (https://github.com/carhartl/jquery-cookie) | Copyright 2013 Klaus Hartl | MIT license
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{factory(jQuery);}}(function($){var pluses=/\+/g;function decode(s){if(config.raw){return s;}try{return decodeURIComponent(s.replace(pluses," "));}catch(e){}}function decodeAndParse(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\");}s=decode(s);try{return config.json?JSON.parse(s):s;}catch(e){}}var config=$.cookie=function(key,value,options){if(value!==undefined){options=$.extend({},config.defaults,options);if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days);}value=config.json?JSON.stringify(value):String(value);return(document.cookie=[config.raw?key:encodeURIComponent(key),"=",config.raw?value:encodeURIComponent(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join(""));}var result=key?undefined:{};var cookies=document.cookie?document.cookie.split("; "):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split("=");var name=decode(parts.shift());var cookie=parts.join("=");if(key&&key===name){result=decodeAndParse(cookie);break;}if(!key&&(cookie=decodeAndParse(cookie))!==undefined){result[name]=cookie;}}return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)!==undefined){$.cookie(key,"",$.extend({},options,{expires:-1}));return true;}return false;};}));
};

// jQuery.browser.mobile (http://detectmobilebrowser.com/) jQuery.browser.mobile will be true if the browser is a mobile device
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

// UAParser.js v0.6.2 | https://github.com/faisalman/ua-parser-js | Dual licensed under GPLv2 & MIT | Copyright 2012-2013 Faisalman <fyzlman@gmail.com>
(function(window,undefined){"use strict";var EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet";var util={has:function(str1,str2){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1},lowerize:function(str){return str.toLowerCase()}};var mapper={rgx:function(){for(var result,i=0,j,k,p,q,matches,match,args=arguments;i<args.length;i+=2){var regex=args[i],props=args[i+1];if(typeof result===UNDEF_TYPE){result={};for(p in props){q=props[p];if(typeof q===OBJ_TYPE){result[q[0]]=undefined}else{result[q]=undefined}}}for(j=k=0;j<regex.length;j++){matches=regex[j].exec(this.getUA());if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){result[q[0]]=q[1].call(this,match)}else{result[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){result[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{result[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){result[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{result[q]=match?match:undefined}}break}}if(!!matches)break}return result},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{major:{1:["/8","/1","/3"],2:"/4","?":"/"},version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/((\d+)?[\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,/(opera).+version\/((\d+)?[\w\.]+)/i,/(opera)[\/\s]+((\d+)?[\w\.]+)/i],[NAME,VERSION,MAJOR],[/\s(opr)\/((\d+)?[\w\.]+)/i],[[NAME,"Opera"],VERSION,MAJOR],[/(kindle)\/((\d+)?[\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,/(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,/(rekonq)((?:\/)[\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],[NAME,VERSION,MAJOR],[/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION,MAJOR],[/(yabrowser)\/((\d+)?[\w\.]+)/i],[[NAME,"Yandex"],VERSION,MAJOR],[/(comodo_dragon)\/((\d+)?[\w\.]+)/i],[[NAME,/_/g," "],VERSION,MAJOR],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i],[NAME,VERSION,MAJOR],[/(dolfin)\/((\d+)?[\w\.]+)/i],[[NAME,"Dolphin"],VERSION,MAJOR],[/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],[[NAME,"Chrome"],VERSION,MAJOR],[/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,MAJOR,[NAME,"Mobile Safari"]],[/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,MAJOR,NAME],[/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],[NAME,[MAJOR,mapper.str,maps.browser.oldsafari.major],[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(konqueror)\/((\d+)?[\w\.]+)/i,/(webkit|khtml)\/((\d+)?[\w\.]+)/i],[NAME,VERSION,MAJOR],[/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],[[NAME,"Netscape"],VERSION,MAJOR],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,/(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i,/(links)\s\(((\d+)?[\w\.]+)/i,/(gobrowser)\/?((\d+)?[\w\.]+)*/i,/(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,/(mosaic)[\/\s]((\d+)?[\w\.]+)/i],[NAME,VERSION,MAJOR]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/(ia64(?=;)|68k(?=\))|arm(?=v\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[ARCHITECTURE,util.lowerize]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\((bb10);\s(\w+)/i],[[VENDOR,"BlackBerry"],MODEL,[TYPE,MOBILE]],[/android.+((transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+))/i],[[VENDOR,"Asus"],MODEL,[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/((playstation)\s[3portablevi]+)/i],[[VENDOR,"Sony"],MODEL,[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i,/(mot)[\s-]?(\w+)*/i],[[VENDOR,"Motorola"],MODEL,[TYPE,MOBILE]],[/android.+\s((mz60\d|xoom[\s2]{0,2}))\sbuild\//i],[[VENDOR,"Motorola"],MODEL,[TYPE,TABLET]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/(sie)-(\w+)*/i],[[VENDOR,"Siemens"],MODEL,[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android\s3\.[\s\w-;]{10}((a\d{3}))/i],[[VENDOR,"Acer"],MODEL,[TYPE,TABLET]],[/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/((nexus\s4))/i,/((nexus\s5))/i,/(lg)[e;\s-\/]+(\w+)*/i],[[VENDOR,"LG"],MODEL,[TYPE,MOBILE]],[/(mobile|tablet);.+rv\:.+gecko\//i],[TYPE,VENDOR,MODEL]],engine:[[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]+).*(gecko)/i],[VERSION,NAME]],os:[[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)\/([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[NAME,"Symbian"],VERSION],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.]+\d)*/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[NAME,VERSION],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[NAME,"iOS"],[VERSION,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i],[NAME,[VERSION,/_/g,"."]],[/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i,/(unix)\s?([\w\.]+)*/i],[NAME,VERSION]]};var UAParser=function(uastring){var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);if(!(this instanceof UAParser)){return new UAParser(uastring).getResult()}this.getBrowser=function(){return mapper.rgx.apply(this,regexes.browser)};this.getCPU=function(){return mapper.rgx.apply(this,regexes.cpu)};this.getDevice=function(){return mapper.rgx.apply(this,regexes.device)};this.getEngine=function(){return mapper.rgx.apply(this,regexes.engine)};this.getOS=function(){return mapper.rgx.apply(this,regexes.os)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};this.setUA(ua)};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{window.UAParser=UAParser;if(typeof define===FUNC_TYPE&&define.amd){define(function(){return UAParser})}if(typeof window.jQuery!==UNDEF_TYPE){var $=window.jQuery;var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}}})(this);

// string.contains('something')
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

// close share dialog/pop-up callback
var closeCallback = function(url) {
  var network = url.split('/')[2].replace('www.','').replace('.com','');
  if (network == 'plus.google') {
    var network = 'googleplus'
  }
  // set cookie for first time
  if ( $.cookie('benzinga_share_widget_'+network+'') == undefined ) {
    $('a.leanmodal.recommend-'+network+'').trigger('click');
    $.cookie('benzinga_share_widget_'+network+'', 'shown');
  } else if ( $.cookie('benzinga_share_widget_'+network+'') == 'shown' ) {
    // do nothing, can later send analytics of sharing habit for cohort who have already seen the recommend to like/follow modal
  }
};

// share dialog pop-up
var shareDialog = function (url, title, width, height, closeCallback, SharedURL, track) {
  // page variables
  var network = url.split('/')[2].replace('www.','').replace('.com','').replace('plus.google','googleplus');
  if (SharedURL.contains('benzinga.com') == true){
    var nid = SharedURL.split('/')[7];
  } else {
    var nid = null;
  }

  // share callback
  function shareCallback() {
    return {
      action: 'click',
      category: 'Social Share',
      label: 'Social Share: '+network+'',
    };
  }
  //console.log(shareCallback()); // Object {action: "click", category: "Social Share", label: "Social Share: facebook"} 

  // send analytic event
  if (track == true) {
    analytics.track('Share Intent', {
        network: network,
        page_shared: SharedURL,
        nid: nid,
        happened_on_url: document.URL
      });
  };
  // popup variables
  var left = (screen.width/2)-(width/2);
  var top = (screen.height/2)-(height/2);
  var win = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+width+', height='+height+', top='+top+', left='+left+'');
  var interval = window.setInterval(function(){
    try {
      if (win == null || win.closed) {
        window.clearInterval(interval);
        closeCallback(url);
        //console.log(url);
      }
    } catch (e) {}
  }, 500);
  //return win;
  return false;
};


// prettyCount - turns 1118 to 1.12K
function prettyCount(number) {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + ' B';
  }
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, '') + ' M';
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + ' K';
  }
  return number;
};

$(function() {

  // modal to recommend liking/following on social networks
  var leanmodal_run = function(){
    // init lean modal
    $('a.leanmodal').leanModal({closeButton:'.leanmodal-close'});

    // changes iframe [data-src] to [src] to initiate/load media (lazy loading method)
    $('a.leanmodal').click(function () {
      var network = $(this).attr('data-network');
      $('div.recommend-'+network+' iframe').each(function(){
        var $r = $(this);
        $r
          .attr({
            src: $r.attr('data-src'),
          })
          .removeAttr('data-src');
      });
    });

    // changes iframe [src] to [data-src] to un-render iframe
    $('a.leanmodal-close,div#lean_overlay').click(function () {
      $('div[class*="recommend-"] iframe').each(function(){
        var $r = $(this);
        $r
          .attr({
            'data-src': $r.attr('src'),
          })
          .removeAttr('src');
      });
    });
  };

  // sharing_widget plugin
  $.fn.sharing_widget = function(options) { // requires minimum of either nid or url, if both are define, defaults to using nid.
      var defaults = {
      // request
      nid: null, // article node id
      url: null, // full url of page to be shared, only define if wanting share count, otherwise define page_url w/ style: ‘no-count’ //Drupal.settings.bz2_site.base_url + Drupal.settings.bz2_site.base_path,
      endpoint_base_url: 'http://www.benzinga.com', // Drupal.settings.bz2_site.base_url

      // non-request url
      page_url: null, // can substitute 'document.URL' for "no-count" style sharing to show widget w/ API call to get count 
      
      // basics
      title: document.title, // text used to describe shared content
      title_twitter: document.title, // title used as default text when sharing a tweet, can contain $tags
      url_short: null, // specifies short url used for sharing on twitter (e.g. http://benzinga.com/z/nid)
      twitter_via: 'benzinga', // specifies "via @benzinga"
      source: 'benzinga', // tell network content source
      teaser: '', // teaser text inside email body
      email_callback: null, // or function(){ alert("email click callback"); }, to override the default mailto.
      print_callback: null, // or function(){ alert("print click callback"); }, to override the default window.print().
      comments_element_id: 'disqus_thread', // the id of the comments container/button so on click, scrolls to that element
      share_callback: null, // or function(){ alert(this); }, that gets an object: Object {action: "click", category: "Social Share", label: "Social Share: facebook"} on click of share box, where "this" is an object, so this.label is Social Share: facebook

      // style
      style: '', // appearance style options: ‘’ (empty), ‘inline’, ‘no-count’, ‘logo-only’. Each can also contain additional styles: ‘compact’ and ‘rounded’. Tip: “no-count” avoids the http call to the API to grab share counts.
      tooltip: true, // boolean to show or hide tooltip, requires hint.css
      tooltip_prop: 'hint--bottom', // default to using tooltip w/ rounded edges that appears on the bottom of the object. Refer to http://kushagragour.in/lab/hint for all available options.
      
      // include/exclude
      networks_show: null, // show by whitelisting: default ("null") to showing all, can selectively show only what’s needed by specifying
      networks_hide: null, // hide by blacklisting: hides comments, views, and shares by default
      admin: false, // boolean whether to show or hide "Twitter Sharers" button

      // analytics utm tags and click-event-based tracking
      medium: null, // google analytics utm_medium tag
      campaign: null, // google analytics utm_campaign tag
      track: false, // boolean to determine whether or not to track click events on sharing icons. If true, requires "segmentio" key defined.
      segmentio: null, // segmentio key, example: "t33qg09d1o"
      
      // social liking/following
      recommend: false, // boolean to enabled/disable showing the recommend modal
      facebook: null, // facebook page "username" (/"vanityurl", e.g. "benzinga") or id "159483118580"
      twitter: null, // twitter username w/out "@" - e.g. "twitter.com/benzinga"
      linkedin: null, // linkedin page id (1058415) - after the last slash "https://www.linkedin.com/company/1058415"
      googleplus: null, // google plus account id (110971701518125066702)
      },
    settings = $.extend({}, defaults, options); 
    var element = this;

    // conditionally load analytics.js if not already present on page
    if (typeof analytics != 'undefined' && settings.track == true && settings.segmentio != null) { 
      //console.log('analytics already loaded');
      analytics.load(settings.segmentio);
    } else if (settings.track == true && settings.segmentio != null) {
      //console.log('load analytics');
      // segment.io analytics
      var analytics=analytics||[];(function(){var e=["identify","track","trackLink","trackForm","trackClick","trackSubmit","page","pageview","ab","alias","ready","group"],t=function(e){return function(){analytics.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var n=0;n<e.length;n++)analytics[e[n]]=t(e[n])})(),analytics.load=function(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"===document.location.protocol?"https://":"http://")+"d2dq2ahtl5zl1z.cloudfront.net/analytics.js/v1/"+e+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)};
      analytics.load(settings.segmentio);
    }

    // for rendering multiple instances on the same page
    this.each(function(){

      // inject sharing-widget-prerequisites html mark-up once, used for recommending liking/following on facebook, twitter, linkedin, and googleplus
      if ( $('div.sharing-widget-prerequisites').length == 0 && settings.recommend == true ) {
        $('body').append(
          '<div class="sharing-widget-prerequisites">'
            +'<a class="leanmodal recommend-facebook" href="#recommend-facebook" data-network="facebook">facebook</a>'
            +'<a class="leanmodal recommend-twitter" href="#recommend-twitter" data-network="twitter">twitter</a>'
            +'<a class="leanmodal recommend-linkedin" href="#recommend-linkedin" data-network="linkedin">linkedin</a>'
            +'<a class="leanmodal recommend-googleplus" href="#recommend-googleplus" data-network="googleplus">googleplus</a>'
            +'<div id="recommend-facebook" class="leanmodal-content recommend-facebook"><a class="leanmodal-close" href="#null" onclick="return false;">X</a><p class="enjoyed-article">Enjoyed this article?</p><p class="action-request">Like us on Facebook to get more!</p><iframe class="facebook-like" data-src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2F'+settings.facebook+'&amp;width=292&amp;height=62&amp;colorscheme=light&amp;show_faces=false&amp;header=false&amp;stream=false&amp;show_border=false" scrolling="no" frameborder="0" style="border:none;overflow:hidden;width:292px;height:62px;" allowTransparency="true"></iframe></div>'
            +'<div id="recommend-twitter" class="leanmodal-content recommend-twitter"><a class="leanmodal-close" href="#null" onclick="return false;">X</a><p class="enjoyed-article">Enjoyed this article?</p><p class="action-request">Follow us on Twitter to get more!</p><iframe class="twitter-follow" data-src="//platform.twitter.com/widgets/follow_button.html?screen_name='+settings.twitter+'" allowtransparency="true" frameborder="0" scrolling="no" style="width:300px;height:20px;"></iframe></div>'
            +'<div id="recommend-linkedin" class="leanmodal-content recommend-linkedin"><a class="leanmodal-close" href="#null" onclick="return false;">X</a><p class="enjoyed-article">Enjoyed this article?</p><p class="action-request">Follow us on Linkedin to get more!</p><iframe class="linkedin-follow" data-src="https://www.linkedin.com/cws/followcompany?companyIdentifier='+settings.linkedin+'&counterPosition=right&isFramed=false&lang=en_US" allowtransparency="true" frameborder="0" scrolling="no" style="width:300px;height:20px;"></iframe></div>'
            +'<div id="recommend-googleplus" class="leanmodal-content recommend-googleplus"><a class="leanmodal-close" href="#null" onclick="return false;">X</a><p class="enjoyed-article">Enjoyed this article?</p><p class="action-request">Follow us on Google+ to get more!</p><a class="googleplus-link-cover" href="https://plus.google.com/'+settings.googleplus+'" target="_blank" rel="nofollow"></a><iframe class="googleplus-follow" data-src="https://apis.google.com/u/0/_/widget/render/follow?annotation=bubble&height=20&showcoverphoto=1&showtagline=1&width=300&hl=en-US&url=https%3A%2F%2Fplus.google.com%2F110971701518125066702" allowtransparency="true" frameborder="0" scrolling="no" style="width:300px;height:20px;"></iframe></div>'
          +'</div>');
        // conditionally removed networks w/ non-specified username/id, to only show enabled networks
        if (settings.facebook == null) { $('div.sharing-widget-prerequisites .recommend-facebook').remove(); }
        if (settings.twitter == null) { $('div.sharing-widget-prerequisites .recommend-twitter').remove(); }
        if (settings.linkedin == null) { $('div.sharing-widget-prerequisites .recommend-linkedin').remove(); }
        if (settings.googleplus == null) { $('div.sharing-widget-prerequisites .recommend-googleplus').remove(); }
      };
      leanmodal_run();
      
      // determine source to grab count from and properly format request based on either nid or url
      if (settings.nid != null && settings.page_url == null){ //&& settings.url == null
        var fetch = settings.endpoint_base_url+'/ajax-cache/social-count/nid/'+settings.nid+'?callback=sharingWidgetCallback';
      } else if (settings.nid == null && settings.url != null && settings.page_url == null){
        // parse url into base and path
        var url_original = settings.url,
        url_base = 'http://'+url_original.split('/')[2]+'',
        reg = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/,
        url_path = reg.exec(''+url_original+'')[1],
        // encoded url
        encoded_url_base = encodeURIComponent(url_base),
        encoded_url_path = encodeURIComponent(url_path),
        fetch = settings.endpoint_base_url+'/ajax-cache/social-count/site/?site='+encoded_url_base+'&path='+encoded_url_path+'&callback=sharingWidgetCallback';
      };

      // conditional for setting title for twitter
      if (settings.title == document.title && settings.title_twitter == document.title) {
        var title_twitter_set = settings.title;
      } else if (settings.title != document.title && settings.title_twitter == document.title){
        var title_twitter_set = settings.title;
      } else if (settings.title_twitter != document.title) {
        var title_twitter_set = settings.title_twitter;
      }
      // set short url
      var url_short = settings.url_short;
      if(!url_short) {
        url_short = settings.url;
      }
      // url append utm for analytics tracking
      if (settings.medium != null && settings.campaign == null) {
        url_append = encodeURIComponent('?utm_medium='+settings.medium)
      } else if (settings.campaign != null && settings.medium == null) {
        url_append = encodeURIComponent('?utm_campaign='+settings.campaign)
      } else if (settings.medium != null && settings.campaign != null){
        url_append = '?utm_medium='+settings.medium+'&utm_campaign='+settings.campaign+''
      } else if (settings.medium == null && settings.campaign == null) {
        url_append = ''
      }
      
      // teaser text inside email body
      if (settings.teaser != '') {
        var email_teaser = encodeURIComponent(settings.teaser)+'.%20';
      } else {
        var email_teaser = '';
      }

      // avoid adding "#null" to url
      $(window).load(function() {
        if (device_vendor != 'Apple' && browser_name != 'Chrome'){
          $('div.share-btn a').on('click', function(){
            return false;
         });
        }
      });

      // user agent
      var device_vendor = $.ua.device.vendor,
      device_model = $.ua.device.model,
      browser_name = $.ua.browser.name,
      browser_version = $.ua.browser.version,
      browser_engine = $.ua.engine.name,
      os_name = $.ua.os.name,
      os_version = $.ua.os.version;

      /*
      // Chrome on iOS window.open() bug workout
      if (device_vendor == 'Apple' && browser_name == 'Chrome'){
        $('body').append('<p>Chrome on iOS</p>');
      }
      */

    // no count
    if (settings.style.contains('no-count') || settings.style.contains('no-request') && settings.page_url != null) {

      // object
      var url = settings.page_url,
      url_plain = url,
      title = settings.title,
      title_twitter = title_twitter_set,
      track = settings.track,
      // encoded

      encoded_url = encodeURIComponent(url),
      encoded_url_short = encodeURIComponent(url_short),
      encoded_title = encodeURIComponent(title).replace(/\'/g,'%27'),
      encoded_title_twitter = encodeURIComponent(title_twitter).replace(/\'/g,'%27'),

      // share urls
      //share_facebook = 'https://www.facebook.com/sharer/sharer.php?u='+encoded_url+'',
      share_twitter = 'https://twitter.com/intent/tweet?source='+settings.source+'&via='+settings.twitter_via+'&text='+encoded_title_twitter+'&url='+encoded_url_short+'',
      share_linkedin = 'http://www.linkedin.com/shareArticle?mini=true&url='+encoded_url+'&source='+settings.source+'',
      share_googleplus = 'https://plus.google.com/share?url='+encoded_url+'',
      share_reddit = 'http://reddit.com/submit?url='+encoded_url+'&title='+encoded_title+'',
      share_stumbleupon = 'http://www.stumbleupon.com/submit?url='+encoded_url+'&title='+encoded_title+'',
      share_tumblr = 'http://www.tumblr.com/share/quote?quote='+encoded_title+'&source='+encoded_url+'&tags=financial,trade,news,ideas,analysis,stock,market,benzinga',
      share_whatsapp = 'whatsapp://send?text='+url_plain+'';
      // facebook
      if (jQuery.browser.mobile == false) {
        var share_facebook = 'https://www.facebook.com/sharer/sharer.php?u='+encoded_url+'';
      } else if (jQuery.browser.mobile == true) {
        var share_facebook = 'https://m.facebook.com/sharer.php?u='+encoded_url+''; 
      }

      // email
      if (settings.email_callback == null){
        var email_href = 'mailto:?subject='+encoded_title+'&amp;body='+email_teaser+'Check%20out%3A%20'+encoded_url+'.%0A%0AFor%20more%20financial%20news%20and%20trade%20ideas%2C%20check%20out%20http%3A%2F%2Fbenzinga.com.';
      } else {
        var email_href = "#null";
      }
      // inject elements into dom
      $(element).append(
        '<!------ facebook ------>'
        +'<div class="share-btn share-btn--facebook '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="facebook" href="#null" data-link="'+share_facebook+'" onclick="shareDialog(\''+share_facebook+'\',null,515,380,closeCallback,\''+url_plain+'\','+track+'); return false;" data-hint="Share on Facebook"><p class="share-text share-text--name">Share</p></a></div>'
        +'<!------ twitter ------>'
        +'<div class="share-btn share-btn--twitter '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="twitter" href="#null" data-link="'+share_twitter+'" onclick="shareDialog(\''+share_twitter+'\',null,430,340,closeCallback,\''+url_plain+'\','+track+');" data-hint="Share on Twitter"><p class="share-text share-text--name">Tweet</p></a></div>'
        +'<!------ linkedin ------>'
        +'<div class="share-btn share-btn--linkedin '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="linkedin" href="#null" data-link="'+share_linkedin+'" onclick="shareDialog(\''+share_linkedin+'\',null,620,450,closeCallback,\''+url_plain+'\','+track+');" data-hint="Share on Linkedin"><p class="share-text share-text--name">Share</p></a></div>'
        +'<!------ google+ ------>'
        +'<div class="share-btn share-btn--googleplus '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="googleplus" href="#null" data-link="'+share_googleplus+'" onclick="shareDialog(\''+share_googleplus+'\',null,515,505,closeCallback,\''+url_plain+'\','+track+');" data-hint="Share on Google+"><p class="share-text share-text--name">+1</p></a></div>'
        +'<!------ stumbleupon ------>'
        +'<div class="share-btn share-btn--stumbleupon '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="stumbleupon" href="#null" data-link="'+share_stumbleupon+'" onclick="shareDialog(\''+share_stumbleupon+'\',null,800,540,closeCallback,\''+url_plain+'\','+track+');" data-hint="Share on StumbleUpon"><p class="share-text share-text--name">Share</p></a></div>'
        +'<!------ tumblr ------>'
        +'<div class="share-btn share-btn--tumblr '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="tumblr" href="#null" data-link="'+share_tumblr+'" onclick="shareDialog(\''+share_tumblr+'\',null,800,540,closeCallback,\''+url_plain+'\','+track+');" data-hint="Share on Tumblr"><p class="share-text share-text--count">Share</p><p class="share-text share-text--name">Share</p></a></div>'
        +'<!------ reddit ------>'
        +'<div class="share-btn share-btn--reddit '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="reddit" href="#null" data-link="'+share_reddit+'" onclick="shareDialog(\''+share_reddit+'\',null,1000,580,closeCallback,\''+url_plain+'\','+track+');" data-hint="Share on Reddit"><p class="share-text share-text--name">Share</p></a></div>'
        +'<!------ comments ------>'
        +'<div class="share-btn share-btn--comments '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="comments" href="#'+settings.comments_element_id+'" data-hint="Leave a Comment"><p class="share-text share-text--name">Comment</p></a></div>'
        +'<!------ email ------>'
        +'<div class="share-btn share-btn--email '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="email" href="'+email_href+'" data-hint="Share via Email"><p class="share-text share-text--name">Email</p></a></div>'
        +'<!------ WhatsApp ------>'
        +'<div class="share-btn share-btn--whatsapp '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="whatsapp" href="'+share_whatsapp+'" data-hint="Share on WhatsApp"><p class="share-text share-text--name">Share</p></a></div>'
        +'<!------ print ------>'
        +'<div class="share-btn share-btn--print '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="print" href="#null" data-hint="Print Page"><p class="share-text share-text--name">Print</p></a></div>');

      // Chrome on iOS window.open() bug workout
      if (device_vendor == 'Apple' && browser_name == 'Chrome'){
        $('div.share-btn a').attr('target','_blank').removeAttr('onclick'); // open sharing link in new window, remove onclick attribute
        $('div.share-btn a').attr('href', function() {
          var href = $(this).attr('data-link');
          $(this).removeAttr('data-link');
          return href;
        });
      }

    } else {

      // ajax in count data
      $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        cache: true, jsonp: false, jsonpCallback: 'sharingWidgetCallback',
        url: ''+fetch+'',
        processData: false
      }).success(function(data) {

        // object
        var nid = data.data[0].nid,
        site = data.data[0].site,
        path = data.data[0].path,
        url = ''+data.data[0].url+''+url_append+'',
        url_plain = data.data[0].url,
        title = settings.title,
        title_twitter = title_twitter_set,
        track = settings.track,
        // count
        count_facebook = prettyCount(data.data[0].counts.facebook),
        count_twitter = prettyCount(data.data[0].counts.twitter),
        count_linkedin = prettyCount(data.data[0].counts.linkedin),
        count_googleplus = prettyCount(data.data[0].counts.googleplus),
        count_reddit = prettyCount(data.data[0].counts.reddit),
        count_stumbleupon = prettyCount(data.data[0].counts.stumbleupon),
        count_comment = prettyCount(data.data[0].counts.disqus),
        count_total = data.data[0].counts.facebook + data.data[0].counts.twitter + data.data[0].counts.linkedin + data.data[0].counts.googleplus;
        // encoded
        encoded_url = encodeURIComponent(url),
        encoded_url_short = encodeURIComponent(url_short),
        encoded_title = encodeURIComponent(title).replace(/\'/g,'%27'),
        encoded_title_twitter = encodeURIComponent(title_twitter).replace(/\'/g,'%27'),
        // share urls
        //share_facebook = 'https://www.facebook.com/sharer/sharer.php?u='+encoded_url+'',
        share_twitter = 'https://twitter.com/intent/tweet?source='+settings.source+'&via='+settings.twitter_via+'&text='+encoded_title_twitter+'&url='+encoded_url_short+'',
        share_linkedin = 'http://www.linkedin.com/shareArticle?mini=true&url='+encoded_url+'&source='+settings.source+'',
        share_googleplus = 'https://plus.google.com/share?url='+encoded_url+'',
        share_reddit = 'http://reddit.com/submit?url='+encoded_url+'&title='+encoded_title+'',
        share_stumbleupon = 'http://www.stumbleupon.com/submit?url='+encoded_url+'&title='+encoded_title+'',
        share_tumblr = 'http://www.tumblr.com/share/quote?quote='+encoded_title+'&source='+encoded_url+'&tags=financial,trade,news,ideas,analysis,stock,market,benzinga',
        share_whatsapp = 'whatsapp://send?text='+url_plain+'';

        // facebook
        if (jQuery.browser.mobile == false) {
        var share_facebook = 'https://www.facebook.com/sharer/sharer.php?u='+encoded_url+'';
        } else if (jQuery.browser.mobile == true) {
          var share_facebook = 'https://m.facebook.com/sharer.php?u='+encoded_url+''; 
        }
        // email
        if (settings.email_callback == null){
          var email_href = 'mailto:?subject='+encoded_title+'&amp;body='+email_teaser+'Check%20out%3A%20'+encoded_url+'.%0A%0AFor%20more%20financial%20news%20and%20trade%20ideas%2C%20check%20out%20http%3A%2F%2Fbenzinga.com.';
        } else {
          var email_href = "#null";
        }

        // inject elements into dom
        $(element).append(
          '<!------ facebook ------>'
          +'<div class="share-btn share-btn--facebook '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="facebook" href="#null" data-link="'+share_facebook+'" onclick="shareDialog(\''+share_facebook+'\',null,515,380,closeCallback,\''+url_plain+'\','+track+'); return false;" data-hint="Share on Facebook"><p class="share-text share-text--count">'+count_facebook+'</p><p class="share-text share-text--name hidden">Share</p></a></div>'
          +'<!------ twitter ------>'
          +'<div class="share-btn share-btn--twitter '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="twitter" href="#null" data-link="'+share_twitter+'" onclick="shareDialog(\''+share_twitter+'\',null,430,340,closeCallback,\''+url_plain+'\','+track+');" data-hint="Share on Twitter"><p class="share-text share-text--count">'+count_twitter+'</p><p class="share-text share-text--name hidden">Tweet</p></a></div>'
          +'<!------ linkedin ------>'
          +'<div class="share-btn share-btn--linkedin '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="linkedin" href="#null" data-link="'+share_linkedin+'" onclick="shareDialog(\''+share_linkedin+'\',null,620,450,closeCallback,\''+url_plain+'\','+track+');" data-hint="Share on Linkedin"><p class="share-text share-text--count">'+count_linkedin+'</p><p class="share-text share-text--name hidden">Share</p></a></div>'
          +'<!------ google+ ------>'
          +'<div class="share-btn share-btn--googleplus '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="googleplus" href="#null" data-link="'+share_googleplus+'" onclick="shareDialog(\''+share_googleplus+'\',null,515,505,closeCallback,\''+url_plain+'\','+track+');" data-hint="Share on Google+"><p class="share-text share-text--count">'+count_googleplus+'</p><p class="share-text share-text--name hidden">+1</p></a></div>'
          +'<!------ stumbleupon ------>'
          +'<div class="share-btn share-btn--stumbleupon '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="stumbleupon" href="#null" data-link="'+share_stumbleupon+'" onclick="shareDialog(\''+share_stumbleupon+'\',null,800,540,closeCallback,\''+url_plain+'\','+track+');" data-hint="Share on StumbleUpon"><p class="share-text share-text--count">'+count_stumbleupon+'</p><p class="share-text share-text--name hidden">Share</p></a></div>'
           +'<!------ shares ------>'
          +'<div class="share-btn share-btn--shares '+settings.style+' not-link"><a class="share-link '+settings.tooltip_prop+'" href="#null" data-hint="Total Share Count"><p class="share-text share-text--count shared-count">' + count_total + '</p><p class="share-text share-text--name hidden">Shares</p></a></div>'
          +'<!------ tumblr ------>'
          +'<div class="share-btn share-btn--tumblr '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="tumblr" href="#null" data-link="'+share_tumblr+'" onclick="shareDialog(\''+share_tumblr+'\',null,800,540,closeCallback,\''+url_plain+'\','+track+');" data-hint="Share on Tumblr"><p class="share-text share-text--count">-</p><p class="share-text share-text--name hidden">Share</p></a></div>'
          +'<!------ views ------>'
          +'<div class="share-btn share-btn--views '+settings.style+' not-link"><a class="share-link '+settings.tooltip_prop+'" href="#null" data-hint="View Count"><p class="share-text share-text--count view-count"><span class="bzcount text" rel="'+url_plain+'">0</span></p><p class="share-text share-text--name hidden">Views</p></a></div>'
          +'<!------ reddit ------>'
          +'<div class="share-btn share-btn--reddit '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="reddit" href="#null" data-link="'+share_reddit+'" onclick="shareDialog(\''+share_reddit+'\',null,1000,580,closeCallback,\''+url_plain+'\','+track+');" data-hint="Share on Reddit"><p class="share-text share-text--count">'+count_reddit+'</p><p class="share-text share-text--name hidden">Share</p></a></div>'
          +'<!------ comments ------>'
          +'<div class="share-btn share-btn--comments '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="comments" href="#'+settings.comments_element_id+'" data-hint="Leave a Comment"><p class="share-text share-text--count comment-count">' + count_comment + '</p><p class="share-text share-text--name hidden">Comment</p></a></div>'
          +'<!------ email ------>'
          +'<div class="share-btn share-btn--email '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="email" href="'+email_href+'" data-hint="Share via Email"><p class="share-text share-text--count">Email</p><p class="share-text share-text--name hidden">Email</p></a></div>'
          +'<!------ WhatsApp ------>'
          +'<div class="share-btn share-btn--whatsapp '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="whatsapp" href="'+share_whatsapp+'" data-hint="Share on WhatsApp"><p class="share-text share-text--count"></p><p class="share-text share-text--name hidden">Share on WhatsApp</p></a></div>'
          +'<!------ print ------>'
          +'<div class="share-btn share-btn--print '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" data-share="print" href="#null" onclick="" data-hint="Print Page"><p class="share-text share-text--count hidden">print</p><p class="share-text share-text--name hidden">Print</p></a></div>');
      
        

        // track click events
        if (settings.share_callback != null){
          $('div.share-btn a').on('click', function(){
            var network = $(this).attr('data-share');
            shareObj = {
              action: 'click',
              category: 'Social Share',
              label: 'Social Share: '+network+'',
            };
            // call share_callback function
            settings.share_callback(shareObj);
          });
        }
        
        if (settings.admin == true) {
          $('div.share-btn:last').after('<div class="share-btn share-btn--twitter twitter-sharers '+settings.style+'"><a class="share-link '+settings.tooltip_prop+'" href="#null" onclick="shareDialog(\'https://twitter.com/search?q='+encoded_url+'&f=realtime\',null,900,540,closeCallback,\''+url_plain+'\','+track+');" data-hint="See Twitter Sharers"><p class="share-text share-text--count">sharers</p><p class="share-text share-text--name">Sharers</p></a></div>');
        }

        // email callback
        if (settings.email_callback != null) {
        
          $('div.share-btn.share-btn--email a.share-link').on('click', function(e){
              e.preventDefault();
              e.stopPropagation();
              settings.email_callback.call(this);
            });

        }

        // use mailto if no email_callback is defined. Update: conditional now being done using email_href.
        // Not being used after previous update. Commented out 12/28/2014

        // $(document).ready(function(){
        //   if (settings.email_callback == null){
        //     $('div.share-btn.share-email a.share-link').attr('href','mailto:?subject='+encoded_title+'&amp;body='+email_teaser+'Check%20out%3A%20'+encoded_url+'.%0A%0AFor%20more%20financial%20news%20and%20trade%20ideas%2C%20check%20out%20http%3A%2F%2Fbenzinga.com.');
        //   }
        // });

        // Chrome on iOS window.open() bug workout
        if (device_vendor == 'Apple' && browser_name == 'Chrome'){
          $('div.share-btn a').attr('target','_blank').removeAttr('onclick'); // open sharing link in new window, remove onclick attribute
          $('div.share-btn a').attr('href', function() {
            var href = $(this).attr('data-link');
            $(this).removeAttr('data-link');
            return href;
          });
        }

        // print callback
        $('div.share-btn.share-btn--print a.share-link').on('click', function(e){
          e.preventDefault();
          e.stopPropagation();
          if (settings.print_callback != null) {
            settings.print_callback.call(this);
          } else {
            document.onclick = window.print();
          }
        });

        // hide tooltips
        if (settings.tooltip == false) {
          $(element).find('div.share-btn a.share-link').removeAttr('data-hint');
        }

        // show networks
        if (settings.networks_show != null){
          var numberOfButtons = -1,
              show_trimmed = $.trim(settings.networks_show);
          $(element).find('div.share-btn').addClass('hidden');
          $.each(show_trimmed.split(' '), function (index, item) {
            $(element).find('div.share-btn--'+item+'').removeClass('hidden');
            numberOfButtons++;
          });
          // set calculated widths for --responsive styled (width is: Full Container Width - (Button Spacing * Num of Btns + Static Square Print Button w/ No Margin-Right))
          $(element).find('div.share-btn--responsive').css('width', 'calc((100% - (10px * ' + numberOfButtons + ' + 34px))/ ' + numberOfButtons + ')');
        };


        // hide networks;
        if (settings.networks_hide != null){
          $.each(settings.networks_hide.split(' '), function (index, item) {
            $(element).find('div.share-btn--'+item+'').addClass('hidden');
          });
        };

        // Only do if a bz admin/power user is not logged in.
        if ($('.share-btn--shares').hasClass('hidden')){
          // only show number of shares if above 5, otherwise show the corresponding share name
          $('.share-btn--responsive>a>.share-text--count').each(function(){
            if($(this).text() < 5){
              var shareToggles = $(this).siblings('.share-text--name');
              $(this).add(shareToggles).toggleClass('hidden');
            }
          });

        }

      }); // end success
    } // end else if style does not have "no-count" 


    // if settings.style DOES have no-count ()
    // hide tooltips
    if (settings.tooltip == false) {
      $(element).find('div.share-btn a.share-link').removeAttr('data-hint');
    }

    // show networks
        if (settings.networks_show != null){
          var numberOfButtons = -1,
              show_trimmed = $.trim(settings.networks_show);
          $(element).find('div.share-btn').addClass('hidden');
          $.each(show_trimmed.split(' '), function (index, item) {
            $(element).find('div.share-btn--'+item+'').removeClass('hidden');
            numberOfButtons++;
          });

          // set calculated widths for --responsive styled (width is: Full Container Width - (Button Spacing * Num of Btns + Static Square Print Button w/ No Margin-Right))
          $(element).find('div.share-btn--responsive').css('width', 'calc((100% - (10px * ' + numberOfButtons + ' + 34px))/ ' + numberOfButtons + ')');
        };


    }); // ends this.each();
  }; // ends $.sharing_widget plugin function

}); // ends on document ready

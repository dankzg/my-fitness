/*
 * @Description: 
 * @Version: 
 * @Company: Dank
 * @Author: dank.zheng
 * @Date: 2020-05-27 10:16:07
 * @LastEditors: dank.zheng
 * @LastEditTime: 2021-05-28 08:55:45
 */ 
function uaredirect() {
  try {
      if(document.getElementById("bdmark") !=null) {
          return        }
      var b = true;
      var p = window.location.protocol;
      var e = window.location.host;
      var a = window.location.href;

      this.getdomain = function(f) {
        var e = f.indexOf("://");
        if(e > 0) {
            var h = f.substr(e + 3)
        } else {
            var h = f
        }
        var g = /^www\./;
        if (g.test(h)) {
            h = h.substr(4)
        }
        return h
      };
      this.geturl = function(u) {
        var arrUrl = u.split("//");
        var start = arrUrl[1].indexOf("/");
        var relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符
        if(relUrl.indexOf("?") != -1){
          relUrl = relUrl.split("?")[0];
        }
        return relUrl;
      };

      this.getrootdomain = function(f){
        var arr = f.split(".");
        var g = /(localhost)./;
        if (g.test(f)){
          var reg = /.+:(\d{1,5})/;
          let matchObj = f.match(reg)
          if (matchObj) {
            return 'localhost:' + matchObj[1];
          }
          return f;
        }
        if(arr.length === 2){
          return f;
        }
        if(arr.length > 2 && (arr[0] !== 'www' ||arr[0] !== 'm')){
          return arr.slice(1).join('.')
        } 
        return arr.slice(1).join('.') 
      }
      var rdm = this.getrootdomain(e)
      var url = this.geturl(a);
      var f = p + "//m." + rdm + url;
      if (a == f){
        b = false;
      }

      if(b){
        var c = window.location.hash;
        if(!c.match("fromapp")){
          if((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
            location.replace(f)
          }
        }
      }
  } catch(d) {}
}

function checkUndefined(obj,path){
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  let keyArr = path.split('.');
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj) break;
    let key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      break;
    }
  }
  return tempObj ? tempObj[keyArr[i]] : null  
}
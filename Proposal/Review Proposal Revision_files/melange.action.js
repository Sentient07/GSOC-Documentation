(function(){if(window.melange===undefined){throw new Error("Melange not loaded");}var melange=window.melange;melange.action=window.melange.action=function(){return new melange.action();};var $m=melange.logging.debugDecorator(melange.action);$m.toggleButton=function(id,type,postUrl,initState,labels,callback){jQuery(document).ready(function(){if(type){type="."+type}jQuery(type+" :checkbox#"+id).iphoneStyle({checkedLabel:labels.checked,uncheckedLabel:labels.unchecked}).change(function(){jQuery.post(postUrl,{id:id,value:initState,xsrf_token:window.xsrf_token},function(){if(callback!==undefined&&typeof(callback)==="function"){callback();}});});});};$m.toggleButtonWithTwoActions=function(id,type,onCheckUrl,onUncheckUrl,initState,labels,callback){jQuery(document).ready(function(){jQuery("#"+id+":checkbox").attr("disabled",type==="disabled").iphoneStyle({checkedLabel:labels.checked,uncheckedLabel:labels.unchecked}).change(function(){var isChecked=jQuery(this).is(":checked");var postUrl=isChecked?onCheckUrl:onUncheckUrl;jQuery.ajax({type:"POST",url:postUrl,data:{id:id,value:isChecked,xsrf_token:window.xsrf_token},success:function(){if(callback!==undefined&&typeof(callback)==="function"){callback();}},error:function(){}});});});};$m.createCluetip=function(){jQuery(document).ready(function(){jQuery("a.load-tooltip").cluetip({local:true,cursor:"pointer",showTitle:false,tracking:true,dropShadow:false});});};}());
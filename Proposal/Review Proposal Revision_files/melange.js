(function(){var melange=window.melange=function(){return new melange();};if(window.jQuery===undefined){throw new Error("jQuery package must be loaded exposing jQuery namespace");}var $m=melange;$m.config={};$m.init=function(configuration){if(configuration){$m.config=jQuery.extend($m.config,configuration);}};$m.clone=function(object){return jQuery.extend(true,{},object);};$m.setOptions=function(options){switch(options.debug){case true:$m.logging.setDebug();break;case false:$m.logging.unsetDebug();break;default:$m.logging.setDebug();}if(options.debugLevel){$m.logging.setDebugLevel(options.debugLevel);}};$m.tinyMceConfig=function(textareas,config_switch){var tinymce_settings={"basic":{"height":400,"width":"100%","mode":"exact","browser_spellcheck":true,"relative_urls":0,"remove_script_host":0,"statusbar":false,"theme":"modern","setup":function(editor){editor.on('init',function(){this.getDoc().body.style.fontSize='12pt';});},},"advanced":{"plugins":["advlist autolink link image lists charmap preview hr anchor pagebreak","searchreplace visualblocks visualchars fullscreen code","insertdatetime media nonbreaking save table directionality","paste textcolor"],"toolbar":"insertfile undo redo | bold italic | alignleft aligncenter \
          alignright alignjustify | outdent indent | preview fullscreen | bullist \
          numlist | forecolor fontselect fontsizeselect ",},"admin":{"plugins":["code",],}};var returned_tinymce_settings=tinymce_settings.basic;if(config_switch!==undefined&&config_switch!==null&&tinymce_settings[config_switch]!==undefined){jQuery.extend(returned_tinymce_settings,tinymce_settings[config_switch]);}var textareaids=textareas.join(",");return jQuery.extend(returned_tinymce_settings,{elements:textareaids});};$m.loadGoogleApi=function(modulename,moduleversion,settings,callback){if(!modulename||!moduleversion){throw new TypeError("modulename and moduleversion must be defined");}var options={name:modulename,version:moduleversion,settings:settings};jQuery.extend(options.settings,{callback:callback});google.load(options.name,options.version,options.settings);};(function(){melange.cookie=window.melange.cookie=function(){return new melange.cookie();};var $m=melange.cookie;$m.MELANGE_COOKIE_VERSION="20120420";$m.MELANGE_USER_PREFERENCES="melange_user_preferences";var cookie_to_save={version:$m.MELANGE_COOKIE_VERSION,lists_configuration:{}};$m.getCookie=function(cookie_name){var cookie=jQuery.cookie(cookie_name);try{cookie=JSON.parse(cookie);if(cookie===null){throw"null_cookie";}}catch(e){cookie=cookie_to_save;}return cookie;};$m.saveCookie=function(cookie_name,cookie_content,cookie_expires,cookie_path){jQuery.extend(cookie_to_save,cookie_content);jQuery.cookie(cookie_name,JSON.stringify(cookie_to_save),{expires:cookie_expires,path:cookie_path});};}());(function(){melange.error=window.melange.error=function(){return new melange.error();};var $m=melange.error;var error_types=["DependencyNotSatisfied","notImplementedByChildClass"];$m.createErrors=function(error_types){jQuery.each(error_types,function(){melange.error[this]=Error;});};$m.createErrors(error_types);}());(function(){melange.logging=window.melange.logging=function(){return new melange.logging();};var $m=melange.logging;var debug=false;var current_debug_level=5;$m.setDebug=function(){debug=true;};$m.unsetDebug=function(){debug=false;};$m.isDebug=function(){return debug?true:false;};$m.setDebugLevel=function(level){if(isNaN(level)){throw new melange.error.TypeError("melange.logging.setDebugLevel: parameter must be a number");}if(level<=0){level=1;}if(level>=6){level=5;}current_debug_level=level;};$m.getDebugLevel=function(){return current_debug_level;};$m.debugDecorator=function(object_to_decorate){object_to_decorate.log=function(level,message){if(melange.logging.isDebug()&&current_debug_level>=level){console.debug(message);}};return object_to_decorate;};}());(function(){melange.templates=window.melange.templates=function(){return new melange.templates();};var $m=melange.logging.debugDecorator(melange.templates);melange.error.createErrors([]);var contextQueue=[];$m.setContextToLast=function(context){contextQueue.push(context);};$m._baseTemplate=function(){this.context=contextQueue.pop();};$m.inherit=function(template_object){template_object.prototype=new melange.templates._baseTemplate();template_object.prototype.constructor=template_object;template_object.apply(template_object,[template_object,template_object.prototype.context]);};}());}());window.melange=window.melange.logging.debugDecorator(window.melange);
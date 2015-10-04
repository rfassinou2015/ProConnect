var cate = "";
var timeout = "";
var timeout1 = "";
var divTop = 0;
var obj = "";
var overlay_opend = 0;
var delay = 800;
var lasPos = 0;
var headerTop = 217;
var perInc = 1;
var DOMTYPE = "";
if (document.getElementById) {
    DOMTYPE = "std";
} else {
    if (document.layers) {
        DOMTYPE = "ns4";
    } else {
        if (document.all) {
            DOMTYPE = "ie4";
        }
    }
}
if (typeof ILSESSION == "undefined") {
    ILSESSION = "";
}
var AGENT = navigator.userAgent.toLowerCase();
var checkopera = (AGENT.indexOf("opera") != -1);
var checksaf = ((AGENT.indexOf("safari") != -1) || (navigator.vendor == "Apple Computer, Inc."));
var checkwebtv = (AGENT.indexOf("webtv") != -1);
var checkie = ((AGENT.indexOf("msie") != -1) && (!checkopera) && (!checksaf) && (!checkwebtv));
var checkie4 = ((checkie) && (AGENT.indexOf("msie 4.") != -1));
var checkie7 = ((checkie) && (AGENT.indexOf("msie 7.") != -1));
var checkmoz = ((navigator.product == "Gecko") && (!checksaf));
var checkkon = (AGENT.indexOf("konqueror") != -1);
var checkns = ((AGENT.indexOf("compatible") == -1) && (AGENT.indexOf("mozilla") != -1) && (!checkopera) && (!checkwebtv) && (!checksaf));
var checkns4 = ((checkns) && (parseInt(navigator.appVersion) == 4));
var checkmac = (AGENT.indexOf("mac") != -1);
var checkchrome = (AGENT.indexOf("chrome") != -1);
var rotate_delay = 5000;
var current = 0;
var attw = null;
var drww = null;
var checkobj = null;
var ilobjects = new Array();
var category_popup_timer = null;
var REGEXP_Compatible = (window.RegExp) ? true : false;
var AJAX_Compatible = false;
function fetch_session_id() {
    return(ILSESSION == "" ? "" : ILSESSION.substr(2, 32));
}
function fetch_js_object(idname) {
    if (document.getElementById) {
        return document.getElementById(idname);
    } else {
        if (document.all) {
            return document.all[idname];
        } else {
            if (document.layers) {
                return document.layers[idname];
            } else {
                return null;
            }
        }
    }
}
function fetch_js_cookie(name) {
    v3cookiename = name + "=";
    v3cookiesize = document.cookie.length;
    v3cookiestart = 0;
    while (v3cookiestart < v3cookiesize) {
        v3cookievalue = v3cookiestart + v3cookiename.length;
        if (document.cookie.substring(v3cookiestart, v3cookievalue) == v3cookiename) {
            var v3cookievalue2 = document.cookie.indexOf(";", v3cookievalue);
            if (v3cookievalue2 == -1) {
                v3cookievalue2 = v3cookiesize;
            }
            return unescape(document.cookie.substring(v3cookievalue, v3cookievalue2));
        }
        v3cookiestart = document.cookie.indexOf(" ", v3cookiestart) + 1;
        if (v3cookiestart == 0) {
            break;
        }
    }
    return null;
}
function update_js_cookie(name, value, expires) {
    if (!expires) {
        expires = new Date();
    }
    document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString() + "; path=/";
}
function update_js_collapse_cookie(objid, setcookiedata, cookiename) {
    var cookiedata = fetch_js_cookie(cookiename);
    var cookietemp = new Array();
    if (cookiedata != null) {
        cookiedata = cookiedata.split("|");
        for (i in cookiedata) {
            if (cookiedata[i] != objid && cookiedata[i] != "") {
                cookietemp[cookietemp.length] = cookiedata[i];
            }
        }
    }
    if (setcookiedata) {
        cookietemp[cookietemp.length] = objid;
    }
    cookieexpire = new Date();
    cookieexpire.setTime(cookieexpire.getTime() + (500 * 86400 * 365));
    update_js_cookie(cookiename, cookietemp.join("|"), cookieexpire);
}
function confirm_js(message) {
    grayscale = document.getElementsByTagName("html");
    grayscale[0].style.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)";
    if (confirm(message)) {
        return true;
    } else {
        grayscale[0].style.filter = "";
        return false;
    }
}
function alert_js(message) {
    grayscale = document.getElementsByTagName("html");
    grayscale[0].style.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)";
    if (alert(message)) {
        return true;
    } else {
        grayscale[0].style.filter = "";
        return false;
    }
}
function log_out() {
    grayscale = document.getElementsByTagName("html");
    grayscale[0].style.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)";
    if (confirm("Are you sure to log out?")) {
        return true;
    } else {
        grayscale[0].style.filter = "";
        return false;
    }
}
function showImage(imagename, imageurl, errors) {
    document[imagename].src = imageurl;
    if (!haveerrors && errors) {
        haveerrors = errors;
        if (obj = fetch_js_object("inlineerror")) {
            obj.innerHTML = '<img name="inlineerror" src="images/default/icons/fieldempty.gif" width="21" height="13" border="0" alt="" />';
        }
    }
}
function popUP(mypage, myname, w, h, scroll, titlebar) {
    var winl = (screen.width - w) / 2;
    var wint = (screen.height - h) / 2;
    winprops = "height=" + h + ",width=" + w + ",top=" + wint + ",left=" + winl + ",scrollbars=" + scroll + ",resizable";
    win = window.open(mypage, myname, winprops);
    if (parseInt(navigator.appVersion) >= 4) {
        win.window.focus();
    }
}
function noenter() {
    return !(window.event && window.event.keyCode == 13);
}
function verifynotify(field1, field2, result_id, match_html, nomatch_html) {
    this.field1 = field1;
    this.field2 = field2;
    this.result_id = result_id;
    this.match_html = match_html;
    this.nomatch_html = nomatch_html;
    this.check = function() {
        if (!this.result_id) {
            return false;
        }
        if (!document.getElementById) {
            return false;
        }
        r = fetch_js_object(this.result_id);
        if (!r) {
            return false;
        }
        if ((this.field1.value != "" && this.field1.value == this.field2.value) && this.field1.value.length >= 4) {
            r.innerHTML = this.match_html;
        } else {
            r.innerHTML = this.nomatch_html;
        }
    };
}
function dateValidation(date) {
    if (date.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)) {
        var mm = RegExp.$1;
        var dd = RegExp.$2;
        var yy = RegExp.$3;
        var dt = new Date(parseFloat(yy), parseFloat(mm) - 1, parseFloat(dd), 0, 0, 0, 0);
        if (parseFloat(dd) != dt.getDate()) {
            return false;
        }
        if (parseFloat(mm) - 1 != dt.getMonth()) {
            return false;
        }
        if (parseFloat(yy) != dt.getFullYear()) {
            return false;
        }
        return true;
    } else {
        return false;
    }
}
Number.prototype.formatMoney = function(c, d, t) {
    var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
Array.prototype.arrayValueExist = function(search) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == search) {
            return true;
        }
    }
    return false;
};
function passVerification1() {
    $("#password_result").html("");
    if ($("#password").val().length >= 4) {
        $("#aj_password1error").attr({"src": IMAGEBASE + "/icons/fieldempty.gif"});
        if ($("#password").val() == $("#password2").val()) {
            $("#password_result").html('<span style="color:blue"><img src="' + IMAGEBASE + '/icons/checkmark.gif" border="0" alt="" /></span>');
        } else {
            $("#password_result").html("");
        }
    } else {
        $("#password_result").html("");
    }
}
function passVerification2() {
    $("#password_result").html("");
    if ($("#password").val().length >= 4) {
        if ($("#password").val() == $("#password2").val()) {
            $("#password_result").html('<span style="color:blue"><img src="' + IMAGEBASE + '/icons/checkmark.gif" border="0" alt="" /></span>');
        } else {
            $("#password_result").html("");
        }
    } else {
        $("#password_result").html("");
    }
}
function passVerification3() {
    $("#password_result").html("");
    if ($("#aj_password").val().length >= 4) {
        if ($("#aj_password1").val() == $("#aj_password").val()) {
            $("#password_result").html('<span style="color:blue"><img src="' + IMAGEBASE + '/icons/checkmark.gif" border="0" alt="" /></span>');
        } else {
            $("#password_result").html("");
        }
    } else {
        $("#password_result").html("");
    }
}
function showInterviewType(obj, cid, bid, uid, pname) {
    $(".pop_inner_content").css({"display": "none"});
    $(".hidden_loading").fadeIn(100);
    $(".pop_header .sub_header").html(" &raquo interview for " + pname);
    $("#qust_cid").val(cid);
    $.ajax({type: "POST", url: "overlay_interview.php", data: "mode=show-interview-type&cid=" + cid + "&bid=" + bid + "&pid=" + uid, success: function(msg) {
            $(".pop_inner_content").html(msg);
            $(".hidden_loading").fadeOut(1000, function() {
                $(".hidden_loading").css({"display": "none"});
                $(".pop_inner_content").fadeIn(100);
            });
        }});
}
function showInterviewQuestions(cid, bid, uid) {
    var parms = $("#fromQustType").serialize();
    var type = $("#fromQustType input:radio[name=type]:checked").val();
    $(".pop_inner_content").css({"display": "none"});
    $(".hidden_loading").fadeIn(100);
    $("#qust_cid").val(cid);
    $.ajax({type: "POST", url: "overlay_interview.php", data: parms + "&mode=show-interview-questions&cid=" + cid + "&bid=" + bid + "&pid=" + uid, success: function(msg) {
            $(".pop_inner_content").html(msg);
            $(".hidden_loading").css({"display": "none"});
            $(".pop_inner_content").fadeIn(100);
            if (type == 1) {
                $("#qust_tbl").tableDnD({onDragClass: "tbl_move", dragHandle: "tbl_sort"});
                $("#qust_bid").val(bid);
                $("#qust_pid").val(uid);
            }
        }});
}
function phoneInterviewQuestions(cid, bid, uid) {
    $(".pop_inner_content").css({"display": "none"});
    $(".hidden_loading").fadeIn(100);
    $("#qust_cid").val(cid);
    $("#qust_cid").val(cid);
    $.ajax({type: "POST", url: "overlay_interview.php", data: "mode=phone-interview-questions&cid=" + cid + "&bid=" + bid + "&pid=" + uid, success: function(msg) {
            $(".pop_inner_content").html(msg);
            $(".hidden_loading").css({"display": "none"});
            $(".pop_inner_content").fadeIn(100);
            $("#qust_bid").val(bid);
            $("#qust_pid").val(uid);
        }});
}
function showQuestionAdd() {
    var _html = $(".addCustomQuestion").html();
    _html = _html.replace(/formQuestions/gi, "formQuestions1");
    $("#customQustion").html(_html);
    $("#customQustion").animate({"height": "toggle", "opacity": "toggle"}, "slow");
    $("#allQuestions").animate({"height": "toggle", "opacity": "toggle"}, "slow");
    $(".processInteview").css({"display": "none"});
}
function cancelQuestion() {
    $("#customQustion").animate({"height": "toggle", "opacity": "toggle"}, "slow");
    $("#allQuestions").animate({"height": "toggle", "opacity": "toggle"}, "slow");
    $(".processInteview").css({"display": "block"});
}
function addQuestion() {
    haveerrors = true;
    if ($.trim($("#customQustion #formQuestions1 [name=question]").val()) == "") {
        $("#customQustion #formQuestions1 [name=questionerror]").attr({"src": IMAGEBASE + "icons/fieldempty.gif"});
        haveerrors = false;
    } else {
        $("#customQustion #formQuestions1 [name=questionerror]").attr({"src": IMAGEBASE + "icons/blankimage.gif"});
    }
    var parms = $("#customQustion #formQuestions1").serialize();
    if (haveerrors) {
        $("#customQustion").html($(".ajax_loading").html());
        $.ajax({type: "POST", url: "overlay_interview.php", data: parms, success: function(msg) {
                $("#qust_tbl tr:last").after(msg);
                $("#customQustion").css({"display": "none"});
                $("#allQuestions").css({"display": "block"});
                $(".processInteview").css({"display": "block"});
                $("#qust_tbl").tableDnD({onDragClass: "tbl_move", dragHandle: "tbl_sort"});
            }});
    }
}
function checkAllQuestion() {
    if ($("#checkall").attr("checked")) {
        $('#fromQustList input[name="qid[]"]').attr({"checked": true});
    } else {
        $('#fromQustList input[name="qid[]"]').attr({"checked": false});
    }
}
function saveInterviewQust() {
    var iz_checked = false;
    $('#fromQustList input[name="qid[]"]').each(function() {
        if (!iz_checked && $(this).is(":checked")) {
            iz_checked = true;
        }
    });
    if (!iz_checked) {
        alert("Please select the interview questions.");
        return false;
    }
    var parms = $("#fromQustList").serialize();
    $(".pop_inner_content").css({"display": "none"});
    $(".hidden_loading").fadeIn(100);
    $.ajax({type: "POST", url: "overlay_interview.php", data: parms, success: function(msg) {
            $(".pop_inner_content").html(msg);
            $(".hidden_loading").css({"display": "none"});
            $(".pop_inner_content").fadeIn(100);
        }});
}
function savePhoneInterviewQust() {
    var parms = $("#fromQustList").serialize();
    $(".pop_inner_content").css({"display": "none"});
    $(".hidden_loading").fadeIn(100);
    $.ajax({type: "POST", url: "overlay_interview.php", data: parms + "&qust_cid=" + $("#qust_cid").val(), success: function(msg) {
            $(".pop_inner_content").html(msg);
            $(".hidden_loading").css({"display": "none"});
            $(".pop_inner_content").fadeIn(100);
        }});
}
function showNotes(obj, bid, uid, pname) {
    $(".pop_inner_content").css({"display": "none"});
    $(".hidden_loading").fadeIn(100);
    $(".pop_header .sub_header").html(" &raquo notes for " + pname);
    $.ajax({type: "POST", url: "overlay_notes.php", data: "mode=show-notes&bid_id=" + bid + "&user_id=" + uid, success: function(msg) {
            $(".pop_inner_content").html(msg);
            $(".hidden_loading").fadeOut(1000, function() {
                $(".hidden_loading").css({"display": "none"});
                $(".pop_inner_content").fadeIn(100);
            });
        }});
}
function addNotes(bid, uid) {
    var notes = $.trim($("#notes").val());
    if (notes == "") {
        $("#noteerror").attr("src", IMAGEBASE + "/icons/fieldempty.gif");
    } else {
        $(".pop_inner_content").css({"display": "none"});
        $(".hidden_loading").fadeIn(100);
        $.ajax({type: "POST", url: "overlay_notes.php", data: "mode=add-notes&bid_id=" + bid + "&user_id=" + uid + "&notes=" + notes, success: function(msg) {
                $("#overlay_notes_added").html(msg);
                $.ajax({type: "POST", url: "overlay_notes.php", data: "mode=show-notes&bid_id=" + bid + "&user_id=" + uid, success: function(msg) {
                        $(".pop_inner_content").html(msg);
                        $(".hidden_loading").fadeOut(1000, function() {
                            $(".hidden_loading").css({"display": "none"});
                            $(".pop_inner_content").fadeIn(100);
                        });
                    }});
            }});
    }
}
function attendInterview() {
    return validatecustomform();
}
function numOnly(evt) {
    var charCode = (evt.which) ? evt.which : window.event.keyCode;
    if (charCode <= 13) {
        return true;
    } else {
        var keyChar = String.fromCharCode(charCode);
        var re = /[0-9]/;
        return re.test(keyChar);
    }
}
function numOnly(evt) {
    var charCode = (evt.which) ? evt.which : window.event.keyCode;
    if (charCode <= 13) {
        return true;
    } else {
        var keyChar = String.fromCharCode(charCode);
        var re = /[0-9]/;
        return re.test(keyChar);
    }
}
function amountOnly(evt) {
    var charCode = (evt.which) ? evt.which : window.event.keyCode;
    if (charCode <= 13) {
        return true;
    } else {
        var keyChar = String.fromCharCode(charCode);
        var re = /[0-9.]/;
        return re.test(keyChar);
    }
}
function numOnlyAndPlus(evt) {
    var charCode = (evt.which) ? evt.which : window.event.keyCode;
    if (charCode <= 13) {
        return true;
    } else {
        var keyChar = String.fromCharCode(charCode);
        var re = /[0-9+]/;
        return re.test(keyChar);
    }
}
function alphaOnly(evt) {
    var charCode = (evt.which) ? evt.which : window.event.keyCode;
    if (charCode <= 13) {
        return true;
    } else {
        var keyChar = String.fromCharCode(charCode);
        var re = /[a-zA-Z]/;
        return re.test(keyChar);
    }
}
function alphaNumOnly(evt) {
    var charCode = (evt.which) ? evt.which : window.event.keyCode;
    if (charCode <= 13) {
        return true;
    } else {
        var keyChar = String.fromCharCode(charCode);
        var re = /[a-zA-Z0-9_-]/;
        return re.test(keyChar);
    }
}
function alphaNumSpaceOnly(evt) {
    var charCode = (evt.which) ? evt.which : window.event.keyCode;
    if (charCode <= 13) {
        return true;
    } else {
        var keyChar = String.fromCharCode(charCode);
        var re = /[\sa-zA-Z0-9_-]/;
        return re.test(keyChar);
    }
}
function noWhiteSpace(evt) {
    var charCode = (evt.which) ? evt.which : window.event.keyCode;
    if (charCode <= 13) {
        return true;
    } else {
        var keyChar = String.fromCharCode(charCode);
        var re = /\s/;
        return !re.test(keyChar);
    }
}
function viewBidMore(cid, bidid) {
    $("#mainbox_" + cate + " .overlay_pop_content_loged").html('<div id="pop_loading"></div>');
    $.ajax({type: "POST", url: "overlay_ajax.php", data: "mode=viewdetails&cid=" + cate + "&bidid=" + bidid, success: function(msg) {
            $("#mainbox_" + cate + " .overlay_pop_content_loged").html(msg);
        }});
    return false;
}
function awardBid(crypted) {
    $("#mainbox_" + cate + " .overlay_pop_content_loged").html('<div id="pop_loading"></div>');
    $.ajax({type: "POST", url: "overlay_ajax.php", data: "mode=awardbid&crypted=" + crypted, success: function(msg) {
            $("#mainbox_" + cate + " .overlay_pop_content_loged").html(msg);
        }});
    return false;
}
function confirmUnAward(crypted) {
    $("#mainbox_" + cate + " .overlay_pop_content_loged").html('<div id="pop_loading"></div>');
    $.ajax({type: "POST", url: "overlay_ajax.php", data: "mode=confirmunaward&crypted=" + crypted, success: function(msg) {
            $("#mainbox_" + cate + " .overlay_pop_content_loged").html(msg);
        }});
    return false;
}
function confirmAward(bid_id, project_id) {
    $("#mainbox_" + cate + " .overlay_pop_content_loged").html('<div id="pop_loading"></div>');
    $.ajax({type: "POST", url: "overlay_ajax.php", data: "mode=confirmaward&bid_id=" + bid_id + "&project_id=" + project_id, success: function(msg) {
            $("#mainbox_" + cate + " .overlay_pop_content_loged").html(msg);
        }});
    return false;
}
function viewWeddingDetails(cid, pid) {
    $(".pop_inner_content").css({"display": "none"});
    $(".hidden_loading").fadeIn(100);
    $.ajax({type: "POST", url: "overlay_ajax.php", data: "mode=viewweddingdetails&cid=" + cate + "&pid=" + pid, success: function(msg) {
            $(".pop_inner_content").html(msg);
            $(".hidden_loading").fadeOut(1000, function() {
                $(".hidden_loading").css({"display": "none"});
                $(".pop_inner_content").fadeIn(100);
            });
        }});
    return false;
}
function backToHome(cid) {
    $(".pop_inner_content").css({"display": "none"});
    $(".hidden_loading").fadeIn(100);
    $.ajax({type: "POST", url: "overlay_ajax.php", data: "mode=experts&cid=" + cid, success: function(msg) {
            $(".pop_inner_content").html(msg);
            $(".hidden_loading").fadeOut(1000, function() {
                $(".hidden_loading").css({"display": "none"});
                $(".pop_inner_content").fadeIn(100);
            });
        }});
    return false;
}
function viewBidDetails(bid) {
    $(".pop_inner_content").css({"display": "none"});
    $(".hidden_loading").fadeIn(100);
    $.ajax({type: "POST", url: "overlay_ajax.php", data: "mode=viewbiddetails&cid=" + cate + "&bid=" + bid, success: function(msg) {
            $(".pop_inner_content").html(msg);
            $(".hidden_loading").fadeOut(1000, function() {
                $(".hidden_loading").css({"display": "none"});
                $(".pop_inner_content").fadeIn(100);
            });
        }});
    return false;
}
function showBidProposal(bid) {
    $(".pop_inner_content").css({"display": "none"});
    $(".hidden_loading").fadeIn(100);
    $.ajax({type: "POST", url: "overlay_ajax.php", data: "mode=showproposal&bid=" + bid, success: function(msg) {
            $(".pop_inner_content").html(msg);
            $(".hidden_loading").fadeOut(1000, function() {
                $(".hidden_loading").css({"display": "none"});
                $(".pop_inner_content").fadeIn(100);
            });
        }});
    return false;
}
function checkCateChoosed() {
    var selected = 0;
    $("input[@name='cid[]']:checked").each(function() {
        selected = 1;
    });
    if (selected == 0) {
        alert("Please select a profesional to compete for your wedding.");
        return false;
    }
}
function enableCustomQust(obj) {
    if (obj.value == "custom") {
        $("#custom_security_question").css({"display": "block"});
    } else {
        $("#custom_security_question").css({"display": "none"});
    }
}
function isValidUSZipCode(value) {
    var re = /^\d{5}([\-]\d{4})?$/;
    return(re.test(value));
}
function resetQuestionCount() {
    $("#cur_question_blocks").val(1);
}
bidson = IMAGEBASE + "star_full.gif";
bidsoff = IMAGEBASE + "star_empty.gif";
enablebidrating = new Array(1);
enablebidratingsend = new Array(1);
function starbidover(sid, bid, from) {
    if (!enablebidrating[bid]) {
        enablebidrating[bid] = 1;
        enablebidratingsend[bid] = 1;
    }
    if (enablebidrating[bid] == 1 || from == 1) {
        if (from == 1) {
            enablebidrating[bid] = 1;
            enablebidratingsend[bid] = 1;
        }
        counter = 5;
        while (counter < 6 && counter > 0) {
            if (counter > sid) {
                fetch_js_object("star" + counter + "_" + bid).src = bidsoff;
            } else {
                fetch_js_object("star" + counter + "_" + bid).src = bidson;
            }
            counter--;
        }
    }
}
function starbiddown(sid, bid) {
    enablebidrating[bid] = 1;
    if (enablebidratingsend[bid] == 1) {
        starbidover(sid, bid, 0);
        saveBidRating(bid, sid);
        enablebidratingsend[bid] = 2;
    }
    enablebidrating[bid] = 2;
}
function saveBidRating(id, rating) {
    $.ajax({type: "POST", url: "ajax.php", data: "do=_save_bid_rating&id=" + id + "&rating=" + rating, success: function(msg) {
            $("#bid_rate_" + id).html(msg);
        }});
}
function showAwsFps() {
    $("#lbmainBig").modal({overlayClose: true, zIndex: 35000});
    $("#lbmainBig .pop_content .pop_header .main_header").html("Setup Amazon Merchant Account");
    $(".pop_inner_content").html($(".awsBox").html());
}
function print_states(fieldname) {
    var ajaxRequest;
    var ajaxDisplay = fetch_js_object("stateid");
    ajaxDisplay.innerHTML = '<div style="height:20px; padding-top:6px"><img src="' + IMAGEBASE + 'working.gif" border="0" alt="" id="working" /></div>';
    try {
        ajaxRequest = new XMLHttpRequest();
    } catch (e) {
        try {
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                return false;
            }
        }
    }
    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == 4) {
            var ajaxDisplay = fetch_js_object("stateid");
            ajaxDisplay.innerHTML = ajaxRequest.responseText;
        }
    };
    var countryname = fetch_js_object("country").options[fetch_js_object("country").selectedIndex].value;
    var querystring = "&countryname=" + countryname + "&fieldname=" + fieldname + "&s=" + ILSESSION + "&token=" + ILTOKEN;
    ajaxRequest.open("GET.html", ILBASE + "ajax.php?do=showstates" + querystring, true);
    ajaxRequest.send(null);
}
function print_cities(fieldname, showall) {
    var ajaxRequest;
    $("#cityid").html('<div style="height:20px; padding-top:6px"><img src="' + IMAGEBASE + 'working.gif" border="0" alt="" id="working" /></div>');
    try {
        ajaxRequest = new XMLHttpRequest();
    } catch (e) {
        try {
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                return false;
            }
        }
    }
    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == 4) {
            $("#cityid").html(ajaxRequest.responseText);
            $("#city").sSelect({ddMaxHeight: "150px"});
        }
    };
    var statename = $("#state").val() + "&show=" + showall;
    var querystring = "&statename=" + statename + "&fieldname=" + fieldname + "&s=" + ILSESSION + "&token=" + ILTOKEN;
    ajaxRequest.open("GET.html", ILBASE + "ajax.php?do=showcities" + querystring, true);
    ajaxRequest.send(null);
}
function page_display() {
    location.href = "index-2.html";
}
function agreesubmit(el) {
    checkobj = el;
    if (document.all || document.getElementById) {
        for (i = 0; i < checkobj.form.length; i++) {
            var tempobj = checkobj.form.elements[i];
            if (tempobj.type.toLowerCase() == "submit") {
                tempobj.disabled = !checkobj.checked;
            }
        }
    }
}
function defaultagree(el) {
    if (!document.all && !document.getElementById) {
        if (window.checkobj && checkobj.checked) {
            return true;
        } else {
            alert(phrase["_please_read_accept_terms_to_submit_form"]);
            return false;
        }
    }
}
function iL_Tasks(location, random) {
    if (AJAX_Compatible) {
        new iL_Cron(location, random);
    }
}
function iL_Cron(_location, _random) {
    this.ilance_xml = null;
    this.link = _location;
    this.httpurl = location.hostname;
    this.random = _random;
    this.url_safe = function() {
        var needs = (this.link.indexOf("//www.") == -1) ? false : true;
        var has = (this.httpurl.indexOf("www.") == -1) ? false : true;
        if (needs && !has) {
            this.link = this.link.replace("http://www./", "http://");
        } else {
            if (!needs && has) {
                this.link = this.link.replace("http://", "http://www./");
            }
        }
    };
    this.do_cron = function() {
        if (!this.ilance_xml) {
            this.ilance_xml = new AJAX_Handler(true);
        }
        this.url_safe();
        this.ilance_xml.onreadystatechange(this.onreadystatechange);
        this.ilance_xml.send(this.link + "?rand=" + this.random, "rand=" + this.random);
    };
    var ilance = this;
    this.onreadystatechange = function() {
        if (ilance.ilance_xml.handler.readyState == 4 && ilance.ilance_xml.handler.status == 200 && ilance.ilance_xml.handler.responseText) {
            if (checkie) {
                ilance.ilance_xml.handler.abort();
            }
        }
    };
    this.do_cron();
}
function menu_show_hide(id) {
    if ($(id).css("display") == "none") {
        $(id).slideDown("slow");
    } else {
        $(id).slideUp("slow");
    }
}
var impl = 0;
function openfed() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("fedbkfrm").style.display = "block";
}
function closefed() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("fedbkfrm").style.display = "none";
}
function chkfunc() {
    if (impl == 0) {
        openfed();
        impl = 1;
    } else {
        closefed();
        impl = 0;
    }
}
function sendfedbkmail() {
    var email = document.getElementById("txtemail").value;
    var comment = document.getElementById("tareacomment").value;
    if (validateEmail(email)) {
    } else {
        document.getElementById("txtemail").style.border = "1px solid #F00";
        document.getElementById("txtemail").style.color = "#F00";
        return false;
    }
    field = "#captcha";
    if ($.trim($(field).val()).length < 1 || $.trim($(field).val()) == "") {
        $(field).css({"border": "1px solid #F00", "color": "#F00"});
        return false;
    } else {
        $(field).css({"border": "0", "color": "#666666"});
    }
    newfbackCaptcha(email, comment);
}
function validateEmail(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}
function showHint(email, comment) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (xmlhttp.responseText == "yes") {
                document.getElementById("fedbkfrm").innerHTML = "";
                document.getElementById("fedbkfrm").innerHTML = '<div id="txtAlert" style="color:#00FF00; font-size:18px; font-weight:bold; text-align:center; margin-top:100px;">Your feedback has been sent</div><div align="center"><div style="margin:20px auto ; width: 110px; cursor:pointer;background-image:url(/images/default/cancel.png);color:#fff;height:35px;padding-top:8px;text-align:center;background-repeat:no-repeat;font-size: 14px;font-weight: bold;" onclick="chkfunc();">close</div></div>';
            } else {
                document.getElementById("fedbkfrm").innerHTML = "";
                document.getElementById("fedbkfrm").innerHTML = '<div id="txtAlert" style="color:#f00; font-size:18px; font-weight:bold; text-align:center; margin-top:100px;">Your feedback has not been sent</div><div align="center"><div style="margin:20px auto ; width: 110px; cursor:pointer;background-image:url(/images/default/cancel.png);color:#fff;height:35px;padding-top:8px;text-align:center;background-repeat:no-repeat;font-size: 14px;font-weight: bold;" onclick="chkfunc();">close</div></div>';
            }
        }
    };
    xmlhttp.open("GET.html", "wedding_wall_ajax259b.html?mode=_sendfeedback&amp;email=" + email + "&comment=" + comment, true);
    xmlhttp.send();
    document.getElementById("fedbkfrm").innerHTML = "";
    document.getElementById("fedbkfrm").innerHTML = '<div id="txtAlert" style="color:#00FF00; font-size:18px; font-weight:bold; text-align:center; margin-top:100px;"><img src="images/default/sendingmail.html" /></div>';
}
function closefeeback() {
    document.getElementById("fedbkfrm").innerHTML = '<div style="float: right; margin-right: -15px; margin-top: -20px; width: 47px; cursor:pointer;" onclick="chkfunc();">X close</div><div style="font-size:13px; color:#3998B5; font-weight:bold;">Submit Feedback, Questions, issues, and praises here</div><div>EMAIL</div><div><input type="text" name="txtemail" id="txtemail" style="width:375px;"  class="input_dbox2"/></div><div>COMMENT</div><div><textarea name="tareacomment" id="tareacomment" style="width:375px; height:100px;" class="input_dbox2"></textarea></div><div><h3>Please type the code shown:</h3></div><div style="height:50px;"><span style="float:left;"><img src="captcha/captcha.php" id="img_captcha" /></span><span style="float:left;padding-top:20px;"><input type="text" name="captcha_word" id="captcha" value="" title="" /></span><span style="float:left; padding:20px 0px 0px 5px;"><a href="javascript:void(0)" onclick="recreatefbackCaptcha()">New code</a></span></div><div><input type="image" src="/images/default/sendbtn.jpg" onclick="sendfedbkmail()" ></div>';
    document.getElementById("overlay").style.display = "none";
    document.getElementById("fedbkfrm").style.display = "none";
    impl = 0;
}
function newfbackCaptcha(email, comment) {
    $.ajax({type: "POST", url: "captcha/verify.php?captcha=" + $.trim($("#captcha").val()), success: function(msg) {
            if (msg == "SUCCESS") {
                showHint(email, comment);
            } else {
                $(field).css({"border": "1px solid #990000", "color": "#990000"});
                $(field).val("");
                $("#img_captcha").attr({"src": "captcha/captcha.php?" + Math.random()});
            }
        }});
}
function recreatefbackCaptcha() {
    $("#img_captcha").attr({"src": "captcha/captcha.php?" + Math.random()});
}
function sendfeedbackmail() {
    var email = "";
    var comment = document.getElementById("tareacomment").value;
    if (comment == "") {
        document.getElementById("tareacomment").style.border = "1px solid #F00";
        document.getElementById("tareacomment").style.color = "#F00";
        return false;
    } else {
        document.getElementById("tareacomment").style.border = "1px solid #D2D2D2";
        document.getElementById("tareacomment").style.color = "#333";
    }
    field = "#captcha";
    if ($.trim($(field).val()).length < 1 || $.trim($(field).val()) == "") {
        $(field).css({"border": "1px solid #F00", "color": "#F00"});
        return false;
    } else {
        $(field).css({"border": "0", "color": "#666666"});
    }
    newfbackCaptcha(email, comment);
}
var hexcase = 0;
var b64pad = "";
var chrsz = 8;
function hex_md5(s) {
    return binl2hex(core_md5(str2binl(s), s.length * chrsz));
}
function b64_md5(s) {
    return binl2b64(core_md5(str2binl(s), s.length * chrsz));
}
function str_md5(s) {
    return binl2str(core_md5(str2binl(s), s.length * chrsz));
}
function hex_hmac_md5(key, data) {
    return binl2hex(core_hmac_md5(key, data));
}
function b64_hmac_md5(key, data) {
    return binl2b64(core_hmac_md5(key, data));
}
function str_hmac_md5(key, data) {
    return binl2str(core_hmac_md5(key, data));
}
function core_md5(x, len) {
    x[len >> 5] |= 128 << ((len) % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
    }
    return Array(a, b, c, d);
}
function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}
function core_hmac_md5(key, data) {
    var bkey = str2binl(key);
    if (bkey.length > 16) {
        bkey = core_md5(bkey, key.length * chrsz);
    }
    var ipad = Array(16), opad = Array(16);
    for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 909522486;
        opad[i] = bkey[i] ^ 1549556828;
    }
    var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
    return core_md5(opad.concat(hash), 512 + 128);
}
function safe_add(x, y) {
    var lsw = (x & 65535) + (y & 65535);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return(msw << 16) | (lsw & 65535);
}
function bit_rol(num, cnt) {
    return(num << cnt) | (num >>> (32 - cnt));
}
function str2binl(str) {
    var bin = new Array();
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz) {
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
    }
    return bin;
}
function binl2str(bin) {
    var str = "";
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < bin.length * 32; i += chrsz) {
        str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
    }
    return str;
}
function binl2hex(binarray) {
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 15) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 15);
    }
    return str;
}
function binl2b64(binarray) {
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%2b/index.html";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i += 3) {
        var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 255) << 16) | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 255) << 8) | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 255);
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > binarray.length * 32) {
                str += b64pad;
            } else {
                str += tab.charAt((triplet >> 6 * (3 - j)) & 63);
            }
        }
    }
    return str;
}
function str_to_ent(str) {
    var result = "";
    var i;
    for (i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        var tmp = "";
        if (c > 255) {
            while (c >= 1) {
                tmp = "0123456789".charAt(c % 10) + tmp;
                c = c / 10;
            }
            if (tmp == "") {
                tmp = "0";
            }
            tmp = "#" + tmp;
            tmp = "&" + tmp;
            tmp = tmp + ";";
            result += tmp;
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}
function trim(s) {
    while (s.substring(0, 1) == " ") {
        s = s.substring(1, s.length);
    }
    while (s.substring(s.length - 1, s.length) == " ") {
        s = s.substring(0, s.length - 1);
    }
    return s;
}
function md5(input, outputhtml, outpututf) {
    if (navigator.userAgent.indexOf("Mozilla/index.html") == 0 && parseInt(navigator.appVersion) >= 4) {
        var md5string = hex_md5(str_to_ent(trim(input.value)));
        outputhtml.value = md5string;
        if (outpututf) {
            md5string = hex_md5(trim(input.value));
            outpututf.value = md5string;
        }
        input.value = "";
    }
    return true;
}
$(function()
{
	resizepageHeight();
	$(window).resize(function(){resizepageHeight()});
});
function resizepageHeight()
{
  var wh = $(window).height();
  
  
  if($('.myv-inner-wrap').length > 0)
  {
	  var div = '.myv-inner-wrap';
  }
  else if($('.find-vendor-directory-inner').length > 0)
  {
	  var div = '.find-vendor-directory-inner';
  }
  else if($('.profile-desc-container-new').length > 0)
  {
	 var div = '.profile-desc-container-new';  
  }
  else if($('.main-acc-mid').length > 0)
  {
	  var div = '.main-acc-mid'; 
  }
  else if($('.work-container-inner').length > 0)
  {
	   var div = '.work-container-inner'; 
  }
  else if($('.vendor-common-outer .main-containter').length > 0)
  {
	  var div = '.vendor-common-outer .main-containter'; 
  }
  else if($('.vendor-inner-ver12').length > 0)
  {
	  var div = '.vendor-inner-ver12'; 
  }
   else if($('.vendor-continer .vendor-right').length > 0)
  {
	  var div = '.vendor-continer .vendor-right'; 
  }
   else if($('.review-content-inner').length > 0)
  {
	  var div = '.review-content-inner'; 
  }
  if(div != '')
  {
	  $(div).css('min-height','0px')
	  //$(div).css('height','auto')
	  var bph = $('.wrapper-top-sect').height()+$(div).height()+$('.footer-container').height();
	  
	  if(wh >= bph)
	  {
		  var l = wh-bph;
		  $(div).css('min-height',($(div).height()+l)+'px');
	  }
	  else
	  {
		   $(div).css('min-height','0px');
	  }
  }
  if(div == '.vendor-continer .vendor-right')
  {
	  var lr = $('.vendor-continer .vendor-right').height();
	   var rh  = $('.vendor-continer .vendor-left').height();
	   var h = rh;
	   if(lr >= rh)
	   {
		  h = lr;   
	   }
	   $('.vendor-continer .vendor-left').css('min-height',h+(parseInt($('.vendor-continer .vendor-right').css('padding-top').replace('px',''))+parseInt($('.vendor-continer .vendor-right').css('padding-bottom').replace('px','')))+'px');
	   $('.vendor-continer .vendor-right').css('min-height',h+'px');
  }
}
function reloadToPage(page)
{
	 if(page !='' && page !='undefined')
	 window.location = ILBASE + page;
}
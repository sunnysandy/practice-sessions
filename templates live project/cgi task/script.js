$(document).ready(function () {
    $(".sizeswrap").hide();
    $(".arrowclick").click(function () {
        $(".customercontent").fadeToggle();
        $(".purchasecontent").fadeToggle();

    })
    $(".itemsarrow").click(function () {
        $(".productnames").fadeToggle();
        $(".tablecontent").fadeToggle();
        $(".sizeswrap").fadeToggle();
    })
    $(".paymentarrow").click(function () {
        $(".creditcardhistory").fadeToggle();
    })
    $(".collapsegray").mouseover(function () {
        $(this).css({ "background-color": "gray", "color": "white" });
        $(".collapsemessage").show();
    });
    $(".collapsegray").mouseout(function () {
        $(".collapsemessage").hide();
    });
    $(".copysymbol").click(function () {
        $(this).css({ "background-color": "#d0c7c7", "border-radius": "50%", "font-size": "19px", "padding": "2px;" });
        $(".cross").show();
        $(".applyall").show();
        $(".apply").show();
    });

    $(".activeBtn").click(function () {
        $(this).toggleClass("active");
    })

    $(".apply").click(function () {
        $(this).show();
        $(".appliedtext").show();
        $(".cross").hide();
        $(".applyall").hide();
        $(".editor").show();
    })
    
$(".collapsegray").click(function(){
	$(".sizeswrap").hide();
})

});
function editfun(ele) {
    $(".sizeswrap").eq(ele).fadeToggle();
    $(".sizeswrap").eq(ele).addClass("isedit_" + ele);

    $(".firstvalue").val();
    $(".secondvalue").val();
    $(".thirvalue").val();
}
function applyaAllItems() {
    var editcount = $(".sizeswrap").length;
    for (var i = 0; i < editcount; i++) {
        if ($(".sizeswrap").eq(i).hasClass("isedit_" + i)) {
            var firstvalue = $(".sizeswrap").eq(i).find(".firstvalue").val();
            var secondvalue = $(".sizeswrap").eq(i).find(".secondvalue").val();
            var thirdvalue = $(".sizeswrap").eq(i).find(".thirdvalue").val();
            $("tbody tr").eq(i).find(".unitprice").text(firstvalue)
            $("tbody tr").eq(i).find(".qunantityprice").text(secondvalue)
            $("tbody tr").eq(i).find(".amountprice").text(thirdvalue)
        }   
    }
}
function add(x) {
    var firstvalue = $(".firstvalue").val();
    var secondvalue = $(".secondvalue").val();
    var thirdvalue = $(".thirdvalue").val();
    $("tbody tr").eq(x).find(".unitprice").text(firstvalue)
    $("tbody tr").eq(x).find(".qunantityprice").text(secondvalue)
    $("tbody tr").eq(x).find(".amountprice").text(thirdvalue)
}
function deletebtn(y) {
    $("tbody tr").eq(y).remove();
}
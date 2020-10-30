var currentQ = new Object();
var currentA = "";
var allQuestions = $.extend([], true, test);
var wrongQs = [];
var lineNumber = 0;

function initPage() {
    showLineQ();
    // showRandomQ()
    event();
}

function showLineQ() {
    currentQ = allQuestions[lineNumber];
    currentA = currentQ["answer"]
    $(".question-box").html(currentQ["question"]);
    lineNumber++;
}

function showRandomQ() {
    var random = parseInt(Math.random() * allQuestions.length);
    currentQ = allQuestions[random];
    currentA = currentQ["answer"]
    $(".question-box").html(currentQ["question"]);
}

function event() {
    $(document).on("click", ".answer-box label", function () {
        var seletValue = $(this).find("input").val();
        if (seletValue == currentA) {
            $(".tips").html("回答正确！");
        } else {
            wrongQs.push(currentQ);
            allQuestions.push(currentQ);
            $(".tips").html("正确答案：" + currentA);
            console.log(allQuestions);
        }
        setTimeout(function () {
            showLineQ();
            // showRandomQ();
            $(".tips").html("");
            $.each($(".answer-box input[type='radio']"), function (pro, item) {
                $(item).removeAttr('checked');
            })
        }, 1500)
    })
}

initPage();
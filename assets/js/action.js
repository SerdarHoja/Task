$(document).ready(function() {
    $('.task-box').click(function() {
        $(this).css('background', '#fff');
        $(this).addClass('pl_more');
        $('.text').css('background', '#fff');
        $('.filled').css('display', 'block');
        $('.calendar').css('display', 'block');
        $('.list').css('display', 'flex');
        $('.triangle').show().delay(1500).fadeOut();
    });


    let input = document.querySelector("#task");
    var span = document.querySelector('span');
    input.addEventListener("keyup", function(e) {
        $('.text').css('z-index', '2');
        var value = e.target.value;
        if (value.includes('//')) {
            span.innerHTML = value.split('//')[0] + '<span class="addspan">//' + value.split('//')[1] + '</span><span id="nhide">write note</span>'
            document.getElementById("task").addEventListener("keyup", hdspan);

            function hdspan() {
                document.getElementById('nhide').style.display = 'none';
            }
        } else {
            span.innerHTML = value;
        }
    });
})
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "setRR1"){
        var newRR1 = request.newRR1;
        $('#s_t').val(newRR1);
    }
});
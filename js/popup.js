/* author: Kevin
   date  : 2020/08/02
*/
$(function(){
    var rr1 = $('#kg_rr1').find('option:selected').text();
    $('#kg_rr1').change(function(){
        $('#youselect').text('you selected:' + $('#kg_rr1').find('option:selected').text());
        rr1=$(this).find('option:selected').text();
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "setRR1", "newRR1": rr1})
        });
    });
});
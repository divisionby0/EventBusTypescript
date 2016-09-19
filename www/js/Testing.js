var $ = jQuery.noConflict();

$(document).ready(function($) {

    addListeners();
    dispatchEvent();
    removeListeners();

    console.log("Trying to dispatch events after listeners removed...");
    dispatchEvent();
});

function addListeners(){
    //EventBusTS.addEventListener('event1', event1_listener);
    //EventBusTS.addEventListener('event2', event2_listener);
    EventBusTS.addEventListener('event3', event3_listener);
    EventBusTS.addEventListener('event3', event3_listener1);
}

function dispatchEvent(){
    EventBusTS.dispatchEvent("event1", {data:'data for event1'});
    EventBusTS.dispatchEvent("event2", {data:'data for event2'});
    EventBusTS.dispatchEvent("event3", {data:'data for event3'});
}

function removeListeners(){
    EventBusTS.removeEventListener('event1', event1_listener);
    EventBusTS.removeEventListener('event2', event2_listener);
    EventBusTS.removeEventListener('event3', event3_listener);
    EventBusTS.removeEventListener('event3', event3_listener1);
}

function event1_listener(eventData){
    console.log("event1_listener called with data: ");
    console.log(eventData);
}

function event2_listener(eventData){
    console.log("event2_listener called with data: ");
    console.log(eventData);
}

function event3_listener(eventData){
    console.log("event3_listener called with data: ");
    console.log(eventData);
}
function event3_listener1(eventData){
    console.log("event3_listener1 !!! called with data: ");
    console.log(eventData);
}

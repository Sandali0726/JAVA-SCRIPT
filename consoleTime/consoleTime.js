//console.time() = tool that allows you to measure the time it takes 
//                 for a section of code or process to execute
//                 Great for identifying perforance "battlenecks"
//console.time("label");
//console.timeEnd("label");

function loadData(){
    console.time("loadData");
    for(let i=0;i<1000;i++){
        //pretend to load some data
    }
    console.timeEnd("loadData");

}
loadData();
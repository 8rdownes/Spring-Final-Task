//imports code from other file
const importTask = require("./task.js");
const Task = new importTask();

/*
    If you want to create a task type....... Task.createTask()
    If you want to create a list of task objects type......Task.Factory()
*/


//function should return a totalValue and totalTime variable wrapped in an object
function totals(list){

    let totalValue = 0;
    let totalTime = 0;

    for(a=0;a<list.length;a++){
        totalValue=totalValue+list[a].Value;
        totalTime=totalTime+list[a].Time;
    }

    return {totalValue, totalTime

    }
}

//works the the same as above, but stops short at the kth number in the list
function partialTotals(list,k){

        let totalValue = 0;
        let totalTime = 0;

        for(a=0;a<k;a++){
            totalValue=totalValue+list[a].Value;
            totalTime=totalTime+list[a].Time;

        }

        return {totalValue, totalTime

        }
}

//returns a sorted version of the task list from least to greatest according to its time variable
function sortTime(list){

    return list.sort(function(a,b){
        return a.Time - b.Time;
    });


    //provide the criteria to sort the tasks.  They are objects remember.


}

//returns a sorted version of the task list from least to greatest according to its value variable
function sortValue(list){
    return list.sort(function(a,b){
        return a.Value - b.Value;

    }
}
//returns a sorted version of the task list from least to greatest according to its impact
function sortImpact(list){

    //create a function which returns the impact of a given task
    function impact(task){
        return list.sort(function(a,b){
        return a.Value/b.Time;
    }
}
    //finishes the sort
    return list.sort(function(a,b){
        return impact()
    });

}


//this is the test code to see if your functions work
function mainTest(n){
    let taskList = Task.Factory(n);
    //tests basic totals
    console.log(totals(taskList));
    console.log(partialTotals(taskList, n/4));

    //tests to make sure the sorts are effective
    //both should outperform the original
    let minTime = sortTime(taskList);
    console.log(partialTotals(minTime, n/4));

    let minValue = sortValue(taskList);
    let maxValue = minValue.reverse();
    console.log(partialTotals(maxValue, n/4));

    let minImpact = sortImpact(taskList);
    let maxImpact = minImpact.reverse();
    console.log(partialTotals(maxImpact, n/4));
}

mainTest(60);

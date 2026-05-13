//Q3>. Exhaustiveness Checking (The never Type)
// Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
// Task:
// Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
// Write a function handleTask(status: TaskStatus) using a switch statement.
// In the default case, assign the status to a variable of type never.
// The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.

type TaskStatus = 'Open' | 'InProgress' | 'Closed' |'Archived';
function handleTask(status: TaskStatus):string{
    switch(status){
        case 'Open':
            return `Task Status is ${status}`;
        case 'InProgress':
            return `Task Status is ${status}`;
        case 'Closed':
            return `Task Status is ${status}`;
         case 'Archived':
            return "Task is Archived";
        default:
            const check: never = status;
            return check;
    }
}

console.log(handleTask('InProgress'));
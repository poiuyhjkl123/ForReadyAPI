const process = require('process');
const glob = require('glob');
const { Console } = require('console');
var filename = process.env.output_report_name;
var environment_name = process.env.Environment;
const results = require('../testresult/' + filename + '.json'); //getting the JSON result file
const mailer = require('./mailer')
var fs = require('fs');

var mailReportJson = {};


var totalTestCaseCount = 0;
var testCasePassCount = 0;
var testCaseFailCount = 0;

//Variable to build HTML body for email
var htmlBody = 'Hello,<br/><br/>Please review the automation execution results attached.<br/><br/>';

htmlBody += "<h2>Summary</h2></br>" 

// Printing the results on console
console.log(' ------ Test Execution Metrics ------\n');

console.log('Environment: ' + environment_name);
htmlBody += `Environment: <b>${environment_name}</b></br>`;
mailReportJson.Environment = environment_name;

projectName = results.projectName;
console.log('Project Name: ' + projectName);
htmlBody += `<b>Project Name: ${projectName}</b></br>`;
mailReportJson.ProjectName = projectName;

startTime = new Date(results.startTime).toISOString();
console.log('Start Time: ' + startTime);
htmlBody += `Start Time: ${startTime}</br>`;
mailReportJson.StartTime = startTime;

totalTime = (results.totalTime) / 1000;
console.log('Total Time Taken: ' + totalTime + 'sec\n');
htmlBody += `Total Time taken: ${totalTime} sec</br></br>`;
mailReportJson.TotalExecutionTime = totalTime;

htmlBody += "</br><h3>Test Suite Execution Metrics</h3>";

console.log(' ------ Test Suite Metrics ------\n');
let tsuiteLength = results.testSuiteResultReports.length;
let tSuiteFailCount = 0;

// Array to capture all suite details
suites = [];

//getting the Test Suite details
for (let tsindex = 0; tsindex < tsuiteLength; tsindex++) {
    // Object to capture suite details
    suiteDetail = {}

    suiteName = results.testSuiteResultReports[tsindex].testSuiteName;
    console.log('Test Suite Name: ' + suiteName);
    htmlBody += `</br><b>Test Suite Name: ${suiteName}</b></br>`;
    suiteDetail.SuiteName = suiteName;

    testSuiteTime = results.testSuiteResultReports[tsindex].totalTestSuiteTime;
    console.log('Total Test Suite Time: ' + testSuiteTime + 'ms\n');
    htmlBody += `Total Test Suite Time: ${testSuiteTime} ms</br>`;

    let tCaseFailCount = 0;
    console.log(' ------ Test Case Metrics ------\n');
    let tcaseLength = results.testSuiteResultReports[tsindex].testCaseResultReports.length;
    
    //getting the Test Case details
    for (let tcindex = 0; tcindex < tcaseLength; tcindex++) {
        // let tStepResultReports = results.testSuiteResultReports[tsindex].testCaseResultReports[tcindex].testStepResultReports;
        let tStepPassCount = 0;
        let tStepFailCount = 0;
        const tCaseResultsArray = [];
        let failureMessages = [];
        let tstepLength = results.testSuiteResultReports[tsindex].testCaseResultReports[tcindex].testStepResultReports.length;
        let tCaseName = (results.testSuiteResultReports[tsindex].testCaseResultReports[tcindex].testCaseName);
        let totalTestCaseTime = (results.testSuiteResultReports[tsindex].testCaseResultReports[tcindex].totalTestCaseTime + 'ms');

        //getting the Test Step details
        for (let tspindex = 0; tspindex < tstepLength; tspindex++) {
            let getAssertStatus = results.testSuiteResultReports[tsindex].testCaseResultReports[tcindex].testStepResultReports[tspindex].assertionStatus;
            let getFailureMessages = results.testSuiteResultReports[tsindex].testCaseResultReports[tcindex].testStepResultReports[tspindex].messages;
            let getTestStepName = results.testSuiteResultReports[tsindex].testCaseResultReports[tcindex].testStepResultReports[tspindex].testStepName;

            if (getAssertStatus == 'PASS') {
                tStepPassCount = tStepPassCount + 1;
            } else {
                tStepFailCount = tStepFailCount + 1;
                // failureMessages.push('Failure #' + tStepFailCount + ' => Test Step Name: ' + getTestStepName + ' => ' + getFailureMessages);
                failureMessages.push('Failure #' + tStepFailCount + ' => Test Step Name: ' + getTestStepName + ' => Message: ' + getFailureMessages);
            }
            if (results.testSuiteResultReports[tsindex].testCaseResultReports[tcindex].testStepResultReports[tspindex].testStepName.includes('Run')) {
                totalTestCaseCount = totalTestCaseCount + 1;
                if (results.testSuiteResultReports[tsindex].testCaseResultReports[tcindex].testStepResultReports[tspindex].assertionStatus == 'PASS') {
                    testCasePassCount = testCasePassCount + 1;
                }
                else {
                    testCaseFailCount = testCaseFailCount + 1;
                }
            }
        }
       
        tCaseResultsArray[tcindex] = { 'TestCaseName': tCaseName, 'TotalSteps': tstepLength, 'Steps Passed': tStepPassCount, 'Steps Failed': tStepFailCount, 'Total TCase Time': totalTestCaseTime}
        console.table(tCaseResultsArray);
        if (tStepFailCount > 0) {
            console.log(' ------ Test Step Failures ------\n');
            for (let index = 0; index < failureMessages.length; index++) {
                console.log(failureMessages[index]);
                console.log('\n')
                }
            
            tCaseFailCount = tCaseFailCount + 1
        }
    }
    console.log('\n');
    
    totalTestCount = results.testSuiteResultReports[tsindex].testCaseResultReports.length
    console.log('Total Tests Executed: ' + totalTestCount);
    htmlBody += `Total Tests Executed: ${totalTestCount}</br>`;
    passCount = totalTestCount - tCaseFailCount
    console.log('Tests Passed: ' + passCount + '\n');
    htmlBody += `Tests Passed: ${passCount}</br>`;
    console.log('Tests Failed: ' + tCaseFailCount + '\n');
    htmlBody += `Tests Failed: ${tCaseFailCount}</br>`;
    
    if (tCaseFailCount > 0) {
        tSuiteFailCount = tSuiteFailCount + 1
    }
}

suiteExecStatus = results.status
console.log('Suite Execution Status: ' + suiteExecStatus);

if (suiteExecStatus == 'FAILED'){
    htmlBody += `<br/><b>Overall Execution Status: </b><b style="color:red">${suiteExecStatus}</b></br>`;
}else{
    htmlBody += `<br/><b>Overall Execution Status: </b><b style="color:green">${suiteExecStatus}</b></br>`;
}


totalSuites = results.testSuiteResultReports.length;
console.log('Total Test Suites Executed: ' + totalSuites);
htmlBody += `Total Test Suites Executed: ${totalSuites}</br>`;

passedSuitesCount = totalSuites - tSuiteFailCount
htmlBody += `Test Suites Passed: ${passedSuitesCount}</br>`;

console.log('Test Suites Failed: ' + tSuiteFailCount + '\n');
htmlBody += `Test Suites Failed: ${tSuiteFailCount}</br>`;

console.log('Total Test Cases Executed: ' + totalTestCaseCount);
htmlBody += `Total Test Cases Executed: ${totalTestCaseCount}</br>`;

console.log('Test Cases Passed: ' + testCasePassCount + '\n');
htmlBody += `Test Cases Passed: ${testCasePassCount}</br>`;

console.log('Test Cases Failed: ' + testCaseFailCount + '\n');
htmlBody += `Test Cases Failed: ${testCaseFailCount}</br>`;

// htmlBody += `Suite Execution Status: ${suiteExecStatus}</br>`;

if (results.status == 'FAILED') {
    
    console.log('Message: ' + results.message + '(s)');
    // htmlBody += `</br><b>All Suite Execution Status: ${results.message}</b></br>`;
    // process.exit(1);
    // process.exitCode = 1;   
    // throw new Error("Test execution completed with error.")
}
console.log('\n');
htmlBody += `<br/>Thanks,<br/>Automation Execution Engine`;

mailer.sendReports(htmlBody)
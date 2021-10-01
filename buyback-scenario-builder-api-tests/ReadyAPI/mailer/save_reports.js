const glob = require('glob');
var fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const xunitViewer = require('xunit-viewer')

// Variable to capture job id
jobId = '';

// Funtion to execute command on console
async function executeCommand(cmd) {
    console.log('Inside execute command');
    console.log('Executing: ' + cmd);
    var stdout = '';
    try{
        const { stdout, stderr } = await exec(cmd);
        if (stdout != ''){
            console.log('stdout:', stdout);
            return stdout;
        }
        if (stderr != ''){
            console.log('stderr:', stderr);
        }
    }catch(e){
        console.log("entering catch block");
        console.log(e)
    } 
}

// Function to rename file to the outport report name
function renameFile(fileType){
    console.log("Inside rename file....");
    console.log("Job ID: " + jobId);

    dir = './ReadyAPI/testresult';
    var filename = process.env.output_report_name;
    var renamed_file = "";

    if(fileType=='pdf'){
        console.log('inside pdf type')
        renamed_file = path.join(dir, filename + '.pdf');
    }else if(fileType == 'xlsx'){
        console.log('inside excel type')
        renamed_file = path.join(dir, filename + '.xlsx');
    }else if(fileType=='xml'){
        console.log('inside junit type')
        renamed_file = path.join(dir, filename + '.xml');
    }
    console.log('Renamed file name: ' + renamed_file)   

    try{
        files = glob.sync(`${dir}/**/*.${fileType}`)
        console.log(files);
        console.log(`File to be renamed: ${files[0]}`);
        console.log('File renamed file type: ' + typeof(renamed_file));
        fs.renameSync(files[0], renamed_file);
    }catch(err){
        console.log(err);
    }
}

function transformJunitToHTML(){
    dir = './ReadyAPI/testresult';
    var filename = process.env.output_report_name;
    console.log('Inside transform function');

    var junit_xml = path.join(dir, filename + '.xml');
    var junit_html = path.join(dir, filename + '.html');

    console.log('Junit xml: ' + junit_xml);
    console.log('Junit HTML: ' + junit_html);

    const transform = async () => {
        await xunitViewer({
          server: false,
          results: junit_xml,
          ignore: ['_thingy', 'invalid'],
          title: 'Donna BuyBack Scenario Builder API Tests',
          output: junit_html
        })
      }
      transform();
    console.log('Execution of tranformation done');
}

// Main funtion to trigger to save all results. Also, if overall result is failed, it will exit with exit code 1
async function saveResults(){
    var testengine_pwd = process.env.testengine_pwd;
    var filename = process.env.output_report_name;
    var titlename = ' BuyBack Scenario Builder API Tests';
    dir = './ReadyAPI/testresult';
    cmd = `testengine -u admin -p ${testengine_pwd} -H http://0.0.0.0:8080 jobs list format=json`;
    cmdOut = await executeCommand(cmd);
    console.log(":" + cmdOut +":");
    var obj = JSON.parse(cmdOut.trim());
    
    jobId = obj[0].testjobId;
    console.log("Test Job Id: " + jobId);

    // variable to capture overall execution status of project
    overallExecutionStatus = obj[0].status;

    console.log('-------------------------------------------------');
    // Save pdf Report
    cmdSavePDF = `testengine -u admin -p ${testengine_pwd} -H http://0.0.0.0:8080 jobs report output=${dir} format=pdf ${jobId}`;
    console.log('Saving PDF results. Executing: ' + cmdSavePDF);
    await executeCommand(cmdSavePDF);
    console.log("Renaming pdf file");
    renameFile('pdf');
    
    console.log('-------------------------------------------------');
    // Save Excel Report
    cmdSaveExcel = `testengine -u admin -p ${testengine_pwd} -H http://0.0.0.0:8080 jobs report output=${dir} format=excel ${jobId}`;
    console.log('Saving Excel results. Executing: ' + cmdSaveExcel);
    await executeCommand(cmdSaveExcel);
    renameFile('xlsx');
    
  console.log('-------------------------------------------------');
    // Save JUnit Report
    cmdJunitXML = `testengine -u admin -p ${testengine_pwd} -H http://0.0.0.0:8080 jobs report output=${dir} format=junit ${jobId}`;
    console.log('Saving Junit results. Executing: ' + cmdJunitXML);
    await executeCommand(cmdJunitXML);
    console.log('Rename xml file');
    renameFile('xml');

    console.log('-------------------------------------------------');    
    console.log('Transform XML to HTML');
    // transformJunitToHTML();
    cmdJunitHTML = 'xunit-viewer -r ' + dir + '/' + filename + '.xml -o ' + dir + '/' + filename + '.html -t "' + titlename + '"';
    console.log('Converting Junit to HTML results. Executing: ' + cmdJunitHTML);
    await executeCommand(cmdJunitHTML);
    console.log('Transformation done');
    
    console.log('-------------------------------------------------');
        
    if((overallExecutionStatus == 'FINISHED')){
        console.log('All testcases Passed');
        process.exit(0);
        // });
    }
    else{
        console.log('Error exit');
        process.exit(1);
    }
}

saveResults();

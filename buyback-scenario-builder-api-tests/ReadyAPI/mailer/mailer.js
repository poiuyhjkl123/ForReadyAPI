const nodeoutlook = require('nodejs-nodemailer-outlook');
const config = require('./mail-reporter-config.json');
const glob = require('glob');

/**
 * Class to send email
 */
class Mailer {
    /**
     * Function to get recipient email ids from the environment variables
     */
    getEmailIds() {
        let to = "";
        var usernames = process.env.To.split(';');
        for(let i = 0; i< usernames.length; i ++) {
            to += usernames[i] + "@Omers.com;"
        }
        console.log("Sending reports to : " + to);
        return to;
    }

    /**
     * Function to get current timestamp to be added to filename
     */
    async getTimeStamp(){
        try{
            var d = new Date();
            var dt = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}_${d.toLocaleTimeString()}`;
            return dt
        }catch(e){
            console.log("entering catch block");
            console.log(e)
        }        
    }

    /**
     * Funtion to send email report of the execution
     * @param {String} mail_body: Body of the email in HTML format
     */
    async sendReports(mail_body) {
        console.log('Sending email');
        console.log(mail_body)
        
        var dt = await this.getTimeStamp();
        
        

        var output_report_name = process.env.output_report_name;
        var environment_name = process.env.Environment;
        var tag_name = process.env.tags;

        nodeoutlook.sendEmail({
                auth: {
                    user: process.env.OutlookEmailId,
                    pass: process.env.OutlookPass
                },
                from: process.env.OutlookEmailId,
                to: this.getEmailIds(),
                subject: environment_name + " - Tags-" + tag_name + " - " + config.MailSubject + " [" + Date().toString() + "]",
                html: mail_body,
                attachments: [
                    {
                        path: `./ReadyAPI/testresult/${output_report_name}.html`
                    }
                ],
                onError: (e) => console.log(e),
                onSuccess: (i) => console.log(i)
            });

        console.log('Email Sent');
            
    }
}

module.exports = new Mailer();
// module.exports.sendReports();
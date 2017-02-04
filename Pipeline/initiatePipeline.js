var client = require('redis').createClient(6379,'127.0.0.1');
var jobInput = {
    payload:{
            repo:'node-uuid',
            author:'broofa',
            branch:'master',
            headCommitId:'0983kshjhaqi1123344kmdjnsj',
            commitIds:'839290njnwyqiqka19238jsjwj111'

    },
    template:{"version":"1",
    	"templateName":"CI-Pipeline",
    	"stages":{"gitClone":{"type":"stackroute/git/clone","input":{"REPOSITORY_URL":"{{payload.repo_url}}","BRANCH":"{{payload.repo_ref}}","WORKSPACE":"{{context.workspace}}"},"output":null,"context":null,"depends_on":null},
    	"build":{"type":"stackroute/javascript/build","input":{"WORKSPACE":"{{context.workspace}}"},"output":null,"context":null,"depends_on":["gitClone"]},
    	"whitebox":{"type":"stackroute/javascript/mocha","input":{"INCLUDE":"{{payload.whitebox.include}}","EXCLUDE":"{{payload.whitebox.exclude}}"},"output":{"payload":{"output":{"unittest":"{{OUTPUT}}"}}},"context":null,"depends_on":["build"]},
    	"eslint":{"type":"stackroute/javascript/eslint","input":{"INCLUDE":["**/*.spec.js"],"EXCLUDE":["**/node_modules/**/*.js","**/bower_components/**/*.js"]},"output":{"payload":{"output":{"lint":{"js":"{{OUTPUT}}"}}}},"context":null,"depends_on":["gitClone"]},
    	"htmlhint":{"type":"stackroute/javascript/htmlhint","input":{"INCLUDE":"{{payload.htmlhint.include}}","EXCLUDE":"{{payload.htmlhint.exclude}}"},"output":{"payload":{"output":{"lint":{"html":"{{OUTPUT}}"}}}},"context":null,"depends_on":["gitClone"]},
    	"code-coverage":{"type":"stackroute/javascript/code-coverage","input":{"INCLUDE":"{{payload.codecoverage.include}}","EXCLUDE":"{{payload.codecoverage.exclude}}"},"output":{"payload":{"output":{"codecoverage":"{{OUTPUT}}"}}},"context":null,"depends_on":["build"]},
    	"code-review":{"type":"stackroute/ext/code-review","input":null,"output":{"payload":{"output":{"code-review":"{{OUTPUT}}"}}},"context":null,"depends_on":["eslint","htmlhint","code-coverage","whitebox"]}}}
    };

    client.lpush('QM',JSON.stringify(jobInput),(err,reply)=>{
        console.log(reply);
    });

//module imports
const async = require('async');
const rW = require('./workerServices/registerWorker');
const stateInitializer = require('./stateInitializer');


//register a worker for a qeueue
rW('QM',stateInitializer);
// rW('JOB_SCHEDULER',JobScheduler);
// rW('STAGE_SCHEDULER',stageScheduler);
// rW('stackroute/git',cloneAgent);
// rW('stackroute/javascript',jsAgent);
// rW('results',resultsProcessor);

//async calls
// async.parallel([
//     rW.bind(null,'QM',stateInitializer),
//     rW.bind(null,'JOB_SCHEDULER',JobScheduler),
//     rW.bind(null,'STAGE_SCHEDULER',stageScheduler),
//     rW.bind(null,'stackroute/git',cloneAgent),
//     rW.bind(null,'stackroute/javascript',jsAgent),
//     rW.bind(null,'results',resultsProcessor)
// ]);

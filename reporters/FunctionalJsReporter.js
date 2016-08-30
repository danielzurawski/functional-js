'use strict';

function FunctionalJsReporter(runner) {
  var passes = 0;
  var failures = 0;

  runner.on('pass', (test) => {
    passes++;
    console.log('pass: %s', test.fullTitle());
  });

  runner.on('fail', (test, err) => {
    failures++;
    console.log('Ooops -- error: "%s" maybe try again?', test.fullTitle());
  });

  runner.on('end', () => {
    console.log('Exercises completed: %d/%d', passes, passes + failures);
    process.exit(failures);
  });
}

module.exports = FunctionalJsReporter;

describe("Inner Suite 1", function(){

    before(function(){

        // do something before test suite execution
        // no matter if there are failed cases

    });

    after(function(){

        // do something after test suite execution is finished
        // no matter if there are failed cases

    });

    beforeEach(function(){

        // do something before test case execution
        // no matter if there are failed cases

    });

    afterEach(function(){

        // do something after test case execution is finished
        // no matter if there are failed cases

    });

    it("Test-1", function(){

        // test Code
        // assertions
      setTimeout(function(){
        console.log("timeout!");
      // mocha will wait for done to be called before exiting function.
          done();
      }, 3000);

    });

    it("Test-2", function(){

        // test Code
        // assertions
        var promise;
        promise = new Promise(function(resolve, reject){
            setTimeout(function(){

                console.log("Timeout");
                resolve();

            }, 100);

        });
        // mocha will wait for the promise to be resolved before exiting
        return promise;

    });

    it("Test-3", function(){

        // test Code
        // assertions

    });

});

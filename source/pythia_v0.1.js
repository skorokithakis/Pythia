/*

    Pythia - True random number generator

    File name: pythia.js (Version: 0.1)
    Description: This file contains the Pythia - True random number generator.
    
    Coded by George Delaportas (G0D)
    
    Copyright © 2014

*/



// Pythia
function pythia()
{

    var self = this;

    function utilities()
    {

        this.loop = function(__this_result)
        {

            var __results_length = results.length;

            if (__results_length === 0 || __this_result >= results[__results_length - 1])
            {

                if (__this_result >= max_random_num)
                    return self.generate();

                else
                {

                    if (__this_result === results[__results_length - 1])
                    {

                        __this_result++;

                        results.push(__this_result);

                    }

                    else
                        results.push(__this_result);

                    return __this_result;

                }

            }

            for (var i = 0; i < __results_length; i++)
            {

                if (__this_result === results[i])
                    __this_result++;

                else
                {

                    if (__this_result < results[i])
                    {

                        results.splice(i, 0, __this_result);

                        break;

                    }

                }

            }

            return __this_result;

        };

    }

    this.generate = function()
    {

        var __this_result = Math.floor((Math.random() * max_random_num) + 1);

        __this_result = utils.loop(__this_result);

        return __this_result;

    };

    this.reset = function()
    {

        results = [];

        return true;

    };

    var max_random_num = 9007199254740992,
        results = [],
        utils = new utilities();

}

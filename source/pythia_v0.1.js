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

    this.generate = function()
    {
        return Math.random();
    };

    this.reset = function()
    {

        return true;

    };
}

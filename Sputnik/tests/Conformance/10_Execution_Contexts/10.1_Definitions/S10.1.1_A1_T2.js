// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.1_A1_T2;
 * @section: 10.1.1;
 * @assertion: Program functions are defined in source text by a FunctionDeclaration or created dynamically either  
 * by using a FunctionExpression or by using the built-in Function object as a constructor;
 * @description: Creating function dynamically by using a FunctionExpression;
*/

//CHECK#1
var x=function f1(){return 1;}();
if(x!==1)
  $ERROR('#1: Create function dynamically either by using a FunctionExpression');

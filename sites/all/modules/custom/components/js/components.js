/*jslint nomen: true, plusplus: true, todo: true, white: true, browser: true, indent: 2 */

jQuery(function($) {
  'use strict';

  // Unobstrusive syntax highlighting
  var $textarea1 = $('#edit-css-default');

  var createEditor1= function() {
    var editor = CodeMirror.fromTextArea($textarea1[0], { lineNumbers : true });
    return editor;
  };

  var editor = createEditor1();

    var $textarea2 = $('#edit-css-bootstrap');

    var createEditor2= function() {
        var editor = CodeMirror.fromTextArea($textarea2[0], { lineNumbers : true });
        return editor;
    };

    editor += createEditor2();


});

/*jslint nomen: true, plusplus: true, todo: true, white: true, browser: true, indent: 2 */

jQuery(function($) {
  'use strict';

  // Unobstrusive syntax highlighting
  var $textarea1 = $('#edit-field-css-code-und-0-value');

  var createEditor1= function() {
    var editor = CodeMirror.fromTextArea($textarea1[0], { lineNumbers : true });
      editor.on('change', function(obj) { autoPreview(); });
    return editor;
  };

  var editor = createEditor1();
    // Unobstrusive syntax highlighting
    var $textarea2 = $('#edit-field-html-code-und-0-value');

    var createEditor2= function() {
        var editor = CodeMirror.fromTextArea($textarea2[0], { lineNumbers : true });
        editor.on('change', function(obj) { autoPreview(); });
        return editor;
    };

    editor += createEditor2();

    $textarea1.keyup(function() { autoPreview(); });
    $textarea2.keyup(function() { autoPreview(); });



    var autoPreview = function() {
        if ($('#css-editor-toggle-preview').is(':checked')) {
            var value = ($('#css-editor-toggle-editor').is(':checked') ? $textarea.val() : editor.getValue());
            var id = 'css-editor-preview-style';
            var $css = $preview.contents().find('#' + id);
            if ($css.length) {
                $css.html(value);
            }
            else {
                $preview.contents().find('head').append($('<style type="text/css" id="' + id + '">' + value + '</style>'));
            }
        }
    };


});

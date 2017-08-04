<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
$node = node_load($fields['nid']->raw);
global $user;
?>

<div class="template-item col-lg-4 cols col-md-4">
  <div class="item-wrapper">
    <div class="html-item">
        <?php print theme('image_style',array('path'=>$node->field_image[LANGUAGE_NONE][0]['uri'],'style_name'=>'medium')) ?>
    </div>
    <div class="action-title">
     <p> <span class="title-template"><?php print $node->title ?></span></p>
      <p>
          <?php if($user->uid==$node->uid): ?>

            <a class="btn btn-success btn-lg" role="button" href="<?php print url('components/layout/'.$fields['nid']->raw) ?>"><i
                  class="fa fa-file"></i> Edit your template</a>
            <a class="btn btn-primary btn-lg" role="button" target="_blank" href="<?php print url('preview/layout/'.$fields['nid']->raw) ?>"><i
                  class="fa fa-file"></i> Preview</a>
            <a class="btn btn-primary btn-lg" role="button" target="_blank" href="<?php print url('node/'.$fields['nid']->raw) ?>"><i
                  class="fa fa-file"></i> View</a>
          <?php else: ?>
            <a class="btn btn-primary btn-lg" role="button" href="<?php print url('components/layout/'.$fields['nid']->raw) ?>"><i
                  class="fa fa-file"></i> Used this template</a>
            <a class="btn btn-success btn-lg" role="button" target="_blank" href="<?php print url('preview/layout/'.$fields['nid']->raw) ?>"><i
                  class="fa fa-file"></i> Preview</a>
            <a class="btn btn-success btn-lg" role="button" target="_blank" href="<?php print url('node/'.$fields['nid']->raw) ?>"><i
                  class="fa fa-file"></i> View</a>
          <?php endif; ?>
      </p>
    </div>
  </div>
</div>



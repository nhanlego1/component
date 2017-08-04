<div id="gjs" style="height:0px; overflow:hidden">

  <style>
    <?php print variable_get('css_default') ?>
  </style>


    <?php print components_get_data(); ?>
</div>
<script type="text/javascript"
        src="<?php print base_path() . drupal_get_path('module', 'components') ?>/lib/grapesjs/js/setting.js"></script>
<?php print components_get_components(); ?>
<script type="text/javascript">
    editor.setComponents('<?php print components_minify($node->field_html_code[LANGUAGE_NONE][0]['value'],'html') ?><link rel="stylesheet" href="/sites/all/modules/custom/components/lib/grapesjs/css/bootstrap.min.css">');
</script>


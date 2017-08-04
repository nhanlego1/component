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
    var assetManager = editor.AssetManager;
    <?php if(component_get_assets()): ?>
     <?php foreach(component_get_assets() as $asset): ?>
    assetManager.add('<?php print $asset ?>');
    <?php endforeach; ?>
    <?php endif;?>

    editor.setComponents('<link rel="stylesheet" href="/sites/all/modules/custom/components/lib/grapesjs/css/bootstrap.min.css"><link rel="stylesheet" href="/sites/all/modules/custom/components/lib/flexslider/flexslider.css">');
   // editor.setComponents('<link rel="stylesheet" href="/sites/all/modules/custom/components/lib/slick/slick-theme.css">');
  //  editor.setComponents('<link rel="stylesheet" href="/sites/all/modules/custom/components/lib/slick/slick.css">');
</script>


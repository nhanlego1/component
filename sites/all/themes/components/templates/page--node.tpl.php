<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup templates
 */
$node = menu_get_object('node');
?>
<?php if ($node->type == 'template' || $node->type=='page'): ?>
    <?php print render($page['content']) ?>
<?php else: ?>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header"><a class="navbar-brand navbar-link" href="/"
                                    style="/*margin-left:56px;*/padding-left:62px;">Splash Component<img
              class="img-responsive"
              src="<?php print base_path() . drupal_get_path('theme', 'components') ?>/splash/assets/img/logo.png"
              style="width:52px;position:absolute;top:2px;left:5px;"></a>
        <button class="navbar-toggle collapsed"
                data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span
              class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
      </div>
      <div class="collapse navbar-collapse" id="navcol-1">
        <ul class="nav navbar-nav navbar-right">
        <li role="presentation"><a href="<?php print url('<front>') ?>">Home</a></li>
        <li role="presentation"><a href="<?php print url('components/create') ?>">Design new layout</a></li>
        <li role="presentation"><a href="<?php print url('layout/list') ?>">Default template</a></li>
        <?php if($user->uid <= 0): ?>
        <li role="presentation"><a href="<?php print url('user/login') ?>">Login </a></li>
        <?php else: ?>
          <li role="presentation"><a href="<?php print url('user/templates') ?>">My template </a></li>
          <li role="presentation"><a href="<?php print url('user/logout') ?>">Logout </a></li>
        <?php endif; ?>
      </ul>
      </div>
    </div>
  </nav>



  <section class="testimonials">
      <?php if (!empty($page['highlighted'])): ?>
        <div class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
      <?php endif; ?>
      <?php print render($title_prefix); ?>
      <?php if (!empty($title)): ?>
        <h1 class="page-header"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php if (!empty($tabs)): ?>
          <?php print render($tabs); ?>
      <?php endif; ?>
      <?php if (!empty($page['help'])): ?>
          <?php print render($page['help']); ?>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
  </section>

  <section class="features">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Fantastic Features</h2>
          <p>Morbi non mauris massa. Duis elit mauris, malesuada nec suscipit ac, bibendum sed augue. Maecenas
            condimentum magna gravida, laoreet nunc sed, euismod sem. </p>
        </div>
        <div class="col-md-6">
          <div class="row icon-features">
            <div class="col-xs-4 icon-feature"><i class="glyphicon glyphicon-grain"></i>
              <p>Graphic design</p>
            </div>
            <div class="col-xs-4 icon-feature"><i class="glyphicon glyphicon-edit"></i>
              <p>Easy edit</p>
            </div>
            <div class="col-xs-4 icon-feature"><i class="glyphicon glyphicon-cloud-upload"></i>
              <p>Easy published</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h5>Splash Component © 2017</h5></div>
        <div class="col-sm-6 social-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i
                class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
      </div>
    </div>
  </footer>
<?php endif; ?>
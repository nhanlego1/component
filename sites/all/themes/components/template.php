<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

function components_get_assets()
{
    //add js
    $output = '';
    $output .= '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/js/jquery-2.2.0.min.js"></script>';
    $output .= '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/js/bootstrap.min.js"></script>';
    $output .= '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/js/grapes.min.js"></script>';
    $output .= '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/js/filestack-0.6.3.js"></script>';
    $output .= '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/js/perfect-scrollbar.min.js"></script>';
    $output .= '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/js/toastr.min.js"></script>';
    $output .= '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/js/grapesjs-plugin-forms.min.js"></script>';
    $output .= '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/js/grapesjs-plugin-js.js"></script>';
    $output .= '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/js/html2canvas.js"></script>';
    $output .= '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/js/grapesjs-plugin-filestack.min.js"></script>';
    $output .= '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/js/grapesjs-plugin-export.min.js"></script>';
    $output .= '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/js/grapesjs-preset-webpage.js"></script>';
    //add css
    $output .= ' <link rel="stylesheet" href="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/css/toastr.min.css">';
    $output .= ' <link rel="stylesheet" href="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/css/grapes.min.css">';
    $output .= ' <link rel="stylesheet" href="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/css/grapesjs-preset-webpage.css">';
    $output .= ' <link rel="stylesheet" href="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/css/tooltip.css">';
    $output .= ' <link rel="stylesheet" href="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/css/perfect-scrollbar.css">';
    $output .= ' <link rel="stylesheet" href="' . base_path() . drupal_get_path('module', 'components') . '/lib/grapesjs/css/default.css">';
    //slick
    $output .= ' <link rel="stylesheet" href="' . base_path() . drupal_get_path('module', 'components') . '/lib/slick/slick.css">';
    $output .= ' <link rel="stylesheet" href="' . base_path() . drupal_get_path('module', 'components') . '/lib/flexslider/flexslider.css">';
    $output .= ' <script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/lib/flexslider/jquery.flexslider-min.js"></script>';
    return $output;
}

/**
 * implement hook_page reprocess
 */
function components_preprocess_page(&$vars)
{
    $arg = arg();
    $url = $_GET['q'];
    $node = false;
    if ($url == 'components/create') {
        $vars['assets'] = components_get_assets();
        $vars['save_popup'] = _component_get_saving($node);
        $vars['export_poup'] = _component_get_block_save($node);
    } elseif (strpos($url, 'components/layout') !== false) {
        $node = node_load(str_replace('components/layout/', '', $url));
        $vars['save_popup'] = _component_get_saving($node);
        $vars['export_poup'] = _component_get_block_save($node);
        $vars['assets'] = components_get_assets();
    } else {
        $vars['save_popup'] = false;
        $vars['export_poup'] = false;
        $vars['assets'] = false;
    }
    $vars['attached_js'] = '<script type="text/javascript" src="' . base_path() . drupal_get_path('module', 'components') . '/js/customs.js"></script>';

}

/**
 * Override or insert variables into the node template.
 */
function components_preprocess_node(&$variables)
{
    if ($variables['type'] == 'page') {
        $node = $variables['node'];
        $template_id = $node->field_template[LANGUAGE_NONE][0]['target_id'];
        $template = node_load($template_id);
        $nav = _get_menu_tree($template_id);
        $content = $template->field_html_code[LANGUAGE_NONE][0]['value'];
        if ($nav) {
            $content = str_replace(_get_content_in_tag($content, '<nav class="navbar">', '</nav>'), $nav, $content);
        }
        $logo = _get_header($template_id);
        if ($logo) {
            $content = str_replace(_get_content_in_tag($content, '<img class="logo">', '/>'), $logo, $content);
        }
        $footer = _get_footer($template_id);
        if ($footer) {
            $content = str_replace(_get_content_in_tag($content, '<footer', '</footer>'), $footer, $content);
        }
        $data = _get_content($node);
        if ($data) {
            $content = str_replace(_get_content_in_tag($content, '<main', '</main>'), $data, $content);
        }
        if ($content) {
            $variables['template'] = $content;
        } else {
            $variables['template'] = false;
        }
        unset($variables['content']);
    }
}

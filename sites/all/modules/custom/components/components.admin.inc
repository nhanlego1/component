<?php
/**
 * Created by PhpStorm.
 * User: splasher
 * Date: 7/3/17
 * Time: 2:01 PM
 */
/**
 * @param $form
 * @param $form_state
 * @return mixed
 */
function component_admin($form, &$form_state){

    $form['css_default'] = array(
        '#type'=>'textarea',
        '#title'=>'CSS default',
        '#default_value'=> variable_get('css_default')
    );
//    $form['css_bootstrap'] = array(
//        '#type'=>'textarea',
//        '#title'=>'CSS Bootstrap',
//        '#default_value'=> variable_get('css_bootstrap')
//    );
    $form['submit'] = array(
        '#type'=>'submit',
        '#value'=>'Save'
    );
    return $form;
}

/**
 * @param $form
 * @param $form_state
 */
function component_admin_submit($form, &$form_state){
    $data = $form_state['values'];
    variable_set('css_default',$data['css_default']);
    variable_set('css_bootstrap',$data['css_bootstrap']);
    drupal_set_message('Updte Css success.');
}


/**
 * Created by splasher on 7/3/17.
 */


var editor = grapesjs.init({

        clearOnRender: true,
        height: '100%',
        container: '#gjs',
        fromElement: true,
        showOffsets: 1,
        plugins: ['gjs-plugin-export', 'gjs-preset-webpage','gjs-plugin-forms', 'gjs-plugin-js'],

        pluginsOpts: {
            // 'gjs-plugin-filestack': {
            //     key: 'A2WtifORCTAeC1hzgth5mz',
            // },
            'gjs-plugin-forms': {}
        },

        // Configure style
        styleManager: {
            sectors: [{
                name: 'General',
                buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
                properties: [{
                    name: 'Alignment',
                    property: 'float',
                    type: 'radio',
                    defaults: 'none',
                    list: [
                        {value: 'none', className: 'fa fa-times'},
                        {value: 'left', className: 'fa fa-align-left'},
                        {value: 'right', className: 'fa fa-align-right'}
                    ],
                },
                    {property: 'position', type: 'select'}
                ],
            }, {
                name: 'Dimension',
                open: false,
                buildProps: ['width', 'height', 'max-width', 'min-height','min-width', 'max-height', 'margin', 'padding'],
                properties: [{
                    property: 'margin',
                    properties: [
                        {name: 'Top', property: 'margin-top'},
                        {name: 'Right', property: 'margin-right'},
                        {name: 'Bottom', property: 'margin-bottom'},
                        {name: 'Left', property: 'margin-left'}
                    ],
                }, {
                    property: 'padding',
                    properties: [
                        {name: 'Top', property: 'padding-top'},
                        {name: 'Right', property: 'padding-right'},
                        {name: 'Bottom', property: 'padding-bottom'},
                        {name: 'Left', property: 'padding-left'}
                    ],
                }],
            }, {
                name: 'Typography',
                open: false,
                buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-decoration', 'text-shadow'],
                properties: [
                    {name: 'Font', property: 'font-family'},
                    {name: 'Weight', property: 'font-weight'},
                    {name: 'Font color', property: 'color'},
                    {
                        property: 'text-align',
                        type: 'radio',
                        defaults: 'left',
                        list: [
                            {value: 'left', name: 'Left', className: 'fa fa-align-left'},
                            {value: 'center', name: 'Center', className: 'fa fa-align-center'},
                            {value: 'right', name: 'Right', className: 'fa fa-align-right'},
                            {value: 'justify', name: 'Justify', className: 'fa fa-align-justify'}
                        ],
                    }, {
                        property: 'text-decoration',
                        type: 'radio',
                        defaults: 'none',
                        list: [
                            {value: 'none', name: 'None', className: 'fa fa-times'},
                            {value: 'underline', name: 'underline', className: 'fa fa-underline'},
                            {value: 'line-through', name: 'Line-through', className: 'fa fa-strikethrough'}
                        ],
                    }, {
                        property: 'text-shadow',
                        properties: [
                            {name: 'X position', property: 'text-shadow-h'},
                            {name: 'Y position', property: 'text-shadow-v'},
                            {name: 'Blur', property: 'text-shadow-blur'},
                            {name: 'Color', property: 'text-shadow-color'}
                        ],
                    }],
            }, {
                name: 'Decorations',
                open: false,
                buildProps: ['background-color', 'border-radius', 'border', 'box-shadow', 'background'],
                properties: [{
                    property: 'border-radius',
                    properties: [
                        {name: 'Top', property: 'border-top-left-radius'},
                        {name: 'Right', property: 'border-top-right-radius'},
                        {name: 'Bottom', property: 'border-bottom-left-radius'},
                        {name: 'Left', property: 'border-bottom-right-radius'}
                    ],
                }, {
                    property: 'box-shadow',
                    properties: [
                        {name: 'X position', property: 'box-shadow-h'},
                        {name: 'Y position', property: 'box-shadow-v'},
                        {name: 'Blur', property: 'box-shadow-blur'},
                        {name: 'Spread', property: 'box-shadow-spread'},
                        {name: 'Color', property: 'box-shadow-color'},
                        {name: 'Shadow type', property: 'box-shadow-type'}
                    ],
                }, {
                    property: 'background',
                    properties: [
                        {name: 'Image', property: 'background-image'},
                        {name: 'Repeat', property: 'background-repeat'},
                        {name: 'Position', property: 'background-position'},
                        {name: 'Attachment', property: 'background-attachment'},
                        {name: 'Size', property: 'background-size'}
                    ],
                },],
            }, {
                name: 'Extra',
                open: false,
                buildProps: ['transition', 'perspective', 'transform'],
                properties: [{
                    property: 'transition',
                    properties: [
                        {name: 'Property', property: 'transition-property'},
                        {name: 'Duration', property: 'transition-duration'},
                        {name: 'Easing', property: 'transition-timing-function'}
                    ],
                }, {
                    property: 'transform',
                    properties: [
                        {name: 'Rotate X', property: 'transform-rotate-x'},
                        {name: 'Rotate Y', property: 'transform-rotate-y'},
                        {name: 'Rotate Z', property: 'transform-rotate-z'},
                        {name: 'Scale X', property: 'transform-scale-x'},
                        {name: 'Scale Y', property: 'transform-scale-y'},
                        {name: 'Scale Z', property: 'transform-scale-z'}
                    ],
                }]
            }, {
                name: 'Flex',
                open: false,
                properties: [{
                    name: 'Flex Container',
                    property: 'display',
                    type: 'select',
                    defaults: 'block',
                    list: [
                        {value: 'block', name: 'Disable'},
                        {value: 'flex', name: 'Enable'}
                    ],
                }, {
                    name: 'Flex Parent',
                    property: 'label-parent-flex',
                    type: 'integer',
                }, {
                    name: 'Direction',
                    property: 'flex-direction',
                    type: 'radio',
                    defaults: 'row',
                    list: [{
                        value: 'row',
                        name: 'Row',
                        className: 'icons-flex icon-dir-row',
                        title: 'Row',
                    }, {
                        value: 'row-reverse',
                        name: 'Row reverse',
                        className: 'icons-flex icon-dir-row-rev',
                        title: 'Row reverse',
                    }, {
                        value: 'column',
                        name: 'Column',
                        title: 'Column',
                        className: 'icons-flex icon-dir-col',
                    }, {
                        value: 'column-reverse',
                        name: 'Column reverse',
                        title: 'Column reverse',
                        className: 'icons-flex icon-dir-col-rev',
                    }],
                }, {
                    name: 'Justify',
                    property: 'justify-content',
                    type: 'radio',
                    defaults: 'flex-start',
                    list: [{
                        value: 'flex-start',
                        className: 'icons-flex icon-just-start',
                        title: 'Start',
                    }, {
                        value: 'flex-end',
                        title: 'End',
                        className: 'icons-flex icon-just-end',
                    }, {
                        value: 'space-between',
                        title: 'Space between',
                        className: 'icons-flex icon-just-sp-bet',
                    }, {
                        value: 'space-around',
                        title: 'Space around',
                        className: 'icons-flex icon-just-sp-ar',
                    }, {
                        value: 'center',
                        title: 'Center',
                        className: 'icons-flex icon-just-sp-cent',
                    }],
                }, {
                    name: 'Align',
                    property: 'align-items',
                    type: 'radio',
                    defaults: 'center',
                    list: [{
                        value: 'flex-start',
                        title: 'Start',
                        className: 'icons-flex icon-al-start',
                    }, {
                        value: 'flex-end',
                        title: 'End',
                        className: 'icons-flex icon-al-end',
                    }, {
                        value: 'stretch',
                        title: 'Stretch',
                        className: 'icons-flex icon-al-str',
                    }, {
                        value: 'center',
                        title: 'Center',
                        className: 'icons-flex icon-al-center',
                    }],
                }, {
                    name: 'Flex Children',
                    property: 'label-parent-flex',
                    type: 'integer',
                }, {
                    name: 'Order',
                    property: 'order',
                    type: 'integer',
                    defaults: 0,
                    min: 0
                }, {
                    name: 'Flex',
                    property: 'flex',
                    type: 'composite',
                    properties: [{
                        name: 'Grow',
                        property: 'flex-grow',
                        type: 'integer',
                        defaults: 0,
                        min: 0
                    }, {
                        name: 'Shrink',
                        property: 'flex-shrink',
                        type: 'integer',
                        defaults: 0,
                        min: 0
                    }, {
                        name: 'Basis',
                        property: 'flex-basis',
                        type: 'integer',
                        units: ['px', '%', ''],
                        unit: '',
                        defaults: 'auto',
                    }],
                }, {
                    name: 'Align',
                    property: 'align-self',
                    type: 'radio',
                    defaults: 'auto',
                    list: [{
                        value: 'auto',
                        name: 'Auto',
                    }, {
                        value: 'flex-start',
                        title: 'Start',
                        className: 'icons-flex icon-al-start',
                    }, {
                        value: 'flex-end',
                        title: 'End',
                        className: 'icons-flex icon-al-end',
                    }, {
                        value: 'stretch',
                        title: 'Stretch',
                        className: 'icons-flex icon-al-str',
                    }, {
                        value: 'center',
                        title: 'Center',
                        className: 'icons-flex icon-al-center',
                    }],
                }]
            }
            ],
        },
        canvas: {
            scripts: [
                '/sites/all/modules/custom/components/lib/grapesjs/js/jquery-2.2.0.min.js',
                '/sites/all/modules/custom/components/lib/grapesjs/js/bootstrap.min.js',
               // 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
               // '/sites/all/modules/custom/components/lib/flexslider/jquery.flexslider-min.js',
                '/sites/all/modules/custom/components/lib/grapesjs/js/custom.js',
              //  '/sites/all/modules/custom/components/js/customs.js'

            ]
        }


    }
);
//set component


var cmdm = editor.Commands;
cmdm.add('open-github', {
    run: function (em, sender) {
        sender.set('active', true);
    },
});
cmdm.add('back-home', {
    run: function (em, sender) {
        sender.set('active', true);
        window.location.replace("/");
    },
});
cmdm.add('logout', {
    run: function (em, sender) {
        sender.set('active', true);
        window.location.replace("/user/logout");
    },
});
cmdm.add('export-component', {
    run: function (em, sender) {
        sender.set('active', true);
        var InnerHtml =  editor.getHtml();
      //  console.log('nhan');
       document.getElementById('html-export-component').value = InnerHtml;
        document.getElementById('css-export-component').value = editor.getCss();
        show('form-wrapper-export-component');

        function show(obj) {
            var el = document.getElementById(obj);
            el.style.display = 'block';
        }
    },
});
cmdm.add('save-database', {
    run: function (em, sender) {
        sender.set('active', false);
        //  console.log('nhan');
        //var Html = $("#gjs").html();


        var InnerHtml =  editor.getHtml();
        document.getElementById('html-component').value = InnerHtml;
        document.getElementById('css-component').value = editor.getCss();
        //html.value(InnerHtml);

        show('form-wrapper-save');

        //   InnerHtml.appendTo($("#canvas"));
        var div = document.getElementById('canvas');
        div.innerHTML = InnerHtml;
        var image = document.getElementById('image-component');
        html2canvas($("#canvas"), {
            onrendered: function (canvas) {
                theCanvas = canvas;
                var img = getBase64Image(canvas);
                image.value = img;
            }
        });
        div.innerHTML = '';

        function show(obj) {
            var el = document.getElementById(obj);
            el.style.display = 'block';
        }

        function getBase64Image(canvas) {
            //  var canvas = document.createElement("canvas");
            var dataURL = canvas.toDataURL("image/jpg");

            return dataURL;
        }
    },
});


window.editor = editor;
var panelManager = editor.Panels;
panelManager.addButton('save-db', {
    id: 'save-db',
    className: 'fa fa-floppy-o',
    command: 'open-github',
    attributes: {title: 'Save DB'},
    active: true,
});

// Simple warn notifier
var origWarn = console.warn;
toastr.options = {
    closeButton: true,
    preventDuplicates: true,
    showDuration: 250,
    hideDuration: 150
};
console.warn = function (msg) {
    toastr.warning(msg);
    origWarn(msg);
};


// Beautify tooltips
$('*[title]').each(function () {
    var el = $(this);
    var title = el.attr('title').trim();
    if (!title)
        return;
    el.attr('data-tooltip', el.attr('title'));
    el.attr('title', '');
});
var blockManager = editor.BlockManager;


blockManager.add('navbar-block', {
    label: 'Navbar',
    category: 'Bootstrap',
    content: '<nav class="navbar"><div class="container-fluid"><div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>  </div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li><a href="#">About us</a></li><li><a href="#">Portfolio</a></li><li><a href="#">Service</a></li><li><a href="#">Feature</a></li><li><a href="#">Blog</a></li><li><a href="#">Contact</a></li></ul></div></div> </nav>',
    attributes: {
        class: 'fa fa-bars'
    }
});

blockManager.add('grid1column', {
    label: 'Grid 1 column',
    category: 'Bootstrap',
    content: '<div class="container"><div class="row"><div class="col-lg-12 cols col-md-12"></div></div></div>',
    attributes: {
        class: 'fa fa-th'
    }
});
blockManager.add('grid2column', {
    label: 'Grid 2 column',
    category: 'Bootstrap',
    content: '<div class="container"><div class="row"><div class="col-lg-6 cols col-md-6"></div><div class="col-lg-6 cols col-md-6"></div></div></div>',
    attributes: {
        class: 'fa fa-th'
    }
});
blockManager.add('grid3column', {
    label: 'Grid 3 column',
    category: 'Bootstrap',
    content: '<div class="container"><div class="row"><div class="col-lg-4 cols col-md-4"></div><div class="col-lg-4 cols col-md-4"></div><div class="col-lg-4 cols col-md-4"></div></div></div>',
    attributes: {
        class: 'fa fa-th'
    }
});
blockManager.add('grid4column', {
    label: 'Grid 4 column',
    category: 'Bootstrap',
    content: '<div class="container"><div class="row"><div class="col-lg-3 cols col-md-3"></div><div class="col-lg-3 cols col-md-3"></div><div class="col-lg-3 cols col-md-3"></div><div class="col-lg-3 cols col-md-3"></div></div></div>',
    attributes: {
        class: 'fa fa-th'
    }
});
blockManager.add('grid37column', {
    label: 'Grid 3/7',
    category: 'Bootstrap',
    content: '<div class="container"><div class="row"><div class="col-lg-3 cols col-md-3"></div><div class="col-lg-9 cols col-md-9"></div></div></div>',
    attributes: {
        class: 'fa fa-th'
    }
});
blockManager.add('grid28column', {
    label: 'Grid 2/8',
    category: 'Bootstrap',
    content: '<div class="container"><div class="row"><div class="col-lg-2 cols col-md-2"></div><div class="col-lg-10 cols col-md-10"></div></div></div>',
    attributes: {
        class: 'fa fa-th'
    }
});
blockManager.add('pagination', {
    label: 'Pagination',
    category: 'Bootstrap',
    content: '<nav aria-label="Page navigation"><ul class="pagination"><li> <a href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span> </a></li><li><a href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li> <a href="#" aria-label="Next"> <span aria-hidden="true">&raquo;</span> </a></li></ul> </nav>',
    attributes: {
        class: 'fa fa-list-ol'
    }
});
blockManager.add('breadcrumb', {
    label: 'Breadcrumb',
    category: 'Bootstrap',
    content: '<ol id="breadcrumb" class="breadcrumb"><li><a href="#">Home</a></li><li><a href="#">Library</a></li><li class="active">Data</li></ol>',
    attributes: {
        class: 'fa fa-list-ol'
    }
});
blockManager.add('slider', {
    label: 'Slider',
    category: 'Basic',
    content: '<div class="flexslider"><ul class="slides"><li> <img src="/sites/default/files/kitchen_adventurer_caramel.jpg" /></li><li> <img src="/sites/default/files/kitchen_adventurer_lemon.jpg" /></li><li> <img src="/sites/default/files/kitchen_adventurer_donut.jpg" /></li></ul></div>',
    attributes: {
        class: 'fa fa-list-ol'
    }
});
editor.getComponents().add('<link rel="stylesheet" href="/sites/all/modules/custom/components/lib/grapesjs/css/bootstrap.min.css"><link rel="stylesheet" href="/sites/all/modules/custom/components/lib/flexslider/flexslider.css">');

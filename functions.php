<?php

//for security, hide wp version in web pages and feeds
function remove_version_info() {
     return '';
}
add_filter('the_generator', 'remove_version_info');

// use shortcodes in widgets
add_filter( 'widget_text', 'shortcode_unautop');
add_filter( 'widget_text', 'do_shortcode');


//register custom menus
function register_my_menus() {
  register_nav_menus(
    array(
      'primary-menu' => 'Primary Menu',
      'utility-menu' => 'Utility Menu'
    )
  );
}
add_action( 'init', 'register_my_menus' );

//register sidebars
add_action( 'widgets_init', 'my_register_sidebars' );

// Register Custom Navigation Walker
require_once('wp_bootstrap_navwalker.php');

function my_register_sidebars() {

	/* register the primary sidebar. */
	register_sidebar(
		array(
			'id' => 'primary',
			'name' => __( 'Primary Sidebar' ),
            'class' => 'sidebar',
			'before_widget' => '<li id="%1$s" class="widget %2$s">',
			'after_widget' => '</li>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>'
		)
	);

    register_sidebar(    
    		array(
			'id' => 'footer',
			'name' => __( 'Footer Sidebar' ),
            'class' => 'footer-sidebar',
			'before_widget' => '<li id="%1$s" class="widget %2$s">',
			'after_widget' => '</li>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>'
		)
	);
    
    register_sidebar(    
    		array(
			'id' => 'footer-copyright',
			'name' => __( 'Footer Copyright' ),
            'class' => 'footer-copyright',
			'before_widget' => '<li id="%1$s" class="widget %2$s footer-copyright">',
			'after_widget' => '</li>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>'
		)
	);

	/* repeat register_sidebar() code for additional sidebars. */
}

//add support for page excerpts
add_post_type_support( 'page', 'excerpt' );

//add support for post thumbnails
add_theme_support( 'post-thumbnails' );

add_image_size( 'sml_size', 300 ); 
add_image_size( 'mid_size', 600 ); 
add_image_size( 'lrg_size', 1200 ); 
add_image_size( 'sup_size', 2400 );

// Only on front-end pages, NOT in admin area
if (!is_admin()) {

	// Load CSS & JS
    function stattransfer_styles() {
        wp_enqueue_style( 'stattransfer', get_stylesheet_uri() );
        
        //example add custom style
        //wp_enqueue_style( 'stattransfer-customcssexample', get_template_directory_uri() . '/example/example.css');
        
        
        // Font Awesome
        wp_enqueue_style('stattransfer-font-awesome', '//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css', array(), null, 'all');

        //bri's custom styles
        wp_enqueue_style( 'stattransfer-overwritecss', get_template_directory_uri() . '/overwrite.css');        
        
        //add ubuntu font
        wp_enqueue_style( 'stattransfer-font-ubuntu', '//fonts.googleapis.com/css?family=Ubuntu');
        
        
        // Flexslider style
        //wp_enqueue_style('stattransfer-flexslider-style', get_template_directory_uri() . '/css/flexslider.css', array(), null, 'all');

       
    }
    
    function stattransfer_scripts() {
        
        // unload bundled jQuery and load from cdn for faster load time
		wp_deregister_script('jquery');
        //load from cdn
		wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', array(), null, false);
		//load jQuery before other js that require jQuery
        wp_enqueue_script('jquery');

        //true will load in footer which is usually what you want, false is header
        //20120206 is version number    
        wp_enqueue_script( 'stattransfer-bootstrap', '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', array('jquery'), '20151021', true );

        //add hover functionality on desktop view
        wp_enqueue_script( 'stattransfer-bootstrap-hover-dropdown', get_template_directory_uri() . '/js/bootstrap-hover-dropdown.min.js', array('jquery'), '20151021', true );

        //add hover functionality on desktop view
        //wp_enqueue_script( 'stattransfer-footer-distribute-widgets', get_template_directory_uri() . '/js/footer-distribute-widgets.js', array('jquery'), '20151021', true );
     
        //Flexslider scripts
       // wp_enqueue_script( 'stattransfer-flexslider-script', get_template_directory_uri() . '/js/jquery.flexslider.js', array('jquery'), '20151021', true );
        
        //mobile menu dropdown switched from hover to on click
        wp_enqueue_script( 'stattransfer-mobile-no-hover', get_template_directory_uri() . '/js/no-hover-mobile-dropdown.js', array('jquery'), '20151021', true );
        

    }
    //add styles before adding scripts hence the order 11 then 12
    add_action( 'wp_enqueue_scripts', 'stattransfer_styles', 11 );
    add_action( 'wp_enqueue_scripts', 'stattransfer_scripts', 12 );
    }

                <div class="container">
                    <div class="home-row home-about-row"><!--about-->

                        <div class="try-stat"><!--try-stat-->
                        <h2>Try Stat/Transfer Today!</h2>
                        <div class="try-button">
                            <a href="<?php echo esc_url( get_permalink( get_page_by_title( 'download' ))); ?>">
                                <button type="button" class="btn btn-info btn-block">Download A Free Demo</button>
                            </a>
                        </div>

                        </div><!--/try-stat--> 
                </div>
                <div class="container">
                    <div class="home-row home-users-row"><!--users-->
                        <h2>STAT/TRANSFER USERS</h2>
                        <?php echo do_shortcode('[supsystic-slider id=2 position="center"]') ?>
                    </div><!--/users-->
                </div>
                
            </div>
</div><!-- /class all-main-containers container -->



            <footer class="content-info">
                
                <div class="container">
                    <div class="row footer-row">
                        <div class="row distribute-widgets">
                            <?php dynamic_sidebar( 'footer'); ?>
                        </div>  
                        <div class="footer-search">
                            <?php get_search_form() ;?> 

                        </div>
                        <div class="footer-brand-container">
                            <h4>Created by:</h4>
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                                <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/circle-logo.png" alt="logo" class="logo-footer"/>
                            </a>
                        </div>
                        <div class="footer-copyright">
                            <?php dynamic_sidebar( 'footer-copyright'); ?>
                        </div>
                    </div>
                </div>
                <span class="login-link"><?php wp_loginout(); ?></span>
                
                    


            </footer>

        <script src="//localhost:35729/livereload.js"></script>

        <?php wp_footer(); ?>
    </body>
</html>

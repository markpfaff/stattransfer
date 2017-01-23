            </div><!-- /class all-main-containers container -->



            <footer class="content-info">
                
                <div class="container">
                    <div class="row">
                        <div class="row distribute-widgets">
                            <?php dynamic_sidebar( 'footer'); ?>
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

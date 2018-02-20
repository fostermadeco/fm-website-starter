<?php
  require_once 'vendor/autoload.php';
  require_once 'mix.php';
?>
<!doctype html>
<html lang="en" class="no-js">

    <head>
        <meta charset="utf-8">
        <title>Starter Site</title>
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="shortcut icon" href="/favicon.ico">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <style>body{visibility:hidden;}</style>
        <link rel="stylesheet" href="<?php echo mix('assets/main.css'); ?>" />
    </head>

    <body>

        <header>
            <div class="wrapper cleared">
                <a href="#"><img src="" alt=""></a>
                <nav>
                    <ul>
                        <li><a href="#">nav</a></li>
                        <li><a href="#">nav</a></li>
                        <li><a href="#">nav</a></li>
                    </ul>
                </nav>
            </div><!-- /.wrapper -->
        </header>

        <div class="content">
            <div class="wrapper cleared">

                <h1>Hello world! This is the Boilerplate Build!</h1>
                <h2><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Welcome</h2>

            </div><!-- /.wrapper -->
        </div><!-- /.content -->

        <footer>
            <div class="wrapper cleared">
            </div><!-- /.wrapper -->
        </footer>

        <script src="<?php echo mix('assets/main.js'); ?>"></script>

    </body>
</html>
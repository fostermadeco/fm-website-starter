<?php
  require_once __DIR__ . '/../vendor/autoload.php';
  require_once __DIR__ . '/../mix.php';
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
        <div class="container mx-auto bg-blue-200 p-2">
            <ul class="flex">
                <li class="">
                    <a class="mr-2 text-yellow-600" href="#">Active</a>
                </li>
                <li class="">
                    <a class="mr-2" href="#">Link</a>
                </li>
                <li class="">
                    <a class="mr-2" href="#">Link</a>
                </li>
                <li class="">
                    <a class="mr-2 disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>

        <div class="container mx-auto w-1/2">
            <h1>Hello world!</h1>
            <h2><i class="fas fa-arrow-circle-right" aria-hidden="true"></i> Welcome</h2>
            <h2><a href="http://google.com">Google</a></h2>
            <form action="" novalidate>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
            <div class="flexslider">
                <ul class="slides">
                    <li>
                        <img src="https://picsum.photos/300/200" />
                    </li>
                    <li>
                        <img src="https://picsum.photos/300/200?grayscale" />
                    </li>
                    <li>
                        <img src="https://picsum.photos/300/200?blur" />
                    </li>
                    <li>
                        <img src="https://picsum.photos/300/200" />
                    </li>
                </ul>
            </div>
        </div><!-- /.content -->

        <footer>
            <div class="wrapper cleared">
            </div><!-- /.wrapper -->
        </footer>

        <script src="<?php echo mix('assets/main.js'); ?>"></script>

    </body>
</html>
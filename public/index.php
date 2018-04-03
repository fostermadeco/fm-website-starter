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
        <div class="container">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>

        <div class="container">
            <h1>Hello world!</h1>
            <h2><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Welcome</h2>
            <form action="" novalidate>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
        </div><!-- /.content -->

        <footer>
            <div class="wrapper cleared">
            </div><!-- /.wrapper -->
        </footer>

        <script src="<?php echo mix('assets/main.js'); ?>"></script>

    </body>
</html>
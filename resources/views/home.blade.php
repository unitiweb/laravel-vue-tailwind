<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Site Title</title>
    <meta name="description" content="Site description.">
    <meta name="keywords" content="site,key,words">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.5">

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <script>window.env = @json($env)</script>
</head>
<body>
    <div id="app"></div>
    <!-- build files will be auto injected -->
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>

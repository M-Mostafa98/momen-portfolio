<?php
/*
Plugin Name: Momen Mostafa Portfolio
Description: Portfolio Website von Momen Mostafa
Version: 1.1
Author: Momen Mostafa
*/

if (!defined('ABSPATH')) exit;

// Intercept front page and output portfolio
add_action('template_redirect', function() {
    if (!is_front_page() && !is_home()) return;
    
    $url = plugin_dir_url(__FILE__) . 'js/';
    
    echo '<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Momen Mostafa - Fotograf</title>
<style>*{margin:0;padding:0;box-sizing:border-box;}body{background:#2a2a2a;}#root{min-height:100vh;}</style>
</head>
<body>
<div id="root"><p style="color:#999;font-family:sans-serif;padding:40px;text-align:center">Lädt...</p></div>
<script src="' . esc_url($url) . 'react.min.js"></script>
<script src="' . esc_url($url) . 'react-dom.min.js"></script>
<script src="' . esc_url($url) . 'images.js"></script>
<script src="' . esc_url($url) . 'app.js"></script>
</body>
</html>';
    exit;
});

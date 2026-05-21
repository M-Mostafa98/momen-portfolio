<?php
/*
Plugin Name: Momen Mostafa Portfolio
Description: Portfolio Website von Momen Mostafa
Version: 1.6
Author: Momen Mostafa
*/

if (!defined('ABSPATH')) exit;

// Pfade, die unsere SPA-Shell ausliefern sollen (zusätzlich zur Startseite).
function mm_portfolio_paths() {
    return [
        '/',
        '/ueber-mich',
        '/videos',
        '/kontakt',
        '/impressum',
        '/arbeit/delivery',
        '/arbeit/healing',
        '/arbeit/islamic',
    ];
}

// Wenn eine unserer SPA-URLs angefragt wird, übernimm und liefere die Shell aus
// — auch wenn WordPress sonst 404 setzen würde.
add_action('template_redirect', function() {
    $req = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if ($req === null) $req = '/';
    // Normalisiere: trailing slash weg (außer für Root)
    $req = '/' . trim($req, '/');
    if ($req === '/') {
        $is_spa = is_front_page() || is_home();
    } else {
        $is_spa = in_array($req, mm_portfolio_paths(), true);
    }
    if (!$is_spa) return;

    status_header(200);
    nocache_headers();

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
<script src="' . esc_url($url) . 'profile.js"></script>
<script src="' . esc_url($url) . 'app.js"></script>
</body>
</html>';
    exit;
});

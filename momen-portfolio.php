<?php
/*
Plugin Name: Momen Mostafa Portfolio
Description: Portfolio Website von Momen Mostafa
Version: 1.7
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
        '/arbeit/shaped',
    ];
}

// Wenn eine unserer SPA-URLs angefragt wird, übernimm und liefere die Shell aus
// — auch wenn WordPress sonst 404 setzen würde.
// Eigene Sitemap für die SPA-Pfade: /mm-sitemap.xml
add_action('init', function () {
    add_rewrite_rule('^mm-sitemap\.xml$', 'index.php?mm_sitemap=1', 'top');
});
add_filter('query_vars', function ($v) { $v[] = 'mm_sitemap'; return $v; });
add_action('template_redirect', function () {
    if (!get_query_var('mm_sitemap')) return;
    header('Content-Type: application/xml; charset=UTF-8');
    echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
    echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
    foreach (mm_portfolio_paths() as $p) {
        $prio = $p === '/' ? '1.0' : (strpos($p, '/arbeit/') === 0 ? '0.8' : '0.7');
        echo '<url><loc>' . esc_url(home_url($p)) . '</loc><changefreq>monthly</changefreq><priority>' . $prio . '</priority></url>' . "\n";
    }
    echo '</urlset>';
    exit;
}, 5);

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

    $meta = [
        '/'                 => ['Fotograf Hannover – Events, Porträts, Messe & Immobilien | Momen Mostafa', 'Fotograf und Fotojournalist in Hannover: Veranstaltungen und Events, Porträts und Business-Fotos, Messefotografie, Immobilien- und Architekturfotografie sowie Reportagen. Jetzt Termin anfragen.'],
        '/ueber-mich'        => ['Über mich – Fotograf Momen Mostafa, Hannover', 'Momen Mostafa ist Fotograf und Fotojournalist in Hannover. Schwerpunkte: Events und Veranstaltungen, Porträts, Messe, Immobilien und dokumentarische Reportagen.'],
        '/videos'            => ['Video – Fotograf & Videograf Hannover | Momen Mostafa', 'Videoarbeiten und bewegte Bilder von Events, Porträts und Reportagen – Momen Mostafa, Hannover.'],
        '/kontakt'           => ['Kontakt – Fotograf in Hannover buchen | Momen Mostafa', 'Fotograf in Hannover für Events, Veranstaltungen, Porträts, Messe und Immobilien anfragen. Momen Mostafa – schnelle Rückmeldung, deutschlandweit buchbar.'],
        '/impressum'         => ['Impressum – Momen Mostafa', 'Impressum und rechtliche Angaben.'],
        '/arbeit/delivery'   => ['Delivery Service – Reportagefotografie | Momen Mostafa', 'Dokumentarische Fotoserie über Lieferfahrer und ihren Arbeitsalltag – Fotograf Momen Mostafa, Hannover.'],
        '/arbeit/healing'    => ['Healing Diary – Dokumentarfotografie | Momen Mostafa', 'Fotografisches Tagebuch aus Dhaka: Krankheit, Genesung und Alltag – Fotograf Momen Mostafa.'],
        '/arbeit/islamic'    => ['Islamic Feminism – Porträtserie | Momen Mostafa', 'Porträtfotografie: muslimische Frauen in Europa, die sich als emanzipiert verstehen – Momen Mostafa.'],
        '/arbeit/shaped'     => ['Shaped to Resist – Dokumentarfotografie | Momen Mostafa', 'Fotoarbeit über Angehörige von Flutopfern in Sunamganj, Bangladesch – Fotograf Momen Mostafa.'],
    ];
    $m = isset($meta[$req]) ? $meta[$req] : $meta['/'];
    $canon = home_url($req === '/' ? '/' : $req);
    $og_img = $url . 'og-image.jpg';

    $ld = wp_json_encode([
        '@context' => 'https://schema.org',
        '@graph' => [
            [
                '@type' => ['LocalBusiness', 'ProfessionalService'],
                '@id' => home_url('/#business'),
                'name' => 'Momen Mostafa – Fotograf Hannover',
                'description' => 'Fotograf und Fotojournalist in Hannover für Veranstaltungen und Events, Porträts, Messefotografie, Immobilien- und Architekturfotografie sowie Reportagen.',
                'url' => home_url('/'),
                'image' => $og_img,
                'priceRange' => '€€',
                'address' => ['@type' => 'PostalAddress', 'addressLocality' => 'Hannover', 'postalCode' => '30159', 'addressRegion' => 'Niedersachsen', 'addressCountry' => 'DE'],
                'areaServed' => [
                    ['@type' => 'City', 'name' => 'Hannover'],
                    ['@type' => 'State', 'name' => 'Niedersachsen'],
                    ['@type' => 'Country', 'name' => 'Deutschland'],
                ],
                'knowsLanguage' => ['de', 'en', 'ar'],
                'founder' => ['@id' => home_url('/#person')],
                'hasOfferCatalog' => [
                    '@type' => 'OfferCatalog',
                    'name' => 'Fotografie-Leistungen',
                    'itemListElement' => array_map(function ($s) {
                        return ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Service', 'name' => $s]];
                    }, [
                        'Eventfotografie', 'Veranstaltungsfotografie', 'Porträtfotografie',
                        'Business- und Bewerbungsfotos', 'Messefotografie', 'Kongress- und Konferenzfotografie',
                        'Immobilienfotografie', 'Architekturfotografie', 'Unternehmensfotografie',
                        'Presse- und Reportagefotografie', 'Konzert- und Theaterfotografie', 'Videoproduktion',
                    ]),
                ],
            ],
            [
                '@type' => 'Person',
                '@id' => home_url('/#person'),
                'name' => 'Momen Mostafa',
                'jobTitle' => 'Fotograf und Fotojournalist',
                'url' => home_url('/'),
                'image' => $og_img,
                'worksFor' => ['@id' => home_url('/#business')],
                'address' => ['@type' => 'PostalAddress', 'addressLocality' => 'Hannover', 'addressCountry' => 'DE'],
            ],
            [
                '@type' => 'WebSite',
                '@id' => home_url('/#website'),
                'url' => home_url('/'),
                'name' => 'Momen Mostafa – Fotograf Hannover',
                'inLanguage' => 'de-DE',
                'publisher' => ['@id' => home_url('/#person')],
            ],
        ],
    ]);

    echo '<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>' . esc_html($m[0]) . '</title>
<meta name="description" content="' . esc_attr($m[1]) . '">
<link rel="canonical" href="' . esc_url($canon) . '">
<meta name="robots" content="index,follow,max-image-preview:large">
<link rel="icon" type="image/png" sizes="512x512" href="' . esc_url($url . 'favicon.png') . '">
<link rel="apple-touch-icon" href="' . esc_url($url . 'favicon.png') . '">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Momen Mostafa">
<meta property="og:locale" content="de_DE">
<meta property="og:title" content="' . esc_attr($m[0]) . '">
<meta property="og:description" content="' . esc_attr($m[1]) . '">
<meta property="og:url" content="' . esc_url($canon) . '">
<meta property="og:image" content="' . esc_url($og_img) . '">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="' . esc_attr($m[0]) . '">
<meta name="twitter:description" content="' . esc_attr($m[1]) . '">
<meta name="twitter:image" content="' . esc_url($og_img) . '">
<script type="application/ld+json">' . $ld . '</script>
<style>*{margin:0;padding:0;box-sizing:border-box;}body{background:#2a2a2a;}#root{min-height:100vh;}</style>
</head>
<body>
<div id="root"><p style="color:#999;font-family:sans-serif;padding:40px;text-align:center">Lädt...</p></div>
<noscript><h1>Momen Mostafa – Fotograf in Hannover</h1><p>' . esc_html($m[1]) . '</p><h2>Leistungen</h2><ul><li>Eventfotografie und Veranstaltungsfotografie</li><li>Porträtfotografie, Business- und Bewerbungsfotos</li><li>Messefotografie, Kongresse und Konferenzen</li><li>Immobilienfotografie und Architekturfotografie</li><li>Unternehmens- und Industriefotografie</li><li>Presse-, Reportage- und Dokumentarfotografie</li><li>Konzert- und Theaterfotografie</li><li>Videoproduktion</li></ul><p>Standort Hannover, Niedersachsen – deutschlandweit buchbar.</p></noscript>
<script src="' . esc_url($url) . 'react.min.js"></script>
<script src="' . esc_url($url) . 'react-dom.min.js"></script>
<script src="' . esc_url($url) . 'images.js"></script>
<script src="' . esc_url($url) . 'extras.js"></script>
<script src="' . esc_url($url) . 'extras2.js"></script>
<script src="' . esc_url($url) . 'profile.js"></script>
<script src="' . esc_url($url) . 'app.js"></script>
</body>
</html>';
    exit;
});

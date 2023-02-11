<?php

/**
 * @file
 * includes.settings.php
 */

$environment_id = getenv('ENVIRONMENT_ID');

$files = [
  'config.settings.php',
];

foreach ($files as $file) {
  $config_filepath = __DIR__ . '/includes/' . $file;
  if (file_exists($config_filepath)) {
    require $config_filepath;
  }
}

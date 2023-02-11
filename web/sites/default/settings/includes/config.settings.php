<?php

/**
 * @file
 * config.settings.php
 */

if (!isset($environment_id)) {
  $environment_id = getenv('ENVIRONMENT_ID');
}

/**
 * Default configuration sync directory.
 */
$settings['config_sync_directory'] = DRUPAL_ROOT . '/../config/default';

/**
 * Explicitly set the verbosity of errors and warnings.
 */
if (in_array($environment_id, ['local', 'development'])) {
  $config['system.logging']['error_level'] = 'verbose';
}

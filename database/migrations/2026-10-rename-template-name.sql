-- Removes the old template name from stored content (class names, blog slug, SEO titles).
-- Run once on the live database (phpMyAdmin > SQL) BEFORE clicking "Yayınla" with the new build,
-- otherwise Publish writes the old names back into data/site*.json.
UPDATE `entries`
   SET `data_json` = REPLACE(REPLACE(REPLACE(`data_json`, 'Sofax', 'AgotaSoft'), 'sofax', 'agota'), 'SOFAX', 'AGOTA'),
       `slug`      = REPLACE(`slug`, 'sofax', 'agota'),
       `title`     = REPLACE(`title`, 'Sofax', 'AgotaSoft')
 WHERE `data_json` LIKE '%ofax%' OR `slug` LIKE '%ofax%' OR `title` LIKE '%ofax%';

UPDATE `settings`
   SET `setting_value` = REPLACE(REPLACE(REPLACE(`setting_value`, 'Sofax', 'AgotaSoft'), 'sofax', 'agota'), 'SOFAX', 'AGOTA')
 WHERE `setting_value` LIKE '%ofax%';

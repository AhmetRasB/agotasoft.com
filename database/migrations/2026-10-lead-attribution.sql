-- Lead attribution (Reklam, Analitik ve Ölçüm Rehberi §3).
-- Run once on a database created before this change (phpMyAdmin > SQL). New installs get these columns from install.sql.
ALTER TABLE `contact_messages`
  ADD COLUMN `attribution` TEXT NULL AFTER `ip_address`,
  ADD COLUMN `event_id` VARCHAR(64) NULL AFTER `attribution`;

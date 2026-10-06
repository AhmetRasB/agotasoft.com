-- Stores when the visitor ticked the privacy-policy checkbox on the demo form.
ALTER TABLE `contact_messages`
  ADD COLUMN `privacy_accepted_at` DATETIME NULL AFTER `newsletter`;



SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET FOREIGN_KEY_CHECKS=0;


DROP TABLE IF EXISTS stats;
		
CREATE TABLE stats (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_Players` INTEGER NULL DEFAULT NULL,
  `id_Opponent` INTEGER NULL DEFAULT NULL,
  `fg%` INTEGER NULL DEFAULT NULL,
  `ft%` INTEGER NULL DEFAULT NULL,
  `3pm` INTEGER NULL DEFAULT NULL,
  `reb` INTEGER NULL DEFAULT NULL,
  `ast` INTEGER NULL DEFAULT NULL,
  `stl` INTEGER NULL DEFAULT NULL,
  `blk` INTEGER NULL DEFAULT NULL,
  `to` INTEGER NULL DEFAULT NULL,
  `pts` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Players'
-- 
-- ---

DROP TABLE IF EXISTS `Players`;
		
CREATE TABLE `Players` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Teams'
-- 
-- ---

DROP TABLE IF EXISTS `Teams`;
		
CREATE TABLE `Teams` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Stats` ADD FOREIGN KEY (id_Players) REFERENCES `Players` (`id`);
ALTER TABLE `Stats` ADD FOREIGN KEY (id_Opponent) REFERENCES `Teams` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Stats` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Players` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Teams` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Stats` (`id`,`id_Players`,`id_Opponent`,`fg%`,`ft%`,`3pm`,`reb`,`ast`,`stl`,`blk`,`to`,`pts`) VALUES
-- ('','','','','','','','','','','','');
-- INSERT INTO `Players` (`id`,`Name`) VALUES
-- ('','');
-- INSERT INTO `Teams` (`id`,`Name`) VALUES
-- ('','');


SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE if exists mvp;
CREATE DATABASE mvp;
USE mvp;

DROP TABLE IF EXISTS stats;

-- ---
-- Table 'Stats'
-- 
-- ---

		
CREATE TABLE stats (
  playerId INTEGER,
  opponentId INTEGER,
  fg INTEGER,
  ft INTEGER,
  3pm INTEGER,
  reb INTEGER,
  ast INTEGER,
  stl INTEGER,
  blk INTEGER,
  turnovers INTEGER,
  pts INTEGER
);

-- ---
-- Table 'Players'
-- 
-- ---

DROP TABLE IF EXISTS players;
		
CREATE TABLE players (
  playerId INTEGER PRIMARY KEY,
  name INTEGER
);

-- ---
-- Table 'Teams'
-- 
-- ---

DROP TABLE IF EXISTS teams;
		
CREATE TABLE teams (
  teamId INTEGER PRIMARY KEY,
  name INTEGER
);


-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS users;
    
CREATE TABLE users (
  userId INTEGER PRIMARY KEY,
  username VARCHAR(16),
  password VARCHAR(16)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE stats ADD FOREIGN KEY (playerId) REFERENCES players (playerId);
ALTER TABLE stats ADD FOREIGN KEY (opponentId) REFERENCES teams (teamId);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Stats` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Players` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Teams` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('333','555','46','89','1','4','6','0','0','2','17');
INSERT INTO players VALUES
-- id, name
('333','John Doe');
INSERT INTO teams VALUES
-- id, name
('555','Warriors');
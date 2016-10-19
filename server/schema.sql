

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
  teamId INTEGER,
  fg INTEGER,
  ft INTEGER,
  3pm INTEGER,
  reb INTEGER,
  ast INTEGER,
  stl INTEGER,
  blk INTEGER,
  turnovers INTEGER,
  pts INTEGER,
  gameId INTEGER
);

-- ---
-- Table 'Players'
-- 
-- ---

DROP TABLE IF EXISTS players;
		
CREATE TABLE players (
  playerId INTEGER PRIMARY KEY,
  name VARCHAR(40)
);

-- ---
-- Table 'Teams'
-- 
-- ---

DROP TABLE IF EXISTS teams;
		
CREATE TABLE teams (
  teamId INTEGER PRIMARY KEY,
  name VARCHAR(40)
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
ALTER TABLE stats ADD FOREIGN KEY (teamId) REFERENCES teams (teamId);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Stats` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Players` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Teams` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- TEST STATS

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('001','002', '001','46','89','2','3','6','1','0','2','21', '001');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('002','002', '001', '39','82','3','4','4','1','1','1','13', '001');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('003','002', '001', '57','94','3','4','3','0','0','0','15', '001');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('004','002', '001', '44','88','0','9','6','1','1','1','25', '001');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('005','002', '001', '69','78','0','8','5','0','2','2','19', '001');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('001','002', '001', '53','90','1','4','4','0','0','1','18', '002');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('002','002', '001', '44','85','0','4','6','1','0','1','10', '002');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('003','002', '001', '41','88','3','3','2','0','1','0','17', '002');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('004','002', '001', '66','89','0','9','6','0','2','1','25', '002');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('005','002', '001', '53','80','0','9','5','0','2','0','11', '002');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('006','001', '002', '46','89','2','3','6','1','0','2','18', '001');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('007','001', '002', '39','85','3','4','4','1','1','1','29', '001');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('008','001', '002', '57','94','3','4','3','0','0','0','15', '001');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('009','001', '002', '44','88','0','9','6','1','1','1','12', '001');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('010','001', '002', '77','65','0','12','5','0','2','2','31', '001');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('006','001', '002', '53','90','1','4','4','0','0','1','18', '002');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('007','001', '002', '44','85','3','4','6','1','2','2','37', '002');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('008','001', '002', '41','88','3','3','2','0','1','0','17', '002');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('009','001', '002', '66','89','0','9','6','0','2','1','25', '002');

INSERT INTO stats VALUES
-- player, opponent, fg, ft, 3pm, reb, ast, stl, blk, turnovers, pts
('010','001', '002', '63','69','0','12','5','0','3','1','32', '002');



-- TEST PLAYERS

INSERT INTO players VALUES
-- id, name
('001','Mike Bibby');

INSERT INTO players VALUES
-- id, name
('002','Doug Christie');

INSERT INTO players VALUES
-- id, name
('003','Peja Stojakovic');

INSERT INTO players VALUES
-- id, name
('004','Chris Webber');

INSERT INTO players VALUES
-- id, name
('005','Vlade Divac');

INSERT INTO players VALUES
-- id, name
('006','Derek Fisher');

INSERT INTO players VALUES
-- id, name
('007','Kobe Bryant');

INSERT INTO players VALUES
-- id, name
('008','Rick Fox');

INSERT INTO players VALUES
-- id, name
('009','Robert Horry');

INSERT INTO players VALUES
-- id, name
('010','Shaquille ONeal');


-- TEST TEAMS

INSERT INTO teams VALUES
-- id, name
('001','Kings');

INSERT INTO teams VALUES
-- id, name
('002','Lakers');
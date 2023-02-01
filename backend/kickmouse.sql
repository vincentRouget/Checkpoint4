-- MySQL Script generated by MySQL Workbench
-- Wed Feb  1 13:44:17 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Kickmouse
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Kickmouse
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Kickmouse` DEFAULT CHARACTER SET utf8 ;
USE `Kickmouse` ;

-- -----------------------------------------------------
-- Table `Kickmouse`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Kickmouse`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `pseudo` VARCHAR(124) NOT NULL,
  `password` VARCHAR(1024) NOT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Kickmouse`.`score`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Kickmouse`.`score` (
  `idscore` INT NOT NULL AUTO_INCREMENT,
  `number_score` INT NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `average` INT NOT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idscore`, `user_iduser`),
  INDEX `fk_score_user_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_score_user`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `Kickmouse`.`user` (`iduser`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Kickmouse`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `Kickmouse`;
INSERT INTO `Kickmouse`.`user` (`iduser`, `pseudo`, `password`) VALUES (1, 'Jesse', 'jessej');
INSERT INTO `Kickmouse`.`user` (`iduser`, `pseudo`, `password`) VALUES (2, 'Billy', 'billyk');
INSERT INTO `Kickmouse`.`user` (`iduser`, `pseudo`, `password`) VALUES (3, 'Buffalo', 'buffalob');
INSERT INTO `Kickmouse`.`user` (`iduser`, `pseudo`, `password`) VALUES (4, 'Butch', 'butchc');

COMMIT;


-- -----------------------------------------------------
-- Data for table `Kickmouse`.`score`
-- -----------------------------------------------------
START TRANSACTION;
USE `Kickmouse`;
INSERT INTO `Kickmouse`.`score` (`idscore`, `number_score`, `date`, `average`, `user_iduser`) VALUES (1, 52, '2023/01/08', 0.87, 1);
INSERT INTO `Kickmouse`.`score` (`idscore`, `number_score`, `date`, `average`, `user_iduser`) VALUES (2, 63, '2023/01/08', 1.05, 1);
INSERT INTO `Kickmouse`.`score` (`idscore`, `number_score`, `date`, `average`, `user_iduser`) VALUES (3, 74, '2023/01/10', 1.23, 1);
INSERT INTO `Kickmouse`.`score` (`idscore`, `number_score`, `date`, `average`, `user_iduser`) VALUES (4, 66, '2023/01/12', 1.1, 2);
INSERT INTO `Kickmouse`.`score` (`idscore`, `number_score`, `date`, `average`, `user_iduser`) VALUES (5, 82, '2023/01/15', 1.37, 3);
INSERT INTO `Kickmouse`.`score` (`idscore`, `number_score`, `date`, `average`, `user_iduser`) VALUES (6, 88, '2023/01/16', 1.47, 4);

COMMIT;

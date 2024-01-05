-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02-Jan-2024 às 17:41
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `filmes_pabd`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `atores`
--

CREATE TABLE `atores` (
  `IdAtor` int(11) NOT NULL,
  `Nome` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `diretor`
--

CREATE TABLE `diretor` (
  `CodDiretor` int(11) NOT NULL,
  `Nome_diretor` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `diretor`
--

INSERT INTO `diretor` (`CodDiretor`, `Nome_diretor`) VALUES
(1, 'John Ford'),
(2, 'aj saj sxax'),
(3, 'asdadawd'),
(4, 'procopio');

-- --------------------------------------------------------

--
-- Estrutura da tabela `filmes`
--

CREATE TABLE `filmes` (
  `Cod_Filme` int(11) NOT NULL,
  `Nome` varchar(100) NOT NULL,
  `CodGenero` int(11) NOT NULL,
  `CodDiretor` int(11) NOT NULL,
  `Ano` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `filmes`
--

INSERT INTO `filmes` (`Cod_Filme`, `Nome`, `CodGenero`, `CodDiretor`, `Ano`) VALUES
(1, 'Velozes e Furiosos 5', 0, 1, 2011),
(2, 'Anjos da lei', 0, 1, 2012),
(6, 'O estrangeiro', 0, 1, 2017),
(18, 'procopio', 3, 2, 0),
(22, 'mhg', 5, 4, 0),
(25, '', 5, 2, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `filme_atores`
--

CREATE TABLE `filme_atores` (
  `Cod_Filme` int(11) NOT NULL,
  `CodFillme` int(11) NOT NULL,
  `CodAtor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `gênero`
--

CREATE TABLE `gênero` (
  `CodGenero` int(11) NOT NULL,
  `NomeGenero` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `gênero`
--

INSERT INTO `gênero` (`CodGenero`, `NomeGenero`) VALUES
(0, 'Ação'),
(1, 'Romance'),
(3, 'salnnalsd'),
(4, 'sad3eada'),
(5, 'PROCOPIO'),
(8, 'asdaws'),
(9, 'asdawssada');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `atores`
--
ALTER TABLE `atores`
  ADD PRIMARY KEY (`IdAtor`);

--
-- Índices para tabela `diretor`
--
ALTER TABLE `diretor`
  ADD PRIMARY KEY (`CodDiretor`);

--
-- Índices para tabela `filmes`
--
ALTER TABLE `filmes`
  ADD PRIMARY KEY (`Cod_Filme`),
  ADD KEY `Filmes_fk0` (`CodGenero`),
  ADD KEY `Filmes_fk1` (`CodDiretor`);

--
-- Índices para tabela `filme_atores`
--
ALTER TABLE `filme_atores`
  ADD PRIMARY KEY (`Cod_Filme`),
  ADD KEY `Filme_Atores_fk0` (`CodFillme`),
  ADD KEY `Filme_Atores_fk1` (`CodAtor`);

--
-- Índices para tabela `gênero`
--
ALTER TABLE `gênero`
  ADD PRIMARY KEY (`CodGenero`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `atores`
--
ALTER TABLE `atores`
  MODIFY `IdAtor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `diretor`
--
ALTER TABLE `diretor`
  MODIFY `CodDiretor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `filmes`
--
ALTER TABLE `filmes`
  MODIFY `Cod_Filme` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `filme_atores`
--
ALTER TABLE `filme_atores`
  MODIFY `Cod_Filme` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `gênero`
--
ALTER TABLE `gênero`
  MODIFY `CodGenero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `filmes`
--
ALTER TABLE `filmes`
  ADD CONSTRAINT `Filmes_fk0` FOREIGN KEY (`CodGenero`) REFERENCES `gênero` (`CodGenero`),
  ADD CONSTRAINT `Filmes_fk1` FOREIGN KEY (`CodDiretor`) REFERENCES `diretor` (`CodDiretor`);

--
-- Limitadores para a tabela `filme_atores`
--
ALTER TABLE `filme_atores`
  ADD CONSTRAINT `Filme_Atores_fk0` FOREIGN KEY (`CodFillme`) REFERENCES `filmes` (`Cod_Filme`),
  ADD CONSTRAINT `Filme_Atores_fk1` FOREIGN KEY (`CodAtor`) REFERENCES `atores` (`IdAtor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

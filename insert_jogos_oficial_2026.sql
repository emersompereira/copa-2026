-- Apaga jogos antigos e recria com grupos oficiais da Copa 2026
DELETE FROM partidas;

-- GRUPO A: México, África do Sul, Coreia do Sul, República Tcheca
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('México', 'MX', 'África do Sul', 'ZA', 'A', 1, 'Azteca', '2026-06-11T16:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Coreia do Sul', 'KR', 'República Tcheca', 'CZ', 'A', 1, 'Akron', '2026-06-11T23:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('México', 'MX', 'Coreia do Sul', 'KR', 'A', 2, 'Azteca', '2026-06-15T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('República Tcheca', 'CZ', 'África do Sul', 'ZA', 'A', 2, 'Arrowhead', '2026-06-15T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('África do Sul', 'ZA', 'Coreia do Sul', 'KR', 'A', 3, 'MetLife', '2026-06-24T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('República Tcheca', 'CZ', 'México', 'MX', 'A', 3, 'SoFi Stadium', '2026-06-24T21:00:00Z');

-- GRUPO B: Canadá, Bósnia e Herzegovina, Qatar, Suíça
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Canadá', 'CA', 'Bósnia e Herzegovina', 'BA', 'B', 1, 'BMO Field', '2026-06-12T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Qatar', 'QA', 'Suíça', 'CH', 'B', 1, 'Levi Stadium', '2026-06-13T12:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Suíça', 'CH', 'Bósnia e Herzegovina', 'BA', 'B', 2, 'BC Place', '2026-06-18T12:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Canadá', 'CA', 'Qatar', 'QA', 'B', 2, 'BMO Field', '2026-06-19T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Bósnia e Herzegovina', 'BA', 'Qatar', 'QA', 'B', 3, 'Lumen Field', '2026-06-24T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Suíça', 'CH', 'Canadá', 'CA', 'B', 3, 'BC Place', '2026-06-25T21:00:00Z');

-- GRUPO C: Brasil, Marrocos, Haiti, Escócia
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Brasil', 'BR', 'Marrocos', 'MA', 'C', 1, 'MetLife Stadium', '2026-06-13T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Haiti', 'HT', 'Escócia', 'gb-sct', 'C', 1, 'Gillette Stadium', '2026-06-13T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Brasil', 'BR', 'Haiti', 'HT', 'C', 2, 'Gillette Stadium', '2026-06-19T20:30:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Escócia', 'gb-sct', 'Marrocos', 'MA', 'C', 2, 'Gillette Stadium', '2026-06-19T20:30:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Marrocos', 'MA', 'Haiti', 'HT', 'C', 3, 'Lincoln Financial Field', '2026-06-24T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Escócia', 'gb-sct', 'Brasil', 'BR', 'C', 3, 'Lincoln Financial Field', '2026-06-24T20:00:00Z');

-- GRUPO D: EUA, Paraguai, Austrália, Turquia
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Estados Unidos', 'US', 'Paraguai', 'PY', 'D', 1, 'Lumen Field', '2026-06-12T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Austrália', 'AU', 'Turquia', 'TR', 'D', 1, 'Levi Stadium', '2026-06-13T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Turquia', 'TR', 'Paraguai', 'PY', 'D', 2, 'Levi Stadium', '2026-06-19T19:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Estados Unidos', 'US', 'Austrália', 'AU', 'D', 2, 'Lumen Field', '2026-06-19T22:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Paraguai', 'PY', 'Austrália', 'AU', 'D', 3, 'Levi Stadium', '2026-06-25T19:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Turquia', 'TR', 'Estados Unidos', 'US', 'D', 3, 'Levi Stadium', '2026-06-25T22:00:00Z');

-- GRUPO E: Alemanha, Curaçao, Costa do Marfim, Equador
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Alemanha', 'DE', 'Curaçao', 'CW', 'E', 1, 'NRG Stadium', '2026-06-14T12:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Costa do Marfim', 'CI', 'Equador', 'EC', 'E', 1, 'Lincoln Financial Field', '2026-06-14T19:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Alemanha', 'DE', 'Costa do Marfim', 'CI', 'E', 2, 'BMO Field', '2026-06-20T19:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Equador', 'EC', 'Curaçao', 'CW', 'E', 2, 'BMO Field', '2026-06-20T19:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Curaçao', 'CW', 'Costa do Marfim', 'CI', 'E', 3, 'Arrowhead Stadium', '2026-06-25T16:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Equador', 'EC', 'Alemanha', 'DE', 'E', 3, 'Arrowhead Stadium', '2026-06-25T19:00:00Z');

-- GRUPO F: Holanda, Japão, Suécia, Tunísia
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Holanda', 'NL', 'Japão', 'JP', 'F', 1, 'AT&T Stadium', '2026-06-14T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Suécia', 'SE', 'Tunísia', 'TN', 'F', 1, 'Estadio BBVA', '2026-06-14T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Holanda', 'NL', 'Suécia', 'SE', 'F', 2, 'Estadio BBVA', '2026-06-20T12:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Tunísia', 'TN', 'Japão', 'JP', 'F', 2, 'NRG Stadium', '2026-06-20T22:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Japão', 'JP', 'Suécia', 'SE', 'F', 3, 'Estadio BBVA', '2026-06-25T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Tunísia', 'TN', 'Holanda', 'NL', 'F', 3, 'AT&T Stadium', '2026-06-25T19:00:00Z');

-- GRUPO G: Bélgica, Egito, Irã, Nova Zelândia
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Bélgica', 'BE', 'Egito', 'EG', 'G', 1, 'Lumen Field', '2026-06-15T12:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Irã', 'IR', 'Nova Zelândia', 'NZ', 'G', 1, 'SoFi Stadium', '2026-06-15T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Bélgica', 'BE', 'Irã', 'IR', 'G', 2, 'SoFi Stadium', '2026-06-21T12:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Nova Zelândia', 'NZ', 'Egito', 'EG', 'G', 2, 'SoFi Stadium', '2026-06-21T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Egito', 'EG', 'Irã', 'IR', 'G', 3, 'BC Place', '2026-06-26T20:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Nova Zelândia', 'NZ', 'Bélgica', 'BE', 'G', 3, 'Lumen Field', '2026-06-26T20:00:00Z');

-- GRUPO H: Espanha, Cabo Verde, Arábia Saudita, Uruguai
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Espanha', 'ES', 'Cabo Verde', 'CV', 'H', 1, 'Mercedes-Benz Stadium', '2026-06-15T12:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Arábia Saudita', 'SA', 'Uruguai', 'UY', 'H', 1, 'NRG Stadium', '2026-06-15T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Uruguai', 'UY', 'Cabo Verde', 'CV', 'H', 2, 'Hard Rock Stadium', '2026-06-21T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Espanha', 'ES', 'Arábia Saudita', 'SA', 'H', 2, 'NRG Stadium', '2026-06-21T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Cabo Verde', 'CV', 'Arábia Saudita', 'SA', 'H', 3, 'Hard Rock Stadium', '2026-06-26T19:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Uruguai', 'UY', 'Espanha', 'ES', 'H', 3, 'NRG Stadium', '2026-06-26T18:00:00Z');

-- GRUPO I: França, Senegal, Iraque, Noruega
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('França', 'FR', 'Senegal', 'SN', 'I', 1, 'Gillette Stadium', '2026-06-16T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Iraque', 'IQ', 'Noruega', 'NO', 'I', 1, 'BMO Field', '2026-06-16T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Senegal', 'SN', 'Iraque', 'IQ', 'I', 2, 'Gillette Stadium', '2026-06-26T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Noruega', 'NO', 'França', 'FR', 'I', 2, 'BMO Field', '2026-06-26T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Iraque', 'IQ', 'França', 'FR', 'I', 3, 'Gillette Stadium', '2026-06-27T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Noruega', 'NO', 'Senegal', 'SN', 'I', 3, 'BMO Field', '2026-06-27T18:00:00Z');

-- GRUPO J: Argentina, Argélia, Áustria, Jordânia
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Argentina', 'AR', 'Argélia', 'DZ', 'J', 1, 'Arrowhead Stadium', '2026-06-16T20:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Áustria', 'AT', 'Jordânia', 'JO', 'J', 1, 'Levi Stadium', '2026-06-16T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Argentina', 'AR', 'Áustria', 'AT', 'J', 2, 'Levi Stadium', '2026-06-22T12:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Jordânia', 'JO', 'Argélia', 'DZ', 'J', 2, 'Levi Stadium', '2026-06-22T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Argélia', 'DZ', 'Áustria', 'AT', 'J', 3, 'Levi Stadium', '2026-06-27T19:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Jordânia', 'JO', 'Argentina', 'AR', 'J', 3, 'Levi Stadium', '2026-06-27T21:00:00Z');

-- GRUPO K: Portugal, RD Congo, Uzbequistão, Colômbia
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Portugal', 'PT', 'RD Congo', 'CD', 'K', 1, 'NRG Stadium', '2026-06-17T12:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Uzbequistão', 'UZ', 'Colômbia', 'CO', 'K', 1, 'Estadio Azteca', '2026-06-17T20:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Portugal', 'PT', 'Uzbequistão', 'UZ', 'K', 2, 'Estadio Azteca', '2026-06-23T12:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Colômbia', 'CO', 'RD Congo', 'CD', 'K', 2, 'Estadio Azteca', '2026-06-23T20:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('RD Congo', 'CD', 'Colômbia', 'CO', 'K', 3, 'Hard Rock Stadium', '2026-06-27T19:30:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Uzbequistão', 'UZ', 'Portugal', 'PT', 'K', 3, 'Mercedes-Benz Stadium', '2026-06-27T19:30:00Z');

-- GRUPO L: Inglaterra, Croácia, Gana, Panamá
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Inglaterra', 'gb-eng', 'Croácia', 'HR', 'L', 1, 'Gillette Stadium', '2026-06-17T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Gana', 'GH', 'Panamá', 'PA', 'L', 1, 'BMO Field', '2026-06-17T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Panamá', 'PA', 'Croácia', 'HR', 'L', 2, 'BMO Field', '2026-06-23T19:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Gana', 'GH', 'Inglaterra', 'gb-eng', 'L', 2, 'MetLife Stadium', '2026-06-23T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Panamá', 'PA', 'Inglaterra', 'gb-eng', 'L', 3, 'BMO Field', '2026-06-27T17:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Croácia', 'HR', 'Gana', 'GH', 'L', 3, 'MetLife Stadium', '2026-06-27T19:00:00Z');

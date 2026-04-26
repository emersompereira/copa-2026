-- Apagar jogos antigos (se quiser começar do zero)
DELETE FROM partidas;

-- GRUPO A (6 jogos - 2 por rodada)
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('México', 'MX', 'África do Sul', 'ZA', 'A', 1, 'Azteca', '2026-06-11T16:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Coreia do Sul', 'KR', 'Tchéquia', 'CZ', 'A', 1, 'Akron', '2026-06-11T23:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Canadá', 'CA', 'Marrocos', 'MA', 'A', 2, 'SoFi Stadium', '2026-06-12T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Coreia do Sul', 'KR', 'Canadá', 'CA', 'A', 2, 'MetLife', '2026-06-15T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Marrocos', 'MA', 'Tchéquia', 'CZ', 'A', 3, 'Arrowhead', '2026-06-15T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('México', 'MX', 'Coreia do Sul', 'KR', 'A', 3, 'Azteca', '2026-06-16T18:00:00Z');

-- GRUPO B (6 jogos - 2 por rodada)
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Brasil', 'BR', 'França', 'FR', 'B', 1, 'Lusail', '2026-06-12T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Espanha', 'ES', 'Japão', 'JP', 'B', 1, 'Education City', '2026-06-12T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Uruguai', 'UY', 'Itália', 'IT', 'B', 2, '974', '2026-06-13T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Espanha', 'ES', 'Brasil', 'BR', 'B', 2, 'Lusail', '2026-06-15T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Itália', 'IT', 'Japão', 'JP', 'B', 3, 'Education City', '2026-06-16T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Uruguai', 'UY', 'França', 'FR', 'B', 3, '974', '2026-06-16T21:00:00Z');

-- GRUPO C (6 jogos - 2 por rodada)
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Argentina', 'AR', 'Marrocos', 'MA', 'C', 1, 'Lusail', '2026-06-13T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Dinamarca', 'DK', 'Vietnã', 'VN', 'C', 1, '974', '2026-06-13T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Peru', 'PE', 'Egito', 'EG', 'C', 2, 'Arrowhead', '2026-06-14T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Marrocos', 'MA', 'Peru', 'PE', 'C', 2, 'Arrowhead', '2026-06-16T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Vietnã', 'VN', 'Egito', 'EG', 'C', 3, 'Education City', '2026-06-17T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Argentina', 'AR', 'Dinamarca', 'DK', 'C', 3, 'Lusail', '2026-06-17T18:00:00Z');

-- GRUPO D (6 jogos - 2 por rodada)
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Portugal', 'PT', 'Uruguai', 'UY', 'D', 1, 'Stadium 974', '2026-06-14T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Países Baixos', 'NL', 'Senegal', 'SN', 'D', 1, 'Education City', '2026-06-14T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Bélgica', 'BE', 'Coreia do Sul', 'KR', 'D', 2, 'Akron', '2026-06-15T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Senegal', 'SN', 'Bélgica', 'BE', 'D', 2, 'Akron', '2026-06-17T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Uruguai', 'UY', 'Coreia do Sul', 'KR', 'D', 3, 'MetLife', '2026-06-18T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Portugal', 'PT', 'Países Baixos', 'NL', 'D', 3, 'Education City', '2026-06-18T21:00:00Z');

-- GRUPO E (6 jogos - 2 por rodada)
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Inglaterra', 'GB', 'Irã', 'IR', 'E', 1, 'Arrowhead', '2026-06-14T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Gales', 'GB', 'Eslováquia', 'SK', 'E', 1, 'SoFi Stadium', '2026-06-15T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Suíça', 'CH', 'Brasil', 'BR', 'E', 2, 'Lusail', '2026-06-16T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Eslováquia', 'SK', 'Suíça', 'CH', 'E', 2, 'Lusail', '2026-06-18T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Irã', 'IR', 'Brasil', 'BR', 'E', 3, 'Arrowhead', '2026-06-18T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Inglaterra', 'GB', 'Gales', 'GB', 'E', 3, 'MetLife', '2026-06-19T18:00:00Z');

-- GRUPO F (6 jogos - 2 por rodada)
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Alemanha', 'DE', 'Islândia', 'IS', 'F', 1, 'SoFi Stadium', '2026-06-16T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Irã', 'IR', 'Bolívia', 'BO', 'F', 1, 'Arrowhead', '2026-06-16T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Itália', 'IT', 'Holanda', 'NL', 'F', 2, '974', '2026-06-17T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Holanda', 'NL', 'Islândia', 'IS', 'F', 2, 'Education City', '2026-06-19T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Bolívia', 'BO', 'Holanda', 'NL', 'F', 3, '974', '2026-06-20T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Alemanha', 'DE', 'Irã', 'IR', 'F', 3, 'Lusail', '2026-06-20T21:00:00Z');

-- GRUPO G (6 jogos - 2 por rodada)
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Sérvia', 'RS', 'Costa Rica', 'CR', 'G', 1, 'MetLife', '2026-06-17T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Polônia', 'PL', 'México', 'MX', 'G', 1, 'Azteca', '2026-06-18T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Arábia Saudita', 'SA', 'Austrália', 'AU', 'G', 2, 'Akron', '2026-06-18T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Austrália', 'AU', 'Sérvia', 'RS', 'G', 2, 'Arrowhead', '2026-06-20T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Costa Rica', 'CR', 'Arábia Saudita', 'SA', 'G', 3, 'Education City', '2026-06-21T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Polônia', 'PL', 'Sérvia', 'RS', 'G', 3, '974', '2026-06-21T18:00:00Z');

-- GRUPO H (6 jogos - 2 por rodada)
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Hungria', 'HU', 'Irã', 'IR', 'H', 1, 'Education City', '2026-06-17T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Suécia', 'SE', 'Grécia', 'GR', 'H', 1, 'Lusail', '2026-06-18T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Áustria', 'AT', 'Equador', 'EC', 'H', 2, 'SoFi Stadium', '2026-06-19T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Grécia', 'GR', 'Áustria', 'AT', 'H', 2, 'SoFi Stadium', '2026-06-21T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Equador', 'EC', 'Grécia', 'GR', 'H', 3, 'Arrowhead', '2026-06-22T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Hungria', 'HU', 'Suécia', 'SE', 'H', 3, 'MetLife', '2026-06-22T18:00:00Z');

-- GRUPO I (6 jogos - 2 por rodada)
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Croácia', 'HR', 'Tailândia', 'TH', 'I', 1, '974', '2026-06-19T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Argélia', 'DZ', 'Nigéria', 'NG', 'I', 1, 'Akron', '2026-06-20T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Turquia', 'TR', 'Vietnã', 'VN', 'I', 2, 'Education City', '2026-06-21T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Nigéria', 'NG', 'Turquia', 'TR', 'I', 2, 'SoFi Stadium', '2026-06-22T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Vietnã', 'VN', 'Nigéria', 'NG', 'I', 3, 'Lusail', '2026-06-23T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Croácia', 'HR', 'Argélia', 'DZ', 'I', 3, 'Arrowhead', '2026-06-23T18:00:00Z');

-- GRUPO J (6 jogos - 2 por rodada)
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Irã', 'IR', 'Egito', 'EG', 'J', 1, 'Lusail', '2026-06-19T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Islândia', 'IS', 'Bielorrúsia', 'BY', 'J', 1, 'MetLife', '2026-06-20T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Espanha', 'ES', 'Uruguai', 'UY', 'J', 2, 'SoFi Stadium', '2026-06-21T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Bielorrúsia', 'BY', 'Espanha', 'ES', 'J', 2, 'Arrowhead', '2026-06-23T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Egito', 'EG', 'Bielorrúsia', 'BY', 'J', 3, 'Education City', '2026-06-24T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Irã', 'IR', 'Islândia', 'IS', 'J', 3, '974', '2026-06-24T18:00:00Z');

-- GRUPO K (6 jogos - 2 por rodada)
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Camarões', 'CM', 'Arábia Saudita', 'SA', 'K', 1, 'Akron', '2026-06-20T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Noruega', 'NO', 'Geórgia', 'GE', 'K', 1, 'Azteca', '2026-06-21T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Tailândia', 'TH', 'Benin', 'BJ', 'K', 2, 'Education City', '2026-06-22T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Benin', 'BJ', 'Noruega', 'NO', 'K', 2, 'MetLife', '2026-06-24T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Arábia Saudita', 'SA', 'Tailândia', 'TH', 'K', 3, 'SoFi Stadium', '2026-06-25T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Camarões', 'CM', 'Geórgia', 'GE', 'K', 3, 'Arrowhead', '2026-06-25T18:00:00Z');

-- GRUPO L (6 jogos - 2 por rodada)
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('França', 'FR', 'Colômbia', 'CO', 'L', 1, 'SoFi Stadium', '2026-06-22T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Marrocos', 'MA', 'Canadá', 'CA', 'L', 1, 'MetLife', '2026-06-23T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Emirados Árabes Unidos', 'AE', 'Vietnã', 'VN', 'L', 2, 'Lusail', '2026-06-24T21:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Vietnã', 'VN', 'Colômbia', 'CO', 'L', 2, 'Akron', '2026-06-25T18:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('Canadá', 'CA', 'Emirados Árabes Unidos', 'AE', 'L', 3, 'Education City', '2026-06-26T15:00:00Z');
INSERT INTO partidas (time_a, sigla_a, time_b, sigla_b, grupo, rodada, estadio, data_hora) VALUES ('França', 'FR', 'Marrocos', 'MA', 'L', 3, 'Arrowhead', '2026-06-26T18:00:00Z');

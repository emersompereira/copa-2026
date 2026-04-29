-- 1. Cria a função que faz a checagem do tempo e status
CREATE OR REPLACE FUNCTION checar_prazo_palpite()
RETURNS TRIGGER AS $$
DECLARE
    hora_jogo TIMESTAMP WITH TIME ZONE;
    status_jogo TEXT;
BEGIN
    -- Pega a data/hora e o status do jogo na tabela partidas
    SELECT data_hora, status INTO hora_jogo, status_jogo
    FROM partidas
    WHERE id = NEW.partida_id;

    -- Regra 1: Se o admin já deu o jogo como 'encerrado' ou 'em andamento', bloqueia.
    IF status_jogo != 'agendado' THEN
        RAISE EXCEPTION 'Não é possível alterar palpites de jogos que já começaram ou acabaram.';
    END IF;

    -- Regra 2: Bloqueia exatamente 30 minutos antes do horário oficial (data_hora).
    -- O NOW() pega o horário exato do servidor na hora da tentativa.
    IF NOW() >= (hora_jogo - INTERVAL '30 minutes') THEN
        RAISE EXCEPTION 'Tempo esgotado! Os palpites fecham 30 minutos antes do início da partida.';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. Atrela a função à tabela palpites
DROP TRIGGER IF EXISTS trigger_prazo_palpite ON palpites;

CREATE TRIGGER trigger_prazo_palpite
BEFORE INSERT OR UPDATE ON palpites
FOR EACH ROW
EXECUTE FUNCTION checar_prazo_palpite();
#!/usr/bin/env python3
"""
minidb 0.0: o menor banco de dados que ainda merece o nome.

Uso:  python3 hello.py dados.db < demo.sql

Ele funciona. E está errado em quase tudo.
Cada módulo do semestre conserta um destes defeitos.
"""
import os
import sys

CAMINHO = sys.argv[1] if len(sys.argv) > 1 else "dados.db"
esquema = {}          # o catálogo mora na memória, e morre com o processo


def le_tudo():
    """Lê o arquivo inteiro, toda vez. Não existe página nem cache."""
    if not os.path.exists(CAMINHO):
        return []
    with open(CAMINHO, encoding="utf-8") as arquivo:
        return [linha.rstrip("\n").split("|") for linha in arquivo if linha.strip()]


def executa(sql):
    # "parser": quebrar em palavras e torcer. Palavras-chave em maiúsculas.
    p = (sql.replace("(", " ( ").replace(")", " ) ")
            .replace(",", " ").replace(";", " ").split())
    verbo = p[0].upper()

    if verbo == "CREATE":
        esquema[p[2]] = p[p.index("(") + 1:p.index(")")]
        return "OK"

    if verbo == "INSERT":
        valores = p[p.index("(") + 1:p.index(")")]
        # Escreve direto no fim do arquivo. Sem log e sem transação:
        # se o processo morrer aqui, a linha fica pela metade.
        with open(CAMINHO, "a", encoding="utf-8") as arquivo:
            arquivo.write("|".join(valores) + "\n")
        return "OK 1"

    if verbo == "SELECT":
        tabela = p[p.index("FROM") + 1]
        colunas = esquema.get(tabela, [])
        linhas = le_tudo()                          # varredura sequencial, sempre
        if "WHERE" in p:
            coluna, _, valor = p[p.index("WHERE") + 1:p.index("WHERE") + 4]
            indice = colunas.index(coluna)
            linhas = [linha for linha in linhas if linha[indice] == valor]
        saida = ["|".join(linha) for linha in linhas]
        saida.append("(%d linha%s)" % (len(linhas), "s" if len(linhas) != 1 else ""))
        return "\n".join(saida)

    return "ERRO: comando desconhecido"


for entrada in sys.stdin:
    if entrada.strip():
        print(executa(entrada.strip()))

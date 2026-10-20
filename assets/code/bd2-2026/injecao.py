#!/usr/bin/env python3
"""
Injeção de SQL em dez linhas, demonstração da Aula 4.

Uso:  python3 injecao.py
      python3 injecao.py "x' OR '1'='1"

Usa o sqlite3 que vem com o Python, sem instalar nada.
"""
import sqlite3
import sys

nome = sys.argv[1] if len(sys.argv) > 1 else "x' OR '1'='1"

banco = sqlite3.connect(":memory:")
banco.execute("CREATE TABLE aluno (id INT, nome TEXT, nota INT)")
banco.executemany("INSERT INTO aluno VALUES (?, ?, ?)",
                  [(1, "Ana", 9), (2, "Bruno", 4), (3, "Carla", 7)])

# 1. Concatenação: o texto do usuário vira parte da gramática
sql = "SELECT * FROM aluno WHERE nome = '" + nome + "'"
print("concatenado:", sql)
print("  devolveu:", banco.execute(sql).fetchall())

# 2. Parâmetro: a consulta é analisada antes, e o valor só entra depois
sql = "SELECT * FROM aluno WHERE nome = ?"
print("com parâmetro:", sql, " valor =", repr(nome))
print("  devolveu:", banco.execute(sql, (nome,)).fetchall())

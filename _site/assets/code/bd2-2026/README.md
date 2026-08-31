# minidb 0.0 — demonstração da Aula 1

`hello.py` é um banco de dados completo em cerca de 50 linhas. Ele funciona, e
está errado em tudo. Cada defeito dele vira um módulo do semestre.

## Rodar

    python3 hello.py dados.db < demo.sql

## Demonstração 1: ele funciona

    rm -f dados.db
    python3 hello.py dados.db < demo.sql

## Demonstração 2: sem índice, tudo é lento

Gerar 5 milhões de linhas (cerca de 136 MB) e cronometrar uma busca:

    python3 -c "
    with open('big.db','w') as f:
        for i in range(5000000): f.write('%d|%d|nome%d\n' % (i, 20260000+i, i))
    "
    printf 'CREATE TABLE aluno (id, matricula, nome);\nSELECT * FROM aluno WHERE id = 4999999;\n' > consulta.sql
    time python3 hello.py big.db < consulta.sql

## Demonstração 3: sem transação, a queda parte o trabalho ao meio

Duas inserções que deveriam valer juntas, com o processo morto no meio:

    rm -f conta.db
    printf 'CREATE TABLE conta (id, saldo);\nINSERT INTO conta VALUES (1, 100);\nINSERT INTO conta VALUES (2, 500);\n' | python3 hello.py conta.db
    # transferência de 50 da conta 1 para a 2, morrendo no meio
    printf 'INSERT INTO conta VALUES (1, 50);\n' | python3 hello.py conta.db
    cat conta.db   # o débito foi gravado, o crédito nunca aconteceu

## Demonstração 4: o catálogo morre com o processo

    printf 'SELECT * FROM aluno WHERE id = 1;\n' | python3 hello.py dados.db

Erro, porque `CREATE TABLE` guardou o esquema apenas na memória da execução
anterior. É o módulo M4.

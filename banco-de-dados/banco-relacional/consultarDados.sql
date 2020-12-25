select * from estados;

select nome as 'Sigla do Estado', sigla from estados;

select * from estados where regiao = 'Sudeste';

select * from estados where populacao >= 10 order by populacao desc;
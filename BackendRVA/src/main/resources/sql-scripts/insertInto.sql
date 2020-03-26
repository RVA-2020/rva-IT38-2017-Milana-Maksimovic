--proizvodjac

insert into proizvodjac (id, naziv, adresa, kontakt)
values (nextval('proizvodjac_seq'), 'Jaffa DOO', 'Svetozara Miletića 16','+38163554789');  )
insert into proizvodjac (id, naziv, adresa, kontakt)
values (nextval('proizvodjac_seq'), 'Bambi', 'Svetosavska 25','+3816355031');
insert into proizvodjac (id, naziv, adresa, kontakt)
values (nextval('proizvodjac_seq'), 'Knjaz Milos', 'Zeleznicka 18','+381602145639');
insert into proizvodjac (id, naziv, adresa, kontakt)
values (nextval('proizvodjac_seq'), 'Stark', 'Ive Lole Ribara 30','+381610235478');

--proizvod

insert into proizvod (id, naziv, proizvodjac)
values (nextval ('proizvod_seq'), 'Jaffa keks', 1);
insert into proizvod (id, naziv, proizvodjac)
values (nextval ('proizvod_seq'), 'Jaffa brownie', 1);
insert into proizvod (id, naziv, proizvodjac)
values (nextval ('proizvod_seq'), 'Tak', 1);
insert into proizvod (id, naziv, proizvodjac)
values (nextval ('proizvod_seq'), 'Munchmallow', 1);

insert into proizvod (id, naziv, proizvodjac)
values (nextval ('proizvod_seq'), 'Plazma', 2);
insert into proizvod (id, naziv, proizvodjac)
values (nextval ('proizvod_seq'), 'Plazma kocka', 2);
insert into proizvod (id, naziv, proizvodjac)
values (nextval ('proizvod_seq'), 'Mlevena plazma', 2);
insert into proizvod (id, naziv, proizvodjac)
values (nextval ('proizvod_seq'), 'Wellness', 2);

insert into proizvod (id, naziv, proizvodjac)
values (nextval('proizvod_seq'),'Knjaz Milos gazirana voda', 3);
insert into proizvod (id, naziv, proizvodjac)
values (nextval('proizvod_seq'), 'ReMix', 3);
insert into proizvod (id, naziv, proizvodjac)
values (nextval('proizvod_seq'),'Aqua Viva', 3);
insert into proizvod (id, naziv, proizvodjac)
values (nextval('proizvod_seq'),'Guarana', 3);

insert into proizvod (id, naziv, proizvodjac)
values (nextval('proizvod_seq'), 'Najlepse zelje cokolada', 4);
insert into proizvod (id, naziv, proizvodjac)
values (nextval('proizvod_seq'), 'Prima stapici', 4);
insert into proizvod (id, naziv, proizvodjac)
values (nextval('proizvod_seq'), 'Smoki', 4);
insert into proizvod (id, naziv, proizvodjac)
values (nextval('proizvod_seq'), 'Bananica', 4);

--racun

insert into racun (id, datum, nacin_placanja)
values (nextval('racun_seq'), to_date('01.03.2019.', 'dd.mm.yyyy.'), 'kartica');
insert into racun (id, datum, nacin_placanja)
values (nextval('racun_seq'), to_date('10.05.2019.', 'dd.mm.yyyy.'), 'kes');
insert into racun (id, datum, nacin_placanja)
values (nextval('racun_seq'), to_date('21.10.2019.', 'dd.mm.yyyy.'), 'kartica');
insert into racun (id, datum, nacin_placanja)
values (nextval('racun_seq'), to_date('15.01.2019.', 'dd.mm.yyyy.'), 'kes');

--stavka racuna
insert into stavka_racuna (id, redni_broj, kolicina, jedinica_mere, cena, racun, proizvod)
values (nextval('stavka_racuna_seq'), 1, 20, 'kg', 400, 1, 1);
insert into stavka_racuna (id, redni_broj, kolicina, jedinica_mere, cena, racun, proizvod)
values (nextval('stavka_racuna_seq'), 2, 30, 'kg', 450, 1, 2);
insert into stavka_racuna (id, redni_broj, kolicina, jedinica_mere, cena, racun, proizvod)
values (nextval('stavka_racuna_seq'), 3, 5, 'kg', 60, 1, 4);

insert into stavka_racuna (id, redni_broj, kolicina, jedinica_mere, cena, racun, proizvod)
values (nextval('stavka_racuna_seq'), 1, 20, 'l', 400, 2, 9);
insert into stavka_racuna (id, redni_broj, kolicina, jedinica_mere, cena, racun, proizvod)
values (nextval('stavka_racuna_seq'), 2, 5, 'l', 300, 2, 10);
insert into stavka_racuna (id, redni_broj, kolicina, jedinica_mere, cena, racun, proizvod)
values (nextval('stavka_racuna_seq'), 3, 10, 'l', 80, 2, 11);

insert into stavka_racuna (id, redni_broj, kolicina, jedinica_mere, cena, racun, proizvod)
values (nextval('stavka_racuna_seq'), 1, 20, 'komad', 400, 3, 5);
insert into stavka_racuna (id, redni_broj, kolicina, jedinica_mere, cena, racun, proizvod)
values (nextval('stavka_racuna_seq'), 2, 40, 'komad', 1400, 3, 6);
insert into stavka_racuna (id, redni_broj, kolicina, jedinica_mere, cena, racun, proizvod)
values (nextval('stavka_racuna_seq'), 3, 50, 'kg', 480, 3, 8);

































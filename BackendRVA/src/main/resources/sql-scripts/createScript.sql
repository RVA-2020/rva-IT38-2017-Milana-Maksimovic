CREATE TABLE proizvodjac(
	id integer not null,
    naziv varchar(50) not null,
	adresa varchar(200) not null,
   	kontakt varchar(100)
);

CREATE TABLE proizvod(
	id integer not null,
    naziv varchar(50) not null,
    proizvodjac integer not null
);

CREATE TABLE racun(
    id integer not null,
    datum date not null,
    nacin_placanja varchar(200)
);

CREATE TABLE stavka_racuna(
	id integer not null,
    redni_broj integer not null,
    kolicina numeric not null,
    jedinica_mere varchar(30) not null,
    cena numeric not null,
   	racun integer not null,
    proizvod integer not null
);

ALTER TABLE proizvodjac ADD CONSTRAINT
PK_Proizvodjac PRIMARY KEY(id);
ALTER TABLE proizvod ADD CONSTRAINT
PK_Proizvod PRIMARY KEY(id);
ALTER TABLE racun ADD CONSTRAINT
PK_Racun PRIMARY KEY(id);
ALTER TABLE stavka_racuna ADD CONSTRAINT
PK_Stavka_Racuna PRIMARY KEY(id);

ALTER TABLE proizvod ADD CONSTRAINT
FK_Proizvod_Proizvodjac FOREIGN KEY(proizvodjac) REFERENCES proizvodjac(id);
ALTER TABLE stavka_racuna ADD CONSTRAINT
FK_Stavka_Racuna_Racun FOREIGN KEY(racun) REFERENCES racun(id);
ALTER TABLE stavka_racuna ADD CONSTRAINT
FK_Stavka_Racuna_Proizvod FOREIGN KEY(proizvod) REFERENCES proizvod(id);

CREATE INDEX IDXFK_Proizvod_Proizvodjac
ON proizvod(proizvodjac);
CREATE INDEX IDXFK_Stavka_Racuna_Racun
ON stavka_racuna(racun);
CREATE INDEX IDXFK_Stavka_Racuna_Proizvod
ON stavka_racuna(proizvod);

CREATE SEQUENCE proizvodjac_seq
INCREMENT 1;
CREATE SEQUENCE proizvod_seq
INCREMENT 1;
CREATE SEQUENCE racun_seq
INCREMENT 1;
CREATE SEQUENCE stavka_racuna_seq
INCREMENT 1;
package rva.repository;

import java.sql.Date;
import java.util.Collection;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.jpa.Racun;

public interface RacunRepository extends JpaRepository<Racun,Integer>{

	Collection<Racun> findRacunByDatum (Date datum);
}

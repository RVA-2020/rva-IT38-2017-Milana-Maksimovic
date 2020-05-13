package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Proizvodjac;
import rva.repository.ProizvodjacRepository;

@RestController
@CrossOrigin
@Api(tags = {"Proizvodjac CRUD operacije"})
public class ProizvodjacRestController {
	
	@Autowired
	private ProizvodjacRepository proizvodjacRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("proizvodjac")
	@ApiOperation(value = "Vraca kolekciju svih proizvodjaca iz baze podataka")
	public Collection<Proizvodjac> getProizvodjaci() {
		return proizvodjacRepository.findAll();
	}
	
	@GetMapping ("proizvodjac/{id}")
	@ApiOperation(value = "Vraca proizvodjaca iz baze podataka ciji ID je vrednost prosledjena kao path varijabla")
	public Proizvodjac getProizvodjac (@PathVariable ("id") Integer id) {
		return proizvodjacRepository.getOne(id);
	}
	
	@GetMapping ("proizvodjacNaziv/{naziv}")
	@ApiOperation(value = "Vraca proizvodjace iz baze podataka koji u nazivu sadrze string koji je prosledjen kao path varijabla")
	public Collection<Proizvodjac> getProizvodjacByNaziv (@PathVariable ("naziv") String naziv) {
		return proizvodjacRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("proizvodjac")
	@ApiOperation(value = "Dodaje proizvodjaca u bazu podataka")
	public ResponseEntity<Proizvodjac> insertProizvodjac(@RequestBody Proizvodjac proizvodjac){
		if(!proizvodjacRepository.existsById(proizvodjac.getId())) {
			proizvodjacRepository.save(proizvodjac);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("proizvodjac")
	@ApiOperation(value = "Modifikuje proizvodjaca u bazi podataka")
	public ResponseEntity<Proizvodjac> updateProizvodjac(@RequestBody Proizvodjac proizvodjac) {
		if(!proizvodjacRepository.existsById(proizvodjac.getId()))
			return new ResponseEntity<> (HttpStatus.NO_CONTENT);
		proizvodjacRepository.save(proizvodjac);
		return new ResponseEntity<> (HttpStatus.OK);
	}
	
	@DeleteMapping("proizvodjac/{id}")
	@CrossOrigin
	@ApiOperation(value = "Brise proizvodjaca iz baze podataka ciji ID je vrednost prosledjena kao path varijabla")
	public ResponseEntity<Proizvodjac> deleteProizvodjac(@PathVariable ("id") Integer id) {
		if(!proizvodjacRepository.existsById(id))
			return new ResponseEntity<> (HttpStatus.NO_CONTENT);
		proizvodjacRepository.deleteById(id);
		if(id==-100)
			jdbcTemplate.execute("INSERT INTO \"proizvodjac\"(\"id\",\"naziv\",\"adresa\",\"kontakt\")"
					+ "VALUES (-100, 'Naziv Test', 'Adresa Test', 'Kontakt Test')");
		return new ResponseEntity<> (HttpStatus.OK);
	}

}

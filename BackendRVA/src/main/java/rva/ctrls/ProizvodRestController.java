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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Proizvod;
import rva.repository.ProizvodRepository;


@RestController
@CrossOrigin
public class ProizvodRestController {
	
	@Autowired
	private ProizvodRepository proizvodRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;


	@GetMapping("proizvod")
	public Collection<Proizvod> getProizvodi () {
		return proizvodRepository.findAll();
	}
	
	
	@GetMapping ("proizvod/{id}")
	public Proizvod getProizvod (@PathVariable ("id") Integer id) {
		return proizvodRepository.getOne(id);
	}
	
	@GetMapping ("proizvodNaziv/{naziv}")
	public Collection<Proizvod> getProizvodByNaziv (@PathVariable ("naziv") String naziv) {
		return proizvodRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("proizvod")
	public ResponseEntity<Proizvod> insertProizvod(@RequestBody Proizvod proizvod) {
		if(!proizvodRepository.existsById(proizvod.getId())) {
			proizvodRepository.save(proizvod);
			return new ResponseEntity<> (HttpStatus.OK);
		}
		return new ResponseEntity<> (HttpStatus.CONFLICT);
	}
	
	@PutMapping("proizvod")
	public ResponseEntity<Proizvod> updateProizvod(@RequestBody Proizvod proizvod) {
		if(!proizvodRepository.existsById(proizvod.getId()))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		proizvodRepository.save(proizvod);
		return new ResponseEntity<Proizvod>(HttpStatus.OK);
	}
	
	@DeleteMapping("proizvod/{id}")
	public ResponseEntity<Proizvod> deleteProizvod(@PathVariable ("id") Integer id) {
		if(!proizvodRepository.existsById(id))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		proizvodRepository.deleteById(id);
		if(id==-100 && !proizvodRepository.existsById(-100))
			jdbcTemplate.execute("INSERT INTO \"proizvod\" (\"id\",\"naziv\",\"proizvodjac\")"
					+ "VALUES (-100, 'test', 1)");
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}

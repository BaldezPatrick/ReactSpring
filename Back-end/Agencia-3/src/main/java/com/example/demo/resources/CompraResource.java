package com.example.demo.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Compra;
import com.example.demo.services.CompraService;

@RestController
@RequestMapping(name = "/compra/")
@CrossOrigin(origins = "http://localhost:3000/")
public class CompraResource {
	
	@Autowired
	private CompraService service;
	
	@GetMapping("/compra")
	public List<Compra> findAll() {
		return service.findAll();
	}
	
	@PostMapping("/compra")
	public ResponseEntity<Compra> save(@RequestBody Compra compra) {
		service.save(compra);
		return ResponseEntity.ok().body(compra);
	}
	
	@DeleteMapping("/compra/{id}")
	public ResponseEntity<Compra> delete(@PathVariable Long id) {
		service.delete(id);
		Compra compra = service.getBy(id);
		return ResponseEntity.ok().body(compra);
	}
	
	@PutMapping(value = "/compra/{id}")
	public ResponseEntity<Compra> update(@RequestBody Compra compra) {
		service.save(compra);
		return ResponseEntity.ok().body(compra);
	}
}

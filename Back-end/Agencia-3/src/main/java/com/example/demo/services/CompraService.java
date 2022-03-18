package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.Compra;
import com.example.demo.repositories.CompraRepository;

@Service
public class CompraService {
	
	@Autowired
	private CompraRepository repository;
	
	@Transactional(readOnly = true)
	public List<Compra> findAll() {
		List<Compra> resultado = repository.findAll();
		return resultado;
	}
	
	public void save(Compra compra) {
		repository.save(compra);
	}
	
	public void delete(Long id) {
		repository.deleteById(id);
	}

	public Compra getBy(Long id) {
		return null;
	}
}

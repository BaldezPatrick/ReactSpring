package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.ContatoEntity;
import com.example.demo.repositories.ContatoRepository;

@Service
public class ContatoService {

	@Autowired
	private ContatoRepository repository;

	@Transactional(readOnly = true)
	public List<ContatoEntity> findAll() {
		List<ContatoEntity> resultado = repository.findAll();
		return resultado;
	}

	public void save(ContatoEntity contato) {
		repository.save(contato);
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}

	public ContatoEntity getById(Long id) {
		return null;
	}


}
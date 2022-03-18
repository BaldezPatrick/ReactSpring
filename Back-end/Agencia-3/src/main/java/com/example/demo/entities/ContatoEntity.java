package com.example.demo.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Contato")
public class ContatoEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	private Long id;

	@Column(name = "Nome", length = 50, nullable = false)
	private String nome;

	@Column(name = "Sobrenome", length = 100)
	private String sobrenome;

	@Column(name = "Email", length = 100, nullable = false)
	private String email;

	@Column(name = "Duvidas", length = 500, nullable = false)
	private String duvida;

	public ContatoEntity() {

	}

	public ContatoEntity(Long id, String nome, String sobrenome, String email, String duvida) {
		super();
		this.id = id;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.email = email;
		this.duvida = duvida;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDuvida() {
		return duvida;
	}

	public void setDuvida(String duvida) {
		this.duvida = duvida;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ContatoEntity other = (ContatoEntity) obj;
		return Objects.equals(id, other.id);
	}
}

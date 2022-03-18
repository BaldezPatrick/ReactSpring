package com.example.demo.entities;

import java.sql.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Compra {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(length = 50)
	private String nome;
	@Column(length = 50)
	private String sobrenome;
	@Column(length = 30)
	private String cidade_partida;
	@Column(length = 30)
	private String destino;
	private Date ida;
	private Date volta;
	
	public Compra() {
	}

	public Compra(Long id, String nome, String sobrenome, String cidade_partida, String destino, Date ida, Date volta) {
		super();
		this.id = id;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.cidade_partida = cidade_partida;
		this.destino = destino;
		this.ida = ida;
		this.volta = volta;
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
		Compra other = (Compra) obj;
		return Objects.equals(id, other.id);
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

	public String getCidade_partida() {
		return cidade_partida;
	}

	public void setCidade_partida(String cidade_partida) {
		this.cidade_partida = cidade_partida;
	}

	public String getDestino() {
		return destino;
	}

	public void setDestino(String destino) {
		this.destino = destino;
	}

	public Date getIda() {
		return ida;
	}

	public void setIda(Date ida) {
		this.ida = ida;
	}

	public Date getVolta() {
		return volta;
	}

	public void setVolta(Date volta) {
		this.volta = volta;
	}
	
	
}

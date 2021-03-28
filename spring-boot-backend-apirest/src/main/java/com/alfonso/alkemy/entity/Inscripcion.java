package com.alfonso.alkemy.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;

@Entity
@Table(name ="inscriptions")
public class Inscripcion implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	@JoinColumn(name="user_id")
	private Usuario usuario;
	
	@OneToOne
	@JoinColumn(name = "subject_id")
	private Materia materia;
	
	private Date create_at;
	
	@PrePersist
	private void prePersist() {
		this.create_at = new Date();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	

	public Materia getMateria() {
		return materia;
	}

	public void setMateria(Materia materia) {
		this.materia = materia;
	}

	public Date getCreate_at() {
		return create_at;
	}

	public void setCreate_at(Date create_at) {
		this.create_at = create_at;
	}



	@Override
	public String toString() {
		return "Inscripcion [id=" + id + ", usuario=" + usuario + ", materia=" + materia + ", create_at=" + create_at
				+ "]";
	}



	/**
	 * 
	 */
	private static final long serialVersionUID = -5743750783762702280L;
	
}

package com.alfonso.alkemy.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "subjects")
public class Materia {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message = "no puede estar vacio!!")
	@Size(min = 4, max = 25, message = "El nombre tiene que tener entre 4 y 12 caracteres")
	@Column(name = "f_name", nullable = false)
	private String nombre;
	
	@Transient
	private List<String> horario;

	@Column(name = "max_student")
	private Integer max_alum;
	
	private Date create_at;
	
	@PrePersist
	private void prePersist() {
		this.create_at = new Date();
	}
	
	public Materia() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<String> getHorario() {
		return horario;
	}

	public void setHorario(List<String> horario) {
		this.horario = horario;
	}

	public Integer getMax_alum() {
		return max_alum;
	}

	public void setMax_alum(Integer max_alum) {
		this.max_alum = max_alum;
	}

	public Date getCreate_at() {
		return create_at;
	}

	public void setCreate_at(Date create_at) {
		this.create_at = create_at;
	}

	@Override
	public String toString() {
		return "Materia [id=" + id + ", nombre=" + nombre + ", horario=" + horario + ", max_alum=" + max_alum
				+ ", create_at=" + create_at + "]";
	}
}

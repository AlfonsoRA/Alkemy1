package com.alfonso.alkemy.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table()
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotEmpty(message = "no puede estar vacio!!")
	@Size(min = 4, max = 12, message = "El nombre tiene que tener entre 4 y 12 caracteres")
	@Column(name = "f_name", nullable = false)
	private String nombre;
	
	@NotEmpty(message = "no puede estar vacio!!")
	@Column(name = "l_name")
	private String apellido;
	
	private Integer dni;
	
	@NotEmpty(message = "no puede estar vacio!!")
	private String rol;
	
	private Date create_at;
	
	@PrePersist
	private void prePersist() {
		this.create_at = new Date();
	}

	public Usuario() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public Integer getDni() {
		return dni;
	}

	public void setDni(Integer dni) {
		this.dni = dni;
	}

	public String getRol() {
		return rol;
	}

	public void setRol(String rol) {
		this.rol = rol;
	}

	public Date getCreate_at() {
		return create_at;
	}
	
	public void setCreate_at(Date create_at) {
		this.create_at = create_at;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nombre=" + nombre + ", apellido=" + apellido + ", dni=" + dni + ", rol=" + rol
				+ ", create_at=" + create_at + "]";
	}
	
}

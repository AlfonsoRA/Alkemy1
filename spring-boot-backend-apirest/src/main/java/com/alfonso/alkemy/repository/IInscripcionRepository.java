package com.alfonso.alkemy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.alfonso.alkemy.entity.Inscripcion;
import com.alfonso.alkemy.entity.Usuario;

public interface IInscripcionRepository extends JpaRepository<Inscripcion, Long> {
	
	@Query("select ins from Inscripcion ins where ins.usuario = ?1")
	public List<Inscripcion> findbyUsuario(Usuario usuario);

}

package com.alfonso.alkemy.interfaces;

import java.util.List;

import com.alfonso.alkemy.entity.Inscripcion;
import com.alfonso.alkemy.entity.Materia;
import com.alfonso.alkemy.entity.Usuario;

public interface IInscripcionService {
	
	public Inscripcion guardarInscripcion(Inscripcion inscripcion);
	public List<Inscripcion> listInscripcion();
	public List<Inscripcion> findByUser(Usuario usuario);
}

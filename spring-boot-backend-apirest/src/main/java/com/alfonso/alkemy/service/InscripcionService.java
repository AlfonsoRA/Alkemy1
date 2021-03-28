package com.alfonso.alkemy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alfonso.alkemy.entity.Inscripcion;
import com.alfonso.alkemy.entity.Usuario;
import com.alfonso.alkemy.interfaces.IInscripcionService;
import com.alfonso.alkemy.repository.IInscripcionRepository;

@Service
public class InscripcionService implements IInscripcionService {

	@Autowired
	private IInscripcionRepository inscripcionRepository;
	
	@Override
	public Inscripcion guardarInscripcion(Inscripcion inscripcion) {
		return inscripcionRepository.save(inscripcion);
	}

	@Override
	public List<Inscripcion> listInscripcion() {
		return inscripcionRepository.findAll();
	}

	@Override
	public List<Inscripcion> findByUser(Usuario usuario) {
		return inscripcionRepository.findbyUsuario(usuario);
	}	
	
}

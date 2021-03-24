package com.alfonso.alkemy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alfonso.alkemy.entity.Materia;
import com.alfonso.alkemy.interfaces.IMateriaService;
import com.alfonso.alkemy.repository.MateriaRepository;

@Service
public class MateriaService implements IMateriaService {

	@Autowired
	private MateriaRepository repositoryMateria;
	
	@Override
	public List<Materia> listMaterias() {
		return repositoryMateria.findAll();
	}

	@Override
	public Materia getMateria(Integer id) {
		return repositoryMateria.findById(id).orElse(null);
	}

	@Override
	public Materia guardarMateria(Materia materia) {
		return repositoryMateria.save(materia);
	}

	@Override
	public Materia updateMateria(Materia materia) {
		return repositoryMateria.save(materia);
	}

	@Override
	public void delete(Integer id) {
		repositoryMateria.deleteById(id);
	}

}

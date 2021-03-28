package com.alfonso.alkemy.service;

import java.util.List;import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alfonso.alkemy.entity.Materia;
import com.alfonso.alkemy.interfaces.IMateriaService;
import com.alfonso.alkemy.repository.IMateriaRepository;

@Service
public class MateriaService implements IMateriaService {

	@Autowired
	private IMateriaRepository repositoryMateria;
	
	@Override
	public List<Materia> listMaterias() {
		//Se realiza validacion de los 
		List<Materia> lista  = repositoryMateria.findByOrderByNombreAsc();
		List<Materia> listab = lista.stream().filter(materia -> materia.getMax_alum() > 0).collect(Collectors.toList());
		return listab;
	}

	@Override
	public Materia getMateria(Long id) {
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
	public void delete(Long id) {
		repositoryMateria.deleteById(id);
	}

}

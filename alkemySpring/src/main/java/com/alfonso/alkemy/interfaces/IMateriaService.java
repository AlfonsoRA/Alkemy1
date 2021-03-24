package com.alfonso.alkemy.interfaces;

import java.util.List;

import com.alfonso.alkemy.entity.Materia;


public interface IMateriaService {

	public List<Materia> listMaterias();
	public Materia getMateria(Integer id);
	public Materia guardarMateria(Materia materia);
	public Materia updateMateria(Materia materia);
	public void delete(Integer id);
}

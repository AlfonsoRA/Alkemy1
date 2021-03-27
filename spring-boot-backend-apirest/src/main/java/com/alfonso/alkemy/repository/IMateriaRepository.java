package com.alfonso.alkemy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alfonso.alkemy.entity.Materia;
import com.alfonso.alkemy.entity.Usuario;

public interface IMateriaRepository extends JpaRepository<Materia, Long>{

	public List<Materia> findByOrderByNombreAsc();
	
}

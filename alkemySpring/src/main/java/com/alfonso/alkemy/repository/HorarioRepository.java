package com.alfonso.alkemy.repository;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alfonso.alkemy.entity.Horario;

public interface HorarioRepository extends JpaRepository<Horario, Integer>{
	 
	public List<Horario> findByMateria_id(int idMateria);

}

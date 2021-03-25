package com.alfonso.alkemy.repository;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alfonso.alkemy.entity.Horario;

public interface IHorarioRepository extends JpaRepository<Horario, Long>{
	 
	public List<Horario> findByMateria_id(Long idMateria);

}

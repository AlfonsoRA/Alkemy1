package com.alfonso.alkemy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alfonso.alkemy.entity.Horario;
import com.alfonso.alkemy.interfaces.IHorarioService;
import com.alfonso.alkemy.repository.HorarioRepository;

@Service
public class HorarioService implements IHorarioService{

	@Autowired
	private HorarioRepository horariosRepo;

	@Override
	public List<Horario> buscarPorIdMateria(int idMateria) {
		return horariosRepo.findByMateria_id(idMateria);
	}
	
}

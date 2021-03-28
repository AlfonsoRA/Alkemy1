package com.alfonso.alkemy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alfonso.alkemy.entity.Horario;
import com.alfonso.alkemy.interfaces.IHorarioService;
import com.alfonso.alkemy.repository.IHorarioRepository;

@Service
public class HorarioService implements IHorarioService{

	@Autowired
	private IHorarioRepository horariosRepo;

	@Override
	public List<Horario> findHorarios() {
		return horariosRepo.findAll();
	}
	
}

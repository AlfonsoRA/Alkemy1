package com.alfonso.alkemy.interfaces;

import java.util.Date;
import java.util.List;

import com.alfonso.alkemy.entity.Horario;

public interface IHorarioService {

	public List<Horario> buscarPorIdMateria(Long idMateria);
}